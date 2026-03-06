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
      <div className="flex items-start gap-6">
        {/* Grid */}
        <div>
          {/* Column headers */}
          <div className="grid grid-cols-3 gap-1 mb-1 pl-12">
            {COL_LABELS.map(label => (
              <div key={label} className="text-center text-xs font-semibold tracking-wide" style={{ color: '#8B6914' }}>
                {label}
              </div>
            ))}
          </div>

          <div className="flex gap-1">
            {/* Row labels */}
            <div className="flex flex-col gap-1 justify-around w-11 shrink-0">
              {ROW_LABELS.map(label => (
                <div
                  key={label}
                  className="text-xs font-semibold tracking-wide text-right pr-1"
                  style={{ color: '#8B6914', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
                >
                  {label}
                </div>
              ))}
            </div>

            {/* 3x3 grid */}
            <div className="grid grid-cols-3 gap-1">
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
                      className="w-24 h-13 rounded px-2 py-1.5 text-left border-2 transition-all"
                      style={{
                        width: '88px',
                        height: '52px',
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
          </div>
        </div>

        {/* Description panel */}
        <div
          className="flex-1 min-h-[120px] rounded-lg border p-3"
          style={{ background: '#FAF3E0', borderColor: '#C9A84C' }}
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
