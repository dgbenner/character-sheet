export type CharacterClass = {
  key: string
  name: string
  tagline: string
  description: string
  primaryStats: string[]
  realWorldTrait: string
  examples: string[]
}

export const CHARACTER_CLASSES: CharacterClass[] = [
  {
    key: 'fighter',
    name: 'Fighter',
    tagline: 'The one who shows up and does the work',
    description:
      'You lead with action, not theory. You get things done through effort, practice, and a willingness to take the hit. You may not always work smart, but you work hard — and that reliability is rare.',
    primaryStats: ['STR', 'CON'],
    realWorldTrait: 'Resilience and follow-through',
    examples: ['Athletes', 'Tradespeople', 'First responders', 'Anyone who grinds'],
  },
  {
    key: 'wizard',
    name: 'Wizard',
    tagline: 'The one who studied while others partied',
    description:
      'You accumulate knowledge deliberately. You understand systems, patterns, and underlying mechanisms. Your power comes from preparation and comprehension — the hours no one saw you put in.',
    primaryStats: ['INT', 'WIS'],
    realWorldTrait: 'Deep knowledge and pattern recognition',
    examples: ['Researchers', 'Engineers', 'Strategists', 'Lifelong learners'],
  },
  {
    key: 'rogue',
    name: 'Rogue',
    tagline: 'The one who finds the angle no one else saw',
    description:
      'You move through the world with precision and awareness. You notice what others miss. You pick your moments, avoid unnecessary confrontation, and when you do act, you make it count.',
    primaryStats: ['DEX', 'INT'],
    realWorldTrait: 'Resourcefulness and situational awareness',
    examples: ['Entrepreneurs', 'Editors', 'Investigators', 'Anyone who works smarter'],
  },
  {
    key: 'cleric',
    name: 'Cleric',
    tagline: 'The one people call when it falls apart',
    description:
      'You are grounded in something larger than yourself — a faith, a principle, a calling. You heal, guide, and hold space for others. You show up in crisis not to take over, but to restore.',
    primaryStats: ['WIS', 'CHA'],
    realWorldTrait: 'Steadiness and genuine care for others',
    examples: ['Counselors', 'Nurses', 'Spiritual leaders', 'Anyone who sustains a community'],
  },
  {
    key: 'bard',
    name: 'Bard',
    tagline: 'The one who makes the room feel different',
    description:
      'You communicate in ways that move people. You understand tone, timing, and connection. Whether through story, humor, music, or presence — you shift the energy of any room you enter.',
    primaryStats: ['CHA', 'DEX'],
    realWorldTrait: 'Communication and emotional intelligence',
    examples: ['Artists', 'Teachers', 'Performers', 'Anyone who knows how to read a room'],
  },
  {
    key: 'ranger',
    name: 'Ranger',
    tagline: 'The one who thrives on the edge',
    description:
      'You are most alive when navigating uncertainty. You prefer real environments over managed ones. You read context quickly, adapt without drama, and find your way through unfamiliar terrain.',
    primaryStats: ['DEX', 'WIS'],
    realWorldTrait: 'Adaptability and environmental awareness',
    examples: ['Travelers', 'Field researchers', 'Freelancers', 'Anyone who builds from scratch'],
  },
  {
    key: 'paladin',
    name: 'Paladin',
    tagline: 'The one who holds the line on principle',
    description:
      'You operate from a clear moral code. You protect what matters and hold yourself to a higher standard — even when it costs you. People trust you not because you are perfect, but because you are consistent.',
    primaryStats: ['STR', 'CHA'],
    realWorldTrait: 'Integrity and principled leadership',
    examples: ['Advocates', 'Leaders under pressure', 'Anyone who keeps their word when it is hard'],
  },
  {
    key: 'druid',
    name: 'Druid',
    tagline: 'The one who sees the long pattern',
    description:
      'You think in cycles and systems. You are patient where others are reactive. You understand that most things have a season, and you do not force what needs to grow. You are deeply attuned to what is real.',
    primaryStats: ['WIS', 'CON'],
    realWorldTrait: 'Systems thinking and long-term perspective',
    examples: ['Ecologists', 'Therapists', 'Anyone who plays the long game'],
  },
]

export function getClassByKey(key: string): CharacterClass | undefined {
  return CHARACTER_CLASSES.find(c => c.key === key)
}
