'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ATTRIBUTES, getModifier, formatModifier, getScoreRange } from '../../lib/attributes'
import { calcHP, calcAC, calcSavingThrows, savingThrowLabel } from '../../lib/derived'
import { getAlignmentByKey, type AlignmentKey } from '../../lib/alignment'
import { getClassByKey } from '../../lib/classes'

type SheetData = {
  name: string
  scores: Record<string, number>
  alignment: AlignmentKey | null
  characterClass: string | null
}

const STAT_COLORS: Record<string, string> = {
  str: '#C0392B',
  int: '#2980B9',
  wis: '#8E44AD',
  dex: '#27AE60',
  con: '#E67E22',
  cha: '#D4AC0D',
}

function StatBox({ attr, score }: { attr: typeof ATTRIBUTES[0]; score: number }) {
  const modifier = getModifier(score)
  const modStr = formatModifier(modifier)
  const range = getScoreRange(attr, score)
  const color = STAT_COLORS[attr.key]

  return (
    <div
      className="flex flex-col items-center rounded-lg border-2 py-3 px-2"
      style={{ background: '#FFF8EE', borderColor: color + '66' }}
    >
      <div className="text-xs font-bold tracking-widest mb-0.5" style={{ color }}>
        {attr.abbr}
      </div>
      <div className="text-2xl font-bold tabular-nums leading-none" style={{ color: '#3D2B1F' }}>
        {score}
      </div>
      <div className="text-sm font-semibold leading-none mt-1" style={{ color: modifier >= 0 ? '#2D6A2D' : '#9B2C2C' }}>
        {modStr}
      </div>
      <div className="text-xs text-center mt-1 italic leading-tight" style={{ color: '#8B6914' }}>
        {range.shortLabel}
      </div>
    </div>
  )
}

