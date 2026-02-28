[CHARACTER_SHEET_PROJECT.md](https://github.com/user-attachments/files/25640852/CHARACTER_SHEET_PROJECT.md)
# Character Sheet

A companion tool for MyDailyEpic that transforms life history into D&D-style character attributes.

## Core Concept

Character Sheet serves as an onboarding experience and ongoing reference point for MyDailyEpic users. Through a questionnaire about their life history, upbringing, and self-perception, users generate initial character attributes that mirror D&D ability scores. These attributes evolve over time based on the stories they share in MyDailyEpic.

## Key Principle: Hidden Growth

**Attributes are hidden by default and revealed periodically.**

This design prevents fixation on metrics while maintaining motivation through occasional reveals. Users are explicitly told:
- Why attributes aren't always visible
- That scoring isn't the purpose
- That self-framing as overcoming obstacles is the true win
- That their perception matters more than what the app measures

## How It Works

### Initial Creation

**Onboarding Questionnaire** generates starting attributes based on:
- Family background and relationships
- Upbringing and childhood experiences  
- Self-perception and personal history
- Response to past challenges
- Current life context

**Two Versions:**
1. **Quick Version** - Essential questions, ~5-10 minutes
2. **Deep Version** - Comprehensive life review, ~20-30 minutes

Both generate the same attribute types but with varying levels of nuance.

### Attribute Evolution

**System infers changes from story content**, not user self-reporting.

When users share daily struggles in MyDailyEpic:
- System analyzes how they frame the challenge
- Detects patterns in obstacle-framing vs victim-framing
- Identifies growth moments, setbacks, resilience
- Adjusts attributes accordingly (hidden from user)

**Critical Framing:** Users are reminded that framing themselves as overcoming obstacles is what matters - whether the app agrees, whether their character sheet reflects it, or not.

## D&D Character Sheet Mapping

Based on classic AD&D yellow character sheet aesthetic and structure.

### Core Attributes (The Six Abilities)

**Strength (STR)**
- Physical resilience and endurance
- Maps to: Energy levels, health management, physical capability

**Intelligence (INT)**  
- Problem-solving and analytical thinking
- Maps to: How user approaches complex situations, learns from experience

**Wisdom (WIS)**
- Insight and self-awareness
- Maps to: Emotional intelligence, perspective-taking, recognizing patterns

**Dexterity (DEX)**
- Adaptability and flexibility
- Maps to: How quickly user adjusts to change, pivots when needed

**Constitution (CON)**
- Mental/emotional fortitude
- Maps to: Stress tolerance, consistency, ability to persist

**Charisma (CHA)**
- Self-advocacy and boundaries
- Maps to: Communication effectiveness, setting healthy limits

### Additional Sheet Elements to Keep

**From AD&D Character Sheet:**
- Character Name (user's real name or chosen identifier)
- Alignment (perhaps mapped to values framework)
- Level (progression through MyDailyEpic usage)
- Experience Points (stories shared, growth moments)
- Hit Points (current emotional/mental capacity)
- Saving Throws (resilience in specific challenge types)
- Special Abilities (unique strengths user has developed)

**Background Section:**
- Place of Origin
- Family/Social Context  
- Personality traits
- History that shaped their life

### Elements to Skip or Modify

- Combat stats (not relevant)
- Weapons/Equipment (unless metaphorical)
- Spell lists (could be reframed as "tools/strategies")
- Tactical combat mechanics

## Visual Design

**Must match classic AD&D yellow sheet aesthetic:**
- Parchment yellow background (#F4D03F or similar)
- Decorative gothic border elements
- Black serif typography
- Grid/table layouts for stats
- Hand-drawn quality to line work
- Distinct sections with ornamental dividers

**Modern Web Implementation:**
- Responsive layout
- Maintains vintage aesthetic on all screen sizes
- Subtle interactions (hover states, transitions)
- Print-friendly version available

## Onboarding Questionnaire Design

### Principles

1. **Questions probe life history without clinical framing**
2. **Responses map to attribute algorithms** (not direct scoring)
3. **Tone is curious, not diagnostic**
4. **Both versions feel complete** (quick vs deep)

### Question Categories

**Family & Upbringing**
- Relationship with parents/guardians
- Sibling dynamics and birth order
- Family communication patterns
- Early home environment (stable/chaotic, supportive/critical)

**Formative Experiences**
- Childhood challenges faced
- How they were supported (or not)
- Early independence vs dependence
- Defining moments that shaped identity

**Current Context**
- Living situation
- Social support system
- Daily routines and responsibilities
- Ongoing challenges

**Self-Perception**
- How they see their strengths
- Acknowledged weaknesses or struggles
- Pattern recognition in their own behavior
- Areas where they want to grow

**Response to Adversity**
- Past challenges and how they handled them
- Support-seeking behavior
- Coping mechanisms (healthy and unhealthy)
- Recovery patterns

### Attribute Generation Algorithm

**Not direct mapping** - questions inform holistic picture that generates scores.

Example logic:
- Strong family support + high self-awareness → Higher Wisdom
- History of physical challenges overcome → Higher Constitution  
- Adaptable problem-solving in past → Higher Intelligence + Dexterity
- Isolated upbringing but self-reliant → Mixed CON/CHA profile

Scores should reflect:
- **Realistic range** (no one starts at maximum)
- **Room for growth** (leave space for improvement)
- **Balanced weaknesses** (everyone has them)

## Integration with MyDailyEpic

### Story Analysis for Attribute Changes

**System looks for patterns in how stories are framed:**

**Obstacle-Framing** (increases attributes):
- "I faced X and tried Y"
- Focus on agency and action
- Recognition of choice points
- Learning from outcome

**Victim-Framing** (maintains or decreases attributes):
- "X happened to me"
- External locus of control
- Helplessness narrative
- Blame-focused

**Growth Indicators:**
- Trying new strategies
- Seeking support appropriately  
- Recognizing patterns
- Connecting challenges to values

### Reveal Schedule

**Periodic Check-ins** where attributes are shown:
- After every 10 stories
- Monthly milestone
- User-requested (limited frequency)

**Reveal Format:**
- Shows current scores
- Indicates direction of change (↑↓→)
- Brief narrative explaining shifts
- Reinforces that this is just one perspective

## Technical Implementation Notes

### Storage & Privacy

- Attributes stored server-side (not client-side)
- Onboarding responses encrypted
- No selling or sharing of personal history data
- User can delete all data at any time

### Scoring System

- Attributes on 3-18 scale (classic D&D range)
- Starting scores typically 8-14 (room to grow)
- Changes are gradual (±1 per reveal period max)
- Algorithm weights recent stories more than distant past

### Future Considerations

**Unclear Elements to Determine:**
- Should users be able to manually adjust their sheet?
- Gamification risk: will users write stories to boost scores?
- Therapeutic concern: does tracking undermine authentic processing?
- Measurement validity: can we actually infer these things from text?

**Possible Solutions:**
- Make it explicitly non-diagnostic
- Focus on pattern recognition, not accuracy
- Allow user override/disagreement
- Treat it as creative exercise, not assessment

## Development Phases

### Phase 1: Standalone Character Sheet
- Build onboarding questionnaire (both versions)
- Generate initial character sheet
- Create yellow AD&D aesthetic interface
- Static display (no evolution yet)

### Phase 2: Integration Foundation  
- Connect to MyDailyEpic infrastructure
- Store character data alongside story data
- Build reveal schedule system
- Create attribute change algorithms (basic)

### Phase 3: Story Analysis
- Implement text analysis for framing detection
- Test attribute adjustment logic
- Build reveal UI with change explanations
- User feedback and refinement

### Phase 4: Refinement
- Improve algorithm accuracy
- Add manual override options (maybe)
- Create print/export versions
- Long-term pattern visualization

## User Communication Framework

**On First Use:**
> "This character sheet isn't about measuring you accurately - it's about giving you a creative lens to see your own growth. The scores will change based on how you tell your stories, but remember: **the way you frame challenges matters more than any number**."

**At Each Reveal:**
> "Your character is evolving. These changes reflect patterns in how you've been approaching challenges. But you know yourself better than any algorithm - if these don't feel right, that's valuable information too."

**Ongoing Reminder:**
> "The real game is framing yourself as someone who faces obstacles, not someone things happen to. Whether this app notices or not."

## Questions to Explore

1. **Transparency vs Mystery:** How much do we explain about how scoring works?
2. **User Agency:** Can users contest or override attribute changes?
3. **Therapeutic Integrity:** Does gamification help or hurt the CBT foundation?
4. **Measurement Validity:** Should we even try to "accurately" assess these things?
5. **Motivation Design:** What drives continued engagement without fixation?

## Success Metrics

**Not about accuracy**, but about:
- User engagement with onboarding (completion rates)
- Story submission frequency in MyDailyEpic
- User-reported sense of progress
- Qualitative feedback on usefulness
- Reduced fixation on scores vs self-framing

## Technical Stack (Proposed)

- HTML/CSS/JavaScript (vanilla, matching MyDailyEpic approach)
- Same deployment as MyDailyEpic (Vercel)
- Shared backend/database
- localStorage for temporary onboarding state
- Server-side storage for final attributes

## Design Constraints

1. Must feel like classic D&D character creation
2. Cannot feel clinical or diagnostic  
3. Questions must be engaging, not exhausting
4. Visual design must match yellow AD&D aesthetic
5. Works on mobile and desktop
6. Printable version available

## Open Questions for Development

- How many questions in quick vs deep version?
- What's the minimum viable attribute set?
- Should there be character classes (archetypes)?
- Do we show comparison to starting state at reveals?
- Can users share their character sheet?
- Is there a "character art" component (visual representation)?

---

## Immediate Next Steps

1. ✓ Document project vision and design principles
2. Design onboarding questionnaire (both versions)
3. Build attribute generation algorithm
4. Create character sheet visual design (yellow AD&D style)
5. Implement static character sheet interface
6. Test onboarding flow with real users
7. Plan MyDailyEpic integration architecture

---

**Project Status:** Documentation phase  
**Primary Developer:** Dan (with Claude in VS Code)  
**Integration Target:** MyDailyEpic (formerly YourLore)  
**Timeline:** TBD based on development pace
