'use client'

import { useState } from 'react'
import { ALIGNMENTS, getAlignmentGrid, getAlignmentByKey, ROW_LABELS, COL_LABELS, type AlignmentKey } from '../lib/alignment'

type Props = {
  value: AlignmentKey | null
  onChange: (key: AlignmentKey) => void
}

export default function AlignmentPicker({ value, onChange }: Props) {
  const [hovered, setHovered] = useState<AlignmentKey | null>(null)
  const grid = getAlignmentGrid()

  const focused = hovered ?? value
  const focusedAlignment = focused ? getAlignmentByKey(focused) : null

  return (
    <div>
      {/* Column headers — above grid only */}
      <div className="grid grid-cols-3 gap-1 mb-1 pl-12" style={{ width: 'calc(44px + 3 * 88px + 2 * 4px)' }}>
        {COL_LABELS.map(label => (
          <div key={label} className="text-center text-xs font-semibold tracking-wide" style={{ color: '#8B6914' }}>
            {label}
          </div>
        ))}
      </div>

      {/* Row labels + grid + description panel — all aligned to same top */}
      <div className="flex items-start gap-4">
        {/* Row labels */}
        <div className="flex flex-col gap-1 justify-around w-11 shrink-0">
          {ROW_LABELS.map(label => (
            <div
              key={label}
              className="text-xs font-semibold tracking-wide text-right pr-1"
              style={{ color: '#8B6914', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* 3x3 grid */}
        <div className="grid grid-cols-3 gap-1 shrink-0">
          {grid.map((row, ri) =>
            row.map((alignment, ci) => {
              const isSelected = value === alignment.key
              const isHovered = hovered === alignment.key

              return (
                <button
                  key={alignment.key}
                  onClick={() => onChange(alignment.key)}
                  onMouseEnter={() => setHovered(alignment.key)}
                  onMouseLeave={() => setHovered(null)}
                  className="w-24 rounded px-2 py-2 text-left border-2 transition-all"
                  style={{
                    width: '88px',
                    minHeight: '72px',
                    background: isSelected ? '#F0E0B0' : isHovered ? '#FAF3E0' : '#FFF8EE',
                    borderColor: isSelected ? '#3D2B1F' : isHovered ? '#8B6914' : '#C9A84C',
                  }}
                >
                  <div className="text-xs font-semibold leading-tight" style={{ color: '#3D2B1F' }}>
                    {alignment.name}
                  </div>
                  <div className="text-xs leading-tight" style={{ color: '#8B6914' }}>
                    {alignment.tagline}
                  </div>
                </button>
              )
            })
          )}
        </div>

        {/* Description panel — top aligned with first grid row */}
        <div
          className="flex-1 rounded-lg border p-3"
          style={{ background: '#FAF3E0', borderColor: '#C9A84C', minHeight: '72px' }}
        >
          {focusedAlignment ? (
            <>
              <div className="text-sm font-serif font-bold mb-1" style={{ color: '#3D2B1F' }}>
                {focusedAlignment.name}
              </div>
              <div className="text-xs italic mb-2" style={{ color: '#8B6914' }}>
                {focusedAlignment.tagline}
              </div>
              <p className="text-xs leading-relaxed" style={{ color: '#3D2B1F' }}>
                {focusedAlignment.description}
              </p>
            </>
          ) : (
            <p className="text-xs italic" style={{ color: '#8B6914' }}>
              Hover or select an alignment to learn more.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
