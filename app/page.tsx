'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import AttributeSlider from '../components/AttributeSlider'
import HelperDrawer, { type DrawerSubject } from '../components/HelperDrawer'
import AlignmentPicker from '../components/AlignmentPicker'
import ClassPicker from '../components/ClassPicker'
import { ATTRIBUTES, type Attribute } from '../lib/attributes'
import { type CharacterClass } from '../lib/classes'
import { type AlignmentKey } from '../lib/alignment'

const DEFAULT_SCORES: Record<string, number> = {
  str: 10,
  int: 10,
  wis: 10,
  dex: 10,
  con: 10,
  cha: 10,
}

function Divider() {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="flex-1 h-px" style={{ background: 'var(--gold-light)' }} />
      <span className="text-lg" style={{ color: 'var(--gold)' }}>⬡</span>
      <div className="flex-1 h-px" style={{ background: 'var(--gold-light)' }} />
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--gold)', fontSize: '1.35rem' }}>
      {children}
    </div>
  )
}

export default function OnboardingPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [scores, setScores] = useState(DEFAULT_SCORES)
  const [alignment, setAlignment] = useState<AlignmentKey | null>(null)
  const [characterClass, setCharacterClass] = useState<string | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerSubject, setDrawerSubject] = useState<DrawerSubject | null>(null)

  function handleScoreChange(key: string, value: number) {
    setScores(prev => ({ ...prev, [key]: value }))
  }

  function handleOpenAttribute(attribute: Attribute) {
    setDrawerSubject({ kind: 'attribute', attribute, score: scores[attribute.key] })
    setDrawerOpen(true)
  }

  function handleOpenClass(cls: CharacterClass) {
    setDrawerSubject({ kind: 'class', cls })
    setDrawerOpen(true)
  }

  function handleSubmit() {
    if (!name.trim()) return
    const data = { name: name.trim(), scores, alignment, characterClass }
    localStorage.setItem('character_sheet', JSON.stringify(data))
    router.push('/sheet')
  }

  return (
    <div className="min-h-screen relative" style={{ background: 'var(--parchment)' }}>
      <div className="max-w-5xl mx-auto px-4 py-10 relative z-10">

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold tracking-wide mb-1" style={{ color: 'var(--ink)' }}>
            Character Sheet
          </h1>
          <p className="text-sm italic" style={{ color: 'var(--gold)' }}>
            Your true self — not who you play, but who you are.
          </p>
        </div>

        <Divider />

        {/* Two-column layout on wide screens */}
        <div className="flex flex-col lg:flex-row lg:gap-10 lg:items-start">

          {/* Left column — Name + Attributes */}
          <div className="lg:w-96 lg:shrink-0">
            {/* Name */}
            <section className="mb-8">
              <label className="block font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--gold)', fontSize: '1.35rem' }}>
                Character Name
              </label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Your name..."
                className="w-full px-4 py-2.5 rounded border-2 text-base font-serif outline-none transition-colors"
                style={{
                  background: '#FFF8EE',
                  borderColor: name ? 'var(--ink)' : 'var(--gold-light)',
                  color: 'var(--ink)',
                }}
              />
            </section>

            {/* Attributes */}
            <section className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <SectionLabel>Attributes</SectionLabel>
                <span className="text-xs italic mb-3" style={{ color: 'var(--ink-light)' }}>
                  Tap ? to explore
                </span>
              </div>
              <div className="space-y-2">
                {ATTRIBUTES.map(attr => (
                  <AttributeSlider
                    key={attr.key}
                    attribute={attr}
                    score={scores[attr.key]}
                    onChange={value => handleScoreChange(attr.key, value)}
                    onOpenHelper={handleOpenAttribute}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Vertical divider — wide only */}
          <div className="hidden lg:block w-px self-stretch" style={{ background: 'var(--gold-light)' }} />

          {/* Right column — Alignment + Class + Submit */}
          <div className="flex-1 min-w-0">
            {/* Alignment */}
            <section className="mb-8">
              <SectionLabel>Alignment</SectionLabel>
              <AlignmentPicker value={alignment} onChange={setAlignment} />
            </section>

            {/* Class */}
            <section className="mb-8">
              <SectionLabel>Character Class</SectionLabel>
              <ClassPicker
                value={characterClass}
                onChange={setCharacterClass}
                onOpenDrawer={handleOpenClass}
              />
            </section>

            {/* Submit */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px" style={{ background: 'var(--gold-light)' }} />
              <span className="text-lg" style={{ color: 'var(--gold)' }}>⬡</span>
              <div className="flex-1 h-px" style={{ background: 'var(--gold-light)' }} />
            </div>

            <button
              onClick={handleSubmit}
              disabled={!name.trim()}
              className="w-full py-3 rounded border-2 text-sm font-serif font-bold tracking-widest uppercase transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                background: name.trim() ? 'var(--ink)' : 'transparent',
                color: name.trim() ? 'var(--parchment)' : 'var(--ink)',
                borderColor: 'var(--ink)',
              }}
            >
              View My Sheet
            </button>
          </div>
        </div>
      </div>

      {/* Unified drawer — attributes and classes */}
      <HelperDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        subject={drawerSubject}
      />
    </div>
  )
}