export default function SheetPage() {
  const router = useRouter()
  const [data, setData] = useState<SheetData | null>(null)

  useEffect(() => {
    const raw = localStorage.getItem('character_sheet')
    if (!raw) {
      router.replace('/')
      return
    }
    setData(JSON.parse(raw))
  }, [router])

  if (!data) return null

  const { name, scores, alignment, characterClass } = data
  const stats = {
    str: scores.str,
    int: scores.int,
    wis: scores.wis,
    dex: scores.dex,
    con: scores.con,
    cha: scores.cha,
  }

  const hp = calcHP(stats)
  const ac = calcAC(stats)
  const savingThrows = calcSavingThrows(stats)
  const alignmentData = alignment ? getAlignmentByKey(alignment) : null
  const classData = characterClass ? getClassByKey(characterClass) : null

  return (
    <div className="min-h-screen" style={{ background: 'var(--parchment)' }}>
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: 'var(--gold)' }}>
            Character Sheet
          </div>
          <h1 className="text-4xl font-serif font-bold" style={{ color: 'var(--ink)' }}>
            {name}
          </h1>
          {classData && (
            <div className="text-sm italic mt-1" style={{ color: 'var(--gold)' }}>
              {classData.name} · {classData.tagline}
            </div>
          )}
        </div>

        {/* Ornamental divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px" style={{ background: 'var(--gold-light)' }} />
          <span style={{ color: 'var(--gold)' }}>⬡</span>
          <div className="flex-1 h-px" style={{ background: 'var(--gold-light)' }} />
        </div>

        {/* Vital stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div
            className="flex flex-col items-center rounded-lg border-2 py-3"
            style={{ background: '#FFF8EE', borderColor: '#C9A84C' }}
          >
            <div className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: 'var(--gold)' }}>
              Hit Points
            </div>
            <div className="text-4xl font-bold" style={{ color: '#2D6A2D' }}>
              {hp}
            </div>
            <div className="text-xs italic mt-0.5" style={{ color: 'var(--ink-light)' }}>
              8 + CON modifier
            </div>
          </div>
          <div
            className="flex flex-col items-center rounded-lg border-2 py-3"
            style={{ background: '#FFF8EE', borderColor: '#C9A84C' }}
          >
            <div className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: 'var(--gold)' }}>
              Armor Class
            </div>
            <div className="text-4xl font-bold" style={{ color: '#2980B9' }}>
              {ac}
            </div>
            <div className="text-xs italic mt-0.5" style={{ color: 'var(--ink-light)' }}>
              10 + DEX modifier
            </div>
          </div>
        </div>

        {/* Attributes */}
        <section className="mb-6">
          <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--gold)' }}>
            Attributes
          </div>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
            {ATTRIBUTES.map(attr => (
              <StatBox key={attr.key} attr={attr} score={scores[attr.key]} />
            ))}
          </div>
        </section>

        {/* Saving Throws */}
        <section className="mb-6">
          <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--gold)' }}>
            Saving Throws
            <span className="ml-2 normal-case font-normal italic text-xs" style={{ color: 'var(--ink-light)' }}>
              Lower is better — roll this or higher on d20 to save
            </span>
          </div>
          <div className="space-y-1.5">
            {savingThrows.map(st => {
              const label = savingThrowLabel(st.value)
              const labelColor =
                label === 'Excellent' ? '#2D6A2D' :
                label === 'Good' ? '#3B7A3B' :
                label === 'Average' ? '#8B6914' :
                label === 'Weak' ? '#C0392B' : '#9B2C2C'

              return (
                <div
                  key={st.key}
                  className="flex items-center gap-3 rounded px-3 py-2 border"
                  style={{ background: '#FFF8EE', borderColor: '#C9A84C' }}
                >
                  <div
                    className="w-7 h-7 flex items-center justify-center rounded border-2 font-bold text-sm tabular-nums shrink-0"
                    style={{ borderColor: labelColor, color: labelColor }}
                  >
                    {st.value}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>
                      {st.name}
                    </div>
                    <div className="text-xs italic" style={{ color: 'var(--ink-light)' }}>
                      {st.description}
                    </div>
                  </div>
                  <div className="text-xs font-semibold" style={{ color: labelColor }}>
                    {label}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Alignment */}
        {alignmentData && (
          <section className="mb-6">
            <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--gold)' }}>
              Alignment
            </div>
            <div
              className="rounded-lg border-2 px-4 py-3"
              style={{ background: '#FFF8EE', borderColor: '#C9A84C' }}
            >
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-serif font-bold text-base" style={{ color: 'var(--ink)' }}>
                  {alignmentData.name}
                </span>
                <span className="text-xs italic" style={{ color: 'var(--gold)' }}>
                  {alignmentData.tagline}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ink)' }}>
                {alignmentData.description}
              </p>
            </div>
          </section>
        )}

        {/* Class */}
        {classData && (
          <section className="mb-8">
            <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--gold)' }}>
              Class
            </div>
            <div
              className="rounded-lg border-2 px-4 py-3"
              style={{ background: '#FFF8EE', borderColor: '#C9A84C' }}
            >
              <div className="flex items-start justify-between mb-1">
                <div>
                  <span className="font-serif font-bold text-base" style={{ color: 'var(--ink)' }}>
                    {classData.name}
                  </span>
                  <div className="text-xs italic" style={{ color: 'var(--gold)' }}>
                    {classData.tagline}
                  </div>
                </div>
                <div className="flex gap-1">
                  {classData.primaryStats.map(stat => (
                    <span
                      key={stat}
                      className="text-xs font-bold px-1.5 py-0.5 rounded border"
                      style={{
                        background: (STAT_COLORS[stat.toLowerCase()] ?? '#8B6914') + '22',
                        color: STAT_COLORS[stat.toLowerCase()] ?? '#8B6914',
                        borderColor: (STAT_COLORS[stat.toLowerCase()] ?? '#8B6914') + '44',
                      }}
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-2" style={{ color: 'var(--ink)' }}>
                {classData.description}
              </p>
              <div className="text-xs italic" style={{ color: 'var(--gold)' }}>
                {classData.examples.join(' · ')}
              </div>
            </div>
          </section>
        )}

        {/* Ornamental divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px" style={{ background: 'var(--gold-light)' }} />
          <span style={{ color: 'var(--gold)' }}>⬡</span>
          <div className="flex-1 h-px" style={{ background: 'var(--gold-light)' }} />
        </div>

        {/* Back */}
        <button
          onClick={() => router.push('/')}
          className="w-full py-2.5 rounded border-2 text-sm font-serif font-semibold tracking-wide transition-colors hover:bg-amber-50"
          style={{ borderColor: 'var(--gold-light)', color: 'var(--ink-light)' }}
        >
          Edit Sheet
        </button>
      </div>
    </div>
  )
}
