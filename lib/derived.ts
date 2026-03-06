import { getModifier } from './attributes'

export type Stats = {
  str: number
  int: number
  wis: number
  dex: number
  con: number
  cha: number
}

export function calcHP(stats: Stats): number {
  return 8 + getModifier(stats.con)
}

export function calcAC(stats: Stats): number {
  return 10 + getModifier(stats.dex)
}

export type SavingThrow = {
  key: string
  name: string
  description: string
  value: number
}

export function calcSavingThrows(stats: Stats): SavingThrow[] {
  return [
    {
      key: 'burnout',
      name: 'vs. Burnout',
      description: 'Resisting total depletion when pushed past your limits',
      value: 12 - getModifier(stats.con) - getModifier(stats.wis),
    },
    {
      key: 'distraction',
      name: 'vs. Distraction',
      description: 'Staying focused when shiny objects and impulses pull at you',
      value: 12 - getModifier(stats.int) - getModifier(stats.wis),
    },
    {
      key: 'stagnation',
      name: 'vs. Stagnation',
      description: 'Not getting frozen or stuck when life demands movement',
      value: 12 - getModifier(stats.dex) - getModifier(stats.str),
    },
    {
      key: 'crisis',
      name: 'vs. Crisis',
      description: 'Staying functional when sudden overwhelming situations hit',
      value: 12 - getModifier(stats.con) - getModifier(stats.dex),
    },
    {
      key: 'manipulation',
      name: 'vs. Manipulation',
      description: 'Resisting external pressure, influence, and social coercion',
      value: 12 - getModifier(stats.wis) - getModifier(stats.cha),
    },
  ]
}

// Lower saving throw = better (classic D&D style — you need to roll this or higher to save)
export function savingThrowLabel(value: number): string {
  if (value <= 4) return 'Excellent'
  if (value <= 7) return 'Good'
  if (value <= 10) return 'Average'
  if (value <= 13) return 'Weak'
  return 'Poor'
}
