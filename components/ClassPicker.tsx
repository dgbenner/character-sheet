'use client'

import { CHARACTER_CLASSES, type CharacterClass } from '../lib/classes'

type Props = {
  value: string | null
  onChange: (key: string) => void
  onOpenDrawer: (cls: CharacterClass) => void
}

const STAT_COLORS: Record<string, string> = {
  STR: '#C0392B',
  INT: '#2980B9',
  WIS: '#8E44AD',
  DEX: '#27AE60',
  CON: '#E67E22',
  CHA: '#D4AC0D',
}

export default function ClassPicker({ value, onChange, onOpenDrawer }: Props) {
  function handleSelect(cls: CharacterClass) {
    onChange(cls.key)
    onOpenDrawer(cls)
  }

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4" style={{ gridAutoRows: '1fr' }}>
      {CHARACTER_CLASSES.map(cls => {
        const isSelected = value === cls.key

        return (
          <div key={cls.key} className="flex flex-col">
            <button
              onClick={() => handleSelect(cls)}
              className="flex-1 w-full text-left rounded-lg border-2 px-3 py-2.5 transition-all flex flex-col"
              style={{
                background: isSelected ? '#F0E0B0' : '#FAF3E0',
                borderColor: isSelected ? '#3D2B1F' : '#C9A84C',
              }}
            >
              <div className="text-sm font-serif font-bold leading-tight" style={{ color: '#3D2B1F' }}>
                {cls.name}
              </div>
              <div className="text-xs italic leading-tight mt-0.5 mb-1.5" style={{ color: '#6B4C1E' }}>
                {cls.tagline}
              </div>
              <div className="flex gap-1 flex-wrap mt-auto">
                {cls.primaryStats.map(stat => (
                  <span
                    key={stat}
                    className="text-xs font-bold px-1.5 py-0.5 rounded"
                    style={{
                      background: STAT_COLORS[stat] + '22',
                      color: STAT_COLORS[stat],
                      border: `1px solid ${STAT_COLORS[stat]}44`,
                    }}
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </button>
          </div>
        )
      })}
    </div>
  )
}
