export type ScoreRange = {
  min: number
  max: number
  label: string
  shortLabel: string
  nature: string[]
  childhood: string[]
  adulthood: string[]
  rightNow: string[]
}

export type Attribute = {
  key: string
  name: string
  abbr: string
  realWorldTitle: string
  description: string
  ranges: ScoreRange[]
}

export const ATTRIBUTES: Attribute[] = [
  {
    key: 'str',
    name: 'Strength',
    abbr: 'STR',
    realWorldTitle: 'Physical Resilience & Energy',
    description: 'Your physical capacity, endurance, and relationship with your body.',
    ranges: [
      {
        min: 3, max: 5,
        label: 'Critically Low',
        shortLabel: 'Barely surviving',
        nature: [
          'You may have a chronic illness, condition, or physical disability that limits your body.',
          'Your energy levels are significantly lower than most people around you.',
          'Physical recovery takes far longer than expected.',
        ],
        childhood: [
          'Little or no physical activity growing up.',
          'Possibly overprotected, sedentary, or dealing with illness as a child.',
          'Physical education or sport may have been absent or painful.',
        ],
        adulthood: [
          'Avoids physical exertion when possible.',
          'May manage chronic pain, fatigue disorders, or severe sedentary habits.',
          'Physical tasks often feel like a significant event to prepare for.',
        ],
        rightNow: [
          'Daily physical tasks feel draining — grocery runs, stairs, long walks.',
          'Rest is often necessary and not optional.',
          'Your body feels like something to manage rather than rely on.',
        ],
      },
      {
        min: 6, max: 8,
        label: 'Below Average',
        shortLabel: 'Gets tired easily',
        nature: [
          'Your body runs on lower energy — you need more recovery time than most.',
          'Physical stamina isn\'t a natural strength.',
          'You may have a slower baseline metabolism or lower physical drive.',
        ],
        childhood: [
          'More bookish or indoor-focused than most kids.',
          'Sports or physical activity weren\'t central to your childhood.',
          'You may have preferred quiet play, reading, or creative activities.',
        ],
        adulthood: [
          'Some physical activity, but not consistent.',
          'Prefers lighter forms of movement — walking, casual stretching.',
          'Physically functional but not especially strong or energetic.',
        ],
        rightNow: [
          'You get through the day but physical tasks leave you noticeably tired.',
          'Exercise feels like a chore more than a pleasure.',
          'You\'d rather conserve energy than spend it.',
        ],
      },
      {
        min: 9, max: 11,
        label: 'Average',
        shortLabel: 'Gets by fine',
        nature: [
          'Typical physical capacity — nothing extreme in either direction.',
          'Your body handles regular demands without complaint.',
          'Energy levels are functional and mostly predictable.',
        ],
        childhood: [
          'Normal mix of active and sedentary activities.',
          'Maybe one sport or physical hobby alongside other interests.',
          'Physical activity was part of life but not your defining thing.',
        ],
        adulthood: [
          'Occasional exercise — not dedicated, but not absent either.',
          'Functionally fit for normal life demands.',
          'Physical health is maintained without being a focus.',
        ],
        rightNow: [
          'You can do most physical things when needed without major strain.',
          'Not training for anything specific, but not falling apart either.',
          'Exercise is something you do sometimes, when motivated.',
        ],
      },
      {
        min: 12, max: 14,
        label: 'Above Average',
        shortLabel: 'Physically capable',
        nature: [
          'Naturally energetic — you recover well from physical stress.',
          'Your body responds positively to exertion.',
          'Physical confidence is part of who you are.',
        ],
        childhood: [
          'Active kid — sports, outdoor play, physical chores were part of your routine.',
          'Probably good at most physical activities you tried.',
          'Movement felt natural and enjoyable.',
        ],
        adulthood: [
          'Regular exercise is part of your life.',
          'You value how your body feels and maintain it intentionally.',
          'Physical challenges are enjoyable rather than daunting.',
        ],
        rightNow: [
          'You work out, walk often, or have an active daily routine.',
          'Physical exertion is satisfying, not punishing.',
          'Your body is something you trust.',
        ],
      },
      {
        min: 15, max: 17,
        label: 'Strong',
        shortLabel: 'Built for it',
        nature: [
          'High physical capacity — your body responds well to serious exertion.',
          'Stamina and strength come more naturally than they do to most.',
          'Physically, you\'re in the top tier of most rooms you walk into.',
        ],
        childhood: [
          'Competitive athlete, gymnast, dancer, or very physically active outdoors.',
          'Physical ability was recognized and encouraged early.',
          'You probably excelled at physical challenges with relatively little effort.',
        ],
        adulthood: [
          'Consistent training is part of your identity.',
          'Physical challenge feels good — you seek it.',
          'Others notice your physical capability.',
        ],
        rightNow: [
          'You have a dedicated physical practice — lifting, running, martial arts, yoga, etc.',
          'Your body is a significant part of how you show up in the world.',
          'Physical discipline translates into other areas of your life.',
        ],
      },
      {
        min: 18, max: 18,
        label: 'Legendary',
        shortLabel: 'Exceptional',
        nature: [
          'Exceptional physical gifts — a rare natural capacity.',
          'Your body operates at a level most people can\'t train to.',
          'Physical ability may feel effortless in ways others find extraordinary.',
        ],
        childhood: [
          'Elite athlete or prodigy-level physical ability noticed early.',
          'Physical performance was a defining part of your early identity.',
          'Others singled you out for what your body could do.',
        ],
        adulthood: [
          'Training is central to your identity — possibly professional or semi-professional.',
          'Physical achievement is a primary measure of self.',
          'Others come to you for guidance about physical discipline.',
        ],
        rightNow: [
          'You train seriously and your body is a primary focus.',
          'Your physical capacity is a genuine source of pride and identity.',
          'What you can do physically places you in a distinct category.',
        ],
      },
    ],
  },
  {
    key: 'int',
    name: 'Intelligence',
    abbr: 'INT',
    realWorldTitle: 'Problem-Solving & Analytical Thinking',
    description: 'How you process information, learn, and navigate complexity.',
    ranges: [
      {
        min: 3, max: 5,
        label: 'Critically Low',
        shortLabel: 'Struggles with complexity',
        nature: [
          'Processing information feels like a significant effort.',
          'Learning disabilities or attention difficulties may be present.',
          'Abstract thinking is genuinely hard to access.',
        ],
        childhood: [
          'School was difficult — maybe humiliating at times.',
          'Possibly missed key educational foundations early on.',
          'Learning felt like fighting, not flowing.',
        ],
        adulthood: [
          'Avoids complex problems or anything that requires deep analysis.',
          'Prefers simple, concrete, hands-on tasks.',
          'Makes decisions on gut feeling rather than research.',
        ],
        rightNow: [
          'Overwhelmed by too much information at once.',
          'Complex decisions feel like a wall.',
          'You rely heavily on others to navigate analytical challenges.',
        ],
      },
      {
        min: 6, max: 8,
        label: 'Below Average',
        shortLabel: 'Practical over analytical',
        nature: [
          'Concrete thinker — abstract concepts are harder to grasp.',
          'Common sense and street smarts may exceed book smarts.',
          'Processing is slower or more linear than average.',
        ],
        childhood: [
          'Practical rather than academic — learned better by doing.',
          'May have struggled in traditional school settings.',
          'Hands-on learning was where you shone.',
        ],
        adulthood: [
          'Gets by without overthinking — uses common sense.',
          'Doesn\'t love research or deep analysis.',
          'Finds highly abstract work draining or pointless.',
        ],
        rightNow: [
          'You solve problems pragmatically — what works, not what\'s theoretically optimal.',
          'You\'re not drawn to intellectual complexity for its own sake.',
          'Analysis paralysis isn\'t your problem because you just make the call.',
        ],
      },
      {
        min: 9, max: 11,
        label: 'Average',
        shortLabel: 'Handles it fine',
        nature: [
          'Functional problem-solver — handles everyday complexity without struggle.',
          'Normal processing speed and analytical capacity.',
          'Neither exceptional nor limited in cognitive terms.',
        ],
        childhood: [
          'Average student — some subjects clicked, others didn\'t.',
          'School was manageable even if not thrilling.',
          'A mix of practical and academic learning worked.',
        ],
        adulthood: [
          'Normal analytical capacity — thinks things through when needed.',
          'Can do research when required but doesn\'t seek it out.',
          'Competent in most cognitive tasks that life demands.',
        ],
        rightNow: [
          'You figure things out when you have to.',
          'Not your primary strength or weakness — it\'s just there.',
          'You handle intellectual demands at work and life without major friction.',
        ],
      },
      {
        min: 12, max: 14,
        label: 'Above Average',
        shortLabel: 'Sharp thinker',
        nature: [
          'Picks up new concepts quickly.',
          'Enjoys learning — information is something you collect.',
          'Pattern recognition is stronger than average.',
        ],
        childhood: [
          'Good student — possibly ahead in certain subjects.',
          'Curious kid who asked a lot of questions.',
          'Loved puzzles, games, or activities that involved strategy.',
        ],
        adulthood: [
          'Pursues knowledge deliberately — reads, researches, explores.',
          'Solves problems with a combination of analysis and intuition.',
          'Enjoys intellectually stimulating work.',
        ],
        rightNow: [
          'You often research before deciding.',
          'Intellectual challenge is satisfying, not threatening.',
          'You connect dots that others miss.',
        ],
      },
      {
        min: 15, max: 17,
        label: 'Sharp',
        shortLabel: 'Thinks in systems',
        nature: [
          'Fast processor — picks things up with minimal repetition.',
          'Systems thinking comes naturally.',
          'Cognitive capacity is one of your clearest advantages.',
        ],
        childhood: [
          'Academically advanced — possibly bored in class.',
          'Loved complex games, puzzles, logic problems.',
          'May have been labeled gifted or been ahead of grade level.',
        ],
        adulthood: [
          'Work involves complex analysis, strategy, or deep domain expertise.',
          'Can hold multiple complex ideas in tension without confusion.',
          'Learning new domains feels fast — you build mental models quickly.',
        ],
        rightNow: [
          'You learn quickly and enjoy the edge of what you don\'t yet know.',
          'Thinking in systems and frameworks is natural.',
          'Intellectual work is where you\'re most alive.',
        ],
      },
      {
        min: 18, max: 18,
        label: 'Brilliant',
        shortLabel: 'Exceptional mind',
        nature: [
          'Exceptional cognitive capacity — rare and noticeable.',
          'Processing speed, memory, and pattern recognition are all outstanding.',
          'Your mind is a genuine differentiator.',
        ],
        childhood: [
          'Gifted classification or tested significantly ahead of peers.',
          'Possibly struggled socially because of the cognitive gap.',
          'Learned at a pace that made traditional school feel too slow.',
        ],
        adulthood: [
          'High-complexity career — possibly multiple domains of deep expertise.',
          'Others rely on your thinking to navigate hard problems.',
          'Boredom is a real risk — you need challenge to stay engaged.',
        ],
        rightNow: [
          'You operate at the edges of what\'s known and seek harder problems.',
          'Your thinking is a primary source of your contribution to the world.',
          'Others describe your mind as unusual in a way that\'s hard to name.',
        ],
      },
    ],
  },
  {
    key: 'wis',
    name: 'Wisdom',
    abbr: 'WIS',
    realWorldTitle: 'Self-Awareness & Emotional Intelligence',
    description: 'How well you understand yourself, read others, and act from insight rather than reaction.',
    ranges: [
      {
        min: 3, max: 5,
        label: 'Critically Low',
        shortLabel: 'Reactive and unaware',
        nature: [
          'Poor impulse control — actions often surprise you in retrospect.',
          'Difficulty accurately reading people or social situations.',
          'Emotions drive decisions in ways that create repeated problems.',
        ],
        childhood: [
          'Little modeling of emotional awareness or self-reflection at home.',
          'Possibly a chaotic or emotionally unsafe environment.',
          'Feelings weren\'t discussed or were actively discouraged.',
        ],
        adulthood: [
          'Repeats patterns without seeing them until the damage is done.',
          'Reactive rather than reflective — response comes before thought.',
          'Therapy or self-examination feels uncomfortable or pointless.',
        ],
        rightNow: [
          'Decisions often feel surprising in retrospect — "why did I do that?"',
          'Your own motivations are genuinely unclear to you.',
          'Interpersonal conflict tends to escalate before it resolves.',
        ],
      },
      {
        min: 6, max: 8,
        label: 'Below Average',
        shortLabel: 'Learning slowly',
        nature: [
          'Some self-awareness, but emotions still override judgment often.',
          'Situational awareness is inconsistent.',
          'Gut instincts about people and situations are unreliable.',
        ],
        childhood: [
          'Not much emphasis on emotional processing or reflection growing up.',
          'Feelings may have been dismissed, minimized, or never named.',
          'Learned to respond more than to reflect.',
        ],
        adulthood: [
          'Self-reflection doesn\'t come naturally — needs prompting.',
          'Learning from experience happens, but slowly.',
          'Therapy or journaling feels awkward or foreign.',
        ],
        rightNow: [
          'You sometimes recognize patterns — but usually after the fact.',
          'Emotional regulation is a work in progress.',
          'You\'re growing but the growth is effortful.',
        ],
      },
      {
        min: 9, max: 11,
        label: 'Average',
        shortLabel: 'Reasonably self-aware',
        nature: [
          'Decent situational awareness — reads rooms reasonably well.',
          'Usually catches your own patterns when things calm down.',
          'Emotional intelligence is functional, not exceptional.',
        ],
        childhood: [
          'Normal emotional development — some guidance on feelings, some gaps.',
          'Home had enough stability that reflection was sometimes possible.',
          'Mix of emotional learning and emotional neglect.',
        ],
        adulthood: [
          'Can reflect when prompted or when things go wrong.',
          'Recognizes some patterns in yourself, acts on some of them.',
          'Self-awareness is present in quieter moments.',
        ],
        rightNow: [
          'You think about your patterns but don\'t always change them.',
          'Emotionally functional — not a mess, not a sage.',
          'Insight comes, just not always fast enough.',
        ],
      },
      {
        min: 12, max: 14,
        label: 'Above Average',
        shortLabel: 'Emotionally attuned',
        nature: [
          'Emotionally attuned — often the person others come to for perspective.',
          'Good intuition about people and situations.',
          'Self-awareness shows up consistently, not just in crisis.',
        ],
        childhood: [
          'Encouraged to talk about feelings — at least some of the time.',
          'Possibly the "mature one" in your family or friend group.',
          'Had models for emotional intelligence, even if imperfect.',
        ],
        adulthood: [
          'Regular reflection — possibly therapy, journaling, meditation.',
          'Trusts gut instincts about people and they\'re usually right.',
          'Can navigate emotionally complex situations without melting.',
        ],
        rightNow: [
          'You have a strong sense of why you do things.',
          'You know what you need and can usually ask for it.',
          'Others trust your read on situations.',
        ],
      },
      {
        min: 15, max: 17,
        label: 'Wise',
        shortLabel: 'Deep insight',
        nature: [
          'Deep intuition — reads people and situations with unusual accuracy.',
          'Emotional regulation is a genuine strength.',
          'Can access clarity even under pressure.',
        ],
        childhood: [
          'Possibly parentified — learned to read the room early for survival or care.',
          'Developed emotional intelligence through necessity or attentive parenting.',
          'Feelings were discussed, examined, and taken seriously.',
        ],
        adulthood: [
          'Values inner work — possibly significant therapy, spiritual practice, or study.',
          'Others seek you out for guidance and clarity.',
          'You notice the dynamic in a room before most people do.',
        ],
        rightNow: [
          'You see your triggers, patterns, and growth edges with unusual clarity.',
          'Your emotional intelligence is something people around you rely on.',
          'You live with a level of intentionality most people aspire to.',
        ],
      },
      {
        min: 18, max: 18,
        label: 'Sage',
        shortLabel: 'Extraordinary awareness',
        nature: [
          'Extraordinary self and situational awareness — it\'s a genuine gift.',
          'Can be fully present with others and with yourself simultaneously.',
          'Perception of what\'s really happening is almost always accurate.',
        ],
        childhood: [
          'Deep reflection from an early age — possibly driven by complexity or hardship.',
          'Had to understand dynamics around you just to navigate them.',
          'Emotional intelligence was survival, then became mastery.',
        ],
        adulthood: [
          'Inner work is central to how you live — not optional.',
          'Possibly a therapist, coach, mentor, or spiritual guide to others.',
          'Your presence is itself calming and clarifying.',
        ],
        rightNow: [
          'You operate with high intentionality — your inner life guides your outer decisions.',
          'People notice something different about how you see and respond.',
          'Wisdom is your most consistent offering to the world.',
        ],
      },
    ],
  },
  {
    key: 'dex',
    name: 'Dexterity',
    abbr: 'DEX',
    realWorldTitle: 'Adaptability & Response to Change',
    description: 'How easily you pivot, tolerate uncertainty, and move through unexpected situations.',
    ranges: [
      {
        min: 3, max: 5,
        label: 'Rigid',
        shortLabel: 'Change is threatening',
        nature: [
          'Deeply uncomfortable with change — possibly anxiety or neurodivergence at play.',
          'Unpredictability feels genuinely unsafe, not just inconvenient.',
          'Routines aren\'t preferences; they\'re requirements.',
        ],
        childhood: [
          'Needed high routine and predictability to feel safe.',
          'Transitions — school changes, moves, schedule shifts — were very distressing.',
          'Unexpected events were consistently overwhelming.',
        ],
        adulthood: [
          'Prefers stable, predictable environments wherever possible.',
          'Plans aren\'t just helpful — they\'re load-bearing.',
          'Change requires a lot of time to process before action.',
        ],
        rightNow: [
          'Unexpected changes throw you significantly.',
          'Adjusting to new circumstances takes a long time.',
          'You do your best work when the environment is controlled.',
        ],
      },
      {
        min: 6, max: 8,
        label: 'Slow to Adapt',
        shortLabel: 'Prefers the familiar',
        nature: [
          'Strongly prefers the familiar — warming up to new things takes real time.',
          'Change is manageable but reliably stressful.',
          'Comfort zones are large and meaningful.',
        ],
        childhood: [
          'Cautious kid — needed time to warm up to new people, places, activities.',
          'Transitions required patience and support.',
          'Preferred returning to known things over exploring unknown ones.',
        ],
        adulthood: [
          'Functions well in routine; deviation creates friction.',
          'Eventually adapts, but the process is noticeable.',
          'Spontaneity is not your strong suit.',
        ],
        rightNow: [
          'You adjust eventually — your first instinct is just resistance.',
          'New situations require a deliberate warm-up period.',
          'You do better with change when you can see it coming.',
        ],
      },
      {
        min: 9, max: 11,
        label: 'Average',
        shortLabel: 'Adapts when needed',
        nature: [
          'Handles most changes without major difficulty.',
          'Neither seeks nor avoids change — deals with it as it comes.',
          'Flexibility is available but not your default mode.',
        ],
        childhood: [
          'Normal adjustment patterns — some transitions hard, others fine.',
          'Mix of stable and shifting circumstances.',
          'Coped reasonably well with life\'s standard disruptions.',
        ],
        adulthood: [
          'Adapts when you have to — some changes feel fine, others feel hard.',
          'Not especially resistant or especially agile.',
          'You get there; it just takes the normal amount of time.',
        ],
        rightNow: [
          'You\'re not the first to embrace change but you get there.',
          'Unexpected events are inconvenient, not destabilizing.',
          'Flexibility is available on demand, just not your natural mode.',
        ],
      },
      {
        min: 12, max: 14,
        label: 'Flexible',
        shortLabel: 'Rolls with it',
        nature: [
          'Handles changes reasonably well — tolerates ambiguity without much friction.',
          'Comfort zone is wider than average.',
          'New situations activate curiosity more than anxiety.',
        ],
        childhood: [
          'May have moved, changed schools, or experienced transitions that built adaptability.',
          'Life wasn\'t perfectly stable, and you got good at adjusting.',
          'Had enough safety to explore outside the familiar.',
        ],
        adulthood: [
          'Comfortable in varied environments and roles.',
          'Pivoting when plans change feels manageable.',
          'Thrives in roles that require flexibility.',
        ],
        rightNow: [
          'You adapt your approach when things shift.',
          'Unexpected change is annoying but not destabilizing.',
          'You find new situations interesting more often than threatening.',
        ],
      },
      {
        min: 15, max: 17,
        label: 'Agile',
        shortLabel: 'Thrives in flux',
        nature: [
          'Genuinely thrives in change — stability can actually feel boring.',
          'High tolerance for ambiguity and the unknown.',
          'Adapts so naturally it sometimes surprises people.',
        ],
        childhood: [
          'Frequent moves, travel, or varied experiences built strong adaptation muscles.',
          'Learned early that change was survivable — maybe even exciting.',
          'Routine wasn\'t your home; movement was.',
        ],
        adulthood: [
          'Seeks new environments, roles, and challenges.',
          'Bores of routine — needs variety to stay engaged.',
          'Pivots quickly and often without much friction.',
        ],
        rightNow: [
          'You pivot quickly and often.',
          'Uncertainty feels like possibility more than threat.',
          'You\'re usually the one who figures it out when everything shifts.',
        ],
      },
      {
        min: 18, max: 18,
        label: 'Quicksilver',
        shortLabel: 'Nothing sticks you',
        nature: [
          'Exceptional adaptability — almost no situation is too destabilizing.',
          'Change is your natural habitat.',
          'You recalibrate faster than most people can register what happened.',
        ],
        childhood: [
          'Survived or thrived in highly unpredictable or dynamic early life.',
          'Constant change wasn\'t just normal — it was formative.',
          'Built an extraordinary internal stability through external instability.',
        ],
        adulthood: [
          'Probably reinvented yourself more than once — career, location, identity.',
          'Change is your comfort zone, not your challenge.',
          'Others come to you when situations are in flux.',
        ],
        rightNow: [
          'You\'re the one who figures it out first when everything shifts.',
          'Ambiguity is not just tolerable — it\'s where you do your best work.',
          'You hold multiple possible futures simultaneously without anxiety.',
        ],
      },
    ],
  },
  {
    key: 'con',
    name: 'Constitution',
    abbr: 'CON',
    realWorldTitle: 'Mental & Emotional Fortitude',
    description: 'Your capacity to absorb stress, persist through difficulty, and recover from setbacks.',
    ranges: [
      {
        min: 3, max: 5,
        label: 'Fragile',
        shortLabel: 'Easily overwhelmed',
        nature: [
          'Very low stress tolerance — your system gets overwhelmed quickly.',
          'Recovery from difficulty takes a long time.',
          'The tank empties fast and refills slowly.',
        ],
        childhood: [
          'Possibly experienced trauma, chronic stress, or lack of emotional safety.',
          'The world felt dangerous or unpredictable in formative ways.',
          'Didn\'t always have the support needed to develop resilience.',
        ],
        adulthood: [
          'Burnout is a recurring experience — push hard, then crash.',
          'Hard periods leave lasting marks.',
          'Recovery is an active project, not a passive process.',
        ],
        rightNow: [
          'You\'re often running on empty.',
          'Recovery from stress takes longer than you\'d like.',
          'Protecting your energy is a constant negotiation.',
        ],
      },
      {
        min: 6, max: 8,
        label: 'Low Endurance',
        shortLabel: 'Stress hits hard',
        nature: [
          'Stress hits hard and recovery is slower than average.',
          'Emotional and mental reserves deplete faster than most.',
          'Needs more downtime than others to function well.',
        ],
        childhood: [
          'Some instability or inconsistency in support growing up.',
          'Didn\'t always have reliable people to help refill the tank.',
          'Learned to push through, but not without cost.',
        ],
        adulthood: [
          'Manages, but is sensitive to overload.',
          'Overscheduling is genuinely dangerous.',
          'Performance under pressure is possible but expensive.',
        ],
        rightNow: [
          'You function, but you\'re easily depleted.',
          'You\'re more sensitive to stress than you wish you were.',
          'Rest isn\'t a luxury — it\'s load-bearing.',
        ],
      },
      {
        min: 9, max: 11,
        label: 'Average',
        shortLabel: 'Handles most things',
        nature: [
          'Normal stress capacity — handles pressure without major fallout.',
          'Bounce-back time is standard — not fast, not slow.',
          'Neither especially tough nor especially fragile.',
        ],
        childhood: [
          'Reasonably stable foundation — some hard times, generally supported.',
          'Developed normal resilience without exceptional adversity or exceptional support.',
          'Life had enough friction to toughen you up, not enough to break you.',
        ],
        adulthood: [
          'Gets through stressful periods — not unscathed, but functional.',
          'Hard things are hard, but they pass.',
          'Recovery is normal and relatively predictable.',
        ],
        rightNow: [
          'You manage most of what life throws at you without major breakdown.',
          'Stress is part of life and you handle it about as well as most people.',
          'Not invincible, but not fragile either.',
        ],
      },
      {
        min: 12, max: 14,
        label: 'Resilient',
        shortLabel: 'Bounces back well',
        nature: [
          'Good stress tolerance — bounces back without extended recovery.',
          'Setbacks don\'t derail you for long.',
          'Has a deep-ish reserve to draw from.',
        ],
        childhood: [
          'Faced real challenges and came through them.',
          'Learned through experience that you could handle hard things.',
          'Had enough support that adversity built you rather than broke you.',
        ],
        adulthood: [
          'Performs under pressure without major degradation.',
          'Setbacks are setbacks, not catastrophes.',
          'Others notice your steadiness in difficult moments.',
        ],
        rightNow: [
          'You stay functional in hard times.',
          'Stress doesn\'t derail you for long.',
          'People come to you when things get hard because you don\'t fold easily.',
        ],
      },
      {
        min: 15, max: 17,
        label: 'Tough',
        shortLabel: 'Weathered real storms',
        nature: [
          'High endurance — can sustain effort through extended difficulty.',
          'Stress tolerance is well above average.',
          'Hardship has been processed, not just survived.',
        ],
        childhood: [
          'Significant hardship that you survived and internalized as strength.',
          'Had to develop resilience early — it wasn\'t optional.',
          'The difficult early experiences became the foundation of real toughness.',
        ],
        adulthood: [
          'Has weathered serious challenges — loss, illness, failure, betrayal — and kept going.',
          'Track record of coming out the other side of hard things.',
          'Others lean on you in a crisis because your stability is real.',
        ],
        rightNow: [
          'You\'re the person others lean on when things get hard.',
          'Your capacity for difficulty is something others can feel.',
          'You don\'t just cope — you continue.',
        ],
      },
      {
        min: 18, max: 18,
        label: 'Unbreakable',
        shortLabel: 'Has survived what breaks most',
        nature: [
          'Extraordinary fortitude — sustained what would break most people.',
          'The reservoir is deep and refills even after severe depletion.',
          'Resilience is not just a trait — it\'s a history.',
        ],
        childhood: [
          'Significant adversity overcome — resilience forged under serious pressure.',
          'Circumstances that would devastate most people became your foundation.',
          'The early experience of surviving the unsurvivable is central to who you are.',
        ],
        adulthood: [
          'Track record of navigating extreme difficulty and continuing.',
          'Others marvel at what you\'ve been through and are still here for.',
          'Toughness is so built-in it feels invisible to you.',
        ],
        rightNow: [
          'You persist where others stop.',
          'Your capacity to endure is something others find exceptional.',
          'Hard things don\'t break you — they clarify you.',
        ],
      },
    ],
  },
  {
    key: 'cha',
    name: 'Charisma',
    abbr: 'CHA',
    realWorldTitle: 'Communication, Boundaries & Self-Advocacy',
    description: 'How effectively you express yourself, advocate for your needs, and shape how others experience you.',
    ranges: [
      {
        min: 3, max: 5,
        label: 'Withdrawn',
        shortLabel: 'Goes unheard',
        nature: [
          'Very low social confidence — communication feels unsafe or pointless.',
          'Your presence in a room often goes unregistered.',
          'Expressing needs feels dangerous or impossible.',
        ],
        childhood: [
          'Possibly socially isolated, bullied, or had your voice punished.',
          'Communication may have led to negative outcomes — learned to stay quiet.',
          'Social environments were threatening, not inviting.',
        ],
        adulthood: [
          'Avoids conflict, speaking up, or visibility whenever possible.',
          'Boundaries are nearly absent — others\' needs consistently override yours.',
          'Asking for what you need feels almost impossible.',
        ],
        rightNow: [
          'You go unheard more than you should.',
          'Your needs often don\'t get met because you can\'t voice them.',
          'Invisibility feels safe even when it costs you.',
        ],
      },
      {
        min: 6, max: 8,
        label: 'Reserved',
        shortLabel: 'Understates needs',
        nature: [
          'Social energy is limited — you recharge in quiet.',
          'Prefer smaller audiences and lower-stakes communication.',
          'Self-advocacy is possible but uncomfortable.',
        ],
        childhood: [
          'Quiet kid — not the one who raised their hand.',
          'May have been overlooked in group settings.',
          'Social awkwardness or shyness was present.',
        ],
        adulthood: [
          'Can communicate when needed, but it\'s draining.',
          'Tends to defer rather than advocate.',
          'Conflict avoidance costs you more than you\'d like.',
        ],
        rightNow: [
          'You understate your needs.',
          'Conflict avoidance is a recurring tax.',
          'Your voice is there — you just don\'t always use it when it matters.',
        ],
      },
      {
        min: 9, max: 11,
        label: 'Average',
        shortLabel: 'Functional presence',
        nature: [
          'Functional social presence — neither commanding nor invisible.',
          'Communication is adequate for most situations.',
          'Advocacy is possible when stakes are clear.',
        ],
        childhood: [
          'Normal social development — some confident moments, some awkward ones.',
          'Had some social successes and some failures.',
          'Developed enough communication ability to get by.',
        ],
        adulthood: [
          'Can communicate clearly when needed.',
          'Not especially dynamic, not especially invisible.',
          'Manages most social situations without major friction.',
        ],
        rightNow: [
          'You speak up when it matters enough.',
          'Not the spotlight person, but not the wallflower either.',
          'Your communication is functional without being exceptional.',
        ],
      },
      {
        min: 12, max: 14,
        label: 'Persuasive',
        shortLabel: 'People listen',
        nature: [
          'Naturally warm or engaging — people tend to listen when you speak.',
          'Comfortable in social situations; not energized by them, but competent.',
          'Self-advocacy is accessible.',
        ],
        childhood: [
          'Good communicator early — possibly in leadership roles or socially central.',
          'Social connections came relatively easily.',
          'Expressing yourself felt relatively natural.',
        ],
        adulthood: [
          'Advocates for yourself reasonably well.',
          'Can influence situations and people without manipulating.',
          'Handles difficult conversations better than most.',
        ],
        rightNow: [
          'You express your needs clearly.',
          'Others respond to your presence in positive ways.',
          'You can set a boundary when you have to.',
        ],
      },
      {
        min: 15, max: 17,
        label: 'Compelling',
        shortLabel: 'Naturally commanding',
        nature: [
          'Strong social presence — rooms shift when you engage.',
          'Communication is a genuine strength.',
          'Others follow your lead more often than you probably notice.',
        ],
        childhood: [
          'Natural leader or social connector from an early age.',
          'Others followed your lead — in play, in groups, in conversation.',
          'Your voice carried weight before you knew it.',
        ],
        adulthood: [
          'Handles difficult conversations well.',
          'Negotiates, advocates, and influences with skill.',
          'Boundaries are clear and respected.',
        ],
        rightNow: [
          'You command attention without forcing it.',
          'Your presence shapes the energy of the spaces you enter.',
          'People remember conversations with you.',
        ],
      },
      {
        min: 18, max: 18,
        label: 'Magnetic',
        shortLabel: 'Presence is its own force',
        nature: [
          'Exceptional charisma — people are drawn to you almost involuntarily.',
          'Your presence is immediately felt in any room.',
          'Communication is a superpower that operates even when you\'re not trying.',
        ],
        childhood: [
          'Socially gifted from very early — possibly performed, led, or charmed effortlessly.',
          'Adults and peers alike were drawn to you.',
          'Your social ability was noticed and remarked on.',
        ],
        adulthood: [
          'Career may involve speaking, persuasion, performance, or leadership.',
          'Communication is a primary tool of your work in the world.',
          'Others seek to understand how you do what you do.',
        ],
        rightNow: [
          'You command attention without trying.',
          'Your presence shapes environments.',
          'The way you make people feel is something they carry with them.',
        ],
      },
    ],
  },
]

export function getScoreRange(attribute: Attribute, score: number): ScoreRange {
  return attribute.ranges.find(r => score >= r.min && score <= r.max) ?? attribute.ranges[2]
}

export function getModifier(score: number): number {
  return Math.floor((score - 10) / 2)
}

export function formatModifier(score: number): string {
  const mod = getModifier(score)
  return mod >= 0 ? `+${mod}` : `${mod}`
}
