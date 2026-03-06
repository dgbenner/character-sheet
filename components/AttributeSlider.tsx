'use client'

import { type Attribute, getScoreRange, getModifier, formatModifier } from '../lib/attributes'

type Props = {
  attribute: Attribute
  score: number
  onChange: (score: number) => void
  onOpenHelper: (attribute: Attribute) => void
}

export default function AttributeSlider({ attribute, score, onChange, onOpenHelper }: Props) {
  const modifier = getModifier(score)
  const modStr = formatModifier(modifier)
  const range = getScoreRange(attribute, score)

  // Color the modifier
  const modColor = modifier > 0 ? '#2D6A2D' : modifier < 0 ? '#9B2C2C' : '#6B4C1E'

  return (
    <div
      className="rounded-lg px-4 py-3 border"
      style={{ background: '#FAF3E0', borderColor: '#C9A84C' }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {/* Abbr badge */}
          <span
            className="w-9 h-9 flex items-center justify-center rounded text-xs font-bold tracking-wider border-2 font-serif"
            style={{ background: '#F0E0B0', borderColor: '#8B6914', color: '#3D2B1F' }}
          >
            {attribute.abbr}
          </span>

          <div>
            <div className="text-sm font-serif font-semibold leading-tight" style={{ color: '#3D2B1F' }}>
              {attribute.realWorldTitle}
            </div>
            <div className="text-xs" style={{ color: '#8B6914' }}>
              {attribute.name}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Score + modifier */}
          <div className="text-right">
            <div className="text-xl font-bold tabular-nums leading-none" style={{ color: '#3D2B1F' }}>
              {score}
            </div>
            <div className="text-xs font-semibold leading-none mt-0.5" style={{ color: modColor }}>
              {modStr}
            </div>
          </div>

          {/* Helper button */}
          <button
            onClick={() => onOpenHelper(attribute)}
            className="w-7 h-7 flex items-center justify-center rounded-full border text-xs font-bold transition-colors hover:bg-amber-100"
            style={{ borderColor: '#8B6914', color: '#8B6914' }}
            aria-label={`Learn more about ${attribute.realWorldTitle}`}
            title={`${range.label} — tap to explore`}
          >
            ?
          </button>
        </div>
      </div>

      {/* Score label */}
      <div className="text-xs italic mb-2 text-center" style={{ color: '#6B4C1E' }}>
        {range.shortLabel}
      </div>

      {/* Slider */}
      <input
        type="range"
        min={3}
        max={18}
        value={score}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full accent-amber-700 cursor-pointer"
        style={{ accentColor: '#8B6914' }}
      />

      <div className="flex justify-between text-xs mt-0.5" style={{ color: '#C9A84C' }}>
        <span>3</span>
        <span>18</span>
      </div>
    </div>
  )
}
