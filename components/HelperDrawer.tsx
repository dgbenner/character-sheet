'use client'

import { useState } from 'react'
import { type Attribute, getScoreRange, formatModifier, getModifier } from '../lib/attributes'

type Tab = 'nature' | 'childhood' | 'adulthood' | 'rightNow'

const TABS: { key: Tab; label: string }[] = [
  { key: 'nature', label: 'Nature' },
  { key: 'childhood', label: 'Childhood' },
  { key: 'adulthood', label: 'Adulthood' },
  { key: 'rightNow', label: 'Right Now' },
]

type Props = {
  isOpen: boolean
  onClose: () => void
  attribute: Attribute | null
  score: number
}

export default function HelperDrawer({ isOpen, onClose, attribute, score }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>('nature')

  if (!attribute) return null

  const range = getScoreRange(attribute, score)
  const modifier = getModifier(score)
  const modStr = formatModifier(modifier)

  const bullets: string[] = range[activeTab]

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 z-50 transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ background: '#F9F0DC', borderLeft: '2px solid #8B6914' }}
      >
        {/* Header */}
        <div className="px-5 pt-5 pb-3 border-b-2" style={{ borderColor: '#8B6914' }}>
          <div className="flex items-start justify-between mb-1">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#8B6914' }}>
                  {attribute.abbr}
                </span>
                <span className="text-lg font-serif font-bold" style={{ color: '#3D2B1F' }}>
                  {attribute.realWorldTitle}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-2xl font-bold tabular-nums" style={{ color: '#3D2B1F' }}>
                  {score}
                </span>
                <span className="text-sm font-semibold" style={{ color: modifier >= 0 ? '#2D6A2D' : '#9B2C2C' }}>
                  {modStr}
                </span>
                <span className="text-sm italic" style={{ color: '#6B4C1E' }}>
                  {range.label}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded hover:bg-black/10 transition-colors"
              aria-label="Close"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 2l14 14M16 2L2 16" stroke="#6B4C1E" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b" style={{ borderColor: '#C9A84C' }}>
          {TABS.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="flex-1 py-2 text-xs font-semibold tracking-wide transition-colors"
              style={{
                color: activeTab === tab.key ? '#3D2B1F' : '#8B6914',
                background: activeTab === tab.key ? '#F0E0B0' : 'transparent',
                borderBottom: activeTab === tab.key ? '2px solid #3D2B1F' : '2px solid transparent',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          <ul className="space-y-3">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: '#8B6914' }} />
                <span className="text-sm leading-relaxed" style={{ color: '#3D2B1F' }}>
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t text-xs italic" style={{ borderColor: '#C9A84C', color: '#8B6914' }}>
          {attribute.description}
        </div>
      </div>
    </>
  )
}
