export type AlignmentKey =
  | 'lawful-good'
  | 'neutral-good'
  | 'chaotic-good'
  | 'lawful-neutral'
  | 'true-neutral'
  | 'chaotic-neutral'
  | 'lawful-evil'
  | 'neutral-evil'
  | 'chaotic-evil'

export type Alignment = {
  key: AlignmentKey
  name: string
  tagline: string
  description: string
  row: 0 | 1 | 2 // 0=Order, 1=Balanced, 2=Chaos
  col: 0 | 1 | 2 // 0=Self, 1=Balanced, 2=Community
}

// Grid axes:
// Rows (top→bottom):  Order → Balanced → Chaos
// Cols (left→right):  Self  → Balanced → Community

export const ALIGNMENTS: Alignment[] = [
  {
    key: 'lawful-good',
    name: 'Principled Servant',
    tagline: 'Order + Community',
    description:
      'You follow rules and structures because you believe they genuinely serve people. You are reliable, ethical, and community-oriented. You hold yourself and others to clear standards.',
    row: 0,
    col: 2,
  },
  {
    key: 'neutral-good',
    name: 'Genuine Helper',
    tagline: 'Balanced + Community',
    description:
      'You want to help and will use whatever means work best. You are not rigid about rules or totally self-directed — you just want good outcomes for people around you.',
    row: 1,
    col: 2,
  },
  {
    key: 'chaotic-good',
    name: 'Rebel with a Cause',
    tagline: 'Chaos + Community',
    description:
      'You care deeply about people but distrust institutions. You break rules when they do more harm than good. You back the underdog and challenge authority that serves itself over others.',
    row: 2,
    col: 2,
  },
  {
    key: 'lawful-neutral',
    name: 'The Operator',
    tagline: 'Order + Balanced',
    description:
      "You follow the system and execute well, without strong allegiance to anyone's agenda. You value consistency, process, and getting things done properly.",
    row: 0,
    col: 1,
  },
  {
    key: 'true-neutral',
    name: 'The Pragmatist',
    tagline: 'Balanced + Balanced',
    description:
      'You weigh each situation on its own terms. You do not commit to ideological extremes. You adapt, read context, and act accordingly — which can look like wisdom or avoidance depending on the day.',
    row: 1,
    col: 1,
  },
  {
    key: 'chaotic-neutral',
    name: 'The Free Agent',
    tagline: 'Chaos + Balanced',
    description:
      'You follow your instincts and resist being pinned down. You value freedom above group loyalty or institutional order. You are unpredictable by design — rules and expectations are things to push against.',
    row: 2,
    col: 1,
  },
  {
    key: 'lawful-evil',
    name: 'The Schemer',
    tagline: 'Order + Self',
    description:
      'You work within systems, but for your own benefit. You respect hierarchy because you plan to climb it. You play by the rules when useful — and change them when you are the one making them.',
    row: 0,
    col: 0,
  },
  {
    key: 'neutral-evil',
    name: 'The Opportunist',
    tagline: 'Balanced + Self',
    description:
      'You do whatever serves you at a given moment. No strong ideology, no strong community ties — just outcome-driven self-interest. You are pragmatic about who and what you use to get there.',
    row: 1,
    col: 0,
  },
  {
    key: 'chaotic-evil',
    name: 'The Disruptor',
    tagline: 'Chaos + Self',
    description:
      "You act on impulse, self-interest, and a general contempt for structure. You are unpredictable and serve no one's agenda but your own. At your best: fearless. At your worst: genuinely destabilizing.",
    row: 2,
    col: 0,
  },
]

// Returns a 3x3 grid: grid[row][col]
export function getAlignmentGrid(): Alignment[][] {
  const grid: Alignment[][] = [[], [], []]
  for (const a of ALIGNMENTS) {
    grid[a.row][a.col] = a
  }
  return grid
}

export function getAlignmentByKey(key: AlignmentKey): Alignment | undefined {
  return ALIGNMENTS.find(a => a.key === key)
}

export const ROW_LABELS = ['Order', 'Balanced', 'Chaos']
export const COL_LABELS = ['Self', 'Balanced', 'Community']
