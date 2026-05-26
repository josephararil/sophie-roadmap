/*
 * =====================================================================
 * SOPHIE'S DAILY ACTIONS — CONTENT FILE
 * =====================================================================
 *
 * PURPOSE
 * -------
 * This file exports window.ACTIONS_DATA — a library of bite-sized,
 * immediately-usable activities for a parent to do WITH a young child,
 * surfaced one-at-a-time by the Action tab of the app.
 *
 * The Action tab is the DAILY-USE companion to the Roadmap tab. The
 * Roadmap tab is a long-term reference, opened a few times per year.
 * The Action tab is opened daily — before school drop-off, during a
 * walk, before bedtime — to get ONE concrete suggestion to try right
 * now: a song to sing, a question to ask, a game to play, a book to
 * read, a phonics drill, a pretend-play scenario.
 *
 * Like data.js, this file is intentionally SELF-CONTAINED. An LLM or
 * developer can expand, refactor, or regenerate this catalogue without
 * reading any other file in the project. All rendering logic lives in
 * components.jsx; this file is pure data.
 *
 * =====================================================================
 * SOPHIE'S CONTEXT  (read this before generating new content)
 * =====================================================================
 *
 * Name:        Sophie
 * Age:         3.5 years old (born late 2022)
 * Languages:   English (dominant) + Bulgarian (bilingual)
 * Accent:      Natural RP (Received Pronunciation) — from English TV
 *              (Peppa Pig, Bluey, Hey Duggee). Preserve this.
 * Schooling:   Bulgarian kindergarten and Bulgarian school ONLY.
 *              School will NEVER teach English reading, writing, or
 *              grammar. Every English literacy gain happens at home.
 * Parents:     Highly motivated. Will spend an hour or more per day
 *              on English development. Will hire English tutors later.
 * Key risk:    Bulgarian school + peer immersion will gradually push
 *              Bulgarian toward dominance. Without deliberate daily
 *              effort, English fluency and literacy will atrophy.
 * Key goal:    Sophie reaches full English literacy at the same rate
 *              as a child raised in an English-speaking country —
 *              despite school providing zero English instruction.
 *
 * =====================================================================
 * CONTENT MISSION
 * =====================================================================
 *
 * EVERY item in this catalogue must serve at least one of:
 *   (a) Expanding English vocabulary
 *   (b) Building phonological / phonemic awareness (rhymes, sounds,
 *       syllables, alliteration)
 *   (c) Teaching letter names, letter sounds, sight words, or early
 *       decoding
 *   (d) Building early writing / fine-motor foundations
 *   (e) Strengthening English as the home-language anchor against
 *       Bulgarian dominance from school
 *   (f) Deepening English-language curiosity, comprehension, or
 *       expressive ability (storytelling, question-asking, describing)
 *
 * Items that don't clearly advance one of (a)–(f) do not belong here.
 * Generic toddler activities ("paint with potatoes") are out. Anything
 * tagged for outdoor / nature / bedtime / pretend-play must still
 * deliver English language gain — that's the whole point of this app.
 *
 * Bulgarian school handles Bulgarian. This catalogue is English's job.
 *
 * =====================================================================
 * SCHEMA
 * =====================================================================
 *
 * window.ACTIONS_DATA = {
 *
 *   categories: Array<Category>
 *     Display metadata for each category. The Action tab uses this
 *     to render badges, colours, and section headings. Add a new
 *     category here BEFORE using its id in any item.
 *
 *   items: Array<ActionItem>
 *     The catalogue. Order does not matter — selection logic chooses
 *     items by age, category, skill-gap, and date seed.
 *
 * }
 *
 * Category {
 *   id:    string   — kebab-case, referenced by ActionItem.category
 *   label: string   — display name shown on the card badge
 *   icon:  string   — single emoji used as the badge icon
 *   blurb: string   — one-sentence description (used in browse view)
 * }
 *
 * ActionItem {
 *
 *   id: string                                 — REQUIRED
 *     Stable kebab-case identifier, globally unique within this file.
 *     Format: '{category-short}-{slug}'. Once an item ships, do NOT
 *     change its id (it is used as a localStorage key for "tried it"
 *     and rating state).
 *
 *   category: string                           — REQUIRED
 *     Must match one of categories[].id.
 *
 *   ages: Array<number>                        — REQUIRED
 *     Whole-year ages this item is appropriate for. e.g. [3, 4].
 *     v1 catalogue targets age 3 — most items should include 3.
 *
 *   title: string                              — REQUIRED
 *     3–6 words. Action-phrase style. Appears as the card heading.
 *     Examples: "Talk About Opposites", "Sing Twinkle Twinkle",
 *               "Letter S Hunt".
 *
 *   hook: string                               — REQUIRED
 *     ONE sentence describing the immediate, concrete thing the
 *     parent should do right now. This is what shows on the card
 *     before the parent expands it.
 *     Examples:
 *       "On your walk, ask her: 'What is the opposite of tall?'"
 *       "Sing Twinkle Twinkle and pause before each rhyming word."
 *
 *   body: string                               — REQUIRED
 *     The full guidance. Multi-paragraph allowed. This is where the
 *     parent learns WHY this activity matters and HOW to run it well.
 *     Include: what to say, what to listen for, what to do if she
 *     gets it right, what to do if she doesn't. Markdown not parsed
 *     — use plain text with \\n\\n for paragraph breaks.
 *
 *   examples: Array<string> | null             — OPTIONAL
 *     Concrete content the parent can use immediately — opposite
 *     pairs, rhyming word sets, conversation prompts, vocabulary
 *     lists. Aim for 10–25 entries when used. null if not applicable.
 *
 *   lyrics: string | null                      — OPTIONAL
 *     Full lyrics for songs and rhymes, with \\n line breaks. null
 *     for non-song/rhyme items.
 *
 *   duration: string                           — REQUIRED
 *     Rough time commitment shown on the card. Format: "5–10 min",
 *     "2 min", "Bedtime routine".
 *
 *   where: Array<string>                       — REQUIRED
 *     Contextual tags. The Action tab can later use these to filter
 *     by situation ("show me something I can do on a walk").
 *     Allowed values: 'walking', 'car', 'mealtime', 'bathtime',
 *                     'bedtime', 'outdoor', 'kitchen', 'home',
 *                     'kindergarten-drop-off', 'anywhere'.
 *
 *   skillTags: Array<string>                   — REQUIRED
 *     Categorical skills this item advances. Used by the selection
 *     algorithm to surface items targeting under-developed skills.
 *     Use kebab-case. Recommended vocabulary (extend as needed):
 *       'vocabulary', 'antonyms', 'synonyms', 'description',
 *       'rhyming', 'alliteration', 'syllables', 'phonemic-awareness',
 *       'letter-names', 'letter-sounds', 'phonics-s', 'phonics-a',
 *       'phonics-t', 'phonics-p', 'phonics-i', 'phonics-n',
 *       'sight-words', 'pre-writing', 'fine-motor',
 *       'comprehension', 'storytelling', 'question-asking',
 *       'english-conversation', 'english-maintenance',
 *       'emotional-vocabulary', 'turn-taking'
 *
 *   milestoneRefs: Array<string> | null        — OPTIONAL
 *     Substrings of milestone or red-flag text from data.js that this
 *     item helps achieve. The selection algorithm uses string-contains
 *     matching against the user's checked-state to (a) boost items
 *     targeting UNCHECKED milestones, (b) deprioritise items targeting
 *     ALREADY-CHECKED ones. Best-effort — exact resolution not needed.
 *     Example: ['Knows all 26 letter names', 'Recognises every letter
 *               in her own name'].
 *     null if no clear roadmap linkage.
 *
 *   literacyWeight: 0 | 1 | 2 | 3              — REQUIRED
 *     How directly this item advances English LITERACY (reading,
 *     writing, phonics, decoding — not spoken English).
 *       0 = no literacy content (e.g. pure motor play)
 *       1 = supports literacy indirectly (vocab, conversation)
 *       2 = builds a literacy precursor (rhyming, syllables, letter
 *           names, print awareness)
 *       3 = direct literacy work (letter sounds, sight words,
 *           decoding, writing)
 *     The Action tab biases the daily card toward higher weights
 *     because literacy is the highest-stakes gap.
 *
 *   followUp: string | null                    — OPTIONAL
 *     One paragraph: "If she finds this easy, try X. If she struggles,
 *     try Y." Lets a single item adapt to the moment.
 *
 *   relatedIds: Array<string> | null           — OPTIONAL
 *     Other item ids the parent can jump to next. Used by the "Try
 *     something related" button on the expanded card.
 *
 *   // CATEGORY-SPECIFIC OPTIONAL FIELDS
 *   //
 *   // Items in certain categories may include extra fields. These
 *   // are not required but are rendered specially when present.
 *
 *   author: string | null                      — books only
 *     Book author. Used on book-recommendation cards.
 *
 *   whyThisBook: string | null                 — books only
 *     1–2 sentences on what this book specifically teaches Sophie
 *     in English. Required if category === 'book'.
 *
 *   discussionPrompts: Array<string> | null    — books only
 *     3–6 questions to ask while reading or after finishing.
 *
 *   dialogue: Array<{ adult: string, child: string }> | null
 *                                              — pretend-play only
 *     Example back-and-forth lines. Helps the parent improvise.
 *
 * }
 *
 * =====================================================================
 * CONSTRAINTS FOR CONTENT GENERATION
 * =====================================================================
 *  1. Do NOT add, remove, or rename top-level fields on items.
 *  2. id values must be globally unique and stable forever.
 *  3. Every item must serve the CONTENT MISSION above.
 *  4. v1 scope is age 3. Most items must have ages.includes(3).
 *  5. Balance the catalogue across categories — don't dump 80 songs
 *     and zero literacy drills. Aim for roughly:
 *         conversation     — 20%
 *         literacy         — 20%   (highest mission weight)
 *         song + rhyme     — 15%
 *         book             — 15%
 *         game             — 10%
 *         pretend-play     — 10%
 *         outdoor          — 5%
 *         bedtime          — 5%
 *  6. Use British English spellings (colour, recognise, favourite)
 *     to align with Sophie's RP accent and the existing data.js.
 *  7. Songs and rhymes MUST include full lyrics in the `lyrics` field.
 *  8. Books MUST be real, age-appropriate, English-language titles
 *     with the actual author named.
 *  9. literacyWeight must be honest. Don't inflate a pretend-play
 *     scenario to weight 3 just to surface it more.
 * =====================================================================
 */

window.ACTIONS_DATA = {

  // ───────────────────────────────────────────────────────────────────
  // CATEGORIES
  // Display metadata for each category. Add new categories here BEFORE
  // using their id in items.
  // ───────────────────────────────────────────────────────────────────
  categories: [
    {
      id: 'conversation',
      label: 'Conversation',
      icon: '🗣️',
      blurb: 'Questions and topics to discuss — on walks, in the car, at the table.'
    },
    {
      id: 'song',
      label: 'Song',
      icon: '🎵',
      blurb: 'English songs with full lyrics so you can sing without searching.'
    },
    {
      id: 'rhyme',
      label: 'Rhyme',
      icon: '🎭',
      blurb: 'Classic English nursery rhymes — phonological awareness in disguise.'
    },
    {
      id: 'game',
      label: 'Game',
      icon: '🎲',
      blurb: 'Quick games playable anywhere — no equipment needed.'
    },
    {
      id: 'book',
      label: 'Book',
      icon: '📖',
      blurb: 'Specific English picture books with discussion prompts.'
    },
    {
      id: 'literacy',
      label: 'Literacy',
      icon: '🔤',
      blurb: 'Direct English-literacy work — letters, sounds, sight words, writing.'
    },
    {
      id: 'pretend-play',
      label: 'Pretend Play',
      icon: '🎭',
      blurb: 'Role-play scenarios with English vocabulary to introduce.'
    },
    {
      id: 'outdoor',
      label: 'Outdoor',
      icon: '🌳',
      blurb: 'Things to notice and discuss outside — in English.'
    },
    {
      id: 'bedtime',
      label: 'Bedtime',
      icon: '🌙',
      blurb: 'Calming end-of-day routines that still build English.'
    }
  ],

  // ───────────────────────────────────────────────────────────────────
  // ITEMS — v1 ARCHETYPES (10 seed items, one per major use-case)
  //
  // These 10 items set the QUALITY BAR for the catalogue. The bulk
  // content expansion should match this depth, voice, and mission
  // focus. Each archetype demonstrates a slightly different aspect of
  // the schema — examples[], lyrics, book-specific fields, dialogue,
  // followUp, etc. Read them all before adding new items.
  // ───────────────────────────────────────────────────────────────────
  items: [

    // ─── ARCHETYPE 1: conversation ─────────────────────────────────
    // Demonstrates: examples[] list of pairs, followUp progression,
    // multiple skillTags, milestoneRefs string-matching.
    {
      id: 'conv-opposites-basic',
      category: 'conversation',
      ages: [3, 4],
      title: 'Talk About Opposites',
      hook: 'On your walk, ask: "What\'s the opposite of tall?" Celebrate every answer.',
      body: 'Opposites are one of the highest-value early-vocabulary games because they force Sophie to think about a word\'s meaning, not just recognise the word itself. Done casually on walks or in the car, this builds her English mental dictionary fast.\n\nStart with concrete physical opposites (tall/short, big/small) before moving to feelings (happy/sad) or actions (running/standing still). Pose it as a game: "I\'ll say a word, you say the opposite!" When she gets one right, react with genuine delight — "Yes! Short! You\'re so right!" — and immediately give her another.\n\nIf she stalls, model it: "Tall is like a giraffe. The opposite is short — like a mouse. Say it with me: short." Then come back to that same pair tomorrow.\n\nKeep it 5 minutes max. The goal is many short repetitions across many days, not one long session.',
      examples: [
        'tall ↔ short',
        'big ↔ small',
        'hot ↔ cold',
        'fast ↔ slow',
        'happy ↔ sad',
        'up ↔ down',
        'wet ↔ dry',
        'soft ↔ hard',
        'loud ↔ quiet',
        'open ↔ closed',
        'full ↔ empty',
        'light ↔ heavy',
        'old ↔ new',
        'clean ↔ dirty',
        'awake ↔ asleep',
        'in ↔ out',
        'on ↔ off',
        'day ↔ night',
        'sweet ↔ sour',
        'thick ↔ thin'
      ],
      duration: '5–10 min',
      where: ['walking', 'car', 'mealtime', 'kindergarten-drop-off', 'anywhere'],
      skillTags: ['vocabulary', 'antonyms', 'english-conversation', 'english-maintenance'],
      milestoneRefs: [
        'English sentences of 4–5 words',
        'English vocabulary growth'
      ],
      literacyWeight: 1,
      followUp: 'When she nails physical pairs, level up to abstract pairs (easy/hard, kind/mean, brave/scared) and then to actions ("What\'s the opposite of running?" — standing still, walking, stopping). Eventually try "What\'s the opposite of yesterday?" — she\'ll surprise you.',
      relatedIds: ['conv-describe-things', 'game-i-spy-sounds']
    },

    // ─── ARCHETYPE 2: song ─────────────────────────────────────────
    // Demonstrates: full lyrics field, multi-paragraph body, rhyming
    // pedagogy embedded in a song the parent already half-knows.
    {
      id: 'song-twinkle-twinkle',
      category: 'song',
      ages: [2, 3, 4],
      title: 'Sing Twinkle Twinkle (With a Twist)',
      hook: 'Sing the song through once, then sing it again pausing before the rhyming word so she fills it in.',
      body: 'Every parent knows Twinkle Twinkle. What turns it from a lullaby into a literacy tool is the "cloze" technique: you sing the line and pause right before the rhyming word, letting her supply it.\n\n"Twinkle twinkle little ___ " (she sings: "star!")\n"How I wonder what you ___ " (she sings: "are!")\n\nThis tiny pause does big work: it forces her to predict the rhyme, which is exactly the phonological-awareness skill that predicts reading at age six. Do this with every song she half-knows.\n\nFirst time through, sing the whole thing normally. Second time, start the pause trick. She\'ll catch on within one verse. After a few weeks, she\'ll do it spontaneously.\n\nBonus: at bedtime, swap the words. "Twinkle twinkle little CAR / how I wonder where you ARE." Silly substitutions teach her that the rhyme scheme is the underlying pattern — words are interchangeable, rhymes are not. This is real phonological work disguised as a giggle.',
      examples: null,
      lyrics: 'Twinkle, twinkle, little star,\nHow I wonder what you are.\nUp above the world so high,\nLike a diamond in the sky.\nTwinkle, twinkle, little star,\nHow I wonder what you are.\n\nWhen the blazing sun is gone,\nWhen he nothing shines upon,\nThen you show your little light,\nTwinkle, twinkle, all the night.\nTwinkle, twinkle, little star,\nHow I wonder what you are.',
      duration: '3 min',
      where: ['bedtime', 'bathtime', 'car', 'anywhere'],
      skillTags: ['rhyming', 'phonemic-awareness', 'english-maintenance', 'vocabulary'],
      milestoneRefs: [
        'Correctly rhymes 3–4 words',
        'cannot produce a single rhyme'
      ],
      literacyWeight: 2,
      followUp: 'Once she fills in rhymes confidently, try the "wrong rhyme" game — sing "Twinkle twinkle little CAR" and look at her expectantly. The first time she protests "No! STAR!" is the moment she has explicit awareness that rhymes are a thing. That awareness is gold.',
      relatedIds: ['rhyme-hickory-dickory-dock', 'game-rhyming-pairs']
    },

    // ─── ARCHETYPE 3: rhyme ────────────────────────────────────────
    // Demonstrates: lyrics + actions, alliteration callouts, motion
    // for kinaesthetic memory.
    {
      id: 'rhyme-hickory-dickory-dock',
      category: 'rhyme',
      ages: [2, 3, 4],
      title: 'Hickory Dickory Dock',
      hook: 'Recite the rhyme with finger-walking-up-her-arm actions. Pause on the rhyming words.',
      body: 'Hickory Dickory Dock is a masterclass in English phonological play: it has alliteration ("Hickory Dickory"), a strong rhyme scheme (dock / clock / down), and onomatopoeia ("tick-tock"). Three pre-reading skills in one tiny rhyme.\n\nRecite it with actions: walk your fingers up her arm for "the mouse ran up the clock", clap loudly for "the clock struck one", then run your fingers back down for "the mouse ran down". Physical action locks the words into memory.\n\nAfter she knows it cold (usually within a week of daily reciting), start the cloze pauses: "Hickory Dickory ___" (she says: "Dock"). "The mouse ran up the ___" (she says: "clock"). Praise enthusiastically.\n\nFinally, ask her: "What other words rhyme with dock and clock?" (sock, rock, lock, block, knock). She probably won\'t produce them unprompted at 3, but offering them — "I think \'sock\' rhymes too!" — primes her ear for rhyme families, the building block of decoding word families later.',
      examples: [
        'Rhymes with dock/clock: sock, rock, lock, block, knock, shock',
        'Other classic alliteration rhymes to add next: Peter Piper, Betty Botter, She Sells Seashells'
      ],
      lyrics: 'Hickory dickory dock,\nThe mouse ran up the clock.\nThe clock struck one,\nThe mouse ran down,\nHickory dickory dock.\n\nHickory dickory dock,\nThe mouse ran up the clock.\nThe clock struck two,\nThe mouse said "Boo!"\nHickory dickory dock.',
      duration: '2 min',
      where: ['bedtime', 'car', 'bathtime', 'anywhere'],
      skillTags: ['rhyming', 'alliteration', 'phonemic-awareness', 'syllables'],
      milestoneRefs: [
        'Correctly rhymes 3–4 words',
        'cannot produce a single rhyme'
      ],
      literacyWeight: 2,
      followUp: 'When she\'s mastered Hickory Dickory, add Humpty Dumpty (wall/fall, men/again) and Baa Baa Black Sheep (wool/full, lane/Jane). Aim for a personal repertoire of 10 nursery rhymes she can recite by 42 months — a strong predictor of reading at six.',
      relatedIds: ['song-twinkle-twinkle', 'game-rhyming-pairs']
    },

    // ─── ARCHETYPE 4: game ─────────────────────────────────────────
    // Demonstrates: phonemic-awareness focus, no equipment, scales
    // from listening to producing.
    {
      id: 'game-i-spy-sounds',
      category: 'game',
      ages: [3, 4, 5],
      title: 'Sound-Sleuth I Spy',
      hook: 'Play I Spy using SOUNDS, not letter names: "I spy something beginning with /b/..."',
      body: 'Classic I Spy uses letter names ("something beginning with B"). Sound-Sleuth I Spy uses phonemes — the actual SOUND the letter makes. This is the single most useful phonics game you can play before formal reading starts.\n\nSay the sound, not the letter name. So for "ball": say "/b/" (a short, sharp puff of sound) — not "bee". Demonstrate it: "I spy with my little eye, something beginning with /b/... it\'s round and you can kick it!" When she gets it, react big: "Yes! BALL! Ball starts with /b/!"\n\nStart with the six "Jolly Phonics" starter sounds — these unlock the most early words: /s/, /a/, /t/, /p/, /i/, /n/. Use them on her toys, breakfast, her own body: /n/ose, /t/oe, /a/pple, /s/ock.\n\nAfter she\'s a confident receiver, flip it: ask HER to give YOU a sound clue. "Your turn — pick something and tell me the sound." The first time she produces a phoneme deliberately ("/m/... mummy!") is a milestone moment.',
      examples: [
        '/s/ — sock, sun, snake, sausage, soap',
        '/a/ — apple, ant, arm, alligator',
        '/t/ — toe, table, tap, towel, teddy',
        '/p/ — pillow, pasta, plate, paper, pig',
        '/i/ — igloo, in, ink, insect',
        '/n/ — nose, nest, nut, nappy, nine',
        '/m/ — mum, milk, mat, moon, mouse',
        '/d/ — dog, daddy, door, duck, drink'
      ],
      duration: '5 min',
      where: ['car', 'mealtime', 'walking', 'home', 'anywhere'],
      skillTags: ['phonemic-awareness', 'letter-sounds', 'phonics-s', 'phonics-a', 'phonics-t', 'phonics-p', 'phonics-i', 'phonics-n'],
      milestoneRefs: [
        'Knows all 26 letter names',
        'Cannot name at least half the letters'
      ],
      literacyWeight: 3,
      followUp: 'When she\'s confident with initial sounds, try END sounds: "I spy something ending with /t/" (cat, hat, foot). Then middle sounds — much harder, but the gateway to blending. Don\'t rush this; mastery of initial sounds is the foundation.',
      relatedIds: ['lit-letter-s-hunt', 'lit-jolly-phonics-songs']
    },

    // ─── ARCHETYPE 5: book ─────────────────────────────────────────
    // Demonstrates: book-specific fields (author, whyThisBook,
    // discussionPrompts), longer body with reading technique.
    {
      id: 'book-the-gruffalo',
      category: 'book',
      ages: [3, 4, 5],
      title: 'Read The Gruffalo',
      hook: 'Read it tonight. Pause before each rhyme: "He has terrible tusks and terrible ___"',
      body: 'The Gruffalo by Julia Donaldson is arguably the single best English-literacy book ever written for a three-year-old. Every page rhymes. The vocabulary is rich ("knobbly knees", "poisonous wart", "purple prickles"). The story has a clear arc with repetition Sophie can predict by the third reading. And it\'s genuinely funny.\n\nRead it slowly the first time. Point to each Gruffalo body part as it\'s described. Make voices — squeaky mouse, deep slow Gruffalo. The mouse is clever, not just lucky; let that come through.\n\nBy reading three or four, Sophie will start chanting the repeating bits with you: "He has terrible tusks and terrible claws / and terrible teeth in his terrible jaws." That memorisation is doing real work — it\'s teaching her sentence rhythm, predictability, and the joy of language patterns.\n\nFollow up by watching the BBC animated film (free on YouTube) AFTER she\'s heard the book multiple times. Then The Gruffalo\'s Child as a sequel. By the time she can recite the whole book from memory (typical by 42 months for a child who hears it weekly), she has effectively memorised hundreds of high-value English vocabulary words in context.',
      examples: null,
      author: 'Julia Donaldson (illustrated by Axel Scheffler)',
      whyThisBook: 'The densest rhyming, rhythm, and vocabulary payload in any picture book at this age. Builds phonological awareness, narrative structure, and English-specific idiom all at once.',
      discussionPrompts: [
        'Why does the mouse make up the Gruffalo? Is he lying, or is he being clever?',
        'What part of the Gruffalo looks scariest to you?',
        'Where does the mouse live? Why is the wood a good place for him?',
        'What do you think the Gruffalo eats now that he\'s scared of mice?',
        'Can you remember all the animals the mouse meets? (Fox, owl, snake, Gruffalo.)',
        'What rhymes with "wood"? With "mouse"? With "tea"?'
      ],
      duration: '15 min',
      where: ['bedtime', 'home'],
      skillTags: ['vocabulary', 'rhyming', 'comprehension', 'storytelling', 'english-maintenance'],
      milestoneRefs: [
        'tell a simple story with a beginning and end',
        'Shows print awareness'
      ],
      literacyWeight: 2,
      followUp: 'After The Gruffalo, work through the rest of the Julia Donaldson canon in roughly this order: Room on the Broom, Stick Man, Tiddler, Zog, The Snail and the Whale, A Squash and a Squeeze. Each one is built on the same rhyming-narrative scaffold.',
      relatedIds: ['conv-story-questions', 'rhyme-hickory-dickory-dock']
    },

    // ─── ARCHETYPE 6: literacy (phonics) ───────────────────────────
    // Demonstrates: literacyWeight 3, milestone targeting specific
    // checked-state, week-long structure, physical/sensory props.
    {
      id: 'lit-letter-s-hunt',
      category: 'literacy',
      ages: [3, 4],
      title: 'Letter S Hunt',
      hook: 'Today is S day. Find five things around the house that begin with /s/ together.',
      body: 'Sophie\'s name starts with S. That makes S the perfect first letter to obsess over. This week\'s mission: she fully owns the letter S — its name ("ess"), its sound ("/s/" like a snake hissing), and its shape (a curvy snake).\n\nMorning: at breakfast, write S on a piece of paper and tell her "This is S. S is the first letter of YOUR name. S says /sssss/ — like a snake." Hiss together. Trace the S with her finger.\n\nMidday: hunt around the house for five things starting with /s/. Sock, spoon, sofa, soap, sugar, scissors, slipper. Each find: "Yes! Sock! /sss/-ock! S is for sock!" Big celebration.\n\nEvening: trace S in the bath with foam, or in flour on a tray. Then on paper with a chunky pencil. Don\'t worry about perfect form — finger-tracing builds the same motor memory.\n\nDo this for one full week with S. The following week, do O (the second letter of her name). Then P, H, I, E. After her own name, follow the Jolly Phonics order: S, A, T, P, I, N — these six letters unlock the most early words.',
      examples: [
        'Household /s/ words: sock, spoon, soap, sugar, sofa, sink, scissors, slipper, shirt (note: "sh" is a different sound, save for later)',
        'Food /s/ words: salt, sausage, soup, salad, strawberry',
        'Body /s/ words: skin, shoulder (sh again), stomach',
        'Outside /s/ words: sun, sky, sand, snow, snail, swing, slide'
      ],
      duration: '5 min per session, all week',
      where: ['home', 'kitchen', 'bathtime'],
      skillTags: ['letter-names', 'letter-sounds', 'phonics-s', 'phonemic-awareness', 'pre-writing'],
      milestoneRefs: [
        'Recognises every letter in her own name',
        'Knows all 26 letter names',
        'Cannot name at least half the letters'
      ],
      literacyWeight: 3,
      followUp: 'Next week: O (the second letter of SOPHIE). Then P, H, I, E. After her own name is fully owned, follow Jolly Phonics order: S, A, T, P, I, N. These six letters let her decode dozens of three-letter words (sat, pin, tin, nap, sip, tap).',
      relatedIds: ['lit-jolly-phonics-songs', 'game-i-spy-sounds']
    },

    // ─── ARCHETYPE 7: literacy (sight words) ───────────────────────
    // Demonstrates: a second literacy archetype with a different
    // mechanism (sight-word recognition, not phonics decoding),
    // showing the category has range.
    {
      id: 'lit-sight-word-i-am',
      category: 'literacy',
      ages: [3, 4],
      title: 'First Sight Words: I and Am',
      hook: 'Write "I am Sophie" on paper. Point to each word as you read it. Then ask her to point.',
      body: 'Sight words are the words English readers recognise instantly without sounding out — "I", "am", "the", "is", "a". They\'re also the highest-frequency words in English text, so even tiny sight-word knowledge unlocks huge reading confidence.\n\nStart with TWO words only: "I" and "am". Write "I am Sophie" on a piece of paper in big clear lowercase letters (lowercase, NOT capitals — that\'s what she\'ll see in books). Read it pointing to each word: "I... am... Sophie". Do it again, slower. Then say "You read it!" and let her point to each word as she reads from memory.\n\nDo this same sentence every day for a week. Then change Sophie to other nouns: "I am happy." "I am tired." "I am hungry." Same two sight words, different ending — and she\'s now reading three-word sentences. That\'s an extraordinary moment for a 3-year-old.\n\nKey rules: lowercase letters only. Big clear handwriting or printed in a chunky font. Point to each word as you say it — that\'s how she learns one-to-one word correspondence (a key print-awareness skill).\n\nNext sight words after "I" and "am": "a", "the", "is", "to", "see", "my". Add one new word per week. By her fourth birthday she can know 10 sight words — enough to read simple captioned books.',
      examples: [
        'Week 1: "I am Sophie."',
        'Week 2: "I am happy." / "I am tired." / "I am hungry."',
        'Week 3: Add "see" — "I see a dog." / "I see a cat."',
        'Week 4: Add "my" — "I see my mum." / "I see my dad."',
        'Week 5: Add "the" — "I see the sun." / "I see the moon."',
        'Week 6: Add "is" — "Sophie is happy." / "The dog is big."'
      ],
      duration: '5 min daily, weeks-long progression',
      where: ['home', 'mealtime', 'bedtime'],
      skillTags: ['sight-words', 'letter-names', 'comprehension', 'pre-writing'],
      milestoneRefs: [
        'Shows print awareness',
        'letters make words',
        'Recognises every letter in her own name'
      ],
      literacyWeight: 3,
      followUp: 'If she breezes through these, jump to the Bob Books (Set 1) — the simplest decodable readers ever published, designed precisely for a child who knows a handful of sight words and the SATPIN sounds. The first Bob Book uses only the letters M, A, T, S — and she can READ it.',
      relatedIds: ['lit-letter-s-hunt', 'book-the-gruffalo']
    },

    // ─── ARCHETYPE 8: pretend-play ─────────────────────────────────
    // Demonstrates: dialogue field (example back-and-forth), targeted
    // vocab to introduce, English-vocab-via-roleplay.
    {
      id: 'play-restaurant',
      category: 'pretend-play',
      ages: [3, 4, 5],
      title: 'Pretend Restaurant',
      hook: 'You\'re the customer. She\'s the waiter. Set up "the restaurant" on the kitchen table.',
      body: 'Restaurant pretend-play is gold for English vocabulary because it introduces a whole world of words that don\'t normally come up at home: menu, waiter, customer, order, bill, tip, kitchen, chef, please-take-a-seat, what-would-you-like, anything-else.\n\nSetup: kitchen table = restaurant. Use a paper or notebook as the "menu". She\'s the waiter; you\'re the customer (this is the better split — being the customer lets you model rich language for her to absorb).\n\nMake it work by being slightly silly and formal in your English: "Excuse me, waiter! Could I see the menu, please?" Use full polite English forms. She\'ll absorb them and start using them. After a few rounds, swap — let her be the customer, you the waiter — and notice which phrases she\'s picked up.\n\nIf she can sort-of-write or scribble, get her to take the "order" on a tiny notepad. This sneaks in pre-writing practice without it feeling like practice. Don\'t correct her writing — she\'s pretending, and the motivation to write is the gold here.\n\nVariations: shop, doctor\'s surgery, bus driver, hairdresser, post office. Each new scenario unlocks a fresh vocabulary set. Cycle through them across weeks.',
      examples: [
        'Vocabulary to introduce: menu, waiter, waitress, customer, order, kitchen, chef, dessert, starter, main course, the bill, please-take-a-seat, what-would-you-like, anything-else, that-comes-to, thank-you-very-much',
        'Foods to "serve": pasta, pizza, fish and chips, ice cream, fruit salad, sandwich, soup, scrambled eggs',
        'Polite-formal English forms to model: "Could I have...", "Would you like...", "Excuse me", "May I see...", "Thank you so much"'
      ],
      dialogue: [
        {
          adult: 'Excuse me, waiter! Could I see the menu, please?',
          child: '(hands over menu) Here you are.'
        },
        {
          adult: 'Thank you. Hmm... what would you recommend?',
          child: 'The pizza!'
        },
        {
          adult: 'Wonderful, I\'ll have the pizza, please. And could I have some juice with that?',
          child: 'OK. (scribbles on notepad)'
        },
        {
          adult: 'How much will that be?',
          child: 'Five pounds!'
        },
        {
          adult: 'Here you are. Thank you very much — the food was delicious!',
          child: 'Bye!'
        }
      ],
      duration: '15–20 min',
      where: ['home', 'kitchen'],
      skillTags: ['vocabulary', 'english-conversation', 'storytelling', 'turn-taking', 'english-maintenance'],
      milestoneRefs: [
        'English sentences of 4–5 words',
        'tell a simple story'
      ],
      literacyWeight: 1,
      followUp: 'Once restaurant is well-worn, rotate through: shop ("That\'ll be three pounds, please"), doctor ("Where does it hurt?"), bus driver ("Tickets please, all aboard"), hairdresser ("How would you like it cut today?"). Each scenario is a fresh vocabulary set.',
      relatedIds: ['conv-describe-things', 'play-shop']
    },

    // ─── ARCHETYPE 9: outdoor ──────────────────────────────────────
    // Demonstrates: outdoor with strong English-vocab focus, sensory
    // adjective expansion, short context-appropriate prompt.
    {
      id: 'out-five-senses-walk',
      category: 'outdoor',
      ages: [3, 4, 5],
      title: 'Five Senses Walk',
      hook: 'On your next walk, name one thing you can see, hear, smell, feel, and (safely) taste — in English only.',
      body: 'Sensory walks are the easiest way to teach descriptive English vocabulary in context. You\'re going on a walk anyway — turn it into a five-senses scavenger hunt.\n\nSet the frame at the start: "Let\'s play the five senses game. We have to find one thing for each sense before we get home." Count off on her fingers: see, hear, smell, touch, taste.\n\nAs you walk, prompt: "What can you SEE? Tell me about it — what colour is it? What shape?" Push for adjectives: not just "a tree" but "a tall green tree with bumpy bark". "What can you HEAR?" Pause, listen properly. "A bird. A car. The wind in the leaves." This is high-quality English listening and naming practice.\n\nFor "taste", a tiny piece of fruit from a market or a snack from your bag works — or just say "we\'ll save taste for when we get home and find a strawberry". Don\'t lick lampposts.\n\nThe magic isn\'t the senses — it\'s that she\'s using adjectives, comparisons, and full sentences in English, in the middle of a real-world context. That kind of "real" English practice compounds far faster than flashcards ever will.',
      examples: [
        'Adjectives to model and elicit: bumpy, smooth, prickly, soft, fluffy, sticky, slippery, crunchy, squishy, fuzzy, sharp, gentle, fresh, cold, warm, sticky, dusty',
        'Sounds to listen for: chirping, rustling, humming, whistling, beeping, barking, ticking, crackling',
        'Sights to describe by colour AND shape: a round red letterbox, a tall thin lamppost, a squiggly path, a bright yellow leaf'
      ],
      duration: '15 min (length of a walk)',
      where: ['walking', 'outdoor', 'kindergarten-drop-off'],
      skillTags: ['vocabulary', 'description', 'english-conversation', 'english-maintenance'],
      milestoneRefs: [
        'English sentences of 4–5 words',
        'names 8+ colours',
        'English vocabulary growth'
      ],
      literacyWeight: 1,
      followUp: 'After a few weeks of senses walks, switch the prompt: "Find me three things that are GREEN" or "Find me something that\'s shaped like a circle". Same descriptive workout, different lens. Eventually try the comparison game — "Which is taller, that tree or that lamppost?" — to introduce comparatives.',
      relatedIds: ['conv-describe-things', 'conv-opposites-basic']
    },

    // ─── ARCHETYPE 10: bedtime ─────────────────────────────────────
    // Demonstrates: bedtime category, emotional-vocab focus, calm
    // routine that STILL serves English mission.
    {
      id: 'bed-three-good-things',
      category: 'bedtime',
      ages: [3, 4, 5, 6],
      title: 'Three Good Things',
      hook: 'After lights out, ask: "What were three good things about today?" — only in English.',
      body: 'Three Good Things is a beautifully simple bedtime routine that doubles as English fluency practice. After lights out, with her tucked in, ask: "Tell me three good things about today."\n\nWhy it works for English specifically: it asks her to recall, sequence, and narrate in her dominant language right before sleep — exactly when consolidation happens. She has to find the English words for what she did, which often means stretching her vocabulary. ("I played with... the slide. The slide that goes round and round.") When she stretches and a word doesn\'t come, supply it warmly: "Spiral slide. Yes, the spiral slide.")\n\nGo first if she\'s stuck: "MY three good things were: I had a coffee in the morning, I read your favourite book with you, and I saw a fox on the way home." Modelling rich descriptive English at bedtime is dense, low-pressure language input.\n\nAfter Three Good Things, ask one curious follow-up: "And what was the BEST one?" The follow-up prompt asks her to evaluate and justify — much harder cognitive work than just listing. That micro-stretch every night adds up.\n\nDo not allow Bulgarian answers. This is sacred English space. If she answers in Bulgarian, just smile and say "Can you tell me that in English?" Then wait. She\'ll switch.',
      examples: [
        'Follow-up prompts (rotate, one per night): "Which one was the best?", "What was the funniest part?", "Who were you with?", "What did it feel like?", "Was anything tricky today?"',
        'Emotional-vocabulary words to model: proud, excited, surprised, calm, peaceful, relieved, curious, confident, grateful, content'
      ],
      duration: '5 min (part of bedtime routine)',
      where: ['bedtime'],
      skillTags: ['storytelling', 'emotional-vocabulary', 'english-conversation', 'english-maintenance', 'comprehension'],
      milestoneRefs: [
        'tell a simple story with a beginning and end',
        'English sentences of 4–5 words',
        'refuses to use English at home'
      ],
      literacyWeight: 1,
      followUp: 'Once Three Good Things is well-grooved (usually within a month), add Three Things You\'re Looking Forward To Tomorrow as a second prompt. Both routines build narrative recall AND a positive frame, in English, every night.',
      relatedIds: ['conv-opposites-basic', 'book-the-gruffalo']
    },

    // ─── END OF v1 ARCHETYPES ──────────────────────────────────────
    // Bulk content expansion goes BELOW this line. Match the depth,
    // voice, mission focus, and schema completeness of the 10 items
    // above. See header for category targets and quality bar.

    // ─── v1 BULK CONTENT ───────────────────────────────────────────
    // ~93 items spanning all 9 categories. Generated in one pass to
    // a frozen schema and a fixed voice — see PLAN_CONTENT_EXPANSION.md
    // for the brief. Order is by category, not priority.

    // ─── CONVERSATION (19 items) ───────────────────────────────────

    {
      id: 'conv-rhyming-pairs',
      category: 'conversation',
      ages: [3, 4],
      title: 'Rhyming Pairs Game',
      hook: 'Ask: "What rhymes with cat?" Accept any real or made-up word that rhymes.',
      body: 'Rhyming production — actually generating a word that rhymes, not just recognising one — is the single strongest predictor of reading success at age six. Most 3-year-olds can hear a rhyme before they can make one, so this game is the bridge.\n\nStart with the easiest English rhyme families: -at (cat, hat, mat, bat, sat, fat), -og (dog, log, frog, fog), -ig (pig, big, dig, wig), -un (sun, fun, run, bun). Say one word and ask "What rhymes with cat?" Wait. If she stalls, give her one as a model — "Hat! Hat rhymes with cat. Now you try" — then ask again.\n\nAccept nonsense rhymes enthusiastically. If she says "zat" or "blat" for cat, she has produced a rhyme — celebrate it. The skill is matching the ending sound, not vocabulary.\n\nIf rhyme production is stuck after a few sessions, drop down a level: do rhyme RECOGNITION first. "Cat, hat, dog — which one doesn\'t rhyme?" That\'s easier, and it bootstraps the production skill.\n\nPlay this for 2–3 minutes at a time, several times a week. The first time she produces a rhyme spontaneously ("Mum, fun rhymes with sun!") is a real milestone — note the date.',
      examples: [
        '-at: cat, hat, mat, bat, sat, fat, rat, that, flat',
        '-og: dog, log, frog, fog, bog, jog',
        '-ig: pig, big, dig, wig, fig, jig',
        '-un: sun, fun, run, bun, nun, one (tricky spelling)',
        '-op: hop, top, mop, pop, stop, shop',
        '-ed: bed, red, head, said, fed',
        '-it: sit, hit, bit, fit, knit, lit',
        '-ake: cake, lake, make, snake, bake, take',
        '-ing: ring, sing, king, wing, swing, thing',
        '-all: ball, tall, call, wall, small, hall'
      ],
      duration: '3–5 min',
      where: ['walking', 'car', 'mealtime', 'bathtime', 'anywhere'],
      skillTags: ['rhyming', 'phonemic-awareness', 'vocabulary', 'english-conversation'],
      milestoneRefs: [
        'Correctly rhymes 3–4 words',
        'cannot produce a single rhyme'
      ],
      literacyWeight: 2,
      followUp: 'When she\'s confidently generating rhymes for one family, try mixing — "What rhymes with star?" — so she has to find the ending pattern from scratch. Then try harder vowel sounds (-eep, -ight, -own). Avoid -ough (rough/though/through) until much later; the spelling chaos will confuse her.',
      relatedIds: ['song-twinkle-twinkle', 'rhyme-hickory-dickory-dock', 'game-rhyming-pairs']
    },

    {
      id: 'conv-describe-things',
      category: 'conversation',
      ages: [3, 4, 5],
      title: 'Describe It In Three Ways',
      hook: 'Point at any object and ask: "Tell me about it — colour, shape, and size."',
      body: 'Description is where English vocabulary multiplies. A 3-year-old who can say "ball" is at base camp; one who can say "a big bouncy red ball" is climbing. The trick is to make her use three adjectives at once — colour, shape, size — so that single-word answers stop working.\n\nPoint at anything: a leaf, her shoe, a passing car, an apple. Ask: "Tell me about it in three ways — colour, shape, and size." Model the first one: "This apple is RED, ROUND, and SMALL." Then point at the next thing.\n\nWhen she gives single-word answers, ask for more: "It\'s red — what else? Is it big or small? What shape?" Make this a recurring micro-game rather than a sit-down lesson — it should happen 5 times a day in passing.\n\nLevel up by adding new adjective categories: texture (smooth, bumpy, prickly), material (wooden, metal, plastic, fluffy), state (full, empty, broken, new). By 42 months she should be able to produce 4–5 adjectives for a familiar object.\n\nIf she struggles with shape vocabulary, get a shape book or just play "I see a circle / I see a triangle" on walks until the basic shapes (circle, square, triangle, rectangle, oval, star, diamond) are automatic.',
      examples: [
        'Colours: red, blue, yellow, green, orange, purple, pink, brown, black, white, grey, gold, silver',
        'Shapes: circle, square, triangle, rectangle, oval, star, diamond, heart',
        'Sizes: big, small, tiny, huge, medium, tall, short, wide, narrow, long',
        'Textures: smooth, bumpy, soft, hard, rough, prickly, fluffy, sticky, slippery, squishy',
        'Materials: wooden, metal, plastic, glass, paper, fluffy, rubbery, stretchy'
      ],
      duration: '2 min, many times a day',
      where: ['anywhere', 'mealtime', 'walking', 'car', 'home'],
      skillTags: ['vocabulary', 'description', 'english-conversation', 'english-maintenance'],
      milestoneRefs: [
        'English sentences of 4–5 words',
        'names 8+ colours',
        'English vocabulary growth'
      ],
      literacyWeight: 1,
      followUp: 'Once three-adjective descriptions flow naturally, introduce COMPARATIVES: "Which is BIGGER — this apple or that one?" Then SUPERLATIVES: "Which is the SMALLEST thing on the table?" Comparative grammar is one of the things Bulgarian school will not teach in English — own it at home.',
      relatedIds: ['conv-opposites-basic', 'out-five-senses-walk', 'conv-same-different']
    },

    {
      id: 'conv-what-if',
      category: 'conversation',
      ages: [3, 4, 5],
      title: '"What If…?" Questions',
      hook: 'Ask: "What if the sky was green?" Then just listen.',
      body: '"What if…?" questions are an imagination workout disguised as a chat. They have no right answer, so Sophie can\'t fail — which means she will talk freely, in English, for as long as you let her. That free talk is exactly the rich, unscripted English practice the home has to provide.\n\nStart with sensory swaps: "What if the sky was green?" "What if grass was blue?" "What if it rained chocolate?" Then move to scale: "What if you were as tall as a tree? What would you see?" "What if you were as small as a mouse? Where would you hide?"\n\nYour job is mostly to listen and ask one good follow-up. If she says "I\'d eat the chocolate", ask "How would you catch it? In a bucket? Or a hat?" Each follow-up forces her to extend her sentence and reach for new words.\n\nDon\'t correct or improve her ideas. If she says "the sky would be a salad", that\'s GREAT — she\'s playing. Cheer it on. The point is fluency and confidence, not accuracy.\n\nKeep a mental shortlist of three or four "what if" prompts so you can pull one out in the car or at breakfast. After a few months, she\'ll start asking you "What if…?" — and that\'s when you know the muscle is built.',
      examples: [
        'Sensory swaps: "What if the sky was green?" / "What if grass was blue?" / "What if it rained chocolate?" / "What if snow was warm?"',
        'Scale: "What if you were as tall as a tree?" / "What if you were as small as a mouse?" / "What if our house was the size of a shoebox?"',
        'Animal swaps: "What if dogs could talk?" / "What if cats could fly?" / "What if fish lived in the sky?"',
        'Identity: "What if you woke up as a fox?" / "What if you were the teacher?" / "What if you were three years old forever?"',
        'Object magic: "What if your shoes could run by themselves?" / "What if pillows could sing?" / "What if your bed flew at night?"'
      ],
      duration: '5–10 min',
      where: ['walking', 'car', 'mealtime', 'bedtime', 'anywhere'],
      skillTags: ['storytelling', 'english-conversation', 'vocabulary', 'question-asking', 'english-maintenance'],
      milestoneRefs: [
        'English sentences of 4–5 words',
        'tell a simple story with a beginning and end'
      ],
      literacyWeight: 1,
      followUp: 'When she\'s comfortable with "What if?", flip the game: she asks YOU "What if?" questions. Letting her be the question-asker is huge for language development — generating the question is harder than answering it. Reward every question, however silly.',
      relatedIds: ['conv-why-stretching', 'bed-made-up-story']
    },

    {
      id: 'conv-why-stretching',
      category: 'conversation',
      ages: [3, 4],
      title: '"Why?" Stretching',
      hook: 'When she asks "why?", flip it: "Why do YOU think?" — and wait.',
      body: 'Three-year-olds ask "why?" relentlessly. Most parents answer until they run out of patience. Try this instead: take her "why?" and turn it back as a Socratic prompt. "Why do YOU think the leaves are falling?" Then wait. Genuinely wait. Don\'t rescue her.\n\nThis tiny flip does three things at once: (1) it forces her to assemble a hypothesis in English, which is hard, sentence-stretching work; (2) it teaches her that her ideas matter; (3) it stops you sounding like an encyclopaedia for the 40th time that morning.\n\nHer first answers will be silly or wrong. That is FINE. "Because the wind is hungry" is a great answer — engage with it. "Oh, what does the wind eat?" Let the absurdity run. When she\'s done, you can add the real explanation if you want, but it\'s optional.\n\nThis works for almost any "why?": why is the sky blue, why do dogs bark, why is the moon round, why do we sleep. The goal is to make her THINK in English, not to teach her facts.\n\nDon\'t use this every time — sometimes she just wants the answer. Use it 30–50% of the time. The mix of "answer" and "what do YOU think?" is the magic.',
      examples: [
        'Classic 3yo whys: "Why is the sky blue?" / "Why do birds fly?" / "Why is it dark at night?" / "Why do I have to brush my teeth?" / "Why do dogs bark?" / "Why is grass green?" / "Why do leaves fall?" / "Why does the moon change shape?"',
        'Your flip-back prompts: "Why do YOU think?" / "What do you reckon?" / "Tell me your idea first." / "Take a guess."',
        'After her guess: "Ooh interesting. And what about…?" / "Oh, why do you think that?" / "What else might it be?"'
      ],
      duration: '2–5 min',
      where: ['anywhere', 'walking', 'car', 'mealtime', 'bedtime'],
      skillTags: ['english-conversation', 'question-asking', 'vocabulary', 'comprehension'],
      milestoneRefs: [
        'English sentences of 4–5 words',
        'tell a simple story with a beginning and end'
      ],
      literacyWeight: 1,
      followUp: 'Once she\'s used to giving her own "why" answers, push for two reasons: "Can you think of ANOTHER reason?" Multi-reason answers stretch her into "and", "but", "because" — the connectives that lift toddler-talk into proper English sentences.',
      relatedIds: ['conv-what-if', 'conv-feelings-vocab']
    },

    {
      id: 'conv-categories-game',
      category: 'conversation',
      ages: [3, 4, 5],
      title: 'Categories Game',
      hook: 'Say: "Tell me 5 animals" — then "5 things that are red" — keep going.',
      body: 'The categories game is the lazy parent\'s best friend: zero setup, infinite variations, and it forces Sophie to actively retrieve English vocabulary from memory rather than just recognise it when she hears it. Retrieval is the skill that builds fluency.\n\nThe format is simple: pick a category, set a target number, and let her list. "Tell me 5 animals." "Tell me 5 things that are red." "Tell me 5 things in a kitchen." Count along on your fingers. If she stalls at 3, give her a clue: "Something with stripes…" (tiger, zebra). The goal is to get to 5, not to test her cold.\n\nMix easy categories (animals, colours, foods) with harder ones (things that are soft, things that fly, things that live in water). The hard ones force her to think across categories — a higher-level cognitive move.\n\nKey rule: the answers must be in ENGLISH. If she gives a Bulgarian word, smile and say "What\'s that in English?" Wait. If she doesn\'t know, tell her and ask her to repeat it back. This is exactly where Bulgarian dominance creeps in — at the level of specific vocabulary she only encountered at kindergarten — and this game catches it.\n\nPlay it in the car, while walking, while waiting at the doctor. Aim for one 3-minute round most days. Over months, her active English vocabulary will balloon.',
      examples: [
        'Easy: 5 animals / 5 colours / 5 foods / 5 toys / 5 things in the bathroom / 5 things at the park',
        'Medium: 5 things that are red / 5 things that are soft / 5 things that are round / 5 things you wear / 5 things you can eat for breakfast',
        'Hard: 5 things that fly / 5 things that live in water / 5 things that are cold / 5 things in a kitchen / 5 things you can read / 5 things made of wood',
        'Super hard: 5 jobs people do / 5 things that go up and down / 5 things you can\'t see but can hear / 5 things bigger than a house',
        'Sophie-specific: 5 of YOUR favourite things / 5 things in your bedroom / 5 things you ate yesterday'
      ],
      duration: '3–5 min',
      where: ['car', 'walking', 'mealtime', 'kindergarten-drop-off', 'anywhere'],
      skillTags: ['vocabulary', 'english-conversation', 'english-maintenance'],
      milestoneRefs: [
        'English vocabulary growth',
        'refuses to use English at home'
      ],
      literacyWeight: 1,
      followUp: 'When 5-item categories feel easy, lift the bar to 10. Then add a constraint: "5 animals — but they all have to start with /b/." That combines vocabulary with initial-sound awareness, which is real phonics work.',
      relatedIds: ['conv-shopping-memory', 'game-i-spy-sounds']
    },

    {
      id: 'conv-same-different',
      category: 'conversation',
      ages: [3, 4, 5],
      title: 'Same vs. Different',
      hook: 'Hold up two objects: "How are an apple and a ball the SAME? How are they DIFFERENT?"',
      body: 'Same vs. different is one of the most cognitively rich English conversations you can have with a 3-year-old, and it costs nothing. It forces her to (1) compare two things, (2) find shared features, (3) find distinguishing features, and (4) put all that into English sentences. Four hard skills in one chat.\n\nUse any two objects within reach. Apple and ball: same (both round, both fit in your hand, both can roll). Different (one is food, one is a toy; one is alive once, one is made; one is red and crunchy, one is bouncy). Don\'t expect all of this from her — you model, she contributes.\n\nStart with VERY similar pairs (banana and lemon, dog and cat) — same/different is easy. Then move to surprising pairs (a book and a sandwich, a shoe and a leaf) — finding similarities becomes harder and more creative.\n\nThis is where she\'ll first reach for connective words she doesn\'t have: "they BOTH…", "they\'re DIFFERENT because…", "one is X BUT the other is Y." Supply these phrases generously and let her use them.\n\nIf she gets stuck, prompt with one feature dimension at a time: colour? size? shape? what it\'s made of? what you do with it? Working through dimensions one by one teaches her how to compare systematically.',
      examples: [
        'Easy pairs (very similar): apple/orange, dog/cat, car/bus, sock/glove, banana/lemon',
        'Medium pairs: book/box, shoe/hat, spoon/cup, tree/flower, water/milk',
        'Hard pairs (surprising): a book and a sandwich, a leaf and a piece of paper, a window and a mirror, a clock and a wheel',
        'Helper phrases to teach: "they\'re both…", "one is X but the other is Y", "they\'re the same because…", "they\'re different because…", "you can do X with both"',
        'Feature dimensions to prompt: colour, size, shape, what it\'s made of, what you do with it, where you find it, alive or not, hot or cold'
      ],
      duration: '5–10 min',
      where: ['mealtime', 'home', 'walking', 'anywhere'],
      skillTags: ['vocabulary', 'description', 'comprehension', 'english-conversation'],
      milestoneRefs: [
        'English sentences of 4–5 words',
        'English vocabulary growth'
      ],
      literacyWeight: 1,
      followUp: 'When she\'s confident with pairs, try triples: "How are these three the same? How is one different?" (apple, orange, ball — two are food, one is a toy). This is real classification thinking — the cognitive scaffolding for science and maths later.',
      relatedIds: ['conv-describe-things', 'conv-categories-game']
    },

    {
      id: 'conv-time-words',
      category: 'conversation',
      ages: [3, 4],
      title: 'Yesterday, Today, Tomorrow',
      hook: 'At breakfast ask: "What did you do YESTERDAY? What will you do TOMORROW?"',
      body: 'Time words are surprisingly hard for a 3-year-old. "Yesterday", "today", "tomorrow", "later", "before", "after" — and the past- and future-tense English verbs that go with them — are not things she\'ll pick up automatically from kindergarten, because they\'re used implicitly rather than taught. You teach them at home.\n\nAt breakfast, ask: "What did you do YESTERDAY?" — emphasise the word. She\'ll probably answer in present tense at first ("I play with cars"). Gently re-cast: "Oh, you PLAYED with cars yesterday. Yes." That re-cast is the lesson — past-tense -ed delivered in context, no correction needed.\n\nThen "What will you do TOMORROW?" "I will go to kindergarten." Again, model the future tense ("I WILL go") rather than correcting her if she says "I going". Just say it back the right way and move on.\n\nThe other time words slot in throughout the day. "BEFORE we eat lunch, let\'s wash hands." "AFTER your nap, we\'re going to the park." "LATER we can read a book." Use them consciously and often.\n\nA good once-a-week recap: "Tell me three things we did this week." This is hard. She\'ll find one or two, you fill the rest in. By 4, she should be able to sequence past events with reasonable accuracy.',
      examples: [
        'Time words to model daily: yesterday, today, tomorrow, this morning, this afternoon, tonight, last week, next week, soon, later, before, after, in a minute, in a little while, after lunch, after your nap, when we get home',
        'Past tense verbs to model in re-casts: played, ate, went, saw, did, had, made, ran, fell, slept',
        'Future tense forms: "I will…", "we\'re going to…", "tomorrow we\'ll…", "in a minute we\'re going to…"',
        'Sequence words for retelling: first, next, then, after that, last, finally'
      ],
      duration: '3–5 min, multiple times per day',
      where: ['mealtime', 'car', 'bedtime', 'kindergarten-drop-off', 'anywhere'],
      skillTags: ['vocabulary', 'english-conversation', 'storytelling', 'english-maintenance'],
      milestoneRefs: [
        'English sentences of 4–5 words',
        'tell a simple story with a beginning and end'
      ],
      literacyWeight: 1,
      followUp: 'Once "yesterday" and "tomorrow" are solid, introduce DAYS OF THE WEEK. Sing the days-of-the-week song daily. By 4 she should know that there are seven, and ideally name them in order. Months and seasons come later — don\'t rush them.',
      relatedIds: ['conv-story-sequencing', 'bed-story-telling-day']
    },

    {
      id: 'conv-story-sequencing',
      category: 'conversation',
      ages: [3, 4, 5],
      title: 'First, Then, Last',
      hook: 'Ask her to tell you about her day using "First… then… last…"',
      body: 'Narrative sequencing — telling what happened in order — is one of the highest-stakes English skills a 3-year-old can build, because every book, every conversation, every later school task requires it. The three magic words: FIRST, THEN, LAST.\n\nStart with very recent, very short sequences. After breakfast: "Tell me what we just did. First… then… last." She might say "First I ate banana, then I drank milk, last I had toast." Perfect. Three sentences with connectives — sophisticated English from a 3-year-old.\n\nWhen she misses a connective, fill it in: "Yes! And THEN…?" The connectives are the lesson; the content is whatever she remembers.\n\nLevel up by asking about longer events. After a visit to the park: "Tell me about the park — first, then, last." After bath time. After a meal. After kindergarten ("What did you do at kindergarten? First, then, last").\n\nFor really hard sequences (like a whole day), give her a scaffold: "First, in the morning… then, after lunch… last, before bedtime." Three buckets, easier to fill.\n\nThis activity is also a stealth Bulgarian-dominance check — kindergarten happens in Bulgarian, so retelling it in English forces her to translate live. That translation work is exactly the bilingual literacy muscle you want.',
      examples: [
        'Easy sequences: breakfast (first, then, last) / getting dressed / bath time / putting toys away',
        'Medium sequences: a meal at a restaurant / a trip to the park / a visit to grandparents / a shopping trip',
        'Hard sequences: a whole day / a whole weekend / a book she just heard ("Tell me what happened in the story — first, then, last")',
        'Connective words to model: first, then, next, after that, after, before, finally, last, in the end',
        'Scaffolding question if she\'s stuck: "What did you do in the MORNING? What about after LUNCH? What about before BED?"'
      ],
      duration: '3–5 min',
      where: ['mealtime', 'car', 'bedtime', 'walking', 'anywhere'],
      skillTags: ['storytelling', 'english-conversation', 'comprehension', 'english-maintenance'],
      milestoneRefs: [
        'tell a simple story with a beginning and end',
        'English sentences of 4–5 words'
      ],
      literacyWeight: 1,
      followUp: 'When three-step sequencing is solid, push for four or five steps. Then introduce "WHY did X happen before Y?" — causal sequencing, much harder. The goal is for her to be able to retell The Gruffalo or any short book in 5–6 sentences by age 4.',
      relatedIds: ['conv-time-words', 'bed-story-telling-day', 'conv-story-questions']
    },

    {
      id: 'conv-feelings-vocab',
      category: 'conversation',
      ages: [3, 4, 5],
      title: 'Feelings Vocabulary',
      hook: 'Ask: "Tell me about a time you felt PROUD." Listen. Then ask about another feeling.',
      body: 'A 3-year-old\'s default English feelings vocabulary is happy, sad, angry, scared. That\'s four words covering a vast emotional landscape. The job here is to expand that landscape — both because rich emotional language is one of the best predictors of school success, and because nuanced feelings get crushed by Bulgarian-only kindergarten if you don\'t name them at home in English.\n\nAsk about specific past feelings: "Tell me about a time you felt PROUD." "Tell me about a time you felt EXCITED." She might struggle at first — the words are new — so model with a story of your own first: "I felt proud when YOU helped me set the table yesterday. Proud means really happy because someone did something good."\n\nIntroduce one new feeling word per week. Use it explicitly in real moments throughout the week: "You look frustrated — is the puzzle tricky?" "I\'m feeling really CALM after that walk." "Daddy is going to be so SURPRISED when he sees the picture you made."\n\nThe feelings vocabulary list below covers most of the territory a 3-year-old can grasp. Don\'t rush all of it — pace it over months. By age 4 she should fluently use 12–15 feeling words.\n\nAvoid making this therapy-coded. It\'s a vocabulary exercise embedded in normal life, not a feelings inquisition. If she doesn\'t want to share, drop it and try later.',
      examples: [
        'Positive feelings: happy, excited, proud, calm, peaceful, content, relieved, hopeful, curious, brave, grateful, loved, safe',
        'Negative feelings: sad, angry, frustrated, scared, nervous, worried, embarrassed, jealous, disappointed, lonely, bored, tired',
        'Subtle/mixed: surprised, confused, shy, silly, cheeky, mischievous, hungry-grumpy ("hangry"), overwhelmed',
        'Sentence frames to use: "I felt X when…", "I feel X because…", "You look X — what\'s happening?", "Are you feeling X or Y?"'
      ],
      duration: '5 min',
      where: ['mealtime', 'bedtime', 'car', 'walking', 'anywhere'],
      skillTags: ['emotional-vocabulary', 'vocabulary', 'english-conversation', 'english-maintenance'],
      milestoneRefs: [
        'English sentences of 4–5 words',
        'English vocabulary growth'
      ],
      literacyWeight: 1,
      followUp: 'Once she has 10+ feeling words, ask her to predict feelings in others: "How do you think the Gruffalo felt when he saw the mouse?" "How would YOU feel?" Predicting and naming others\' emotions is a higher-level skill — theory of mind plus vocabulary.',
      relatedIds: ['bed-three-good-things', 'conv-why-stretching']
    },

    {
      id: 'conv-shopping-memory',
      category: 'conversation',
      ages: [3, 4, 5],
      title: '"I Went to the Shops and I Bought…"',
      hook: 'Start: "I went to the shops and I bought a banana." She adds: "…a banana and a hat." Keep going.',
      body: 'This classic memory-chain game is unreasonably good for English vocabulary and working memory at the same time. Each player must repeat the entire growing list and add one new item. It sounds like a daft party game; it\'s actually high-grade language practice.\n\nStart simple: "I went to the shops and I bought a BANANA." She repeats it and adds one: "I went to the shops and I bought a banana AND a hat." You: "…banana, hat, and a teapot." Her: "…banana, hat, teapot, and a CAT!"\n\nThe game pushes her to actively retrieve English nouns from memory — exactly what her brain needs to keep English vocabulary at the front of mind rather than letting Bulgarian creep in.\n\nFor 3, start with chains of 3–4 items max. Don\'t make it about winning; if she forgets one, just remind her cheerfully and continue. The point is the practice, not the test.\n\nVariations: "I went to the zoo and I saw…" (animals), "In my suitcase I packed…" (clothes), "For breakfast I ate…" (foods), "In my magic garden I grew…" (plants/silly objects). Each variation is a different vocabulary domain.',
      examples: [
        'I went to the shops and I bought: banana, hat, teapot, cat, umbrella, sock, biscuit, kettle, balloon, spider',
        'I went to the zoo and I saw: lion, elephant, snake, monkey, penguin, giraffe, kangaroo, hippo, zebra, tiger',
        'In my suitcase I packed: pyjamas, toothbrush, jumper, sandals, sunglasses, book, swimming costume, hat',
        'For breakfast I ate: porridge, banana, toast, eggs, yoghurt, blueberries, pancakes, jam, butter, marmalade',
        'In my magic garden I grew: a strawberry, a giant pumpkin, a rainbow flower, a chocolate tree, a singing rose'
      ],
      duration: '5–10 min',
      where: ['car', 'walking', 'mealtime', 'bedtime', 'anywhere'],
      skillTags: ['vocabulary', 'english-conversation', 'english-maintenance', 'comprehension'],
      milestoneRefs: [
        'English vocabulary growth',
        'English sentences of 4–5 words'
      ],
      literacyWeight: 1,
      followUp: 'When she can manage chains of 6–7 items, add an alliteration constraint: "I went to the shops and I bought…" and every item must start with /b/. Vocabulary plus initial-sound filtering plus working memory — three skills in one round.',
      relatedIds: ['conv-categories-game', 'game-memory-tray']
    },

    {
      id: 'conv-story-questions',
      category: 'conversation',
      ages: [3, 4, 5],
      title: 'Story Comprehension Questions',
      hook: 'After ANY book or show: "Why did X do Y? What would you have done?"',
      body: 'Passive listening or watching builds vocabulary slowly. Active discussion afterwards builds comprehension AND vocabulary fast. Every book you read and every show she watches in English should end with two or three quick questions.\n\nUse three question types, in this order: (1) WHAT happened? — easiest, factual recall ("What did the mouse do?"). (2) WHY did it happen? — causal, harder ("Why did the Gruffalo run away?"). (3) WHAT WOULD YOU DO? — opinion/empathy, hardest ("What would YOU have done if you were the mouse?").\n\nThe what/why/what-would-you-do sequence works for any story. The Gruffalo, Peppa Pig, Bluey, a homemade story you just told her. Use it every single time.\n\nKey rule: ask in English, accept ONLY in English. If she answers in Bulgarian, say "Tell me in English." Wait. If she doesn\'t have the word, give it to her and let her repeat. Bulgarian school is taking the Bulgarian-language version of her every story by default; English-language story-talk has to happen here.\n\nThis also stealth-teaches her how READING works: stories have characters who DO things for REASONS, and we can THINK about what they did. That mental frame is what makes a strong reader at six.',
      examples: [
        'What happened? "What did the mouse do at the end?" / "Where did the bear hunt go?" / "What was in the tea?"',
        'Why? "Why did the Gruffalo run away?" / "Why was the tiger hungry?" / "Why did the pigeon want to drive the bus?"',
        'What would you do? "What would you have done if a tiger came to your tea?" / "Would you let the pigeon drive the bus?" / "If you were Sophie in the story, what would you say?"',
        'Predictive (great BEFORE finishing a book): "What do you think will happen next?" / "What might the mouse say?"',
        'Character feelings: "How do you think she felt when…?" / "Was the Gruffalo brave or scared?"'
      ],
      duration: '3–5 min after each book',
      where: ['bedtime', 'home', 'mealtime'],
      skillTags: ['comprehension', 'storytelling', 'english-conversation', 'vocabulary', 'english-maintenance'],
      milestoneRefs: [
        'tell a simple story with a beginning and end',
        'English sentences of 4–5 words',
        'refuses to use English at home'
      ],
      literacyWeight: 1,
      followUp: 'When she can answer all three question types, ask her to ASK YOU one question about the story. Generating a comprehension question is much harder than answering one and is the bridge to becoming an active reader.',
      relatedIds: ['book-the-gruffalo', 'conv-story-sequencing', 'bed-made-up-story']
    },

    {
      id: 'conv-counting-things',
      category: 'conversation',
      ages: [3, 4],
      title: 'Count Things In English',
      hook: 'Anywhere you go, count something out loud together: "1, 2, 3 steps to the door…"',
      body: 'Sophie will learn to count in Bulgarian at kindergarten almost effortlessly. She will NOT learn to count in English unless you make it routine. Number words are weirdly slow to transfer between languages, and English number words are also some of the most useful sight words ("one", "two", "three") for early reading.\n\nThe rule: any time you encounter a small countable thing, count it together in English. Stairs as you climb them. Apples in the bowl. Steps to the door. Buttons on her cardigan. Spoons of cereal. Books on the shelf. Birds on a wire.\n\nGo to ten at first, then twenty, then 30. Three should be solidly counting to 20 in English by age 4. Backwards counting from 10 to 1 is harder — practise as a game ("blast-off!" at the end).\n\nUse number words in real contexts: "Two more bites and then we\'re done." "Three more minutes of play." "You have FOUR books in your bag." Real-context number talk anchors the words.\n\nAvoid letting her get away with Bulgarian numbers. If she says "edno, dve, tri", smile and say "Now in English: one, two, three." Count again together. This is one of the easiest bilingual-balance interventions you can do, and the most important.',
      examples: [
        'Things to count daily: stairs, fruit in the bowl, books on a shelf, buttons, spoons, birds, cars passing, leaves, fingers and toes, steps to the door',
        'Real-context number talk: "Two more bites", "Three minutes till bath", "Five more pages of the book", "You have four crayons"',
        'Counting games: countdown to lift-off ("10, 9, 8…"), hide-and-seek count, "How many do you have?" with anything',
        'Sing: One Two Buckle My Shoe / Five Little Ducks (also a song item) / Five Currant Buns'
      ],
      duration: '2 min, many times per day',
      where: ['anywhere', 'walking', 'mealtime', 'bathtime', 'kindergarten-drop-off'],
      skillTags: ['vocabulary', 'english-maintenance', 'english-conversation'],
      milestoneRefs: [
        'English vocabulary growth',
        'refuses to use English at home'
      ],
      literacyWeight: 1,
      followUp: 'Once she counts to 20 in English fluently, start TEEN NUMBERS work — eleven, twelve, thirteen, fourteen — they\'re the irregular ones that trip kids up. Then move to skip-counting in twos ("2, 4, 6, 8…") as a song. Numeral RECOGNITION (seeing "5" and saying "five") comes alongside this.',
      relatedIds: ['song-five-little-ducks', 'song-five-little-monkeys']
    },

    {
      id: 'conv-color-naming',
      category: 'conversation',
      ages: [3, 4],
      title: 'Colour Naming Beyond the Basics',
      hook: 'On any walk: "Find me something TURQUOISE. Find me something GOLD."',
      body: 'Sophie probably knows red, blue, yellow, green, orange, purple, pink. The job now is to push past the basic eight into the richer English colour vocabulary that books and stories use: turquoise, navy, beige, lilac, scarlet, golden, silver, charcoal, peach, mint.\n\nThese richer colour words appear constantly in picture books and conversation (Julia Donaldson uses "purple prickles" in The Gruffalo for a reason — the specificity is what makes the language rich). Without them she\'ll default to "blue" for everything from sky to navy to turquoise.\n\nIntroduce one new colour word per week. Find it in real life: "Look — that car is SILVER. Silver is like shiny grey." Repeat across a few days. Test casually: "Can you find me something silver in the kitchen?"\n\nGames: "I spy something turquoise." Sort her crayons by colour and name each shade. Mix paint or play-doh and name the result ("red plus white makes PINK").\n\nDon\'t bother with every colour name in English. The list below has the dozen worth knowing. Specialist colours (cerulean, magenta) can wait.',
      examples: [
        'Core 8 (must be solid): red, blue, yellow, green, orange, purple, pink, brown',
        'Plus 5 essentials: black, white, grey, gold, silver',
        'Richer vocab to add: turquoise, navy, lilac, scarlet, peach, mint, beige, cream, charcoal',
        'Modifier words: light, dark, bright, pale, deep ("dark blue", "pale pink", "bright orange")',
        'Texture/finish modifiers: shiny, matte, sparkly, glittery, see-through ("clear")'
      ],
      duration: '3 min',
      where: ['walking', 'outdoor', 'home', 'mealtime', 'anywhere'],
      skillTags: ['vocabulary', 'description', 'english-conversation', 'english-maintenance'],
      milestoneRefs: [
        'names 8+ colours',
        'English vocabulary growth'
      ],
      literacyWeight: 1,
      followUp: 'Once she has 12–15 colour words, layer in modifiers: "dark blue", "pale pink", "bright orange". Then combine with shape and size for the full three-adjective description (see Describe It In Three Ways).',
      relatedIds: ['conv-describe-things', 'out-colour-scavenger']
    },

    {
      id: 'conv-action-verbs',
      category: 'conversation',
      ages: [3, 4],
      title: 'Action Verbs On The Move',
      hook: 'Watch any person or animal: "What is she DOING?" Push for specific verbs.',
      body: 'Three-year-olds default to a handful of action verbs in English: walking, running, eating, playing. English actually has dozens of specific action verbs that make speech vivid: striding, sprinting, nibbling, gobbling, skipping, hopping, tiptoeing, dashing, crawling. Owning these turns her speech from beige to colourful.\n\nThe trick: stop accepting generic verbs. When she says "the man is walking", look together: "Is he WALKING or STRIDING? Strolling? Marching?" Choose the best fit and let her hear the contrast. "Look, he\'s marching — he\'s in a hurry."\n\nUse picture books explicitly for this. The Gruffalo: "the mouse SCAMPERED" — not walked. Books are full of specific verbs you can mine. Whenever a vivid verb comes up, point it out and act it out: "Let\'s SCAMPER — what does scampering look like?"\n\nMime them. Skip across the room saying "skipping". Tiptoe saying "tiptoeing". Stomp saying "stomping". Physical embodiment locks the meaning in.\n\nThe list below covers the action verbs worth owning at 3. Aim to add 2–3 per week. Don\'t drill — use them in real moments. "Don\'t STOMP, the baby is sleeping. Can you TIPTOE?"',
      examples: [
        'Movement: walk, run, sprint, skip, hop, jump, leap, march, stride, stroll, tiptoe, crawl, climb, scamper, dash, race, wander',
        'Eating: eat, nibble, gobble, munch, chew, slurp, sip, gulp, lick, taste, swallow',
        'Hand actions: grab, hold, drop, throw, catch, pick up, put down, squeeze, push, pull, pat, stroke, tickle',
        'Voice: whisper, shout, mumble, giggle, laugh, cry, sob, sigh, sing, hum, scream',
        'Mind: think, wonder, remember, forget, dream, imagine, decide, choose'
      ],
      duration: '2 min',
      where: ['walking', 'outdoor', 'home', 'anywhere'],
      skillTags: ['vocabulary', 'description', 'english-conversation', 'english-maintenance'],
      milestoneRefs: [
        'English sentences of 4–5 words',
        'English vocabulary growth'
      ],
      literacyWeight: 1,
      followUp: 'When she\'s confidently using specific action verbs, introduce ADVERBS: "She\'s walking SLOWLY", "He\'s sprinting QUICKLY", "She\'s tiptoeing QUIETLY". Verb plus adverb is real sentence-level English and the next stretch zone.',
      relatedIds: ['conv-describe-things', 'game-animal-charades']
    },

    {
      id: 'conv-body-parts',
      category: 'conversation',
      ages: [3, 4],
      title: 'Body Parts In English',
      hook: 'Touch each part as you name it: "elbow, wrist, ankle, knee, shin, chin."',
      body: 'Sophie almost certainly knows nose, eyes, mouth, hands, feet in English. She may know elbow, knee, tummy. She probably doesn\'t know wrist, ankle, shin, thigh, jaw, forehead, eyebrow, lashes, chin, knuckles, palm, heel. These are the second-tier body words that come up constantly — at the doctor, when she\'s hurt, when describing pictures — and they\'re Bulgarian-dominant at kindergarten.\n\nDo this as a body-parts song or chant. Touch the part as you say the word. Repeat in random order. "Ankle, knee, elbow, wrist!" "Chin, forehead, eyebrow, nose!" Make it fast and silly.\n\nThe Heads, Shoulders, Knees and Toes song is the obvious vehicle — use it (it\'s a separate item). Beyond that song, just incorporate the words throughout the day: "Let\'s wash your KNUCKLES." "There\'s yogurt on your CHIN." "Look at those long EYELASHES."\n\nWhen she\'s hurt or being examined by a doctor, that\'s the prime moment: "Does your WRIST hurt? Your ELBOW? Your ANKLE?" Practical context locks the word in fast.\n\nThe list below is age-3 appropriate. Skip body parts that get awkward — save those for older.',
      examples: [
        'Face: forehead, eyebrow, eyelashes, eyes, nose, nostrils, cheeks, mouth, lips, tongue, teeth, chin, jaw, ears',
        'Body: neck, shoulder, chest, tummy, back, bottom, hips',
        'Arms: arm, elbow, wrist, hand, palm, fingers, thumb, knuckles, fingernails',
        'Legs: leg, thigh, knee, shin, calf, ankle, foot, heel, toes, toenails',
        'Inside (basic): heart, brain, bones, blood, lungs'
      ],
      duration: '3 min',
      where: ['bathtime', 'home', 'mealtime', 'anywhere'],
      skillTags: ['vocabulary', 'english-maintenance', 'english-conversation'],
      milestoneRefs: [
        'English vocabulary growth',
        'refuses to use English at home'
      ],
      literacyWeight: 1,
      followUp: 'Once body parts are solid, add what they DO: "Eyes are for seeing. Ears are for hearing. Tongue is for tasting and talking. Knees are for bending." Function vocabulary plus body-part nouns = doctor-visit-ready English.',
      relatedIds: ['song-head-shoulders', 'play-doctor']
    },

    {
      id: 'conv-family-words',
      category: 'conversation',
      ages: [3, 4],
      title: 'Family Words',
      hook: 'Use the English family titles consistently: mum, dad, granny, grandpa, aunt, uncle, cousin.',
      body: 'Family words are extraordinarily important in English literacy because they appear in nearly every picture book and family-themed story. Sophie may use Bulgarian family terms with grandparents and aunts, which is fine — but she must ALSO be fluent in the English versions for books and stories to make sense.\n\nDecide on the English family titles you\'ll use and stick to them. Typical British set: mum (or mummy), dad (or daddy), granny / grandma / nan, grandpa / granddad, auntie, uncle, cousin, sister, brother. Don\'t mix systems — pick one set and use it.\n\nIn picture books, point out the family roles: "This is the BROTHER, this is the SISTER, this is their MUM." Sophie often has Bulgarian family vocabulary much more solid than English, so books are where the English versions get drilled in.\n\nUse extended family vocabulary explicitly: "Granny is your MUM\'S mum." "Uncle Andrew is your DAD\'S brother." Family-tree talk is great cognitive work and builds the relationships in English.\n\nLook at photos together and name people in English: "Who\'s this? Yes, your COUSIN Lucas. He\'s Auntie\'s SON." This is also a stealth-bilingualism win — many families default to Bulgarian when looking at photos. Don\'t.',
      examples: [
        'Immediate family: mum, mummy, dad, daddy, sister, brother, baby',
        'Grandparents (pick one): granny / grandma / nan / nanny, grandpa / granddad / pops',
        'Extended: aunt / auntie, uncle, cousin, niece, nephew',
        'In-laws (for later): step-mum, step-dad, half-sister, half-brother',
        'Generic: parents, grown-ups, family, relatives, twins',
        'Family-tree phrases: "your mum\'s mum", "your dad\'s brother", "her cousin", "their grandchildren"'
      ],
      duration: '3 min',
      where: ['home', 'mealtime', 'bedtime', 'anywhere'],
      skillTags: ['vocabulary', 'english-maintenance', 'english-conversation'],
      milestoneRefs: [
        'English vocabulary growth',
        'refuses to use English at home'
      ],
      literacyWeight: 1,
      followUp: 'When family vocabulary is solid, introduce POSSESSIVE \'s: "Granny\'s house", "Daddy\'s car", "Sophie\'s book". The possessive \'s is one of the trickiest tiny grammar points in English — drill it through family talk first.',
      relatedIds: ['book-each-peach-pear-plum', 'conv-describe-things']
    },

    {
      id: 'conv-weather-words',
      category: 'conversation',
      ages: [3, 4],
      title: 'Weather Words',
      hook: 'Each morning: "What\'s the weather like today? Sunny? Drizzly? Freezing?"',
      body: 'Weather words are a daily-use vocabulary set that English has in remarkable richness — sunny, cloudy, drizzly, windy, freezing, mild, muggy, foggy, frosty, blustery. Most of them are absent from a 3-year-old\'s vocabulary unless you put them there.\n\nMake the morning weather check a routine. Look out the window with her: "What\'s the weather like? Is it sunny? Cloudy?" Push past the first answer: "Is it just cloudy, or is it RAINING? Just drizzle, or proper rain?" The graded vocabulary (drizzle / rain / pouring) is the gold.\n\nLink weather to what you wear: "It\'s freezing — let\'s put on your hat and gloves." "It\'s drizzly — bring a raincoat." Vocabulary plus practical consequence sticks fast.\n\nLearn weather idioms gradually: "raining cats and dogs", "under the weather" (for sick), "a bolt from the blue". Idioms are advanced English and a child who plays with them at 4 is doing extraordinary work.\n\nBuild a weather chart together — a piece of paper with the days of the week and a daily drawing of the weather. This combines pre-writing, vocabulary, and the days-of-the-week sequence.',
      examples: [
        'Basic: sunny, cloudy, rainy, windy, snowy, cold, hot, warm',
        'Richer: drizzly, pouring, freezing, mild, muggy, humid, foggy, frosty, blustery, breezy, stormy, icy',
        'Sky words: clear, overcast, grey, bright, blazing, dim',
        'Weather things: cloud, raindrop, snowflake, puddle, rainbow, thunder, lightning, hailstone, icicle, gust',
        'Idioms (for later): "raining cats and dogs", "under the weather", "every cloud has a silver lining"'
      ],
      duration: '2–3 min daily',
      where: ['home', 'mealtime', 'walking', 'outdoor', 'kindergarten-drop-off'],
      skillTags: ['vocabulary', 'english-maintenance', 'english-conversation'],
      milestoneRefs: [
        'English vocabulary growth',
        'refuses to use English at home'
      ],
      literacyWeight: 1,
      followUp: 'Once weather words flow, introduce seasonal vocabulary: "In WINTER it\'s cold and snowy. In SUMMER it\'s warm and sunny." Then add months and seasons. Then explore weather across countries — "In Bulgaria it snows. In Spain it doesn\'t." Geography plus vocabulary.',
      relatedIds: ['out-weather-words', 'conv-describe-things']
    },

    {
      id: 'conv-prepositions',
      category: 'conversation',
      ages: [3, 4],
      title: 'Prepositions Game',
      hook: 'Give her a teddy and command: "Put teddy ON the chair. UNDER the table. BEHIND the cushion."',
      body: 'Prepositions — in, on, under, behind, in front of, next to, between, above, below — are tiny words that do massive grammatical work in English. They\'re also where bilingual kids often fall behind, because Bulgarian and English preposition systems don\'t map cleanly. So the home has to drill them.\n\nThe simplest game: give her a small soft toy and issue commands. "Put teddy ON the chair. Under the table. Next to the cushion. Between the books. Behind the curtain." Each placement is a preposition lesson plus a listening-comprehension test.\n\nThen flip it: she gives YOU the commands. The first time she successfully tells you "Put teddy BEHIND the chair" with the right preposition, it\'s real ownership of the word.\n\nIn conversation, label spatial relations explicitly: "Your shoes are UNDER the bed." "The biscuits are IN the cupboard ABOVE the fridge." "Daddy is BEHIND you." Even when she could deduce it, saying the preposition aloud trains her ear.\n\nThe full preposition set is below. Master in/on/under by 3.5, then add behind/in front of/next to. Between, through, around come slightly later.',
      examples: [
        'Top tier (must own by 3.5): in, on, under, next to, behind, in front of',
        'Second tier: above, below, beside, between, through, around, over, by',
        'Movement prepositions: into, out of, onto, off, up, down, across, away from, towards',
        'Game commands: "Put teddy ON the chair / UNDER the table / BEHIND the door / BETWEEN the books / IN FRONT OF the lamp / NEXT TO the cushion"',
        'Real-life cues: "Your shoes are UNDER the bed", "The keys are ON the table", "Daddy is BEHIND you", "Look UP at the sky"'
      ],
      duration: '5 min',
      where: ['home', 'mealtime', 'bathtime', 'anywhere'],
      skillTags: ['vocabulary', 'english-maintenance', 'english-conversation', 'comprehension'],
      milestoneRefs: [
        'English sentences of 4–5 words',
        'English vocabulary growth'
      ],
      literacyWeight: 1,
      followUp: 'When prepositions are solid, layer them in tightly: "Put teddy BEHIND the cushion that\'s ON the chair NEXT TO the table." Nested prepositional phrases are full English sentences and excellent listening practice.',
      relatedIds: ['game-simon-says', 'conv-describe-things']
    },

    {
      id: 'conv-animal-sounds',
      category: 'conversation',
      ages: [3, 4],
      title: 'Animal Sounds In English',
      hook: 'Quiz her: "What does a dog say in English? Woof! What does a sheep say? Baa!"',
      body: 'Every language gives animals different sounds. In Bulgarian, a dog says "бау-бау" (bau-bau); in English, "woof". A duck in English says "quack"; in many other languages, it\'s something else. These animal-sound differences are charming and they are also one of the easiest, most child-friendly ways to remind her that English has its own sound-world.\n\nGo through the standard English animal sounds slowly. Make the noise dramatically. "The cow says MOO. Big deep moo. Mooooo." She\'ll laugh and copy. "The pig says OINK OINK. The duck says QUACK QUACK."\n\nPoint out the differences with Bulgarian explicitly when she\'s about 4 — it\'s funny to her and it builds metalinguistic awareness (the awareness that language IS a system, which is huge for early literacy). "In English a duck says QUACK. What does it say in Bulgarian?" Laugh at how different they are.\n\nUse this in Old MacDonald (a separate song item), in book reading, on walks past dogs and cats. "Look — what does that doggy say?" Wait for "woof", not the Bulgarian equivalent.\n\nThe list below covers the standard English farmyard plus a few extras. By 4 she should automatically respond with the English sound when prompted in English context.',
      examples: [
        'Farm: cow → moo, sheep → baa, pig → oink oink, duck → quack, horse → neigh, goat → maa, hen → cluck, cockerel → cock-a-doodle-doo',
        'Pets: dog → woof / bow-wow, cat → miaow / meow, mouse → squeak, rabbit → (sniff sniff — no classic sound)',
        'Wild: lion → roar, tiger → growl, wolf → howl (awooo), bear → growl, snake → hisss, frog → ribbit, owl → twit-twoo, bee → buzz, fly → bzzz',
        'Bird sounds: tweet, chirp, caw (crow), hoot, coo (pigeon/dove)',
        'For the metalinguistic conversation later: "In English the duck says QUACK. What about in Bulgarian?"'
      ],
      duration: '3 min',
      where: ['home', 'walking', 'outdoor', 'anywhere'],
      skillTags: ['vocabulary', 'english-maintenance', 'phonemic-awareness', 'english-conversation'],
      milestoneRefs: [
        'English vocabulary growth',
        'refuses to use English at home'
      ],
      literacyWeight: 1,
      followUp: 'After basic sounds, introduce animal MOVEMENT words: dogs trot, cats prowl, snakes slither, frogs hop, fish swim, birds fly, horses gallop. Verb plus animal pairings are great vocabulary and great for animal charades (see game).',
      relatedIds: ['song-old-macdonald', 'game-animal-charades']
    },

    {
      id: 'conv-please-thank-you',
      category: 'conversation',
      ages: [3, 4],
      title: 'Polite Phrases in English',
      hook: 'Insist on full polite English: "May I have…?" "Thank you so much." "You\'re welcome."',
      body: 'Politeness phrases — "please", "thank you", "you\'re welcome", "excuse me", "sorry", "may I", "could I" — are some of the highest-frequency words in spoken English. They also distinguish a child who speaks English from one who speaks beautiful English. Sophie\'s RP accent deserves matching English manners.\n\nMake the rule explicit: in English contexts, requests must be in English with please. If she says "Give me biscuit", smile and say "Try again." She\'ll quickly reach for "Could I have a biscuit please?" Hold the line cheerfully — this is a one-time investment that pays forever.\n\nModel the FULL form, not just the short form. Not "ta", but "thank you very much". Not "yeah", but "yes please". Not "what?", but "I beg your pardon?" Bulgarian school will not teach these registers; you are the only source.\n\nIntroduce graded politeness: "Can I…" (casual), "Could I…" (more polite), "May I…" (most polite, used with new adults). She\'ll get it; it\'s no harder than any other vocabulary.\n\nWhen she uses a polite phrase unprompted, react big. "You said \'thank you so much\' — that was lovely English!" Catch her being polite, not impolite.',
      examples: [
        'Requests: "Please", "Could I have…", "May I have…", "Would you mind…", "Excuse me", "I\'d like…"',
        'Thanks: "Thank you", "Thank you very much", "Thanks a lot", "Thank you so much", "Much appreciated"',
        'Responses to thanks: "You\'re welcome", "No problem", "Don\'t mention it", "Any time", "My pleasure"',
        'Apologies: "Sorry", "I\'m so sorry", "I beg your pardon", "Excuse me", "Pardon me"',
        'Listening responses: "Yes please", "No thank you", "I beg your pardon?", "Could you say that again please?"'
      ],
      duration: '2 min, constant reinforcement',
      where: ['mealtime', 'home', 'anywhere'],
      skillTags: ['vocabulary', 'english-maintenance', 'english-conversation', 'turn-taking'],
      milestoneRefs: [
        'English sentences of 4–5 words',
        'refuses to use English at home'
      ],
      literacyWeight: 1,
      followUp: 'When the basics flow, introduce small-talk phrases: "How are you?" "Very well, thank you. And you?" These ritual exchanges are exactly what an English-speaking adult expects from a polite child, and they\'re completely absent from Bulgarian-school English.',
      relatedIds: ['play-restaurant', 'play-tea-party']
    },

    {
      id: 'conv-question-words',
      category: 'conversation',
      ages: [3, 4],
      title: 'Question Words: Who, What, Where, When, Why, How',
      hook: 'Drill the six question words by quizzing each other: "Ask me a WHO question."',
      body: 'The six English question words — who, what, where, when, why, how — are tiny words that unlock huge sentence structures. Asking and answering "wh-" questions is the engine of conversation, and many bilingual 3-year-olds use them only partially in English.\n\nMake a game of it. "I\'m going to think of something. You ask me WHO, WHAT, WHERE, WHEN, WHY, HOW questions." Then she asks: "What is it?" "Where is it?" "How big is it?" until she guesses. This trains question-FORMATION, not just question-answering — much harder, much more valuable.\n\nFlip it: you ask her about her day using all six. "WHO did you play with? WHAT did you play? WHERE did you play? WHEN did you do that? WHY did you do that? HOW did it feel?" Six different angles on the same event = six chunks of English practice.\n\nWatch her question-asking pattern. Three-year-olds typically use what/where freely but skip when/why/how. If she\'s missing one, drill it specifically. "Today let\'s ask lots of HOW questions. Ready? How do birds fly? How do we make toast? How does ice melt?"\n\nThe sentence structure for English questions is genuinely hard (subject-verb inversion: "Where IS the dog?" vs "The dog IS where?"). She\'ll make errors. Model the correct form by re-casting, don\'t explicitly correct.',
      examples: [
        'WHO questions: "Who is your best friend?" / "Who lives upstairs?" / "Who made this picture?"',
        'WHAT questions: "What\'s your favourite food?" / "What did you do today?" / "What\'s in the box?"',
        'WHERE questions: "Where are my keys?" / "Where do penguins live?" / "Where shall we go?"',
        'WHEN questions: "When is your birthday?" / "When do we eat dinner?" / "When did you last see Granny?"',
        'WHY questions: "Why is the sky blue?" / "Why do you love that toy?" / "Why are we late?"',
        'HOW questions: "How do birds fly?" / "How do you feel?" / "How big is an elephant?" / "How many fingers?"'
      ],
      duration: '5 min',
      where: ['mealtime', 'car', 'walking', 'bedtime', 'anywhere'],
      skillTags: ['english-conversation', 'question-asking', 'vocabulary', 'english-maintenance'],
      milestoneRefs: [
        'English sentences of 4–5 words',
        'tell a simple story with a beginning and end'
      ],
      literacyWeight: 1,
      followUp: 'When the six question words flow, introduce "which" (choice between options: "Which one do you want?") and "whose" (possession: "Whose shoes are these?"). The full eight question words give her the complete English questioning toolkit.',
      relatedIds: ['conv-why-stretching', 'conv-what-if']
    },

    // ─── LITERACY (21 items) ───────────────────────────────────────

    {
      id: 'lit-letter-o-hunt',
      category: 'literacy',
      ages: [3, 4],
      title: 'Letter O Hunt',
      hook: 'Today is O day. Find five things around the house that begin with /o/ (as in "octopus").',
      body: 'After S, O is the second letter of SOPHIE — the next one to own. O has a short sound (/o/ as in "octopus", "on", "orange") and a long sound (/oh/ as in "open", "over"). Start with the SHORT sound — that\'s the one she\'ll see in three-letter decodable words first (got, hot, pot, dog).\n\nMorning: write O on paper. "This is O. O says /o/ — like the start of OCTOPUS." Make a round mouth and say /o/. Trace the O with her finger — a round letter, like a balloon.\n\nMidday: hunt for /o/ words. Orange, octopus, olive, ostrich, omelette, otter, ox. Honestly, /o/ initial words are rarer than /s/ — so include WORDS WITH O IN THE MIDDLE too: hot, pot, fox, box, dog, log, frog, mop. Point to those and say "Listen: /h/ - /o/ - /t/. HOT. The O is in the middle."\n\nEvening: trace O in foam, flour, play-doh. O is the easiest letter shape — perfect for first-week confidence.\n\nDo a week of O. The following week, P (the third letter of SOPHIE).',
      examples: [
        'Initial /o/ words: octopus, orange, olive, ostrich, omelette, otter, ox, on, off, ouch, owl (note: owl is technically /ow/, but works)',
        'Middle /o/ words: hot, pot, dog, log, frog, fox, box, mop, top, dot, pop, sock, rock, lock',
        'Things to find in the house: orange (fruit), olive oil, octopus toy, omelette for breakfast, "On" buttons, hot food, soft toys named with O'
      ],
      duration: '5 min per session, all week',
      where: ['home', 'kitchen', 'bathtime'],
      skillTags: ['letter-names', 'letter-sounds', 'phonemic-awareness', 'pre-writing'],
      milestoneRefs: [
        'Recognises every letter in her own name',
        'Knows all 26 letter names',
        'Cannot name at least half the letters'
      ],
      literacyWeight: 3,
      followUp: 'Once short /o/ is solid, briefly introduce the long /oh/ sound: "Sometimes O says /oh/ — like in OPEN, OVER, OAT. The same letter, two different sounds." Don\'t belabour it — just plant the seed. The same one-letter, two-sound concept will return for every vowel.',
      relatedIds: ['lit-letter-s-hunt', 'lit-letter-p-hunt', 'game-i-spy-sounds']
    },

    {
      id: 'lit-letter-p-hunt',
      category: 'literacy',
      ages: [3, 4],
      title: 'Letter P Hunt',
      hook: 'Today is P day. Find five /p/ words and trace P on paper together.',
      body: 'P is the third letter of SOPHIE and also the P of Jolly Phonics SATPIN — double-duty. P is one of the easiest sounds to make (a sharp puff of air with the lips closed and released), so she\'ll have instant success.\n\nMorning: write P on paper. "This is P. P says /p/ — like POP." Make a puff sound — hold a tissue in front of your mouth and watch it flutter when you say /p/. Sophie will love that visual.\n\nMidday: /p/ hunt. Pillow, pasta, pizza, plate, paper, pen, pig, pink, purple, pear, plum, potato, pyjamas. The kitchen has loads of P. Each find: "/p/-asta! Pasta starts with /p/!"\n\nEvening: trace P. P starts with a vertical line down, then a half-circle at the top right. "Down, then around the top." If she\'s still struggling with pencil grip, just trace in foam or sand with a finger.\n\nP is also the start of the Jolly Phonics SATPIN sequence — so once she owns P sound + S sound + A sound + T sound + I sound + N sound, she has the six letters that unlock dozens of three-letter words. She\'s on the runway to decoding.',
      examples: [
        'Initial /p/ words: pillow, pasta, pizza, plate, paper, pen, pig, pink, purple, pear, plum, potato, pyjamas, park, play, pop, paint',
        'Tricky: words starting with "ph" sound like /f/, not /p/ (phone, photo) — skip these for now',
        'Words with P in middle/end: cup, top, mop, hop, soap, sleep, deep, sheep, lap, nap, tap, slip',
        'P-rhymes: pop, hop, top, stop, shop, mop, drop, chop'
      ],
      duration: '5 min per session, all week',
      where: ['home', 'kitchen', 'bathtime'],
      skillTags: ['letter-names', 'letter-sounds', 'phonics-p', 'phonemic-awareness', 'pre-writing'],
      milestoneRefs: [
        'Recognises every letter in her own name',
        'Knows all 26 letter names',
        'Cannot name at least half the letters'
      ],
      literacyWeight: 3,
      followUp: 'Once P sound is owned, push for blending: "/p/ + /a/ + /t/ = PAT." Then /p/+/i/+/n/ = pin, /p/+/o/+/p/ = pop. These three-sound blends are her first real DECODING — she\'s reading.',
      relatedIds: ['lit-letter-s-hunt', 'lit-letter-o-hunt', 'lit-letter-h-hunt', 'lit-bob-books']
    },

    {
      id: 'lit-letter-h-hunt',
      category: 'literacy',
      ages: [3, 4],
      title: 'Letter H Hunt',
      hook: 'Today is H day. H is hot breath — make her hand feel the /h/ puff.',
      body: 'H is the fourth letter of SOPHIE. H is interesting because it\'s a "breathy" sound — there\'s no real voice involved, just hot air. Hold her hand in front of your mouth and say /h/. She\'ll feel the warmth. "H is HOT breath." That\'s the lesson.\n\nMorning: write H on paper. "This is H. H says /h/ — like HAT, HOT, HAPPY." Have her say /h/ onto her own palm and feel her breath.\n\nMidday: /h/ hunt. Hat, hand, head, hair, hot, hop, house, home, ham, honey, hippo, horse. H is super common in everyday words — easy hunt.\n\nEvening: trace H. H is two vertical lines and a horizontal bar — slightly trickier to write than O or P. Three strokes. Demonstrate: "Down, down, across." Don\'t demand perfect form; finger-tracing in foam is just as valuable as pencil work.\n\nA fun trick: at H week, sing "Heads, Shoulders, Knees and Toes" (separate song item) and emphasise the H of HEADS. Songs with H words help lock the sound in.',
      examples: [
        'Initial /h/ words: hat, hand, head, hair, hot, hop, house, home, ham, honey, hippo, horse, happy, hungry, hill, hen',
        'Body parts that start with H: head, hand, hair, heel, hip (small list — useful for body-parts game)',
        'H in nursery rhymes: Hickory Dickory, Humpty, Hey Diddle Diddle, "How are you?"',
        'Silent H trap (for later): hour, honest — H is silent here. Don\'t introduce yet.'
      ],
      duration: '5 min per session, all week',
      where: ['home', 'kitchen', 'bathtime'],
      skillTags: ['letter-names', 'letter-sounds', 'phonemic-awareness', 'pre-writing'],
      milestoneRefs: [
        'Recognises every letter in her own name',
        'Knows all 26 letter names',
        'Cannot name at least half the letters'
      ],
      literacyWeight: 3,
      followUp: 'When /h/ is solid, contrast it with /p/ — both are puffy sounds, but H has no voice and is longer; P is sharp and short. Hold her hand and demonstrate the difference. Sound-contrast work builds phonemic precision.',
      relatedIds: ['lit-letter-s-hunt', 'lit-letter-p-hunt', 'lit-letter-i-hunt']
    },

    {
      id: 'lit-letter-i-hunt',
      category: 'literacy',
      ages: [3, 4],
      title: 'Letter I Hunt',
      hook: 'Today is I day. I is "igloo" — short /i/. Find five middle-/i/ words: pin, sit, bin, pig, lip.',
      body: 'I is the fifth letter of SOPHIE and also the I of Jolly Phonics SATPIN — double-duty again. I is a vowel with two main sounds: SHORT /i/ (as in "igloo", "in", "sit") and LONG /eye/ (as in "ice", "I", "ride"). Start with SHORT — same as O.\n\nMorning: write I on paper. "This is I. I says /i/ — like IGLOO. /i/-/i/-/i/." Use a short, clipped sound — not "eye". The mouth is small and slightly open.\n\nMidday: /i/ hunt. INITIAL /i/ words are rare (igloo, ink, insect, in, it, is), so spend most of your hunt on MIDDLE /i/ words: sit, pin, bin, pig, lip, hit, mix, fix, wig, big, fish, ship. Three-letter middle-i words are the bread and butter of Bob Books and decodable readers.\n\nEvening: trace I. I is the simplest letter — one straight line down. With dots on top for the lowercase i. Add the dot last — kids love the dot.\n\nOnce I sound is solid, you have S, O, P, H, I — five out of six of her name. Just E to go.',
      examples: [
        'Initial /i/: igloo, ink, insect, in, it, is, if, ill',
        'Middle /i/: sit, pin, bin, pig, lip, hit, mix, fix, wig, big, fish, ship, ring, sing, swim, kid, did',
        'Tricky long /eye/ I (introduce later): ice, ride, hide, like, time, mine, five, fine',
        'Word family worth practising: -in (pin, bin, sin, fin, tin, win, chin, thin) — these are first decodable words'
      ],
      duration: '5 min per session, all week',
      where: ['home', 'kitchen', 'bathtime'],
      skillTags: ['letter-names', 'letter-sounds', 'phonics-i', 'phonemic-awareness', 'pre-writing'],
      milestoneRefs: [
        'Recognises every letter in her own name',
        'Knows all 26 letter names',
        'Cannot name at least half the letters'
      ],
      literacyWeight: 3,
      followUp: 'When short /i/ is solid, blend three-sound words: /p/+/i/+/n/ = PIN. /s/+/i/+/t/ = SIT. /b/+/i/+/g/ = BIG. Three-sound blends with a middle vowel are the foundation of decoding. Spend weeks on this.',
      relatedIds: ['lit-letter-s-hunt', 'lit-letter-h-hunt', 'lit-letter-e-hunt', 'lit-bob-books']
    },

    {
      id: 'lit-letter-e-hunt',
      category: 'literacy',
      ages: [3, 4],
      title: 'Letter E Hunt',
      hook: 'Today is E day. The last letter of SOPHIE. Find five /e/ words: egg, elephant, ear.',
      body: 'E is the sixth and final letter of SOPHIE. After this week, she owns every letter of her own name — a huge milestone. Short /e/ (as in "egg", "ear", "elephant") is the focus.\n\nMorning: write E on paper. "This is E. E says /e/ — like EGG. /e/-/e/-/e/." Make a small wide-mouth sound. Then write SOPHIE in full underneath: "Look — S, O, P, H, I, E. Six letters. They make YOUR name. Can you point to each one?"\n\nMidday: /e/ hunt. Egg, elephant, ear, elf, end, exit, every. Middle-e words: bed, red, hen, ten, pen, leg, net, get, set, vet, met. The -ed family (bed, red, fed, led, said, head) is one of the most useful early decoding sets.\n\nEvening: trace E. E is three horizontal lines and one vertical — four strokes, more complex than I. "Down, then three lines across — top, middle, bottom." Lowercase e is rounder and simpler — practise both forms.\n\nBig celebration at the end of E week: she now knows all six letters of her name. Write SOPHIE on a card and let her trace it. That\'s the prize.',
      examples: [
        'Initial /e/: egg, elephant, ear, elf, end, exit, every, empty, edge',
        'Middle /e/: bed, red, hen, ten, pen, leg, net, get, set, vet, met, wet, jet, fed, led, said',
        '-ed word family: bed, red, fed, led, said, head, dead (avoid the dark ones for 3 — stick with bed/red/fed)',
        '-en word family: hen, ten, pen, when, then, men, den',
        'Long /ee/ (for later): be, he, she, we, me, see, tree, bee, three, sleep'
      ],
      duration: '5 min per session, all week',
      where: ['home', 'kitchen', 'bathtime'],
      skillTags: ['letter-names', 'letter-sounds', 'phonemic-awareness', 'pre-writing'],
      milestoneRefs: [
        'Recognises every letter in her own name',
        'Knows all 26 letter names',
        'Cannot name at least half the letters'
      ],
      literacyWeight: 3,
      followUp: 'After E week, do a SOPHIE recap: write each letter on a separate card. Shuffle them. Ask her to put them in order to spell her name. That\'s name-recognition, sequencing, and letter recall combined. Frame the finished name and display it.',
      relatedIds: ['lit-letter-i-hunt', 'lit-writing-name', 'lit-sight-word-i-am']
    },

    {
      id: 'lit-phonics-a',
      category: 'literacy',
      ages: [3, 4],
      title: 'Phonics A (Jolly Phonics)',
      hook: 'Make the /a/ action: hand to mouth like you\'ve seen an ant: "/a/, /a/, ant, ant!"',
      body: 'After Sophie\'s own name letters (S, O, P, H, I, E), follow the Jolly Phonics SATPIN order. S is done. Next is A — the most common vowel sound in English and the gateway to dozens of three-letter words.\n\nShort /a/ as in "apple", "ant", "cat", "hat". The Jolly Phonics action for A is brushing imaginary ants off your arm while saying "/a/, /a/, /a/!" — it\'s silly, it\'s memorable, it works. Use that action consistently.\n\nMorning: write A. "A says /a/ — like APPLE. /a/, /a/, /a/!" Brush imaginary ants. She\'ll laugh and copy. Show both forms: capital A (the triangle one) and lowercase a (the round one with the tail). For reading, lowercase matters most.\n\nMidday: /a/ words. Initial: apple, ant, alligator, astronaut, axe, animal. Middle: cat, hat, bat, mat, sat, pan, can, fan, man, bag, dad. The middle-/a/ words are her first decodable set.\n\nFirst blending session: "/c/+/a/+/t/ = CAT. /h/+/a/+/t/ = HAT. /b/+/a/+/g/ = BAG." Slow at first, then faster. The moment she blends a three-sound word on her own is sacred. Note the date — it\'s the start of reading.',
      examples: [
        'Jolly Phonics action: pretend ants are crawling on your arm, brush them off saying /a/, /a/, /a/',
        'Initial /a/: apple, ant, alligator, astronaut, axe, animal, add, am, an, at, and',
        '-at family: cat, hat, bat, mat, sat, rat, fat, that, flat, chat — most powerful early word family',
        '-an family: can, fan, man, pan, ran, tan, van, plan',
        '-ag family: bag, tag, wag, rag, flag',
        'First blending words to practise: cat, hat, sat, bat, mat, pat, ran, can, pan, man'
      ],
      duration: '5 min daily, weeks-long',
      where: ['home', 'kitchen', 'mealtime'],
      skillTags: ['letter-sounds', 'phonics-a', 'phonemic-awareness', 'pre-writing'],
      milestoneRefs: [
        'Knows all 26 letter names',
        'Cannot name at least half the letters',
        'letters make words'
      ],
      literacyWeight: 3,
      followUp: 'Once /a/ blending works, you have S + A + T = enough for the first Bob Book (Mat). Read it with her — she will literally read her first English book. This is the highest-reward moment of the early literacy journey.',
      relatedIds: ['lit-letter-s-hunt', 'lit-phonics-t', 'lit-bob-books', 'lit-jolly-phonics-songs']
    },

    {
      id: 'lit-phonics-t',
      category: 'literacy',
      ages: [3, 4],
      title: 'Phonics T (Jolly Phonics)',
      hook: 'Make the /t/ action: tap your foot like a clock\'s ticking: "/t/, /t/, /t/!"',
      body: 'T is the third sound in the Jolly Phonics SATPIN sequence. /t/ is a sharp, short sound made by the tongue tapping behind the top teeth — instant, no voice. The Jolly Phonics action is tapping your foot like a clock ticking: "/t/, /t/, /t/, like a clock saying tick tock."\n\nMorning: write T. "T says /t/ — like TIME. /t/, /t/, /t/." Tap your foot. She\'ll do it too. T is one of the easiest letters to write — a horizontal line on top of a vertical line. Two strokes. Practise tracing.\n\nMidday: /t/ words. Initial: toe, table, tap, towel, teddy, ten, tin, top, tea, train, tractor. Middle and end: cat, hat, sit, hit, pot, hot, pat, mat. The /t/ at the END of words is just as important — many decodable words end in T.\n\nWith S, A, and T mastered, blending unlocks: SAT, TAT, AT. The very first sentence she can decode: "A cat sat." Three words. Three sounds each (max). Real reading. Print it out on paper — let her read it. Praise the roof off the house.',
      examples: [
        'Jolly Phonics action: tap your foot, saying /t/, /t/, /t/ like a clock ticking',
        'Initial /t/: toe, table, tap, towel, teddy, ten, tin, top, tea, train, tractor, talk, tall, tiger',
        'End /t/: cat, hat, sit, hit, pot, hot, pat, mat, sat, bat, foot, boat, what, that',
        'Middle /t/: butter, water, letter, sitting, eating',
        'First three-letter words with S+A+T: sat, tat (made-up but blendable), at, as',
        'First sentences: "A cat sat", "A bat sat", "A rat sat"'
      ],
      duration: '5 min daily',
      where: ['home', 'kitchen', 'mealtime'],
      skillTags: ['letter-sounds', 'phonics-t', 'phonemic-awareness', 'pre-writing'],
      milestoneRefs: [
        'Knows all 26 letter names',
        'Cannot name at least half the letters',
        'letters make words'
      ],
      literacyWeight: 3,
      followUp: 'Once /t/ is solid, blending starts to feel like a real skill. Try minimal pairs: SAT/MAT/CAT/BAT/RAT/HAT — she should be able to swap initial sounds and read each one. This is the heart of phonics.',
      relatedIds: ['lit-phonics-a', 'lit-letter-s-hunt', 'lit-phonics-n', 'lit-bob-books']
    },

    {
      id: 'lit-phonics-n',
      category: 'literacy',
      ages: [3, 4],
      title: 'Phonics N (Jolly Phonics)',
      hook: 'Make the /n/ action: pretend to be a noisy aeroplane: "/nnnnn/!"',
      body: 'N is the sixth and final sound of the Jolly Phonics SATPIN sequence. /n/ is a nasal sound — the tongue touches behind the top teeth and air comes out through the nose. Hold her nose and try to say /n/ — you can\'t, because the air can\'t escape. That trick is unforgettable for a 3-year-old.\n\nMorning: write N. "N says /n/ — like NOSE. /nnnnn/." The Jolly Phonics action is buzzing arms like an aeroplane: "/nnnnnn/, like a plane." She\'ll do it.\n\nMidday: /n/ words. Initial: nose, nest, nut, nappy, nine, name, no, new. Middle: pin, fin, bin, sun, fun, run, can, fan, ten, hen. End N words are huge — they\'re in dozens of three-letter decodables.\n\nAt the end of N week, you have the full SATPIN set: S, A, T, P, I, N. Six sounds. That unlocks: at, in, on (with O), sat, sit, pat, pin, pan, tan, tin, nip, nap, sip, sap, tap, top, pot, pop, an, and, ant, ants. About 30 three-letter words minimum. Make a sticker chart and read them together.',
      examples: [
        'Jolly Phonics action: hold arms out like aeroplane wings, buzz /nnnn/',
        'Initial /n/: nose, nest, nut, nappy, nine, name, no, new, nap, neck, night, noise',
        'End /n/: pin, fin, bin, sun, fun, run, can, fan, ten, hen, men, then, when, an, in, on',
        '-an family (with A+N): can, fan, man, pan, ran, tan, van',
        '-in family (with I+N): pin, bin, fin, tin, win, chin, thin',
        'SATPIN words to celebrate: at, in, on, sat, sit, pat, pan, pin, tan, tap, top, pot, nip, nap, sip, tin, pin, an, and'
      ],
      duration: '5 min daily',
      where: ['home', 'kitchen', 'mealtime'],
      skillTags: ['letter-sounds', 'phonics-n', 'phonemic-awareness', 'pre-writing'],
      milestoneRefs: [
        'Knows all 26 letter names',
        'Cannot name at least half the letters',
        'letters make words'
      ],
      literacyWeight: 3,
      followUp: 'After SATPIN is complete, the next Jolly Phonics block adds C, K, E, H, R, M, D. Then G, O, U, L, F, B. Move at her pace. Mastery of each block before the next. The Bob Books series matches this progression and is the ideal practice corpus.',
      relatedIds: ['lit-phonics-a', 'lit-phonics-t', 'lit-bob-books', 'lit-jolly-phonics-songs']
    },

    {
      id: 'lit-jolly-phonics-songs',
      category: 'literacy',
      ages: [3, 4],
      title: 'Jolly Phonics Songs (YouTube)',
      hook: 'Search "Jolly Phonics songs" on YouTube. Sing them in the car daily.',
      body: 'Jolly Phonics is a synthetic-phonics programme used in most UK primary schools. Its biggest gift to home learners is the SONGS: a catchy song for every letter sound, with built-in actions. Each song embeds the sound, the action, and an example word. Children memorise them effortlessly.\n\nFind the official Jolly Phonics letter sound songs on YouTube (search "Jolly Phonics songs full set"). Pick the SATPIN ones first: S (the snake song), A (the ant song), T (the clock song), P (the pufferfish song), I (the inky mouse song), N (the aeroplane song). Each is 30 seconds.\n\nThe car is the perfect place. Loop them as background music. Within two weeks she\'ll be singing along with the actions. Within a month she\'ll have all six sounds memorised as a song.\n\nKey rule: the songs teach the SOUND, not the letter name. "The snake is in the grass, /s/, /s/, /s/" — not "ess". This is the phonics-first approach. Letter names come later (or in parallel, but secondary).\n\nDon\'t overuse YouTube generally; this is the ONE bit of YouTube that earns its keep for literacy.',
      examples: [
        'Search terms: "Jolly Phonics songs full set", "Jolly Phonics SATPIN songs", "Jolly Phonics group 1"',
        'SATPIN song themes: S = snake, A = ants on arm, T = clock ticking, P = pufferfish (puff puff), I = inky mouse, N = aeroplane',
        'After SATPIN, the next groups are: ck/e/h/r/m/d (group 2), g/o/u/l/f/b (group 3), and so on through all 42 sounds (including digraphs like sh/ch/th/ee/oo)',
        'Companion materials: Jolly Phonics workbooks (Phonics 1, 2, 3) — paid but worth it; available on Amazon'
      ],
      duration: '5 min daily',
      where: ['car', 'home', 'kindergarten-drop-off'],
      skillTags: ['letter-sounds', 'phonemic-awareness', 'phonics-s', 'phonics-a', 'phonics-t', 'phonics-p', 'phonics-i', 'phonics-n'],
      milestoneRefs: [
        'Knows all 26 letter names',
        'Cannot name at least half the letters'
      ],
      literacyWeight: 3,
      followUp: 'When SATPIN songs are mastered, move to group 2 (ck, e, h, r, m, d) songs. The 42 Jolly Phonics sounds cover everything she needs to decode 80%+ of English text. Pair the songs with the Jolly Phonics workbooks (paid, on Amazon) for explicit practice.',
      relatedIds: ['lit-phonics-a', 'lit-phonics-t', 'lit-phonics-n', 'lit-letter-s-hunt']
    },

    {
      id: 'lit-sight-word-a',
      category: 'literacy',
      ages: [3, 4],
      title: 'Sight Word: "a"',
      hook: 'Write "a cat" on paper. Point to "a" and say "this little word means ONE."',
      body: '"A" is one of the most common words in English text. It\'s also a strange one — a single letter that\'s also a whole word, pronounced /uh/ in normal speech (not /ay/). That mismatch confuses beginning readers, so introduce it explicitly.\n\nWrite "a cat" on a card. Big lowercase letters. Point: "This is \'a\'. It\'s a word all by itself. It just means ONE. \'A cat\' means one cat." Pronounce it /uh/ as in normal speech: "uh-cat".\n\nDo similar cards: "a dog", "a hat", "a bag", "a pen". Five cards. Read them with her, pointing to each word. Mix them up; she points and reads.\n\nWatch for the trap: she may try to sound out \'a\' as /a/ (the short letter sound). Correct gently: "When \'a\' is a whole word, it sounds like /uh/. Like \'uh-cat\'." This is her first introduction to the idea that the same letter can sound different in different roles. Don\'t over-explain — just demonstrate.\n\n"A" pairs naturally with SATPIN three-letter words she\'s already decoding. "A cat sat." "A pan." "A pin." Suddenly she\'s reading two-word phrases.',
      examples: [
        'Sentence cards: "a cat", "a dog", "a hat", "a bag", "a pen", "a pin", "a mat", "a tap", "a nap"',
        'Two-word reading: "a cat sat", "a pin", "a man ran", "a hat on", "a pan on the hob"',
        'Other sight words to introduce in same week: "the" (means one specific one)',
        'Common rookie error: sounding "a" as /a/ instead of /uh/ — just re-model, don\'t lecture'
      ],
      duration: '5 min daily',
      where: ['home', 'mealtime', 'bedtime'],
      skillTags: ['sight-words', 'comprehension', 'letter-sounds'],
      milestoneRefs: [
        'Shows print awareness',
        'letters make words',
        'Recognises every letter in her own name'
      ],
      literacyWeight: 3,
      followUp: 'Once "a" is automatic in reading, contrast it with "the". "A cat" (any cat). "The cat" (a specific one). The semantic difference is too subtle for 3 — just teach her both words and let understanding catch up later.',
      relatedIds: ['lit-sight-word-i-am', 'lit-sight-word-the', 'lit-bob-books']
    },

    {
      id: 'lit-sight-word-the',
      category: 'literacy',
      ages: [3, 4],
      title: 'Sight Word: "the"',
      hook: 'Write "the cat" on a card. "The" is on almost every page of every book — own it now.',
      body: '"The" is THE most common word in English. It appears more often than any other. Owning it as a sight word at 3 is like unlocking a master key for every future reading session.\n\nWrite "the" on a big card. Point: "This is THE. It\'s a word. It means a specific one of something. \'The cat\' means THIS cat — not just any cat." Read several "the X" combinations: "the cat", "the dog", "the hat", "the bag", "the pen".\n\nThe pronunciation has two forms in English: /thuh/ before consonants ("the cat") and /thee/ before vowels ("the apple"). Don\'t teach this rule explicitly to a 3-year-old — just model both pronunciations naturally and her ear will catch the pattern over time.\n\nGo on a "the hunt" in any book. Open a page of any picture book and ask her to point to every "the" she can find. There will be lots. Each one she spots gets a cheer. This trains automatic visual recognition — the goal of sight-word work.\n\nCombine "a" and "the" in sentence cards: "A cat. The cat." "A dog. The dog." She\'s now reading article-noun pairs, which is the skeleton of every English sentence.',
      examples: [
        '"the" hunt: open any book and ask her to spot every "the" — she\'ll find dozens',
        'Sentence cards: "the cat", "the dog", "the hat", "the bag", "the sun", "the moon", "the mum", "the dad"',
        'Compare cards: "a cat" vs "the cat", "a dog" vs "the dog"',
        'Two-word sentences with SATPIN: "the cat sat", "the pin", "the man ran", "the hat is on"',
        'Pronunciation note: /thuh/ before consonants, /thee/ before vowels — don\'t teach rule; let her ear catch it'
      ],
      duration: '5 min daily',
      where: ['home', 'mealtime', 'bedtime'],
      skillTags: ['sight-words', 'comprehension', 'letter-sounds'],
      milestoneRefs: [
        'Shows print awareness',
        'letters make words'
      ],
      literacyWeight: 3,
      followUp: 'Once "the" is automatic, build up a sight-word wall in her bedroom. One card per word. Add a new word weekly. After 10 sight words she can read simple captioned books. The classic British 100 high-frequency word list is the target by Reception age (5).',
      relatedIds: ['lit-sight-word-a', 'lit-sight-word-i-am', 'lit-sight-word-see']
    },

    {
      id: 'lit-sight-word-see',
      category: 'literacy',
      ages: [3, 4],
      title: 'Sight Word: "see"',
      hook: 'Write "I see a cat." Read it together pointing to each word.',
      body: '"See" is the third or fourth sight word in most early-reading sequences, after I, am, a, the. It unlocks a whole genre of simple sentences: "I see a cat", "I see a dog", "I see the moon". Suddenly she\'s reading meaningful, picture-supported sentences.\n\nWrite SEE on a card. "This is SEE. It means looking with your eyes. /see/. Three letters: S - E - E. Two E\'s in a row." Show her how the two E\'s together make a long /ee/ sound — her first exposure to a vowel digraph (two letters, one sound), though don\'t use the technical word.\n\nThen write "I see a cat." Read it pointing word-by-word. She reads it back. Then change the last word: "I see a dog. I see a hat. I see a pin." Each variation is a new sentence she\'s reading.\n\nPair with picture book reading: every time you see the word "see" in a book, stop and let her read it. Sight-word ownership comes from repetition, repetition, repetition.\n\nThis is also a great vocabulary anchor. After she\'s read "I see a cat", ask "What ELSE do you see?" — and she\'ll narrate her surroundings. Reading plus expressive language combined.',
      examples: [
        'Sentence cards: "I see a cat", "I see a dog", "I see the sun", "I see the moon", "I see a hat", "I see a pin"',
        'Substitution game: she keeps "I see a ___" and fills in the blank',
        'Pair with the rhyme: "I see, I see, with my little eye…" (a version of I Spy)',
        'Spelling tip to mention casually: "two E\'s together make a /ee/ sound — like in see, tree, bee, three"'
      ],
      duration: '5 min daily',
      where: ['home', 'mealtime', 'bedtime'],
      skillTags: ['sight-words', 'comprehension', 'vocabulary'],
      milestoneRefs: [
        'Shows print awareness',
        'letters make words'
      ],
      literacyWeight: 3,
      followUp: 'After "see" is automatic, add "look" (similar meaning, useful for sentence variety) and "like" (a high-frequency word that opens whole new sentence frames: "I like cats. I like dogs.").',
      relatedIds: ['lit-sight-word-i-am', 'lit-sight-word-my', 'game-i-spy-sounds']
    },

    {
      id: 'lit-sight-word-my',
      category: 'literacy',
      ages: [3, 4],
      title: 'Sight Word: "my"',
      hook: 'Write "I see my mum." Three sight words in one sentence. Read together.',
      body: '"My" is a high-frequency word that opens up possessive sentences — "I see my mum", "I see my dog", "I see my book". For a 3-year-old, "my" is also her favourite kind of word, because everything in her world is "mine".\n\nWrite MY on a card. "This is MY. It means belongs to ME. \'My mum\' means YOUR mum. \'My book\' means YOUR book." Point to her toys, her shoes, her cup — "Whose is this? It\'s MY ___." Three-year-olds love this game.\n\nThen build the sentence: "I see my mum." Four words, three of them sight words she now owns (I, see, my). Read it pointing to each word. She reads it back. Substitute the last word: "I see my dad. I see my dog. I see my hat. I see my bed."\n\nThis is the moment she\'s reading 4-word sentences. That\'s a strong Reception-year skill being acquired at 3. Mark the moment.\n\nAlso introduce "your" as the partner concept: "Whose toy is this? It\'s YOUR toy. Whose mum is that? She\'s MY mum but she\'s YOUR mum too." Possessive pronouns are tricky in any language; English has just a few (my, your, his, her, our, their) — drill them.',
      examples: [
        'Sentence cards: "I see my mum", "I see my dad", "I see my dog", "I see my hat", "I see my bed", "I see my book", "I see my cup"',
        'Possessive walk: "Whose is this?" with everything in the room (your shoes, your cup, your book — she answers "MY shoes!")',
        'Partner word: "your" — for the conversation game ("Your mum, not my mum")',
        'Other possessives to layer in later: his, her, our, their'
      ],
      duration: '5 min daily',
      where: ['home', 'mealtime', 'bedtime'],
      skillTags: ['sight-words', 'comprehension', 'vocabulary'],
      milestoneRefs: [
        'Shows print awareness',
        'letters make words'
      ],
      literacyWeight: 3,
      followUp: 'When "my" is solid, introduce "I have…": "I have a cat. I have a hat. I have my book." Adding "have" opens up dozens more sentences. By 4 she should have 10–15 sight words.',
      relatedIds: ['lit-sight-word-see', 'lit-sight-word-is', 'conv-family-words']
    },

    {
      id: 'lit-sight-word-is',
      category: 'literacy',
      ages: [3, 4],
      title: 'Sight Word: "is"',
      hook: 'Write "The cat is on the mat." She can now read a full English sentence.',
      body: '"Is" is the engine word of English. Once she owns "is", whole sentences open up. "The cat is on the mat." "Sophie is happy." "The sun is hot." The verb to-be in present tense is everywhere.\n\nWrite IS on a card. "This is IS. It tells you about now. \'The cat IS on the mat\' means right now, the cat is on the mat." Two letters: I and S. Sounds /iz/, not /is/. The S is voiced — let her hear that.\n\nNow build a multi-sight-word sentence: "The cat is on the mat." Six words. Five of them she should now be reading as sight words (the, cat is decodable, is, on, the, mat). Read it pointing. She reads it back. Then she points and you read.\n\nSwap words: "The dog is on the mat. The pin is in the bag. The hat is on the cat." Each swap is a new sentence. The pattern stays the same.\n\nThis is the point where reading STARTS BEING READING. She\'s not just naming letters; she\'s understanding sentences. A captioned picture book ("The cat is in the box. The cat is happy.") is now within reach.',
      examples: [
        'Six-word sentence cards: "The cat is on the mat", "The dog is in the bag", "The hat is on the cat", "The sun is hot"',
        'Substitute games: change one word at a time and re-read',
        'Pair with picture books that use simple captions: "Spot" series, "That\'s not my…" series, "Where\'s Spot?"',
        'Other to-be forms to teach next: "am" (already covered), "are" (you ARE happy, we ARE here)'
      ],
      duration: '5 min daily',
      where: ['home', 'mealtime', 'bedtime'],
      skillTags: ['sight-words', 'comprehension', 'vocabulary'],
      milestoneRefs: [
        'Shows print awareness',
        'letters make words',
        'English sentences of 4–5 words'
      ],
      literacyWeight: 3,
      followUp: 'When "is" is automatic, introduce "are" (plural to-be: "The cats ARE on the mat"). Also try "was" and "were" — past tense to-be. These four words (is/are/was/were) cover most simple-sentence English.',
      relatedIds: ['lit-sight-word-my', 'lit-bob-books', 'conv-time-words']
    },

    {
      id: 'lit-bob-books',
      category: 'literacy',
      ages: [3, 4],
      title: '"Reading" Bob Books (Set 1)',
      hook: 'Get Bob Books Set 1 on Amazon. Book 1 (Mat) uses only M, A, T, S. She can READ it.',
      body: 'Bob Books Set 1 is the single best decodable-reader set for a child who has just learned SATPIN. They are the rare books that match phonics teaching to actual book content — written to a tightly controlled letter set, so a 3-year-old who knows the sounds can actually decode every word herself.\n\nBuy Bob Books Set 1: Beginning Readers (12 small books, ~£10 on Amazon). Book 1, "Mat", uses only four letters: M, A, T, S. Total vocabulary about five words. Sophie, once she\'s done SATPIN, can read it cover-to-cover by herself. That experience — actually reading a whole book on her own at three or four — is transformative.\n\nDon\'t read the books TO her. Sit with her and let her decode each word. Be patient. Point to the first letter and ask "What sound?" /m/. Next? /a/. Next? /t/. "Now blend them: /m/-/a/-/t/." Wait. She says: "MAT!" Then "Read the whole sentence." She reads. Big celebration.\n\nWork through the books in order. They get progressively harder (more letters, more words). Set 1 takes most kids 2–4 months at a few books a week. Once she finishes Set 1, move to Sets 2, 3, 4.\n\nIf decoding stalls on a word, go back to the individual sounds. Don\'t just tell her the word — that defeats the point. Sound-by-sound, blend, breathe, try again.',
      examples: [
        'Bob Books Set 1 (12 books): Mat, Sam, Dot, Mac, Bob, etc. — find on Amazon UK',
        'Other decodable series to follow Bob Books: Dandelion Readers, Songbirds Phonics (Oxford), Read Write Inc. Set 1 storybooks',
        'How to support without giving away: "What sound is this letter?" / "Blend the sounds" / "Try again" / "You\'ve got the first sound — what\'s next?"',
        'When to celebrate: every word she decodes by herself; the first complete sentence; the first complete book'
      ],
      duration: '10 min, several times a week',
      where: ['home', 'bedtime'],
      skillTags: ['sight-words', 'letter-sounds', 'phonemic-awareness', 'comprehension', 'phonics-s', 'phonics-a', 'phonics-t'],
      milestoneRefs: [
        'Shows print awareness',
        'letters make words',
        'Knows all 26 letter names',
        'Cannot name at least half the letters'
      ],
      literacyWeight: 3,
      followUp: 'After Bob Books Set 1, move to Set 2 (more letter sounds), then the Oxford Songbirds Phonics readers (free in libraries), then Read Write Inc Storybooks. By 5 she can be reading proper short chapter books. The path is well-trodden.',
      relatedIds: ['lit-phonics-a', 'lit-phonics-t', 'lit-phonics-n', 'lit-sight-word-is']
    },

    {
      id: 'lit-writing-name',
      category: 'literacy',
      ages: [3, 4],
      title: 'Writing Her Name (S-O-P-H-I-E)',
      hook: 'Show her how to write each letter of SOPHIE. Big paper, chunky pencil, daily.',
      body: 'Writing her own name is one of the most motivating literacy tasks possible for a 3-year-old. It\'s six letters; she already knows the sounds (if you\'ve done the letter-hunt items). The fine-motor work is the new challenge.\n\nStart with a big sheet of paper and a chunky triangular pencil (Stabilo EASYgraph or similar — designed for tiny hands). Write SOPHIE in big clear capital letters: S O P H I E. Each about 8 cm tall.\n\nThen do it as TRACING first. Write the letters in pale dotted lines and let her trace over them. Tracing is the bridge between recognising a letter and writing it independently. Do it daily.\n\nFor each letter, show the strokes. S: start at the top right, curve to the left, down, around, curve right. O: a circle. P: down, then around the top half. H: down, down, across. I: just down. E: down, then three horizontals.\n\nDon\'t correct her form. Praise effort. The first time she writes SOPHIE legibly without tracing — usually around 4 — is a watershed moment. Frame the first independent attempt.\n\nKey: lowercase comes AFTER uppercase. Uppercase is easier (more straight lines, less complex shapes). Lowercase comes when she has confident pencil control — usually around 4.5.',
      examples: [
        'Stroke sequences: S (top-right curl down), O (round circle), P (down then circle top right), H (two verticals + crossbar), I (just down), E (down + three horizontal lines)',
        'Materials: chunky triangular pencil (Stabilo EASYgraph), large unlined paper, optionally a whiteboard with dry-erase pen for re-do-able practice',
        'Tracing progression: traced solid → traced dotted → traced very faint → unaided',
        'Lowercase progression (later): sophie — much harder, with the descending p',
        'Reward chart: a sticker each time she writes her name'
      ],
      duration: '5–10 min daily',
      where: ['home', 'kitchen'],
      skillTags: ['pre-writing', 'fine-motor', 'letter-names', 'letter-sounds'],
      milestoneRefs: [
        'Recognises every letter in her own name',
        'Shows print awareness'
      ],
      literacyWeight: 3,
      followUp: 'After SOPHIE is solid in uppercase, do MUM and DAD — two more high-motivation words. Then lowercase sophie. Then short words she can decode: cat, hat, sun. By 5 she should write short captioned sentences.',
      relatedIds: ['lit-tracing-letters', 'lit-playdoh-letters', 'lit-letter-e-hunt']
    },

    {
      id: 'lit-tracing-letters',
      category: 'literacy',
      ages: [3, 4],
      title: 'Tracing Letters In Sand Or Flour',
      hook: 'Pour flour onto a tray. Trace letters in it with her finger. Smooth, redo, repeat.',
      body: 'Before pencil-and-paper writing comes finger-tracing. The motor memory of forming a letter — the sequence of movements — is what locks the letter into long-term memory. The medium doesn\'t matter; the action does.\n\nPour a thin layer of fine flour, sand, or salt onto a baking tray. Trace a big letter S with your finger. "This is S. Watch — start at the top, curve, down, curve back." Let her copy. Smooth the surface and redo.\n\nThe sensory feedback of finger-in-flour is more memorable than pencil-on-paper, especially for a child still developing pencil control. It also bypasses the frustration of "my hand won\'t do what I want" that paper-and-pencil work can cause.\n\nRotate the letter weekly to match the current Letter Hunt focus. S week → trace S in flour daily. O week → trace O. Through SOPHIE, then SATPIN.\n\nAlternatives: shaving foam in the bath. Bath crayons on the tiles. A finger drawn through condensation on a window. Anything that lets her move her finger through a medium leaves a trace and disappears.\n\nThis is also fine-motor warm-up before pencil work. Five minutes of finger-tracing then five minutes of pencil work doubles the productivity of both.',
      examples: [
        'Media to try: flour on a tray, fine sand, salt, shaving foam in the bath, finger paint, mud on a path, condensation on a window, bubble bath foam, dry rice in a tray',
        'Order to trace: letters of SOPHIE in week-by-week order, then SATPIN, then the rest of the alphabet',
        'Variations: trace upper case, then lower case; trace the whole word SOPHIE; trace numerals 1–10; trace simple shapes (circle, triangle)',
        'Combo: parent traces, she copies → she traces, parent guesses what letter'
      ],
      duration: '5 min',
      where: ['home', 'kitchen', 'bathtime', 'outdoor'],
      skillTags: ['pre-writing', 'fine-motor', 'letter-names'],
      milestoneRefs: [
        'Recognises every letter in her own name',
        'Shows print awareness'
      ],
      literacyWeight: 3,
      followUp: 'Once finger-tracing is confident, move to chunky-pencil tracing on dotted-line worksheets. Free printables on Twinkl, Education.com, or just hand-draw dotted letters yourself. The progression is: finger in flour → finger on paper → pencil on dotted lines → pencil unaided.',
      relatedIds: ['lit-writing-name', 'lit-playdoh-letters']
    },

    {
      id: 'lit-playdoh-letters',
      category: 'literacy',
      ages: [3, 4],
      title: 'Play-Doh Letter Forming',
      hook: 'Roll Play-Doh into a snake, shape it into S. Then O, then P.',
      body: 'Play-Doh letter forming is the third leg of the pre-writing tripod, alongside finger-tracing and pencil work. It engages a different motor skill — pinching, rolling, squishing, sculpting — that strengthens the small hand muscles needed for confident pencil grip later.\n\nRoll a sausage of Play-Doh. Shape it into an S. "Look — a Play-Doh S!" Let her do it. The first few times the S will look like a wonky line. That\'s fine. The act of TRYING to form an S — picturing it in her head and instructing her hands to make it — is the work.\n\nMove through SOPHIE letter by letter, week by week, matching the Letter Hunt focus. Then SATPIN. By the time you\'ve done all 26 letters (roughly half a year), she\'s formed every letter with her hands.\n\nVariations: alphabet cookie cutters (press into Play-Doh and pop out letter shapes); roll thinner snakes and form lowercase letters with curves and tails (lowercase is harder); spell short words (CAT, MAT, SOPHIE) by lining up several Play-Doh letters.\n\nFine-motor bonus: rolling, pinching, and squishing Play-Doh strengthens hand muscles for ALL fine-motor tasks — pencil grip, buttons, zips, scissors. This is multi-purpose work disguised as play.',
      examples: [
        'Tools: Play-Doh (the real stuff lasts longest), or homemade dough (flour + salt + water + oil)',
        'Cookie-cutter shortcuts: alphabet cookie cutters available on Amazon — press into rolled-out dough, pop out letter shapes',
        'Word-building: form three letters and line them up to spell CAT, MAT, PIN, etc.',
        'Numerals too: 1, 2, 3, … form numbers as well as letters',
        'Sculpt the related object: form S and a snake (S is a snake!); form O and an octopus; form P and a pizza'
      ],
      duration: '10–15 min',
      where: ['home', 'kitchen'],
      skillTags: ['fine-motor', 'pre-writing', 'letter-names'],
      milestoneRefs: [
        'Shows print awareness',
        'Recognises every letter in her own name'
      ],
      literacyWeight: 2,
      followUp: 'Once she\'s confident with single-letter forming, build short words side by side — C-A-T, M-A-T, S-A-T. Reading her own Play-Doh words is satisfying. Then progress to PYJAMAS, CHOCOLATE, BANANA — long fun words.',
      relatedIds: ['lit-writing-name', 'lit-tracing-letters', 'lit-letter-s-hunt']
    },

    {
      id: 'lit-print-awareness',
      category: 'literacy',
      ages: [3, 4],
      title: 'Print Awareness: How Books Work',
      hook: 'Hand her any book. Ask: "Where\'s the front? Where do I start reading? Which way?"',
      body: 'Print awareness is the set of concepts that experienced readers take for granted but young children have to learn: books have a front and back, you read top-to-bottom and left-to-right, the words (not the pictures) carry the story, and each printed word matches a spoken word.\n\nNone of this is obvious to a 3-year-old. Many children at 4 still don\'t know which way to read a line of text. This item is about making those concepts explicit.\n\nHand her any book. Ask: "Where\'s the FRONT?" She turns it the right way up. Praise. "Where do we START reading?" She points to the top. "Which way do we go? Left-to-right." Run your finger left-to-right across the first line.\n\nAs you read, point to each word as you say it. ONE finger per ONE word. This teaches "one-to-one correspondence" — the idea that the squiggles on the page map to the sounds in your mouth. Three-year-olds often think the picture IS the story; print pointing fixes that.\n\nTeach the words "title", "author", "illustrator", "cover", "page", "spine", "sentence", "word", "letter". Tiny metalinguistic vocabulary — but it makes future reading instruction trivial. By 4 she should know that "letters make words" and "words make sentences" and "sentences fill pages".',
      examples: [
        'Concepts to teach: front/back, top/bottom, left-to-right, page-by-page, words-not-pictures-tell-story, one-finger-per-word, title, author, illustrator, cover, spine, page, sentence, word, letter',
        'Quick checks: "Where\'s the front?" / "Where do I start reading?" / "Which way?" / "Where do I go when this line ends?" (down to next line, return to left)',
        'Pointing rule: ALWAYS point to each word as you read for the first 6 months. Stop pointing once she\'s tracking with her eyes.',
        'Backward book trick: occasionally hand her a book upside-down. Watch — does she flip it? That\'s print awareness in action.'
      ],
      duration: '2 min per book',
      where: ['bedtime', 'home'],
      skillTags: ['comprehension', 'sight-words', 'storytelling'],
      milestoneRefs: [
        'Shows print awareness',
        'letters make words'
      ],
      literacyWeight: 2,
      followUp: 'After print awareness basics, teach SENTENCE awareness: "Where does this sentence end? At the full stop. The next sentence starts there." Punctuation awareness is the next layer. By 5 she should know full stops, capital letters, question marks, exclamation marks.',
      relatedIds: ['book-the-gruffalo', 'lit-sight-word-i-am']
    },

    {
      id: 'lit-syllable-clapping',
      category: 'literacy',
      ages: [3, 4],
      title: 'Syllable Clapping',
      hook: 'Say any word, clap each beat: "EL-E-PHANT — three claps! BA-NA-NA — three!"',
      body: 'Syllable awareness is a critical phonological pre-reading skill. Before she can decode words letter-by-letter, she needs to hear that words BREAK INTO PIECES. Syllables are the easiest piece to hear — bigger than phonemes, much more intuitive.\n\nThe rule: every word breaks into syllables. Clap each one. Say "ELEPHANT" while clapping three times: EL (clap) E (clap) PHANT (clap). "Three syllables!" She\'ll laugh and copy.\n\nUse her name: SO-PHIE (two claps, two syllables). Then SO-PHIE-MA-RIA (four — use her full name if longer). Then everyone\'s names in the family.\n\nMove to longer everyday words: BA-NA-NA (3), CHO-CO-LATE (3 — or "chock-late" 2 in fast speech, teach the slow form), DI-NO-SAUR (3), PYJ-A-MAS (3), HIP-PO-PO-TA-MUS (5!). Long words are SATISFYING to clap — kids love them.\n\nGame: you say a word, she claps the syllables. Or she says a word and you guess the syllables from listening. Or you both clap together to a song.\n\nThis is phonological awareness in its purest form. Five minutes daily for a few months and her ear is primed for the harder phonemic work (individual letter sounds).',
      examples: [
        'One-syllable: cat, dog, hat, sun, sit, run, stop, jump, big, red',
        'Two-syllables: SOPHIE (so-phie), mummy (mum-my), apple (ap-ple), water (wa-ter), pizza (piz-za), happy (hap-py), table (ta-ble)',
        'Three-syllables: elephant (el-e-phant), banana (ba-na-na), dinosaur (di-no-saur), pyjamas (pyj-a-mas), telephone (te-le-phone), chocolate (choc-o-late)',
        'Four-syllables: caterpillar (cat-er-pil-lar), helicopter (hel-i-cop-ter), watermelon (wa-ter-mel-on)',
        'Five+ syllables: hippopotamus (hip-po-pot-a-mus), refrigerator (re-frig-er-a-tor)'
      ],
      duration: '3 min',
      where: ['anywhere', 'car', 'mealtime', 'bathtime'],
      skillTags: ['syllables', 'phonemic-awareness', 'rhyming'],
      milestoneRefs: [
        'Correctly rhymes 3–4 words',
        'cannot produce a single rhyme'
      ],
      literacyWeight: 2,
      followUp: 'Once syllable-clapping is automatic, move to ONSET-RIME work: the onset is the consonant(s) before the vowel; the rime is the rest. "Cat" = /c/ + /at/. This is the bridge between syllable-clapping and full phoneme blending.',
      relatedIds: ['conv-rhyming-pairs', 'lit-alliteration-play']
    },

    {
      id: 'lit-alliteration-play',
      category: 'literacy',
      ages: [3, 4],
      title: 'Alliteration Play',
      hook: 'Recite tongue-twisters: "Peter Piper picked a peck of pickled peppers."',
      body: 'Alliteration — words starting with the same sound — is the playful cousin of phonemic awareness. Tongue-twisters are alliteration concentrated into ear candy. They teach Sophie that English has FUN sound patterns, and they drill initial-sound awareness while she\'s laughing.\n\nThe three classic English tongue-twisters: PETER PIPER picked a peck of pickled peppers. BETTY BOTTER bought a bit of bitter butter. SHE SELLS SEASHELLS by the seashore. Memorise one yourself, recite it slowly, let her hear the pattern. Then say it together.\n\nDon\'t demand perfect recitation. The point is hearing the /p/-/p/-/p/-/p/ pattern, not flawless delivery.\n\nMake up your own family alliterations: "SOPHIE the silly snake sat on a sunny step". "Daddy the daring dragon danced." Use her name. Use family names. The pattern is: NAME + adjective starting with same sound + verb starting with same sound + noun starting with same sound.\n\nGo on alliteration walks: "Spot something that starts with /s/." She finds something. "Now find ANOTHER /s/ thing." String them together: "Sunny street, soft sock, smiling sister." Initial-sound awareness is the foundation of phonics. This game disguises it.',
      examples: [
        'Classic tongue-twisters: "Peter Piper picked a peck of pickled peppers"; "Betty Botter bought a bit of bitter butter"; "She sells seashells by the seashore"; "Round and round the rugged rock the ragged rascal ran"; "Red lorry, yellow lorry"',
        'SOPHIE-specific: "Sophie the silly snake sat on a sunny step"; "Sophie sings a soft song slowly"',
        'Family alliterations: "Daddy the daring dragon"; "Mummy makes magnificent muffins"',
        'Alphabet alliteration story (build over weeks): "Angry alligators always ate apples. Big black bears boldly bounced ball…"'
      ],
      duration: '3–5 min',
      where: ['anywhere', 'car', 'bedtime', 'walking'],
      skillTags: ['alliteration', 'phonemic-awareness', 'rhyming', 'vocabulary'],
      milestoneRefs: [
        'Correctly rhymes 3–4 words',
        'cannot produce a single rhyme'
      ],
      literacyWeight: 2,
      followUp: 'When alliteration is fluent, push for harder consonant clusters: "Slippery silver snakes slide silently." Then introduce alliterative book authors — Julia Donaldson uses alliteration constantly ("purple prickles", "knobbly knees", "terrible tusks"). Spot the alliteration in books as you read.',
      relatedIds: ['rhyme-hickory-dickory-dock', 'lit-syllable-clapping']
    },

    // ─── SONG (9 items) ────────────────────────────────────────────

    {
      id: 'song-wheels-on-the-bus',
      category: 'song',
      ages: [2, 3, 4],
      title: 'The Wheels on the Bus',
      hook: 'Sing it with the actions — wheels round, wipers swish, horn beep — every verse.',
      body: 'Wheels on the Bus is the perfect English vocabulary song for a 3-year-old because every verse drills a different verb: go round, swish, beep, open and shut, chatter, cry, shush. Each is mimed. Five minutes singing this and she has practised eight English action verbs with full-body motion.\n\nSing it with the actions. Wheels: circle your hands in front of you. Wipers: arms swish side to side. Horn: press an imaginary horn and beep. Doors: hands open and close like saloon doors. Babies: pretend to cry. Mummies: finger to lips, "shush shush shush". Each action makes the verb stick.\n\nAdd verses she makes up. "What else might be on the bus?" "The DOG on the bus says woof woof woof." "The CHIPS on the bus go munch munch munch." Generative verse-making is rich English production work.\n\nAfter she knows every verse, do the cloze trick from Twinkle Twinkle: pause before the verb. "The wheels on the bus go ___" (she sings: "round and round"). Tests recall and rhythm both.\n\nDo this song in the car. It is literally about transport. The setting reinforces the vocabulary.',
      examples: null,
      lyrics: 'The wheels on the bus go round and round,\nRound and round, round and round.\nThe wheels on the bus go round and round,\nAll day long.\n\nThe wipers on the bus go swish swish swish,\nSwish swish swish, swish swish swish.\nThe wipers on the bus go swish swish swish,\nAll day long.\n\nThe horn on the bus goes beep beep beep,\nBeep beep beep, beep beep beep.\nThe horn on the bus goes beep beep beep,\nAll day long.\n\nThe doors on the bus go open and shut,\nOpen and shut, open and shut.\nThe doors on the bus go open and shut,\nAll day long.\n\nThe babies on the bus go waa waa waa,\nWaa waa waa, waa waa waa.\nThe babies on the bus go waa waa waa,\nAll day long.\n\nThe mummies on the bus go "shush shush shush",\n"Shush shush shush", "shush shush shush".\nThe mummies on the bus go "shush shush shush",\nAll day long.',
      duration: '5 min',
      where: ['car', 'walking', 'home', 'anywhere'],
      skillTags: ['vocabulary', 'english-maintenance', 'rhyming', 'turn-taking'],
      milestoneRefs: [
        'English vocabulary growth',
        'English sentences of 4–5 words'
      ],
      literacyWeight: 2,
      followUp: 'When the standard verses are owned, invite her to invent new ones with you. "The Sophie on the bus goes ___?" Let her decide. Songwriting at 3 is real expressive English production.',
      relatedIds: ['song-old-macdonald', 'play-bus-driver']
    },

    {
      id: 'song-if-youre-happy',
      category: 'song',
      ages: [2, 3, 4],
      title: 'If You\'re Happy and You Know It',
      hook: 'Sing it with claps. Then make up new actions: "stamp your feet", "shout hooray".',
      body: 'If You\'re Happy and You Know It is brilliant because it is one of the few children\'s songs that explicitly names a feeling. It also has a clear if-then sentence structure ("IF you\'re happy, THEN clap your hands") — a sophisticated grammar in disguise.\n\nSing it standing up. Claps on "clap your hands" — exactly two claps per beat. She\'ll join in immediately. Then move through the variations: stamp feet, nod your head, shout hooray, do all three. Each variation is a new English verb she\'s acting out.\n\nThen swap the EMOTION. "If you\'re SAD and you know it… cry boo hoo." "If you\'re ANGRY and you know it… stomp your feet." "If you\'re SLEEPY and you know it… have a yawn." Each emotional verse builds her emotional vocabulary plus a matching English physical action.\n\nThis is also a great song for teaching the if-then construction: "If X, then Y." Once she sings it dozens of times, the grammar pattern is wired in. Later she will use "if-then" structures in her own sentences naturally.\n\nUse this when she\'s having a feelings wobble. "Are you happy? Sad? Angry?" Then sing the matching verse. The song doubles as a gentle emotional check-in.',
      examples: null,
      lyrics: 'If you\'re happy and you know it, clap your hands. (clap clap)\nIf you\'re happy and you know it, clap your hands. (clap clap)\nIf you\'re happy and you know it,\nAnd you really want to show it,\nIf you\'re happy and you know it, clap your hands. (clap clap)\n\nIf you\'re happy and you know it, stamp your feet. (stamp stamp)\n…\n\nIf you\'re happy and you know it, nod your head. (nod nod)\n…\n\nIf you\'re happy and you know it, shout "Hooray!" (Hooray!)\n…\n\nIf you\'re happy and you know it, do all three. (clap, stamp, Hooray!)\n…',
      duration: '3–5 min',
      where: ['home', 'anywhere'],
      skillTags: ['emotional-vocabulary', 'vocabulary', 'english-maintenance', 'rhyming'],
      milestoneRefs: [
        'English vocabulary growth',
        'English sentences of 4–5 words'
      ],
      literacyWeight: 2,
      followUp: 'Once standard verses are mastered, do EMOTION SWAPS: "If you\'re SAD and you know it, cry boo hoo." "If you\'re EXCITED and you know it, jump up high." Each emotion swap adds a feeling word and a matching action — feelings vocabulary plus verb plus full-body memory.',
      relatedIds: ['conv-feelings-vocab', 'song-head-shoulders']
    },

    {
      id: 'song-old-macdonald',
      category: 'song',
      ages: [2, 3, 4],
      title: 'Old MacDonald Had a Farm',
      hook: 'Sing it with her picking the next animal: "What does Old MacDonald have next?"',
      body: 'Old MacDonald is the masterclass in English animal sounds. It is also a memory and prediction song — each verse builds on the previous ones with the cumulative "and on his farm he had a…" recall.\n\nStart with one animal at a time. "Old MacDonald had a farm, E-I-E-I-O. And on his farm he had a COW, E-I-E-I-O. With a MOO MOO here…" Let her pick the next animal each verse.\n\nThe English animal sounds drilled by this song are exactly the ones a bilingual Bulgarian-dominant child will get backwards: woof, moo, baa, oink, quack, neigh, cluck, miaow. Sing the English versions enthusiastically. If she gives a Bulgarian sound, smile and sing the English one back.\n\nFor the cumulative verses ("with a moo moo here, a moo moo there, here a moo, there a moo, everywhere a moo moo…"), she has to remember and stack each previous animal. That is real working-memory practice. Three-year-olds find this satisfying; four-year-olds can manage 5–6 stacked animals.\n\nMake it visual: have a farm-animal toy or a picture book of farm animals next to you while singing. She picks the next animal by pointing.',
      examples: null,
      lyrics: 'Old MacDonald had a farm,\nE-I-E-I-O.\nAnd on his farm he had a cow,\nE-I-E-I-O.\nWith a moo moo here,\nAnd a moo moo there,\nHere a moo, there a moo,\nEverywhere a moo moo.\nOld MacDonald had a farm,\nE-I-E-I-O.\n\n(Repeat with: pig — oink, sheep — baa, duck — quack, horse — neigh, dog — woof, cat — miaow, chicken — cluck, donkey — hee-haw.)\n\nOptional cumulative ending verse:\nWith a moo moo here, a moo moo there,\nAn oink oink here, an oink oink there,\nA baa baa here, a baa baa there,\n(stack as many as you can remember).',
      duration: '5–8 min',
      where: ['car', 'home', 'mealtime', 'anywhere'],
      skillTags: ['vocabulary', 'english-maintenance', 'phonemic-awareness'],
      milestoneRefs: [
        'English vocabulary growth',
        'refuses to use English at home'
      ],
      literacyWeight: 2,
      followUp: 'When standard farm animals are mastered, expand to wild animals ("Old MacDonald had a ZOO, E-I-E-I-O. With a roar roar here…"). Then to sounds OBJECTS make: "Old MacDonald had a kitchen — with a sizzle sizzle here". Silly variations stretch creativity.',
      relatedIds: ['conv-animal-sounds', 'game-animal-charades']
    },

    {
      id: 'song-head-shoulders',
      category: 'song',
      ages: [2, 3, 4],
      title: 'Heads, Shoulders, Knees and Toes',
      hook: 'Sing it touching each body part. Speed up each round.',
      body: 'Heads, Shoulders, Knees and Toes is the single best body-parts vocabulary song in English. In ninety seconds she touches and names six body parts (head, shoulders, knees, toes, eyes, ears, mouth, nose). The repetition through the song means by the tenth singing she owns all six.\n\nSing it standing up. Touch each body part as you name it. Head: both hands on top of head. Shoulders: tap shoulders. Knees: bend and tap knees (full body squat — kids love it). Toes: bend further and touch toes.\n\nDo it FAST. The fun of this song is the speeding-up. Sing it once slow, once at normal speed, once fast, once super-fast. By the fast version she\'ll be giggling and tripping over the words, which is great fluency practice.\n\nSubstitute body parts to extend vocabulary. "ELBOWS, shoulders, knees and toes." "Ankles, KNUCKLES, knees and toes." Replace one part each round with a richer-vocabulary part (elbow, wrist, ankle, jaw, chin, eyebrow). She owns the second-tier body words by the time you\'ve cycled through them.\n\nThis is also brilliant when she\'s wriggly and needs to move. Sing-and-touch is real listening comprehension plus motor coordination.',
      examples: null,
      lyrics: 'Heads, shoulders, knees and toes,\nKnees and toes.\nHeads, shoulders, knees and toes,\nKnees and toes.\nAnd eyes and ears and mouth and nose.\nHeads, shoulders, knees and toes,\nKnees and toes.\n\n(Repeat faster. Then faster again. Then super-fast.)\n\nVocabulary swaps to introduce one at a time:\n- "Elbows, shoulders, knees and toes…"\n- "Heads, shoulders, ankles, toes…"\n- "Heads, shoulders, knees and HEELS…"\n- "Eyebrows, ears, mouth and nose…"',
      duration: '3–5 min',
      where: ['home', 'bathtime', 'anywhere'],
      skillTags: ['vocabulary', 'english-maintenance', 'fine-motor'],
      milestoneRefs: [
        'English vocabulary growth',
        'English sentences of 4–5 words'
      ],
      literacyWeight: 1,
      followUp: 'After body parts are solid, do a "Simon Says with body parts" game: "Simon says touch your elbow. Simon says touch your knuckles. Touch your shin." Listening comprehension plus body-parts vocabulary plus the Simon Says social rules — three layers.',
      relatedIds: ['conv-body-parts', 'game-simon-says']
    },

    {
      id: 'song-five-little-ducks',
      category: 'song',
      ages: [2, 3, 4],
      title: 'Five Little Ducks',
      hook: 'Sing it holding up the right number of fingers. Count down 5, 4, 3, 2, 1, 0.',
      body: 'Five Little Ducks is the best counting-backwards song in English. Each verse, one duck doesn\'t come back, and the count drops by one. By the end of the song she has counted backwards from five to zero — twice — and she\'s loved every minute.\n\nSing it holding up the right number of fingers as you count. Five ducks: five fingers. Four ducks: four fingers (one tucked away). All the way down to zero. The mum duck quacks louder and louder each verse — make those increasingly desperate.\n\nThe song is also subtly emotional. The mum duck is sad as her ducklings disappear. The ending — all five come back together — is a relief. Three-year-olds genuinely feel the arc. This is early narrative emotion in English.\n\nVocabulary in the song: hills, far, away, daddy, back, all, none. Plus the verbs "went", "called", "said", "came" — all irregular past tenses, useful real-life English.\n\nVariations: "Five Little Speckled Frogs" (similar structure), "Five Currant Buns" (counting down with money), "Ten in the Bed" (counting from ten). Once she\'s mastered Five Little Ducks, these others come easily.',
      examples: null,
      lyrics: 'Five little ducks went swimming one day,\nOver the hills and far away.\nMother duck said "Quack quack quack quack",\nBut only four little ducks came back.\n\nFour little ducks went swimming one day,\nOver the hills and far away.\nMother duck said "Quack quack quack quack",\nBut only three little ducks came back.\n\nThree little ducks went swimming one day,\nOver the hills and far away.\nMother duck said "Quack quack quack quack",\nBut only two little ducks came back.\n\nTwo little ducks went swimming one day,\nOver the hills and far away.\nMother duck said "Quack quack quack quack",\nBut only one little duck came back.\n\nOne little duck went swimming one day,\nOver the hills and far away.\nMother duck said "Quack quack quack quack",\nBut NO little ducks came back.\n\nSad mother duck went swimming one day,\nOver the hills and far away.\nFather duck said "QUACK QUACK QUACK QUACK",\nAnd all five little ducks came back.',
      duration: '4 min',
      where: ['car', 'home', 'bathtime', 'anywhere'],
      skillTags: ['vocabulary', 'english-maintenance', 'storytelling', 'emotional-vocabulary'],
      milestoneRefs: [
        'English vocabulary growth',
        'tell a simple story with a beginning and end'
      ],
      literacyWeight: 1,
      followUp: 'After Five Little Ducks, try Five Little Speckled Frogs (sat on a speckled log) and Ten in the Bed (counting backwards from ten — much harder). These three songs together drill backwards-counting comprehensively.',
      relatedIds: ['conv-counting-things', 'song-five-little-monkeys']
    },

    {
      id: 'song-grand-old-duke',
      category: 'song',
      ages: [2, 3, 4],
      title: 'The Grand Old Duke of York',
      hook: 'Sing it standing — UP on "up", DOWN on "down", BEND on "halfway".',
      body: 'The Grand Old Duke of York is a brilliant pre-positional song: up, down, halfway up, halfway down. Every preposition acted out. Plus it has a clear story arc (the Duke marches his men, marches them back, gets confused) that gives a tiny narrative structure.\n\nStand up. On "up", reach high on tiptoes. On "down", squat. On "halfway up" and "halfway down", crouch at half-height. Halfway is harder than up or down — a real concept-building word.\n\nThe vocabulary haul: ten thousand, grand, marched, top of the hill, up, down, neither, when. Some of those are advanced for 3 — leave them sitting in her ear for later understanding. "Neither" is particularly useful and rarely taught.\n\nAfter she knows the song, slow it WAY down. Sing each "up" and "down" with the matching movement, exaggerated. Then speed it up. Speed and slow variation makes any song more memorable.\n\nThe song is also brilliant for any toddler with too much energy. Five rounds of up-down-halfway is real exercise.',
      examples: null,
      lyrics: 'Oh, the grand old Duke of York,\nHe had ten thousand men.\nHe marched them up to the top of the hill,\nAnd he marched them down again.\n\nAnd when they were up, they were up,\nAnd when they were down, they were down.\nAnd when they were only halfway up,\nThey were neither up nor down.\n\n(Repeat — faster, or slower, or with exaggerated actions.)',
      duration: '3 min',
      where: ['home', 'outdoor', 'anywhere'],
      skillTags: ['vocabulary', 'english-maintenance', 'turn-taking'],
      milestoneRefs: [
        'English vocabulary growth'
      ],
      literacyWeight: 1,
      followUp: 'Once she knows the song, use UP/DOWN/HALFWAY in real preposition play: "Hold teddy UP! Now DOWN! Now HALFWAY!" The song-then-game sequence is how preposition vocabulary cements.',
      relatedIds: ['conv-prepositions', 'game-simon-says']
    },

    {
      id: 'song-row-row-row-boat',
      category: 'song',
      ages: [2, 3, 4],
      title: 'Row, Row, Row Your Boat',
      hook: 'Sit facing her, hold hands, rock back and forth as you row.',
      body: 'Row Row Row Your Boat is the smallest and gentlest of the classic English nursery songs — but it carries one of the most important phrases in early childhood: "life is but a dream". That phrase rolls off the tongue for decades. Worth knowing.\n\nSit facing her, knees bent, holding hands. Rock back and forth in time with the singing. Each "row, row, row" is one rocking motion. The full-body rhythm is the lesson — it teaches steady beat, the rhythmic foundation of poetry and reading later.\n\nThe vocabulary: row, gently, stream, merrily, life, but, dream. "Gently" and "merrily" are higher-register adverbs — book English rather than spoken English. She absorbs them through the song.\n\nVerses to add: "If you see a crocodile, don\'t forget to scream — AHHH!" (her favourite — surprise scream at the end). "If you see a polar bear, don\'t forget to roar." "If you see a little mouse, don\'t forget to squeak." Each silly verse adds vocabulary and a sound effect.\n\nThis song is a perfect bath song too — she rocks in the water.',
      examples: null,
      lyrics: 'Row, row, row your boat,\nGently down the stream.\nMerrily, merrily, merrily, merrily,\nLife is but a dream.\n\n(Verse 2)\nRow, row, row your boat,\nGently down the stream.\nIf you see a crocodile,\nDon\'t forget to SCREAM! (Ahhh!)\n\n(Verse 3)\nRow, row, row your boat,\nGently down the stream.\nIf you see a polar bear,\nDon\'t forget to ROAR!\n\n(Verse 4)\nRow, row, row your boat,\nGently down the stream.\nIf you see a little mouse,\nDon\'t forget to SQUEAK!',
      duration: '3 min',
      where: ['bathtime', 'bedtime', 'home', 'anywhere'],
      skillTags: ['vocabulary', 'rhyming', 'english-maintenance'],
      milestoneRefs: [
        'English vocabulary growth',
        'Correctly rhymes 3–4 words'
      ],
      literacyWeight: 1,
      followUp: 'When the standard verses are mastered, invent new ones together. "If you see a ___, don\'t forget to ___" — fill in animal and sound. Each new verse is generative English production.',
      relatedIds: ['song-twinkle-twinkle', 'conv-animal-sounds']
    },

    {
      id: 'song-incy-wincy',
      category: 'song',
      ages: [2, 3, 4],
      title: 'Incy Wincy Spider',
      hook: 'Sing it with the spider-climbing fingers, rain-falling hands, sun-shining arms.',
      body: 'Incy Wincy Spider is the perfect three-year-old finger play. The actions — fingers climbing, rain falling, sun shining — are achievable, satisfying, and they tell the tiny story of perseverance: the spider washed out, the sun coming out, the spider trying again.\n\nThe finger actions: opposite thumb to opposite forefinger, climbing up. Rain: both hands flutter down. Sun: arms in a big circle above head. Then back to climbing fingers. She\'ll master the finger-thumb climb by 3.5 — it\'s real fine-motor practice.\n\nVocabulary: spout, washed, dried, climbed, again. "Spout" is an unusual word (the spout of a kettle, the spout of a watering can) — use the song to introduce it and then point out other spouts in the house. "Washed up" is also a useful phrasal verb.\n\nNarrative arc to discuss after singing: "Why does the spider climb again? Is it brave?" "What would YOU do if the rain washed you down?" Tiny perseverance lesson built into the song.\n\nAlternative names: also called "Itsy Bitsy Spider" in American English. Sophie should know the British version: "Incy Wincy".',
      examples: null,
      lyrics: 'Incy Wincy Spider climbed up the water spout.\nDown came the rain and washed poor Incy out.\nOut came the sunshine and dried up all the rain,\nSo Incy Wincy Spider climbed up the spout again.\n\n(Optional verses for variation:)\nIncy Wincy Spider climbed up the kitchen wall.\nSwoosh went the fan and made poor Incy fall.\nOff went the fan and Incy didn\'t hesitate,\nHe ran up the kitchen wall again to celebrate.',
      duration: '3 min',
      where: ['home', 'bedtime', 'bathtime', 'anywhere'],
      skillTags: ['vocabulary', 'rhyming', 'fine-motor', 'storytelling'],
      milestoneRefs: [
        'English vocabulary growth',
        'Correctly rhymes 3–4 words'
      ],
      literacyWeight: 2,
      followUp: 'After Incy Wincy is owned, do the perseverance conversation: "Was the spider sad when the rain washed him out? Did he give up? What did he do?" Connecting the song to a feeling and a life lesson layers comprehension on top of memorisation.',
      relatedIds: ['rhyme-hickory-dickory-dock', 'conv-feelings-vocab']
    },

    {
      id: 'song-five-little-monkeys',
      category: 'song',
      ages: [2, 3, 4],
      title: 'Five Little Monkeys Jumping on the Bed',
      hook: 'Sing it with five fingers held up. One falls off — drop one finger — each verse.',
      body: 'Five Little Monkeys Jumping on the Bed is the second counting-down song after Five Little Ducks, and it has the funniest narrative: a doctor on the phone telling mum, "no more monkeys jumping on the bed!" The repetition is satisfying and the bossy doctor voice gets a laugh every time.\n\nSing it holding up five fingers. Each verse, one monkey falls off, bumps his head, mama calls the doctor, doctor says no more. Drop a finger each verse. Down to four, three, two, one. Last verse: ZERO monkeys, "now they\'re finally asleep" — peaceful ending.\n\nThe vocabulary haul: jumping, fell, bumped, head, called, doctor, said. "Bumped" is a useful past tense. "No more" as an instruction is classic English phrasing. The doctor on the phone is also a fun mini-roleplay — do the bossy doctor voice.\n\nUse it at bedtime — the song ends with monkeys finally asleep, which can prime bed time. Or use it before bed but after teeth-brushing as a settle-down activity.\n\nVariations: "Five Little Speckled Frogs" (similar counting-down structure, water-themed), "Ten Green Bottles" (counting from ten — much harder).',
      examples: null,
      lyrics: 'Five little monkeys jumping on the bed,\nOne fell off and bumped his head.\nMama called the doctor and the doctor said,\n"No more monkeys jumping on the bed!"\n\nFour little monkeys jumping on the bed,\nOne fell off and bumped his head.\nMama called the doctor and the doctor said,\n"No more monkeys jumping on the bed!"\n\nThree little monkeys jumping on the bed…\n\nTwo little monkeys jumping on the bed…\n\nOne little monkey jumping on the bed,\nHe fell off and bumped his head.\nMama called the doctor and the doctor said,\n"PUT those monkeys straight to bed!"\n\nNo little monkeys jumping on the bed,\nNone fell off and bumped their head.\nMama called the doctor and the doctor said,\n"Now they\'re finally fast asleep!"',
      duration: '4 min',
      where: ['home', 'bedtime', 'car', 'anywhere'],
      skillTags: ['vocabulary', 'rhyming', 'english-maintenance', 'storytelling'],
      milestoneRefs: [
        'English vocabulary growth',
        'tell a simple story with a beginning and end'
      ],
      literacyWeight: 2,
      followUp: 'Once Five Little Monkeys is owned, do the act-it-out version — five soft toys on a bed, knocking them off one by one. Three-year-olds adore acting this song out. It also reinforces counting backwards through physical objects, not just fingers.',
      relatedIds: ['song-five-little-ducks', 'conv-counting-things']
    },

    // ─── RHYME (7 items) ───────────────────────────────────────────

    {
      id: 'rhyme-humpty-dumpty',
      category: 'rhyme',
      ages: [2, 3, 4],
      title: 'Humpty Dumpty',
      hook: 'Recite it slowly. Pause before "fall" and "again" so she fills in the rhymes.',
      body: 'Humpty Dumpty is the perfect second nursery rhyme after Hickory Dickory because it has the same scaffolding: a strong AABB rhyme scheme (wall/fall, men/again), a tiny story arc, and a satisfying physical ending (Humpty smashes).\n\nRecite it slowly, with drama. Build up "sat on a wall", make her wait for the inevitable "great fall", crash dramatically. The rhyme practically demands acting.\n\nAfter she knows it cold (usually within a week of daily reciting), apply the cloze pause: "Humpty Dumpty sat on a ___" (she says: WALL). "Humpty Dumpty had a great ___" (FALL). "All the king\'s horses and all the king\'s ___" (MEN). "Couldn\'t put Humpty together ___" (AGAIN). Four cloze pauses in one rhyme — massive rhyme-completion practice.\n\nDiscuss the rhyme: "Why did Humpty fall? Was he silly to sit on a wall? Why couldn\'t they put him back together?" The implied story — that Humpty is an egg — is often missed by 3-year-olds. Show her a picture book version (Mother Goose anthologies are easy to find).\n\nWord families to point out: -all (wall, fall, ball, call, tall, small), -en (men, then, when, hen, ten).',
      examples: [
        'Rhymes with wall/fall: ball, call, tall, small, hall, mall, all',
        'Rhymes with men/again: then, when, hen, ten, den, Ben',
        'Discussion: "What is Humpty? An egg. Why is he sitting on a wall? Silly egg.", "What broke? His shell. He cracked."',
        'Other nursery rhymes about objects falling / breaking: Jack and Jill (also fell down), Hickory Dickory (clock struck), Pat-a-Cake (different — about making)',
        'Picture book sources: any Mother Goose anthology; or YouTube for animated nursery rhyme videos (use sparingly)'
      ],
      lyrics: 'Humpty Dumpty sat on a wall,\nHumpty Dumpty had a great fall.\nAll the king\'s horses and all the king\'s men,\nCouldn\'t put Humpty together again.',
      duration: '2 min',
      where: ['bedtime', 'car', 'bathtime', 'anywhere'],
      skillTags: ['rhyming', 'phonemic-awareness', 'syllables', 'storytelling'],
      milestoneRefs: [
        'Correctly rhymes 3–4 words',
        'cannot produce a single rhyme'
      ],
      literacyWeight: 2,
      followUp: 'When Humpty is in her permanent recital list, add Jack and Jill (fell down too — different word family). Aim for a personal repertoire of 10 nursery rhymes she can recite by 42 months. That repertoire is a strong predictor of reading at six.',
      relatedIds: ['rhyme-hickory-dickory-dock', 'rhyme-jack-and-jill', 'conv-rhyming-pairs']
    },

    {
      id: 'rhyme-baa-baa-black-sheep',
      category: 'rhyme',
      ages: [2, 3, 4],
      title: 'Baa Baa Black Sheep',
      hook: 'Recite slowly. Pause before "wool", "full", "lane", "Jane".',
      body: 'Baa Baa Black Sheep is one of the very oldest English nursery rhymes (1731) and one of the most useful for phonological awareness. It has two rhyming pairs (wool/full, lane/Jane) and a clear AABB structure. It also has a tiny dialogue — the sheep speaks — which gives the child the experience of voicing a character.\n\nRecite it slowly. The opening "Baa baa black sheep" has lovely alliteration (3 B\'s) — point that out: "Listen! Baa, Baa, Black — they all start with /b/." Sound awareness piggybacking on the rhyme.\n\nCloze pauses: "Baa baa black sheep, have you any ___?" (WOOL). "Yes sir, yes sir, three bags ___" (FULL). "One for the master, one for the dame, one for the little boy who lives down the ___" (LANE — or in older versions, "the little girl who lives down the lane named Jane" — works either way).\n\nDiscussion: "What is wool? Where does wool come from? What do we make with wool?" (jumpers, blankets, socks). A great vocabulary stretch around a single rhyme.\n\nThis is also a useful song for talking about how things come from somewhere: sheep make wool, cows make milk, hens lay eggs. Origin-of-things conversations are great science-light vocabulary work.',
      examples: [
        'Rhyme pair 1: wool / full — also: bull, pull, push (push doesn\'t rhyme but feels close, distinguish for her)',
        'Rhyme pair 2: lane / Jane — also: rain, train, plane, brain, drain, again',
        'Alliteration in the rhyme: Baa, baa, black — three /b/ sounds in a row',
        'Vocabulary to expand: wool, master, dame, lane, bag, jumper, blanket, sock (wool products)',
        'Origin-of-things conversation: "Where does wool come from? Sheep. Where does milk come from? Cows. Where do eggs come from? Hens."'
      ],
      lyrics: 'Baa, baa, black sheep,\nHave you any wool?\nYes sir, yes sir,\nThree bags full.\nOne for the master,\nOne for the dame,\nAnd one for the little boy\nWho lives down the lane.',
      duration: '2 min',
      where: ['bedtime', 'car', 'bathtime', 'anywhere'],
      skillTags: ['rhyming', 'phonemic-awareness', 'alliteration', 'vocabulary'],
      milestoneRefs: [
        'Correctly rhymes 3–4 words',
        'cannot produce a single rhyme'
      ],
      literacyWeight: 2,
      followUp: 'After Baa Baa Black Sheep is owned, sing it to the same tune as Twinkle Twinkle (they share a melody) and discuss it: "Same tune, different words! Interesting." Pointing out the shared melody is a tiny musical-literacy bonus.',
      relatedIds: ['rhyme-hickory-dickory-dock', 'rhyme-mary-had-a-little-lamb', 'song-old-macdonald']
    },

    {
      id: 'rhyme-jack-and-jill',
      category: 'rhyme',
      ages: [2, 3, 4],
      title: 'Jack and Jill',
      hook: 'Recite it with the going-up-going-down motion. Pause before "water", "after".',
      body: 'Jack and Jill is a brilliant action rhyme. The two characters go UP the hill, then come DOWN. Each direction is a physical motion to add. The rhyme also tells a clear mini-story with a beginning, middle, and end — perfect tiny narrative practice.\n\nRecite it standing up. "Jack and Jill went UP the hill" — point up, reach high. "To fetch a pail of water" — pretend to carry a heavy bucket. "Jack fell DOWN" — drop. "And broke his crown" — hold head. "And Jill came tumbling after" — tumble.\n\nThe rhyme scheme: water/after (slant rhyme — not perfect, but rhyming-ear-acceptable), and hill/Jill (perfect). Two rhyming pairs.\n\nVocabulary stretch: "pail" (an old word for bucket), "fetch" (an old word for go and get), "crown" (in the rhyme, his head — though in fairytales, what kings wear), "tumbling" (falling messily). Old-fashioned English words are fine — she\'ll absorb them and they\'ll connect to fairytales later.\n\nThis rhyme also has Verse 2 which is less commonly known but worth learning: "Up Jack got and home did trot, as fast as he could caper. He went to bed to mend his head with vinegar and brown paper." Caper, vinegar, brown paper — extraordinary vocabulary from an 18th-century rhyme.',
      examples: [
        'Rhyming pairs: water / after (slant); hill / Jill (perfect)',
        'Old-fashioned vocabulary worth keeping: pail (bucket), fetch (go and get), crown (head, in this context), tumbling (falling), caper (skip quickly), vinegar (a real ingredient)',
        'Discussion: "Where did they go? Why? What happened? Who fell first?", "Tell me the story of Jack and Jill in your own words"',
        'Action sequence: UP, FETCH, DOWN, FALL, BROKEN, TUMBLE — each verb mimed'
      ],
      lyrics: 'Jack and Jill went up the hill,\nTo fetch a pail of water.\nJack fell down and broke his crown,\nAnd Jill came tumbling after.\n\nUp Jack got and home did trot,\nAs fast as he could caper.\nHe went to bed to mend his head,\nWith vinegar and brown paper.',
      duration: '2 min',
      where: ['bedtime', 'home', 'outdoor', 'anywhere'],
      skillTags: ['rhyming', 'phonemic-awareness', 'vocabulary', 'storytelling'],
      milestoneRefs: [
        'Correctly rhymes 3–4 words',
        'cannot produce a single rhyme',
        'tell a simple story with a beginning and end'
      ],
      literacyWeight: 2,
      followUp: 'After Jack and Jill, retell the story together: "First Jack and Jill went up the hill. Then Jack fell down. Then Jill came tumbling after. Last he went to bed." Story-sequencing on a known rhyme is a great bridge between rhyme and narrative comprehension.',
      relatedIds: ['rhyme-humpty-dumpty', 'conv-story-sequencing']
    },

    {
      id: 'rhyme-mary-had-a-little-lamb',
      category: 'rhyme',
      ages: [2, 3, 4],
      title: 'Mary Had a Little Lamb',
      hook: 'Recite the full poem. The full version has three or four verses — most kids only know the first.',
      body: 'Mary Had a Little Lamb is the rhyme most parents know one verse of. The full version has three or four. Teach Sophie the full version — it has a real narrative (lamb follows Mary to school, breaks the rules, teacher sends it out, lamb waits patiently for Mary) and the vocabulary is gorgeous.\n\nThe rhyme scheme is ABCB throughout (snow/go in verse 1). Each verse adds to the story. By the end she\'s heard a complete mini-novel in verse form.\n\nFocus on the vocabulary: fleece (lamb\'s wool), white as snow (a simile — point out: "as white as snow means very, very white"), rule (an early school-rule introduction), patiently (an emotion / behaviour word).\n\nUse it as a conversation opener about school: "Mary went to school. What did her teacher do when the lamb came in? Was that fair?" The fairness conversation is great for theory-of-mind work.\n\nClose pauses: "Mary had a little ___" (LAMB). "Its fleece was white as ___" (SNOW). "Everywhere that Mary went, the lamb was sure to ___" (GO). Three cloze opportunities per verse.',
      examples: [
        'Rhyming pairs across verses: snow/go (v1), school/rule (v2), out/about (v3), so/lamb-you-know (v4 — slant rhyme)',
        'Simile to point out: "as white as snow" — what other things can we compare? "as red as…", "as soft as…", "as fast as…"',
        'Vocabulary: fleece, rule, patiently, appear (old-fashioned phrasing through the verses)',
        'Discussion: "Was it kind of the teacher to send the lamb out? Why did the lamb wait? Did Mary love the lamb? How do you know?"'
      ],
      lyrics: 'Mary had a little lamb,\nIts fleece was white as snow.\nAnd everywhere that Mary went,\nThe lamb was sure to go.\n\nIt followed her to school one day,\nWhich was against the rule.\nIt made the children laugh and play,\nTo see a lamb at school.\n\nAnd so the teacher turned it out,\nBut still it lingered near.\nAnd waited patiently about,\nTill Mary did appear.\n\n"Why does the lamb love Mary so?"\nThe eager children cry.\n"Why, Mary loves the lamb, you know,"\nThe teacher did reply.',
      duration: '3 min',
      where: ['bedtime', 'car', 'home', 'anywhere'],
      skillTags: ['rhyming', 'phonemic-awareness', 'vocabulary', 'storytelling'],
      milestoneRefs: [
        'Correctly rhymes 3–4 words',
        'tell a simple story with a beginning and end'
      ],
      literacyWeight: 2,
      followUp: 'After the rhyme is memorised, use the "as ___ as ___" simile pattern to play a vocabulary game. "As tall as a tree. As small as a mouse. As soft as a pillow." Generating similes is sophisticated English at any age.',
      relatedIds: ['rhyme-baa-baa-black-sheep', 'conv-describe-things']
    },

    {
      id: 'rhyme-little-miss-muffet',
      category: 'rhyme',
      ages: [2, 3, 4],
      title: 'Little Miss Muffet',
      hook: 'Recite with drama — the spider appears, she runs! Make the spider scary.',
      body: 'Little Miss Muffet is a brilliant little drama. It has rhyme (tuffet/Muffet/away, curds/whey), unusual vocabulary (tuffet, curds, whey), and a surprise scary moment when the spider arrives. The drama makes the rhyme stick.\n\nRecite it sitting down, miming Miss Muffet eating from a bowl. Then dramatically: "Along came a SPIDER!" — use your fingers like a spider crawling. "Who sat down beside her" (your spider sits next to her bowl). "And FRIGHTENED MISS MUFFET AWAY!" — she should jump up and run. Three-year-olds adore this.\n\nVocabulary to introduce: tuffet (a little stool — Google an image to show her), curds and whey (old-fashioned English for cottage cheese — interesting food vocabulary), frightened (a stronger word than scared).\n\nDiscuss after: "Why did the spider scare Miss Muffet? Are you scared of spiders? Should she be scared?" Tiny conversation about fear and bravery.\n\nGreat for repeated playing — she will want this rhyme over and over because of the spider chase. Use that motivation to drill rhyme recognition (cloze pauses on "tuffet", "whey", "her", "away").',
      examples: [
        'Rhymes: tuffet / Muffet (perfect); curds / whey (different family); her / spider / away (slant)',
        'Old-fashioned vocabulary: tuffet (a low stool — Google to show her image), curds (the solid lumps in cheese-making), whey (the watery part — vocabulary like Little Bo Peep)',
        'Vocabulary alternatives if curds-and-whey confuses: "she was eating yogurt" or "she was eating breakfast" — content less important than the rhyme',
        'Discussion: "Why was she frightened? Are spiders scary? What would YOU do if a spider sat next to you?"'
      ],
      lyrics: 'Little Miss Muffet sat on a tuffet,\nEating her curds and whey.\nAlong came a spider,\nWho sat down beside her,\nAnd frightened Miss Muffet away.',
      duration: '2 min',
      where: ['bedtime', 'home', 'bathtime', 'anywhere'],
      skillTags: ['rhyming', 'phonemic-awareness', 'vocabulary', 'storytelling', 'emotional-vocabulary'],
      milestoneRefs: [
        'Correctly rhymes 3–4 words',
        'English vocabulary growth'
      ],
      literacyWeight: 2,
      followUp: 'After Little Miss Muffet, talk about fears: "Sophie, what frightens you? What helps when you\'re scared?" Use the rhyme as a gentle opener for emotional conversation. Then introduce Incy Wincy Spider (different story about a brave spider) as the companion piece.',
      relatedIds: ['song-incy-wincy', 'conv-feelings-vocab']
    },

    {
      id: 'rhyme-pat-a-cake',
      category: 'rhyme',
      ages: [2, 3, 4],
      title: 'Pat-a-Cake',
      hook: 'Sit facing her, clap her hands in time. Spell out her name in the cake.',
      body: 'Pat-a-Cake is the original clapping rhyme. Sit facing her, hold her hands, clap together in time with the words. The rhythm — pat-a, cake, pat-a, cake — is one of the most beat-perfect introductions to English meter she\'ll get.\n\nVerse 2 is where the magic is for Sophie: "Mark it with a B and put it in the oven for BABY AND ME." Change the letter to S and the name to Sophie: "Mark it with an S and put it in the oven for SOPHIE AND ME." Personalising the rhyme with her own letter is a tiny phonics lesson hidden in song.\n\nThis is also one of the few rhymes that explicitly references making/baking, which gives a vocabulary entry point for kitchen language: bake, oven, mark, cake, baker, dough, mix.\n\nThe physical clapping is great for rhythm and bilateral coordination (using both hands together). For older toddlers, do partner clapping patterns: clap hands together, then your own knees, then partner\'s hands, then knees. Rhythm games like this build the auditory-motor link that helps with reading rhythm later.\n\nVariations: change "B" to any letter she\'s learning. S for Sophie, M for Mum, D for Daddy. Each variation drills another letter.',
      examples: [
        'Letter substitution game: B → S (Sophie), M (Mum), D (Daddy), G (Granny), and so on through every family member',
        'Kitchen vocabulary unlocked: bake, baker, oven, cake, dough, mix, mark, fast, prick, roll',
        'Clapping patterns to add: own hands together → partner hands → own knees → repeat',
        'Action variation: each line gets a different gesture — pat for "pat-a-cake", roll for "roll it", prick for "prick it", mark for "mark it"',
        'Variations to teach later: "round and round the garden, like a teddy bear" (another classic finger-rhyme)'
      ],
      lyrics: 'Pat-a-cake, pat-a-cake, baker\'s man.\nBake me a cake as fast as you can.\nRoll it and pat it and mark it with B,\nAnd put it in the oven for baby and me.\n\n(Personalised version:)\nPat-a-cake, pat-a-cake, baker\'s man.\nBake me a cake as fast as you can.\nRoll it and pat it and mark it with S,\nAnd put it in the oven for Sophie and me.',
      duration: '2 min',
      where: ['home', 'bathtime', 'bedtime', 'kitchen', 'anywhere'],
      skillTags: ['rhyming', 'fine-motor', 'turn-taking', 'letter-names'],
      milestoneRefs: [
        'Correctly rhymes 3–4 words',
        'Recognises every letter in her own name'
      ],
      literacyWeight: 2,
      followUp: 'After Pat-a-Cake, do actual baking together — even just simple flapjacks or cookies. "Mark it with an S" becomes "let\'s draw an S in the cookie dough with a fork". Rhyme to real life is the most satisfying loop.',
      relatedIds: ['lit-letter-s-hunt', 'lit-writing-name']
    },

    {
      id: 'rhyme-this-little-piggy',
      category: 'rhyme',
      ages: [2, 3, 4],
      title: 'This Little Piggy',
      hook: 'Sit her on your lap. Wiggle each toe in turn as you recite the rhyme.',
      body: 'This Little Piggy is the original toe-counting rhyme, perfect for bath time or any moment her feet are bare. Five toes, five piggies, five short verses, all ending with the satisfying "wee wee wee all the way home" tickle.\n\nSit her on your lap. Wiggle her big toe: "This little piggy went to market." Next toe: "This little piggy stayed at home." Next: "This little piggy had roast beef." Next: "This little piggy had none." Last (smallest toe): "And this little piggy went wee wee wee all the way home!" — tickle up her foot to her belly. Belly laughter guaranteed.\n\nThe vocabulary is interesting: market (where things are bought), roast beef (a classic English Sunday dinner — vocabulary entry for cooking words), wee wee wee (the silly part she\'ll request over and over).\n\nUse the rhyme as toe vocabulary practice. "Where\'s your BIG toe? Where\'s your SECOND toe? Where\'s your LITTLEST toe?" Even just naming the five toes is useful body vocabulary.\n\nThis is also a connection-builder, not just a learning activity. The lap-sitting, foot-tickling intimacy of the rhyme matters as much as the words. Don\'t over-academic-ise this one — let it be a snuggle.',
      examples: [
        'Toe vocabulary: big toe, second toe, middle toe, fourth toe, little toe (or "pinky toe")',
        'Vocabulary in the rhyme: market, home, roast beef, none, wee wee wee',
        'Variations to swap in: "this little piggy had pizza", "this little piggy had ice cream" — silly food swaps',
        'Anatomy bonus: do the rhyme on her fingers as well as toes. Five fingers, five piggies. Then she can do it to herself.'
      ],
      lyrics: 'This little piggy went to market.\nThis little piggy stayed at home.\nThis little piggy had roast beef.\nThis little piggy had none.\nAnd this little piggy went\n"Wee wee wee" all the way home!\n(tickle up the foot)',
      duration: '2 min',
      where: ['bathtime', 'bedtime', 'home', 'anywhere'],
      skillTags: ['rhyming', 'vocabulary', 'fine-motor', 'turn-taking'],
      milestoneRefs: [
        'English vocabulary growth',
        'Correctly rhymes 3–4 words'
      ],
      literacyWeight: 1,
      followUp: 'Once she knows it, let HER do This Little Piggy on YOUR toes or fingers. Role reversal — she recites, you react — is real expressive language practice. She\'ll tickle harder than you do.',
      relatedIds: ['conv-body-parts', 'song-incy-wincy']
    },

    // ─── BOOK (14 items) ───────────────────────────────────────────

    {
      id: 'book-gruffalos-child',
      category: 'book',
      ages: [3, 4, 5],
      title: 'Read The Gruffalo\'s Child',
      hook: 'Read the sequel to The Gruffalo. Same rhyming density, new story arc.',
      body: 'The Gruffalo\'s Child is the sequel to The Gruffalo. Read it AFTER she\'s mastered the first one — she\'ll get the in-joke (the mouse is actually scary, not the Gruffalo) immediately.\n\nThe story flips the original: the Gruffalo\'s Child wanders into the wood looking for the Big Bad Mouse her father warned her about, and the same animals (snake, owl, fox, then the mouse) appear. The repetition pattern is identical to The Gruffalo, so Sophie will start predicting before the third reading.\n\nNew vocabulary: huddles, scurries, knew (irregular past tense of know), in the deep dark wood (atmospheric phrase). The "deep dark wood" repeats throughout — point it out, use it elsewhere ("our garden is the deep dark wood today").\n\nPair with the original: read them on alternate weeks for a few months. Comparing the two stories — "how is this different? what stayed the same?" — is real comparative comprehension work.\n\nAfter the book, do the trick the mouse plays: use her shadow on a wall. "Look — your shadow is HUGE on the wall. Just like the Big Bad Mouse." The shadow play makes the punchline land.',
      examples: null,
      author: 'Julia Donaldson (illustrated by Axel Scheffler)',
      whyThisBook: 'Sequel to The Gruffalo with the same rhyming density, narrative repetition, and rich vocabulary. Deepens the literacy work of the original AND introduces tension reversal — the mouse, not the Gruffalo, is the scary one. Sophisticated narrative play built into a perfectly accessible rhyming book.',
      discussionPrompts: [
        'Why does the Gruffalo\'s Child go into the wood when her father told her not to?',
        'How is the Big Bad Mouse different from a real mouse?',
        'What is the same about this book and The Gruffalo? What\'s different?',
        'Why does the mouse use his shadow? Was that clever?',
        'How do you think the Gruffalo\'s Child felt when she got home safely?'
      ],
      duration: '15 min',
      where: ['bedtime', 'home'],
      skillTags: ['vocabulary', 'rhyming', 'comprehension', 'storytelling', 'english-maintenance'],
      milestoneRefs: [
        'tell a simple story with a beginning and end',
        'Shows print awareness'
      ],
      literacyWeight: 2,
      followUp: 'Read both Gruffalo books back-to-back across a week. Then ask her to retell each one from memory. Comparing the two retellings is a wonderful narrative-comprehension assessment.',
      relatedIds: ['book-the-gruffalo', 'book-room-on-the-broom', 'conv-story-questions']
    },

    {
      id: 'book-room-on-the-broom',
      category: 'book',
      ages: [3, 4, 5],
      title: 'Read Room on the Broom',
      hook: 'Read tonight — a witch losing her things one by one, then meeting a dragon. Rhymes throughout.',
      body: 'Room on the Broom is the second-strongest Julia Donaldson book after The Gruffalo, with a kinder, gentler story arc. A witch loses her hat, her bow, her wand, picks up a dog, a bird, a frog — and they have to save her from a dragon.\n\nThe rhyme scheme is dense and predictable. The witch\'s name (Witch) rhymes implicitly with all the action: "down the witch flew, with a cackle and a shriek". The story has clear repetition (each item lost, each animal joining) that makes predictability easy.\n\nNew vocabulary: cauldron, wand, broom, broomstick, cackle, shriek, plop, splash, swooped. The book is a feast of magic and movement words. Mime the witch as you read — broom-flying, splat, shriek.\n\nDiscuss after: "Why did the animals help save the witch? What did she give them? Was she lonely before?" The friendship theme is genuinely warm and gives a great conversation about kindness.\n\nThe BBC animated film exists and is wonderful — watch AFTER she\'s heard the book three times. The voice cast (Simon Pegg, Gillian Anderson, Rob Brydon, David Walliams) is RP English at its finest — great accent absorption.',
      examples: null,
      author: 'Julia Donaldson (illustrated by Axel Scheffler)',
      whyThisBook: 'Dense rhyme, clear repetition, rich magical vocabulary (cauldron, wand, broom, cackle, shriek), and an emotionally warm friendship arc. A different mood from The Gruffalo — gentler, kinder — but the same rhyming literacy machine underneath.',
      discussionPrompts: [
        'Why did the witch let each new animal climb on the broom?',
        'What three things did the witch lose? In what order?',
        'How did the animals save the witch from the dragon?',
        'Would you have shared your broom? Why or why not?',
        'What\'s the difference between a witch in this book and the witches in fairytales?'
      ],
      duration: '15 min',
      where: ['bedtime', 'home'],
      skillTags: ['vocabulary', 'rhyming', 'comprehension', 'storytelling', 'english-maintenance'],
      milestoneRefs: [
        'tell a simple story with a beginning and end',
        'English vocabulary growth'
      ],
      literacyWeight: 2,
      followUp: 'After Room on the Broom, work through the Donaldson canon roughly in order: Stick Man, Tiddler, Zog, The Snail and the Whale, A Squash and a Squeeze. Each one has the same rhyming-narrative scaffold but with different vocabulary domains (Christmas, sea, dragons, ocean, kitchen). Together they\'re a complete early-childhood literature curriculum.',
      relatedIds: ['book-the-gruffalo', 'book-stick-man', 'book-zog']
    },

    {
      id: 'book-stick-man',
      category: 'book',
      ages: [3, 4, 5],
      title: 'Read Stick Man',
      hook: 'Read it especially in autumn or winter. Stick Man is also a Christmas story.',
      body: 'Stick Man is Julia Donaldson at her most narratively ambitious. A stick — yes, a literal stick — gets carried away from his family by accident, encounters dogs and rivers and Christmas fires, and eventually finds his way home. It\'s an odyssey told in rhyme.\n\nThe vocabulary is rich and seasonal: branch, twig, mast, arm, leg, sword, broken, lost, far, home. The book is also a great way to introduce concepts of size, identity, and family — Stick Man is mistaken for many things (a sword, a flag pole, a goalpost) because he LOOKS like a stick, but he\'s a person inside.\n\nRead it slowly. Stick Man\'s recurring refrain — "I\'m Stick Man! I\'m Stick Man! I\'M STICK MAN! That\'s me, and I want to go home to the family tree!" — gets desperate as the book progresses. Acting out the increasing emotion is the lesson.\n\nThis is a great winter and Christmas book — Santa appears at the end. Pair it with a real walk in the woods picking up sticks and naming them ("this is a Stick Mum, this is a Stick Baby"). Real-world echo of the book makes it more memorable.\n\nDiscussion: "Why does Stick Man keep getting mistaken for things? What is he REALLY? Does he get home?" The identity question is surprisingly deep for a children\'s book.',
      examples: null,
      author: 'Julia Donaldson (illustrated by Axel Scheffler)',
      whyThisBook: 'Dense rhyme, a clear journey-home narrative, seasonal Christmas content, and the deep idea of being mistaken for what you\'re not. Excellent vocabulary around wood, family, and seasons. Perfect for winter reading.',
      discussionPrompts: [
        'What is Stick Man really? Is he just a stick?',
        'Why did the dog take him? Why did the swan use him?',
        'How does Santa help him get home?',
        'How do you think his family felt when he came back?',
        'Can you remember all the things Stick Man got mistaken for?'
      ],
      duration: '15 min',
      where: ['bedtime', 'home'],
      skillTags: ['vocabulary', 'rhyming', 'comprehension', 'storytelling', 'english-maintenance'],
      milestoneRefs: [
        'tell a simple story with a beginning and end',
        'English vocabulary growth'
      ],
      literacyWeight: 2,
      followUp: 'After reading Stick Man, go for a stick walk. Pick up sticks and name each one ("This is Stick Auntie. This is Stick Cousin."). Real-world play extending a book is one of the highest-value reading activities.',
      relatedIds: ['book-the-gruffalo', 'book-room-on-the-broom', 'out-five-senses-walk']
    },

    {
      id: 'book-tiddler',
      category: 'book',
      ages: [3, 4, 5],
      title: 'Read Tiddler',
      hook: 'Read this one for the FISH vocabulary — every sea creature named, with rhymes.',
      body: 'Tiddler is a Julia Donaldson book about a little fish who tells tall tales (lies). Each day at school he arrives late with an outlandish story — caught by an octopus, ridden by a seahorse — and is told off. Then one day his tall-tale story actually saves him from being caught for real.\n\nThis is the BEST book for SEA-CREATURE vocabulary: octopus, seahorse, mermaid, jellyfish, eel, plaice, prawn, ray, sole, dab, dogfish. Most of these are species an English-speaking child knows by 4; a Bulgarian-dominant child won\'t unless you teach them. Tiddler does the teaching.\n\nThe story arc has a clever moral: lying gets a bad name, but imagination saves the day. The teacher\'s repeated "you\'re late" gets funnier each time. After three readings, Sophie will start chanting along.\n\nUse the book as a launchpad for sea-creature deep-dive: get a sea-creature picture book or watch a David Attenborough underwater clip. The pairing of fictional and real underwater life is enriching.\n\nVocabulary highlights: tale (a story), tide, eel, weed (seaweed), mermaid, scales. Discuss "tale" vs "tail" — homophones! That\'s a real lesson in itself.',
      examples: null,
      author: 'Julia Donaldson (illustrated by Axel Scheffler)',
      whyThisBook: 'The richest sea-creature vocabulary in any picture book. Plus a moral arc about lying/imagination/honesty that gives real conversation depth. Excellent rhyming and rhythm throughout.',
      discussionPrompts: [
        'Why was Tiddler always late?',
        'Why did the other fish stop believing him?',
        'How did Tiddler\'s storytelling save him in the end?',
        'Is it ok to make up stories? When is it not ok?',
        'Can you name all the sea creatures in this book?'
      ],
      duration: '15 min',
      where: ['bedtime', 'home'],
      skillTags: ['vocabulary', 'rhyming', 'storytelling', 'comprehension'],
      milestoneRefs: [
        'tell a simple story with a beginning and end',
        'English vocabulary growth'
      ],
      literacyWeight: 2,
      followUp: 'After Tiddler, do a sea-creature naming game. "Tell me 10 sea creatures." She should now know octopus, seahorse, jellyfish, eel, mermaid, fish, shark, crab, prawn, lobster. Pair with the categories game (separate item) for vocabulary consolidation.',
      relatedIds: ['book-the-gruffalo', 'book-snail-and-whale', 'conv-categories-game']
    },

    {
      id: 'book-squash-and-squeeze',
      category: 'book',
      ages: [3, 4, 5],
      title: 'Read A Squash and a Squeeze',
      hook: 'A little old lady\'s house is too small — so a wise man tells her to add MORE animals. Hilarious.',
      body: 'A Squash and a Squeeze is the funniest Julia Donaldson book. A little old lady complains her house is too small. The wise man tells her to add a hen. Then a goat. Then a pig. Then a cow. House gets WORSE. Finally he tells her to remove them all — and her original house feels palatial. A perfect tiny lesson in perspective.\n\nThe rhyme scheme is tight (squash/squeeze, cluck/muck/luck). The repetition is satisfying — each new animal added means re-reading the previous animals, building a chant.\n\nNew vocabulary: squash (verb — squash together), squeeze (verb — squeeze together — both physical verbs), mope, fret, advice, palace. Plus the farm-animal sound vocabulary again.\n\nThis is a great book for ACTING OUT. Get Sophie\'s teddy or her dolls and pretend the lounge is the tiny house. Add a stuffed hen. Then a goat (use a different toy). Cram them all in. Now take them out. "Doesn\'t the lounge feel big now?" The acting-out is the lesson.\n\nMoral discussion: "Why did adding animals make it WORSE? But why did taking them out make her HAPPY? Did anything change really?" Three-year-olds get this.',
      examples: null,
      author: 'Julia Donaldson (illustrated by Axel Scheffler)',
      whyThisBook: 'Hilarious cumulative narrative (each animal added builds the chant), great farm-vocabulary, and a real lesson in perspective and gratitude. Plus the words "squash" and "squeeze" appear in the title — vocabulary right at the door.',
      discussionPrompts: [
        'Why did the wise man tell her to put a hen INSIDE the house?',
        'Was the wise man being silly, or was he being clever?',
        'How did her house feel after the animals left?',
        'Did her house actually change? What changed?',
        'Can you remember all the animals she put in her house?'
      ],
      duration: '15 min',
      where: ['bedtime', 'home'],
      skillTags: ['vocabulary', 'rhyming', 'comprehension', 'storytelling'],
      milestoneRefs: [
        'tell a simple story with a beginning and end',
        'English vocabulary growth'
      ],
      literacyWeight: 2,
      followUp: 'Act out the book at home — cram soft toys into a small space, then take them out. The physical experience of squash-and-squeeze makes the title vocabulary stick. Then connect to her own life: "Is your bed cosy or squashy? Is your room big or small?"',
      relatedIds: ['book-the-gruffalo', 'song-old-macdonald']
    },

    {
      id: 'book-zog',
      category: 'book',
      ages: [3, 4, 5],
      title: 'Read Zog',
      hook: 'A dragon learning to fly, roar, breathe fire, capture princesses. Each year a new skill.',
      body: 'Zog is a Julia Donaldson book about a young dragon at school learning the things dragons need to know: flying, roaring, breathing fire, capturing princesses. Each year he tries and fails, and a kind girl (who turns out to be Princess Pearl) helps him. Eventually Princess Pearl decides she\'d rather be a doctor than a princess.\n\nThis book has two huge gifts: (1) a SCHOOL setting with year-by-year progression that lets you talk about her own learning ("you\'re learning letters this year"); (2) a refreshing twist on princess stereotypes (Princess Pearl rejects the princess role in favour of doctor work).\n\nNew vocabulary: practise, roar, breathe, capture, princess, knight, doctor, ointment, plaster. The medical vocabulary at the end is a useful set.\n\nThe rhyme scheme is varied — not as tight as The Gruffalo, but the storytelling rhythm is strong. Predictable patterns ("In Year 1…", "In Year 2…", "In Year 3…").\n\nDiscussion gold: "Why doesn\'t Princess Pearl want to be a princess? What does she want to be? Is that allowed?" The book genuinely undoes the princess-passive trope — useful conversation for any 3-year-old girl who\'s starting to imbibe gender expectations.',
      examples: null,
      author: 'Julia Donaldson (illustrated by Axel Scheffler)',
      whyThisBook: 'Donaldson rhyme machine, school setting that mirrors Sophie\'s own kindergarten experience, and a strong feminist storyline (princess becomes doctor). Excellent medical and dragon-skill vocabulary.',
      discussionPrompts: [
        'What did Zog have to learn each year?',
        'Why did Princess Pearl keep helping him?',
        'Why didn\'t Princess Pearl want to be a princess?',
        'What does a doctor do? Have YOU ever been to the doctor?',
        'What are YOU learning at kindergarten this year?'
      ],
      duration: '15 min',
      where: ['bedtime', 'home'],
      skillTags: ['vocabulary', 'rhyming', 'comprehension', 'storytelling'],
      milestoneRefs: [
        'tell a simple story with a beginning and end',
        'English vocabulary growth'
      ],
      literacyWeight: 2,
      followUp: 'After Zog, pair with the Pretend Doctor game (separate item). Princess Pearl is a doctor — Sophie can be a doctor too. The book-to-roleplay connection gives the medical vocabulary a place to live.',
      relatedIds: ['book-the-gruffalo', 'play-doctor', 'book-room-on-the-broom']
    },

    {
      id: 'book-snail-and-whale',
      category: 'book',
      ages: [3, 4, 5],
      title: 'Read The Snail and the Whale',
      hook: 'A tiny snail catches a ride on a whale. Around the world: mountains, ice, beach.',
      body: 'The Snail and the Whale is a quieter Julia Donaldson book, but it\'s arguably the most geographically and linguistically expansive. A tiny snail wants to see the world. A humpback whale agrees to take her. They sail past mountains, glaciers, deserts, beaches. The whale gets stranded; the snail saves him.\n\nThe vocabulary is BEAUTIFUL: humpback, tail (whale), shimmering, twinkling, soaring, hop, leap, whoosh, glow. The world the snail sees — fiery mountains, icebergs, tall waves, golden sands — is described in lush adjectives. This is poetry.\n\nThe rhyme scheme is solid. The map-and-journey structure gives Sophie a sense of global geography in story form. Show her a real globe or map while you read: "Look — this is where the whale and snail might have gone."\n\nThe ending — small saves big — is satisfying. The snail uses her shell to spell HELP HELP on the school blackboard, calling humans to save the whale. Discussion: "How can a tiny snail save a huge whale? What does the snail know that the whale doesn\'t?"\n\nThis book sits really well at bedtime. The rhythm is calm and the journey feels like falling asleep gently.',
      examples: null,
      author: 'Julia Donaldson (illustrated by Axel Scheffler)',
      whyThisBook: 'The richest descriptive vocabulary in any Donaldson book — fiery mountains, twinkling stars, golden sands, soaring waves. Plus geographic breadth (the snail sees the world) and a small-saves-big plot that resonates. Perfect bedtime book.',
      discussionPrompts: [
        'Why did the little snail want to see the world?',
        'What was the most amazing place they visited?',
        'How did the snail save the whale?',
        'What does it mean when something is "shimmering"?',
        'Where would YOU go if you could travel anywhere?'
      ],
      duration: '15 min',
      where: ['bedtime', 'home'],
      skillTags: ['vocabulary', 'rhyming', 'comprehension', 'storytelling', 'description'],
      milestoneRefs: [
        'tell a simple story with a beginning and end',
        'English vocabulary growth'
      ],
      literacyWeight: 2,
      followUp: 'After Snail and the Whale, point to a globe or map. "Where could a whale swim? Can you find the mountains? The deserts? The icy places?" Pairing the book with real geography is a great vocabulary anchor.',
      relatedIds: ['book-tiddler', 'book-the-gruffalo', 'conv-describe-things']
    },

    {
      id: 'book-each-peach-pear-plum',
      category: 'book',
      ages: [2, 3, 4],
      title: 'Read Each Peach Pear Plum',
      hook: 'Find the hidden nursery-rhyme character on every page. "I spy Mother Hubbard…"',
      body: 'Each Peach Pear Plum by the Ahlbergs is a brilliant rhyming I-Spy book that links every page to a classic nursery rhyme character. Each opening: "Each peach pear plum, I spy Tom Thumb." Then the picture hides Tom Thumb. Find him with her.\n\nThe book is brief — about 30 seconds per opening — but the rhyme is dense and the spotting game keeps her engaged across multiple readings. Every page has a hidden character: Tom Thumb, Mother Hubbard, Cinderella, the Three Bears, Bo-Peep, Jack and Jill, the Wicked Witch, Robin Hood, Baby Bunting.\n\nThis is the rare book that EXPLICITLY connects nursery rhymes to picture books — a fantastic cross-reference for a 3-year-old building up her nursery-rhyme repertoire. Each time she spots a character, briefly mention the rhyme: "There\'s Jack and Jill — remember the rhyme?"\n\nThe rhyme scheme is gorgeous: "Each peach pear plum, I spy plum / I spy Tom Thumb." Plum/Thumb is a perfect rhyme. By the fifth reading she\'ll recite the openings with you.\n\nUse it as I-Spy training. The visual searching ("find Mother Hubbard") trains the same visual-discrimination skill she\'ll need later for letter discrimination in reading.',
      examples: null,
      author: 'Janet & Allan Ahlberg',
      whyThisBook: 'Bridges nursery rhymes and picture books with a built-in I-Spy game. Trains visual discrimination AND nursery-rhyme recall. Dense rhyme on every page. Short and re-readable.',
      discussionPrompts: [
        'Can you find Mother Hubbard? Where is she hiding?',
        'Do you remember the Jack and Jill rhyme? What happened to them?',
        'Which character is your favourite?',
        'What other nursery-rhyme characters can you remember?',
        'Why do you think they\'re all hiding in the pictures?'
      ],
      duration: '10 min',
      where: ['bedtime', 'home'],
      skillTags: ['rhyming', 'vocabulary', 'comprehension', 'fine-motor'],
      milestoneRefs: [
        'Correctly rhymes 3–4 words',
        'English vocabulary growth'
      ],
      literacyWeight: 2,
      followUp: 'After Each Peach Pear Plum, look up each of the nursery rhymes featured. Spend a week learning Mother Hubbard. Then Bo-Peep. Then a Three Bears retelling. The book becomes a launchpad for an entire nursery-rhyme syllabus.',
      relatedIds: ['rhyme-humpty-dumpty', 'rhyme-jack-and-jill', 'game-i-spy-sounds']
    },

    {
      id: 'book-dear-zoo',
      category: 'book',
      ages: [2, 3, 4],
      title: 'Read Dear Zoo',
      hook: 'Lift-the-flap. Each animal is the wrong pet for her. Until the puppy arrives.',
      body: 'Dear Zoo by Rod Campbell is the perfect very-young-toddler animal book that still works at 3. Each spread shows a closed crate with text ("So they sent me a…") and a flap that lifts to reveal the animal. She lifts the flap; you read the surprise.\n\nThe pattern is fixed and lovely: each animal is too big, too tall, too grumpy, too fierce, too jumpy, too scary, too naughty. Each problem matches an animal that obviously has that trait — elephant too big, giraffe too tall, lion too fierce, monkey too naughty. By the fourth reading she predicts: "It\'ll be the snake — too scary!"\n\nVocabulary haul: big, tall, fierce, grumpy, jumpy, scary, naughty, perfect. These are all useful adjectives, taught with picture-matching to make them concrete.\n\nThe ending — they send her a PUPPY, and the puppy is "perfect" — is satisfying. A great chance to discuss "what makes the perfect pet for YOU?"\n\nThis is also the rare picture book that introduces the format of a LETTER — "Dear Zoo, I wrote to the zoo to send me a pet." A 3-year-old\'s first exposure to letter-writing conventions. By 4 she could dictate a "Dear Zoo" letter back: "Dear Zoo, thank you for the puppy. Love, Sophie."',
      examples: null,
      author: 'Rod Campbell',
      whyThisBook: 'Simple repetition pattern that\'s perfect for active reading and prediction. Solid adjective vocabulary (big, tall, fierce, grumpy, jumpy). Lift-the-flap engagement keeps even pre-readers active. And introduces the LETTER format — a first peek at written communication.',
      discussionPrompts: [
        'Why was the elephant too big? The lion too fierce?',
        'Which animal was your favourite? Why?',
        'Why is the puppy perfect?',
        'If you wrote to the zoo, what pet would you ask for?',
        'Can you remember all the animals in order?'
      ],
      duration: '10 min',
      where: ['bedtime', 'home'],
      skillTags: ['vocabulary', 'comprehension', 'storytelling', 'turn-taking'],
      milestoneRefs: [
        'English vocabulary growth',
        'Shows print awareness'
      ],
      literacyWeight: 1,
      followUp: 'After Dear Zoo, write a real letter together: "Dear Zoo, please send me a [her choice]." She dictates, you scribe. Reading her dictated letter back to her is a powerful print-awareness moment.',
      relatedIds: ['book-bear-hunt', 'conv-describe-things', 'song-old-macdonald']
    },

    {
      id: 'book-bear-hunt',
      category: 'book',
      ages: [2, 3, 4, 5],
      title: 'Read We\'re Going on a Bear Hunt',
      hook: 'Read it loud. Stomp through the grass, splash through the river — full body.',
      body: 'We\'re Going on a Bear Hunt by Michael Rosen is the rare picture book that demands FULL BODY participation. Each obstacle (long wavy grass, river, mud, forest, snowstorm, cave) has its own sound effect: SWISHY SWASHY, SPLASH SPLOSH, SQUELCH SQUERCH, STUMBLE TRIP, HOOOO WOOOO, TIPTOE TIPTOE. Read it standing up. Mime everything.\n\nThe repetition pattern is one of the strongest in English children\'s literature: "We can\'t go over it. We can\'t go under it. Oh no! We\'ve got to go THROUGH it!" Three-year-olds chant it within two readings. The onomatopoeia — those silly sound effects — locks the obstacles into memory.\n\nVocabulary haul: wavy, swirling, deep, cold, narrow, gloomy, swirling, whirling. Sensory adjectives in abundance. Plus the prepositions over / under / through repeated obsessively — this is preposition drill in story form.\n\nThe ending is wonderful: they actually find the bear, scream, run backwards through everything ("STUMBLE trip, hoo woo, tiptoe tiptoe, swishy swashy"), get home, and hide under the duvet. Discuss the FEAR arc — Sophie understands fear and safe-place returns instinctively.\n\nWatch the Michael Rosen YouTube performance afterwards — the author himself performing the book. It\'s electric. Sophie will copy his expressions.',
      examples: null,
      author: 'Michael Rosen (illustrated by Helen Oxenbury)',
      whyThisBook: 'Full-body kinaesthetic reading. The strongest onomatopoeia in any English picture book (SWISHY SWASHY, SPLASH SPLOSH, SQUELCH SQUERCH). Massive sensory vocabulary. Preposition drill (over/under/through). And a perfect fear-and-safety story arc.',
      discussionPrompts: [
        'What sound did the grass make? The river? The mud?',
        'Why did they want to find a bear?',
        'Why did they run home after finding the bear?',
        'Were they brave at the beginning? Were they brave at the end?',
        'Can you remember all six things they walked through? (Grass, river, mud, forest, snowstorm, cave.)'
      ],
      duration: '15 min',
      where: ['home', 'bedtime'],
      skillTags: ['vocabulary', 'comprehension', 'storytelling', 'phonemic-awareness', 'description'],
      milestoneRefs: [
        'tell a simple story with a beginning and end',
        'English vocabulary growth'
      ],
      literacyWeight: 2,
      followUp: 'After Bear Hunt, watch Michael Rosen perform the book on YouTube (search "Michael Rosen We\'re Going on a Bear Hunt"). His delivery is masterclass-level English expressive performance. Sophie will copy his facial expressions and emphasis.',
      relatedIds: ['book-the-gruffalo', 'conv-prepositions', 'out-five-senses-walk']
    },

    {
      id: 'book-tiger-came-to-tea',
      category: 'book',
      ages: [3, 4, 5],
      title: 'Read The Tiger Who Came to Tea',
      hook: 'A tiger arrives at Sophie\'s house, eats ALL the food, drinks ALL the water. Calm chaos.',
      body: 'The Tiger Who Came to Tea by Judith Kerr is a UK classic — published 1968, still on every child\'s shelf. A tiger appears at the door and eats every scrap of food and drinks every drop of water in the house. The mum stays calm. When Daddy comes home, they go out for sausages and chips. The next day, mum buys a big tin of tiger food just in case.\n\nThe magic: the LITTLE GIRL in the book is called Sophie. Read your daughter\'s name out loud: "And the little girl in this book is called SOPHIE — just like you!" That coincidence makes the whole book hit harder.\n\nVocabulary: tea (the meal, not just the drink), sandwiches, biscuits, sausages, chips, supper, tap (water tap), gobbled, gulped, slurped. Domestic English of a particular British register. "Going out for tea" is a British idiom worth teaching.\n\nThe story arc is wonderfully gentle: chaos, calm response, problem-solving. Discuss: "Why didn\'t Sophie\'s mum panic? What would YOU do if a tiger came to your house? Would you share your tea?"\n\nThe tiger never reappears. The big tin of tiger food sits on the shelf, unused. That\'s the perfect ending — open, possible, ever-ready. Three-year-olds love that ambiguity.',
      examples: null,
      author: 'Judith Kerr',
      whyThisBook: 'The little girl is also called Sophie — instant personal connection. Classic British domestic vocabulary (tea, sandwiches, chips, sausages). Beautifully gentle response to chaos. A 60-year UK classic for good reason.',
      discussionPrompts: [
        'Why did Sophie\'s mum let the tiger eat all the food?',
        'Was Sophie scared of the tiger? How can you tell?',
        'What did they do when the food was all gone?',
        'What would YOU do if a tiger came to OUR tea?',
        'Why did the mum buy a big tin of tiger food?'
      ],
      duration: '15 min',
      where: ['bedtime', 'home'],
      skillTags: ['vocabulary', 'comprehension', 'storytelling', 'english-maintenance'],
      milestoneRefs: [
        'tell a simple story with a beginning and end',
        'English vocabulary growth'
      ],
      literacyWeight: 1,
      followUp: 'After The Tiger Who Came to Tea, do a pretend tea party (separate item). Lay the table, make sandwiches, pour tea. "What if a tiger came? Would we share?" Real-life echo of the book makes it more vivid.',
      relatedIds: ['play-tea-party', 'play-restaurant', 'book-dear-zoo']
    },

    {
      id: 'book-wild-things',
      category: 'book',
      ages: [3, 4, 5],
      title: 'Read Where the Wild Things Are',
      hook: 'A boy is sent to his room, sails to where the Wild Things live, becomes their king, comes home.',
      body: 'Where the Wild Things Are by Maurice Sendak is the deepest picture book on this list. A boy named Max is sent to his room without supper. He imagines sailing to a wild island where monsters crown him king. He commands a wild rumpus. Then he wants to come home. The boat sails back. His supper is waiting, still warm.\n\nThe vocabulary is precise: rumpus, mischief, terrible, gnashing, roar. The illustrations are extraordinary — the Wild Things get bigger and wilder as Max\'s imagination spirals.\n\nThe emotional arc is one of the best in children\'s literature: anger → imaginative escape → power → loneliness → homesick → return → love. Discuss it honestly. "Why was Max angry? Why did he go away? Why did he come home?" The book takes a child\'s anger seriously.\n\nThe wild rumpus — three wordless spreads of dancing monsters — is where Sophie should DANCE. Get up and rumpus with her. Then sit back down for the "but they were lonely" moment.\n\nMax\'s mum is unseen — she\'s the one who keeps his supper warm. That tiny implicit love at the end is the whole book\'s point.',
      examples: null,
      author: 'Maurice Sendak',
      whyThisBook: 'The most emotionally honest picture book about anger and imagination. Excellent uncommon vocabulary (rumpus, mischief, gnashing). The wordless wild rumpus spreads require Sophie to make the action herself. And the love at the end is implicit and powerful.',
      discussionPrompts: [
        'Why was Max sent to his room?',
        'Where did he go? Did he really sail there, or did he imagine it?',
        'What is a "wild rumpus"?',
        'Why did Max want to come home?',
        'Who kept his supper warm? How do you know they love him?'
      ],
      duration: '15 min',
      where: ['bedtime', 'home'],
      skillTags: ['vocabulary', 'comprehension', 'storytelling', 'emotional-vocabulary', 'english-maintenance'],
      milestoneRefs: [
        'tell a simple story with a beginning and end',
        'English vocabulary growth'
      ],
      literacyWeight: 2,
      followUp: 'After Wild Things, have the conversation explicitly. "When you\'re angry, where do you wish you could go? What would help you come home?" Then introduce the Wild Things rumpus as a real coping strategy — when angry, do a five-minute wild dance. Energy release in English.',
      relatedIds: ['book-the-gruffalo', 'conv-feelings-vocab']
    },

    {
      id: 'book-pigeon-bus',
      category: 'book',
      ages: [3, 4, 5],
      title: 'Read Don\'t Let the Pigeon Drive the Bus!',
      hook: 'A pigeon BEGS to drive the bus. You and Sophie must say NO every time.',
      body: 'Don\'t Let the Pigeon Drive the Bus! by Mo Willems is the rare picture book that talks DIRECTLY to the reader. The bus driver leaves, and the pigeon spends the whole book trying every persuasion technique to get Sophie to say yes — pleading, threatening, sulking, scheming, bargaining.\n\nThe interactivity is the magic. The pigeon says "Pleeeease can I drive the bus?" — and Sophie must shout "NO!" Each new tactic, another loud "NO!" By the third reading she anticipates the whole arc.\n\nThis is an English-PRACTICE book like no other. Sophie has to verbalise repeatedly, with confidence, in English. The pigeon is also a great character-voice — try doing it as whiny, then desperate, then sulky. Three-year-olds love seeing adults act silly.\n\nVocabulary: persuade, plead, beg, sulk, scheme, deal, promise, never. All useful manipulation vocabulary (in a good way — she\'ll spot these tactics in her own life).\n\nThe ending — a TRUCK passes by, the pigeon\'s eyes light up, "I wonder if I can drive that…" — is comedic gold. Discuss it: "What\'s the pigeon\'s new plan?"\n\nThe Pigeon series is large — Don\'t Let the Pigeon Stay Up Late, The Duckling Gets a Cookie. Once she loves one, get more.',
      examples: null,
      author: 'Mo Willems',
      whyThisBook: 'Direct reader interaction — Sophie has to verbalise "NO" repeatedly in English. Excellent persuasion vocabulary (plead, beg, sulk, scheme). Hilarious character voice work. Builds confident English speaking.',
      discussionPrompts: [
        'Why doesn\'t the pigeon get to drive the bus?',
        'What was the silliest excuse the pigeon made?',
        'How do you say NO when you really mean it?',
        'What do you think the pigeon will do next time?',
        'Have you ever begged for something? Did it work?'
      ],
      duration: '10 min',
      where: ['home', 'bedtime'],
      skillTags: ['vocabulary', 'comprehension', 'english-conversation', 'storytelling', 'english-maintenance'],
      milestoneRefs: [
        'English sentences of 4–5 words',
        'English vocabulary growth',
        'refuses to use English at home'
      ],
      literacyWeight: 1,
      followUp: 'Once she loves the Pigeon book, get the rest of the series (Don\'t Let the Pigeon Stay Up Late!, The Pigeon Wants a Puppy!, etc.). Then try Elephant and Piggie books (also by Mo Willems) — speech-bubble-only books that are perfect for emerging readers to decode dialogue.',
      relatedIds: ['book-dear-zoo', 'conv-please-thank-you']
    },

    {
      id: 'book-hungry-caterpillar',
      category: 'book',
      ages: [2, 3, 4],
      title: 'Read The Very Hungry Caterpillar',
      hook: 'A caterpillar eats through fruit, sweets, then transforms. Days of the week, numbers, foods, life cycle.',
      body: 'The Very Hungry Caterpillar by Eric Carle is one of the most-loved picture books ever written. It also packs an extraordinary amount of curriculum into a tiny book: days of the week (Monday through Sunday), counting (1 apple, 2 pears, 3 plums, 4 strawberries, 5 oranges), food vocabulary (huge list), and the butterfly life cycle.\n\nRead it slowly. On each day, count the food: "On Monday he ate through ONE apple." Hold up one finger. Through to Saturday — the caterpillar eats junk food and gets a stomach ache. Then Sunday — one nice green leaf — and he\'s better.\n\nVocabulary: caterpillar, leaf, apple, pear, plum, strawberry, orange, chocolate cake, ice cream, pickle, Swiss cheese, salami, lollipop, sausage, cupcake, watermelon, cocoon, butterfly. That\'s 17 food words, plus the metamorphosis vocabulary.\n\nThe transformation at the end (caterpillar → cocoon → butterfly) is a real biology lesson. Discuss: "What happened inside the cocoon?" Three-year-olds find this magical.\n\nDays of the week practice: by the third reading, Sophie can chant Monday Tuesday Wednesday Thursday Friday Saturday Sunday. That sequence alone is huge for any future calendar work.',
      examples: null,
      author: 'Eric Carle',
      whyThisBook: 'Days of the week + counting 1–5 + huge food vocabulary + butterfly life cycle — all in one short picture book. Plus the iconic die-cut illustrations are visually irresistible.',
      discussionPrompts: [
        'What day was your favourite food day?',
        'Why did the caterpillar have a stomach ache?',
        'What happened inside the cocoon?',
        'Can you say all seven days of the week?',
        'How many foods did the caterpillar eat?'
      ],
      duration: '10 min',
      where: ['bedtime', 'home', 'kitchen'],
      skillTags: ['vocabulary', 'comprehension', 'storytelling', 'english-maintenance'],
      milestoneRefs: [
        'English vocabulary growth',
        'tell a simple story with a beginning and end'
      ],
      literacyWeight: 1,
      followUp: 'After Hungry Caterpillar, do a "What did YOU eat on Monday?" weekly recap. Real-life days-of-the-week practice tied to her own food. By 4 she should fluently name all seven days in order and link each to a memorable food.',
      relatedIds: ['book-dear-zoo', 'conv-time-words', 'conv-counting-things']
    },

    // ─── GAME (9 items) ────────────────────────────────────────────

    {
      id: 'game-word-chain',
      category: 'game',
      ages: [3, 4, 5],
      title: 'Word Chain (Last Sound, Next Word)',
      hook: 'Say a word. The next word must start with the LAST sound of yours. "Cat → Tap → Pig → Goose…"',
      body: 'Word Chain is a brilliant phonemic-awareness game that doubles as vocabulary practice. The rule: each new word must start with the LAST sound of the previous word. CAT ends with /t/, so next word starts with /t/ — TAP. TAP ends with /p/, so next word starts with /p/ — PIG. And so on.\n\nThis is HARD for a 3-year-old. The last-sound part is genuinely tricky — most children at 3 hear initial sounds easily but struggle to isolate the final sound. So expect lots of scaffolding from you: "Cat… what sound is at the end? /t/. So we need a word that starts with /t/."\n\nStart easy. Use a closed set of well-known words she can pull from. After "cat → /t/", suggest two options: "Tap? Or top?" She picks. Then you continue with the new word.\n\nVariations to simplify: do CATEGORIES word chain instead — every word must be an animal, and the linking rule is loosened to "any rhyme or starting sound". The categorical constraint plus rhyme is easier than strict last-sound chaining.\n\nKey teaching moment: when she gets a chain of three in a row, celebrate big. "We made a CHAIN! Cat, tap, pig — three words linked!" Linking is the cognitive skill; the words are just the vehicle.',
      examples: [
        'Example easy chains: cat → tap → pig → goose → snake → kite → egg → goat',
        'Initial-sound-only variant (easier): every word must START with the same sound. /s/ chain: sun, sock, snake, soap, soup, sister.',
        'Category variant (easier): animals only, any link — cat, dog, fish, bird, lion, tiger',
        'Stretching: longer words — elephant → tiger → robin → newt → tortoise',
        'Common stuck-spots and your unblock: when she can\'t hear the ending, say it slowly /caaaat-T-T-T/ exaggerating the last sound'
      ],
      duration: '5–10 min',
      where: ['car', 'mealtime', 'walking', 'anywhere'],
      skillTags: ['phonemic-awareness', 'letter-sounds', 'vocabulary', 'rhyming'],
      milestoneRefs: [
        'Correctly rhymes 3–4 words',
        'cannot produce a single rhyme'
      ],
      literacyWeight: 3,
      followUp: 'When last-sound chains are confident, do the RHYMING chain — each new word must RHYME with the previous one. Cat → hat → bat → that → flat → splat. Different skill, builds on the same chain structure.',
      relatedIds: ['game-i-spy-sounds', 'conv-rhyming-pairs']
    },

    {
      id: 'game-memory-tray',
      category: 'game',
      ages: [3, 4, 5],
      title: 'Memory Tray',
      hook: 'Put 5 small objects on a tray. Cover with a tea towel. "What do you remember?"',
      body: 'Memory Tray is the classic British Brownie game, and it\'s been a brilliant vocabulary-and-memory exercise for a century. Put five objects on a tray. Let her look for 30 seconds. Cover with a tea towel. She names everything she can remember.\n\nThe English vocabulary practice is the gold. She has to NAME each object — toy car, blue cup, red sock, plastic spoon, banana. The naming forces active retrieval of English nouns. If she names something in Bulgarian, ask: "And what\'s that in English?"\n\nStart with 5 objects. Once she gets all 5 most times, go to 7. Then 10. By 4, she should manage 10 in a sequence.\n\nVariation: REMOVE ONE. Show her the tray. Cover. Secretly remove one object. Uncover. "What\'s missing?" This is much harder — she has to compare what she sees against memory.\n\nVariation: ADD ONE. Same setup, secretly ADD an object. "What\'s new?"\n\nVariation: ORDER MATTERS. Line objects in a row. She has to recall them in order. Sequential memory is much harder than set memory.\n\nThis is a beautifully calm sit-down game. Great for ten minutes before bed or as a screen-free wait at a restaurant (use cutlery, salt, pepper, napkins as objects).',
      examples: [
        'Starter objects (kitchen): spoon, fork, cup, plate, napkin, salt shaker, pepper, butter, banana',
        'Toy objects: small car, doll, ball, block, teddy, crayon, sticker, book',
        'Random round: hairbrush, sock, comb, glasses, sticky note, key, coin, ring',
        'Variations: REMOVE one (much harder); ADD one (medium); ORDER recall (hardest); CATEGORY tray (all kitchen, all toys, all clothes)',
        'Adaptive difficulty: 5 objects at age 3, 7 by 3.5, 10 by 4, 12+ by 5'
      ],
      duration: '10 min',
      where: ['home', 'mealtime', 'bedtime'],
      skillTags: ['vocabulary', 'english-maintenance', 'english-conversation'],
      milestoneRefs: [
        'English vocabulary growth',
        'refuses to use English at home'
      ],
      literacyWeight: 1,
      followUp: 'After basic memory tray, try CATEGORY tray — all 7 items must be from one group (kitchen, garden, bathroom). She has to name them PLUS describe what they have in common. Vocabulary plus categorisation.',
      relatedIds: ['conv-categories-game', 'conv-shopping-memory']
    },

    {
      id: 'game-simon-says',
      category: 'game',
      ages: [3, 4, 5],
      title: 'Simon Says (English Listening)',
      hook: 'Play strict Simon Says in English. "Simon says touch your nose." "Touch your toe!" (TRAP.)',
      body: 'Simon Says is one of the great English listening-comprehension games. The rule: do the action only if "Simon says" precedes it. If the leader just commands ("Touch your nose!") and you do it, you\'re out. The trick is listening for "Simon says" each time.\n\nThis is brilliant English practice because: (1) it requires Sophie to LISTEN attentively in English; (2) she has to PROCESS the command and the conditional ("did Simon say it?"); (3) she has to ACT correctly. All in English, all at speed.\n\nStart with body parts. "Simon says touch your head. Simon says touch your knees. Touch your nose!" If she touches her nose, big silly buzzer noise — she\'s out for a turn. The first few times she\'ll get caught — that\'s expected.\n\nGraduate to prepositions: "Simon says put your hand ABOVE your head. Simon says put your hand UNDER the table. Simon says put your hand BEHIND your back." Each command drills a preposition.\n\nThen verbs: "Simon says HOP. Simon says JUMP. Simon says SKIP. SPIN." (Trap.) Each command drills an action verb.\n\nLet HER be Simon sometimes. Generating English commands is much harder than following them. Worth the effort.',
      examples: [
        'Body parts: "Simon says touch your head / knee / elbow / wrist / ankle"',
        'Prepositions: "Simon says put your hand ABOVE your head / UNDER the table / BEHIND your back / IN your pocket"',
        'Verbs: "Simon says HOP / JUMP / SKIP / SPIN / WIGGLE / TIPTOE / STAMP"',
        'Adjective challenges: "Simon says do a SAD face / HAPPY face / SURPRISED face / SLEEPY face"',
        'Combined: "Simon says jump THREE times / Simon says clap LOUDLY / Simon says whisper your name"'
      ],
      duration: '5–10 min',
      where: ['home', 'outdoor', 'anywhere'],
      skillTags: ['vocabulary', 'comprehension', 'english-maintenance', 'turn-taking'],
      milestoneRefs: [
        'English sentences of 4–5 words',
        'English vocabulary growth'
      ],
      literacyWeight: 1,
      followUp: 'After basic Simon Says, do the LEADER swap — she\'s Simon, you follow. Forcing her to GENERATE English commands ("Simon says…") is the real fluency stretch. Don\'t correct her grammar; just follow the instructions and let her hear her own English in action.',
      relatedIds: ['conv-prepositions', 'conv-action-verbs', 'song-head-shoulders']
    },

    {
      id: 'game-animal-charades',
      category: 'game',
      ages: [3, 4, 5],
      title: 'Animal Charades',
      hook: 'You mime an animal — she guesses in English. Then she mimes, you guess.',
      body: 'Animal Charades is the perfect English vocabulary game disguised as silly play. You act out an animal — slither like a snake, jump like a frog, lumber like an elephant — and Sophie has to name it. In English.\n\nThis works because the LINK between movement and word is far more memorable than seeing the word in a book. Once she\'s seen Daddy lumbering as an elephant, the word elephant is locked in.\n\nVocabulary haul: cat, dog, snake, frog, fish, bird, elephant, mouse, lion, tiger, monkey, kangaroo, penguin, owl, bee, butterfly, crocodile, hippo, giraffe, bear. Plus the matching action verbs: slither, hop, swim, fly, lumber, scurry, stalk, swing, hop (kangaroo), waddle (penguin), hoot, buzz, flutter, snap, gallop.\n\nStart with super-clear animals: cat (purr and rub against legs), dog (woof, wag tail), snake (slither). Move to harder ones: octopus (8 wiggling arms), kangaroo (hop with hands on chest like joey pouch), penguin (waddle and flap).\n\nLet HER do the miming sometimes. Producing the action is a creative-language task — she has to think "how would an elephant move?" That\'s rich vocabulary-and-imagination work.\n\nIf she\'s stuck guessing, give a verbal clue: "It lives in water. It has eight arms." Verbal clues plus mime is full descriptive English in action.',
      examples: [
        'Easy mimes: cat, dog, snake, fish, bird, frog, mouse, monkey, elephant',
        'Medium: lion, tiger, bear, kangaroo, penguin, owl, bee, butterfly',
        'Hard: octopus, crocodile, hippo, giraffe, sloth, koala, peacock',
        'Movement verbs to teach: slither, hop, swim, fly, lumber, scurry, stalk, swing, waddle, hoot, buzz, flutter, snap, gallop, prowl, trot, gallop',
        'Verbal-clue add-ons: "It lives in…", "It eats…", "It has…", "It can…"'
      ],
      duration: '10–15 min',
      where: ['home', 'outdoor', 'anywhere'],
      skillTags: ['vocabulary', 'description', 'english-conversation', 'english-maintenance'],
      milestoneRefs: [
        'English vocabulary growth',
        'English sentences of 4–5 words'
      ],
      literacyWeight: 1,
      followUp: 'After animal charades, do PROFESSIONS charades — chef (chop, stir), doctor (listen with stethoscope), firefighter (spray hose), teacher (write on board). Same game, different vocabulary set. Then move to ACTIONS only (writing, reading, sleeping, eating) — even broader.',
      relatedIds: ['conv-animal-sounds', 'conv-action-verbs', 'song-old-macdonald']
    },

    {
      id: 'game-sorting-by-category',
      category: 'game',
      ages: [3, 4, 5],
      title: 'Sorting Out The Laundry (Or Cutlery)',
      hook: 'Sort socks by colour. Cutlery by type. Toys by category. Narrate every move in English.',
      body: 'Sorting tasks are great vocabulary practice because they FORCE descriptive English. To sort, she has to name what makes things similar or different — a real cognitive workout, conducted entirely in English.\n\nLaundry: when folding clean clothes, get her to sort socks. "Find the matching pairs. This blue sock — where\'s its partner?" Then narrate: "These are MY socks. Those are DADDY\'S. These are YOURS." Possessive English plus colour vocabulary plus matching.\n\nCutlery: when emptying the dishwasher, give her the cutlery basket. "Spoons here. Forks here. Knives go in this drawer." Each move is a vocabulary repetition. She learns spoon vs fork vs knife by handling them.\n\nToys: when tidying up, sort by category. "All the cars in this box. All the dolls in that box. All the books on the shelf." Narrate the categories: "These are vehicles. These are dolls. These are books."\n\nKey: NARRATE EVERY MOVE. Don\'t just sort silently. "I\'m putting the BLUE sock in this pile. Now the RED one." Your narration is the lesson. She\'ll start copying you.\n\nThis is also a great example of stealth English IN the midst of normal household tasks. Five minutes of laundry sorting = five minutes of vocabulary practice without setting up anything.',
      examples: [
        'Laundry: socks by colour, by owner, by size; t-shirts by pattern; pyjamas vs day clothes',
        'Cutlery: spoons, forks, knives, teaspoons, serving spoons',
        'Toys: by category (cars, dolls, animals, books), by size (big toys, small toys), by colour',
        'Food shopping (at home): tinned vs fresh; fruit vs vegetables; sweet vs savoury',
        'Stationery: pens, pencils, crayons, paper, scissors, glue'
      ],
      duration: '10–15 min',
      where: ['home', 'kitchen'],
      skillTags: ['vocabulary', 'english-maintenance', 'description', 'fine-motor'],
      milestoneRefs: [
        'English vocabulary growth',
        'refuses to use English at home'
      ],
      literacyWeight: 1,
      followUp: 'After basic sorting, add LABELS. Write "SPOONS" on a sticky note for the spoons drawer. "BOOKS" for the bookshelf. "CARS" for the car box. Print-rich environment plus sorting plus reading the labels = early literacy by stealth.',
      relatedIds: ['conv-categories-game', 'conv-describe-things']
    },

    {
      id: 'game-counting-hide-seek',
      category: 'game',
      ages: [3, 4],
      title: 'Counting Hide-and-Seek',
      hook: 'Cover your eyes. Count to ten LOUDLY in English. "Ready or not, here I come!"',
      body: 'Hide-and-Seek is universal, but doing it in English at age 3 cements counting AND the social ritual of the game ENTIRELY in English. Bulgarian kindergarten will play Hide-and-Seek in Bulgarian. Home is where the English version lives.\n\nThe rule: the seeker covers their eyes and counts to ten (or twenty for older). Then shouts "Ready or not, here I come!" — that English ritual phrase is non-negotiable, and only said in English.\n\nCount LOUDLY. Make her count from her hiding place if she\'s the hider — she\'ll hear your English numbers. When she\'s the seeker, she counts aloud. Either way, English numbers 1–10 get drilled.\n\nThe ritual phrases to teach: "Ready or not, here I come!" "Found you!" "I see you!" "It\'s your turn to hide." "Where ARE you?" "Are you hiding under the bed?" All English, all routinely useful.\n\nVocabulary stretch: she\'ll learn the prepositions she\'s hiding behind (UNDER the bed, BEHIND the curtain, IN the cupboard, ON TOP OF the sofa). When you find her, narrate: "I FOUND you! You were UNDER the bed!"\n\nThis is also great for the kid who refuses English at home — she has to use English to play the game, and she WILL want to play.',
      examples: [
        'Pre-game phrases to teach: "Who\'s hiding? Who\'s seeking?" / "Cover your eyes" / "No peeking!" / "Count to ten"',
        'Counting variations: count to 10, then to 20, then count backwards from 10',
        'Mid-game phrases: "Ready or not, here I come!" / "Where ARE you?" / "Are you hiding…?"',
        'Find phrases: "Found you!" / "Got you!" / "There you are!" / "You were hiding [preposition]!"',
        'Preposition vocabulary: under, behind, in, inside, on top of, beside, next to'
      ],
      duration: '10–15 min',
      where: ['home', 'outdoor', 'anywhere'],
      skillTags: ['vocabulary', 'english-maintenance', 'english-conversation', 'turn-taking'],
      milestoneRefs: [
        'English vocabulary growth',
        'refuses to use English at home',
        'English sentences of 4–5 words'
      ],
      literacyWeight: 1,
      followUp: 'Once basic Hide-and-Seek is grooved, play Sardines — the reverse version (one person hides, everyone else seeks, finders all squash into the hiding place). Same English ritual phrases, more giggles, more language input.',
      relatedIds: ['conv-counting-things', 'conv-prepositions']
    },

    {
      id: 'game-rhyming-pairs',
      category: 'game',
      ages: [3, 4, 5],
      title: 'Rhyming Pairs (Matching Cards)',
      hook: 'Make cards with pictures of rhyming pairs (cat/hat, sun/bun). Match them.',
      body: 'Rhyming Pairs is a card-matching game that drills rhyming recognition. Make 10–15 simple cards in pairs — each pair shows two pictures of rhyming words. CAT and HAT. SUN and BUN. STAR and CAR. DOG and FROG. BEE and TREE.\n\nDraw the pictures yourself (or print free images) and stick them on small card squares. The pictures matter more than the words for a 3-year-old; she identifies by SOUND, not by reading.\n\nPlay: lay all the cards face up. Pick one ("CAT"). Ask her to find its rhyming pair. She picks BAT? "Does cat rhyme with bat? Yes! Match!" Or she picks DOG? "Does cat rhyme with dog? No — they don\'t end the same. Try another!"\n\nMove to memory-style: lay all cards face DOWN. Take turns turning over two. If they rhyme, you keep them. The memory layer adds working-memory practice on top of rhyming.\n\nGreat lessons embedded: it teaches her that rhyming is about ENDING sounds, not about the word being similar otherwise. Cat and dog are both animals, but they don\'t rhyme. Cat and bat have nothing in common except their ending — but they DO rhyme.\n\nFree resource: search "rhyming match pairs printable" online. Twinkl has free downloads. Or just draw the pictures yourself — your scruffy drawings work just as well.',
      examples: [
        'Easy rhyme pairs: cat/hat, sun/bun, dog/frog, star/car, bee/tree, mouse/house, snail/whale, pig/wig',
        'Medium: cake/lake, ring/king, snake/cake, bear/chair, bed/red',
        'Hard: shoe/blue, key/tree, fish/dish, fork/cork',
        'Pre-made resource options: Twinkl printables, Education.com, or hand-drawn cards',
        'Variations: rhyme dominos (each card has two pictures, line up the rhyming ends), rhyme go-fish, rhyme snap'
      ],
      duration: '10–15 min',
      where: ['home', 'mealtime'],
      skillTags: ['rhyming', 'phonemic-awareness', 'vocabulary'],
      milestoneRefs: [
        'Correctly rhymes 3–4 words',
        'cannot produce a single rhyme'
      ],
      literacyWeight: 2,
      followUp: 'After basic pairs, add a PRODUCTION layer — pick a card, she must say ANOTHER word that rhymes (not on a card). Cat → she says HAT, BAT, MAT, SAT, RAT. Recognition + production combined.',
      relatedIds: ['conv-rhyming-pairs', 'rhyme-hickory-dickory-dock']
    },

    {
      id: 'game-mystery-bag',
      category: 'game',
      ages: [3, 4],
      title: 'Mystery Bag (Feely-Bag Vocabulary)',
      hook: 'Put 5 small objects in a bag. She reaches in WITHOUT looking and describes what she feels.',
      body: 'The Mystery Bag is a sensory vocabulary game. Put 5 small everyday objects into a fabric bag or pillowcase. Sophie reaches in WITHOUT looking, feels one object, describes what it feels like, and guesses what it is. Then pulls it out to check.\n\nWhat makes this English gold: she has to use ADJECTIVES — smooth, bumpy, soft, hard, round, long, pointy, fuzzy, cold, warm — to describe what she feels. No visual shortcut. The adjectives have to do the work.\n\nGood objects: a spoon, a sponge, a feather, a Lego brick, a stone, a pinecone, an apple, a sock, a small toy, a paper, a paint brush. Variety of textures, sizes, and shapes.\n\nModel the language: "I feel something… it\'s smooth and round… it\'s cold… it\'s small. Is it a stone?" Pull it out. "Yes! A stone." She copies your pattern.\n\nIf she\'s struggling for adjectives, give her a vocabulary scaffold: "Is it SMOOTH or BUMPY? SOFT or HARD? COLD or WARM? BIG or SMALL?" Force-choice questions help her find the words.\n\nThis game also covers texture vocabulary that\'s otherwise hard to teach — words like fuzzy, prickly, slippery, squishy, gritty. Texture words appear constantly in books but rarely in conversation. The Mystery Bag puts them in her mouth.',
      examples: [
        'Object suggestions: spoon, sponge, feather, Lego brick, stone, pinecone, apple, sock, small toy, paper, paint brush, hairbrush, scrunchie',
        'Adjectives to model: smooth, bumpy, soft, hard, round, long, pointy, fuzzy, cold, warm, prickly, slippery, squishy, gritty, sharp',
        'Scaffolding questions: "Is it SMOOTH or BUMPY?" / "SOFT or HARD?" / "COLD or WARM?" / "BIG or SMALL?" / "HEAVY or LIGHT?"',
        'Difficulty: 5 objects at age 3, 7+ at age 4',
        'Variations: themed bags (all kitchen, all nature, all toys)'
      ],
      duration: '10 min',
      where: ['home', 'mealtime'],
      skillTags: ['vocabulary', 'description', 'english-conversation'],
      milestoneRefs: [
        'English vocabulary growth',
        'English sentences of 4–5 words'
      ],
      literacyWeight: 1,
      followUp: 'After Mystery Bag is grooved, do THEMED bags. All-nature bag (pinecone, feather, stone, leaf, twig). All-kitchen bag (spoon, sponge, garlic, lemon, peg). The category constraint sharpens the descriptive challenge.',
      relatedIds: ['conv-describe-things', 'out-five-senses-walk']
    },

    {
      id: 'game-twenty-questions',
      category: 'game',
      ages: [3, 4, 5],
      title: 'Yes/No Guessing Game (Simplified 20 Questions)',
      hook: 'You think of an animal. She asks yes-or-no questions until she guesses.',
      body: 'Simplified Twenty Questions is genius English practice because Sophie has to FORM questions, not just answer them. Forming a question in English is much harder than answering one — the word order changes ("Is it big?" not "It is big?") and she has to think about WHAT to ask.\n\nStart with a closed domain: "I\'m thinking of an animal. You can ask me yes-or-no questions until you guess." Show her a few starter questions: "Is it big? Is it small? Does it live in water? Does it fly?"\n\nLimit to 10 questions for a 3-year-old (20 is too many). At first she\'ll just GUESS animals randomly. "Is it a dog?" "No." "Is it a cat?" "No." That\'s fine — it\'s still English production. Gradually model the strategic questions: "Try asking is it BIG first. Then you know whether to guess elephants or mice."\n\nDomain variations: animals (easiest), foods (medium), things in the house (harder — more options). Always tell her the domain at the start: "I\'m thinking of a FOOD."\n\nFlip the game: SHE picks the secret thing, YOU ask the questions. She loves being the one with the secret, and she gets practice answering yes/no questions in English.\n\nThis is also one of the few games where she\'s using English MODAL VERBS naturally — "Does it…?", "Can it…?", "Is it…?". Drilling those is hard otherwise.',
      examples: [
        'Domains: animals, foods, things in the house, toys, places we\'ve been',
        'Starter questions to teach: "Is it big?" "Is it small?" "Does it live in water?" "Can it fly?" "Is it a colour?" "Do we eat it?" "Is it in this room?"',
        'Strategic teaching: "What\'s the FIRST question to ask? Maybe \'is it big\' — then you know what to guess next."',
        'Limit to 10 questions for age 3, 15 for age 4, 20 for age 5',
        'Reverse: she has the secret, you ask. Often even better English practice for her — she\'s forming answers and clarifying.'
      ],
      duration: '5–10 min',
      where: ['car', 'mealtime', 'walking', 'bedtime', 'anywhere'],
      skillTags: ['english-conversation', 'question-asking', 'vocabulary', 'english-maintenance'],
      milestoneRefs: [
        'English sentences of 4–5 words',
        'English vocabulary growth'
      ],
      literacyWeight: 1,
      followUp: 'After yes/no questions are confident, level up to PEOPLE 20 Questions — "I\'m thinking of someone in our family." Adding people opens up adjective questions (Is it tall? Is she funny? Does he have a beard?). Real descriptive English.',
      relatedIds: ['conv-question-words', 'conv-categories-game']
    },

    // ─── PRETEND-PLAY (7 items) ────────────────────────────────────

    {
      id: 'play-shop',
      category: 'pretend-play',
      ages: [3, 4, 5],
      title: 'Pretend Shop / Supermarket',
      hook: 'Set up tins and toys on the counter. "What would you like today?" Hand over real coins.',
      body: 'Pretend Shop is the king of vocabulary roleplay. It unlocks the entire register of English shopping: please, thank you, how much, that\'ll be, here\'s your change, anything else, would you like a bag, the till, the receipt.\n\nSetup: line up a few tins, fruits, and toys on a counter. Use real coins (1p, 2p, 5p, 10p) as money — handling real money is a great pre-maths task in itself. Sophie is the shopkeeper; you\'re the customer. Or swap.\n\nGo through a full transaction. "Good morning! I\'d like a tin of beans please. How much is that?" She says a price. "Three pounds!" You hand over coins. "Thank you. Could I have a bag please?" She fetches a pretend bag. "That\'ll be three pounds altogether. Thank you very much!"\n\nThe key vocabulary to introduce: customer, shopkeeper, till (cash register), receipt, change, bag, basket, trolley, queue, pay, cost, expensive, cheap. Plus the polite phrases: please, thank you, would you like, here you are, that\'ll be.\n\nVariations: pretend BAKERY (cakes, bread, croissants — French Englishvocabulary). Pretend GREENGROCER (fruit and veg vocabulary). Pretend POST OFFICE (separate item). Each variation = different vocabulary domain.\n\nThis is also great for practising NUMBERS in English. Prices, counting change, "how many do you want?" — all numeric English in context.',
      examples: [
        'Shop vocabulary: customer, shopkeeper, till, receipt, change, bag, basket, trolley, queue, pay, cost, expensive, cheap, sale',
        'Polite phrases: "Good morning, what would you like?" / "Please" / "Thank you" / "Here you are" / "That\'ll be… pounds" / "Anything else?" / "Have a nice day"',
        'Item categories to stock: tins (beans, soup, tomatoes), fruit (apples, bananas, oranges), bread, biscuits, sweets, toys',
        'Number practice: "How many would you like?" / prices in pounds / counting change',
        'Variation worlds: bakery, greengrocer, butcher (mince, sausage, ham), florist (rose, daisy, tulip), bookshop (pick a book please)'
      ],
      dialogue: [
        { adult: 'Good morning! Could I have a tin of beans please?', child: '(reaches for tin) Here you are. That\'ll be two pounds.' },
        { adult: 'Anything else? I\'d like an apple too.', child: '(hands over apple) Three pounds altogether.' },
        { adult: 'Thank you. Could I have a bag please?', child: '(hands over imaginary bag) Here\'s your bag and your receipt.' },
        { adult: 'How much was that again?', child: 'Three pounds!' },
        { adult: 'Here you are. Thank you very much!', child: 'Thank you! Goodbye!' }
      ],
      duration: '15–20 min',
      where: ['home', 'kitchen'],
      skillTags: ['vocabulary', 'english-conversation', 'storytelling', 'turn-taking', 'english-maintenance'],
      milestoneRefs: [
        'English sentences of 4–5 words',
        'English vocabulary growth'
      ],
      literacyWeight: 1,
      followUp: 'After pretend shop, take her to a real shop and let her be the customer for one item: "Sophie, can you ask the shopkeeper for a banana?" Real-world transfer of pretend skill. The first time she completes a real transaction in English is a milestone.',
      relatedIds: ['play-restaurant', 'play-post-office', 'conv-please-thank-you']
    },

    {
      id: 'play-doctor',
      category: 'pretend-play',
      ages: [3, 4, 5],
      title: 'Pretend Doctor\'s Surgery',
      hook: 'Set up a "doctor\'s office". Use a teddy as the patient. "Where does it hurt?"',
      body: 'Pretend Doctor is the highest-value medical-vocabulary game possible for a 3-year-old. It introduces all the words she\'ll need at real doctor appointments — and crucially, lets her absorb them in English when she\'ll mostly encounter them in Bulgarian at the actual doctor.\n\nSetup: a "doctor\'s office" — a chair for the patient, a desk for the doctor, a teddy as the patient (or you can be the patient, with her as doctor — usually her preferred role). Toy doctor kits cost ~£10 and have stethoscope, thermometer, syringe (no needle), reflex hammer.\n\nThe key phrases to teach: "What seems to be the matter?" "Where does it hurt?" "Let me have a look." "Open wide and say AAA." "Take a deep breath." "I\'m going to listen to your heart." "I\'ll write you a prescription." "Take this medicine three times a day." "Come back if it gets worse."\n\nVocabulary haul: doctor, nurse, patient, surgery, appointment, prescription, medicine, plaster, bandage, thermometer, stethoscope, heart, lungs, temperature, fever, ache, hurt, pain, better, worse, healthy.\n\nUse the teddy as the patient initially — Sophie examines the teddy. Then swap: she\'s the patient, you\'re the doctor. Then she\'s the doctor, you\'re the patient (this is her favourite — being in charge of you).\n\nReal-life payoff: next time at the real doctor, Sophie understands "say aaa", "deep breath", "where does it hurt" in English. The pretend game has prepared her.',
      examples: [
        'Vocabulary: doctor, nurse, patient, surgery, appointment, prescription, medicine, plaster, bandage, thermometer, stethoscope, heart, lungs, temperature, fever, ache, hurt, pain, better, worse, healthy, ill, sick, sore, cold, cough',
        'Doctor phrases to teach: "What seems to be the matter?" / "Where does it hurt?" / "Let me have a look" / "Open wide and say AAA" / "Take a deep breath" / "I\'ll write a prescription" / "Take this three times a day"',
        'Body parts that come up: throat, ear, tummy, head, chest, back, arm, leg, knee, ankle (links to body-parts conversation item)',
        'Toy kit suggestion: any cheap doctor\'s kit on Amazon — stethoscope, thermometer, plastic syringe, reflex hammer',
        'Scenarios: teddy has a sore throat; teddy has a tummy ache; teddy bumped his head; teddy needs a check-up'
      ],
      dialogue: [
        { adult: 'Hello doctor, my teddy isn\'t feeling well.', child: '(picks up stethoscope) What seems to be the matter?' },
        { adult: 'He has a sore tummy.', child: 'Let me have a look. (listens to teddy) Hmm. Where does it hurt?' },
        { adult: 'Right here.', child: 'I think he needs some medicine. Take this three times a day.' },
        { adult: 'Will he be better soon?', child: 'Yes! Come back in two days if not.' },
        { adult: 'Thank you doctor!', child: 'Goodbye! Get well soon, Teddy!' }
      ],
      duration: '15–20 min',
      where: ['home'],
      skillTags: ['vocabulary', 'english-conversation', 'storytelling', 'turn-taking', 'english-maintenance'],
      milestoneRefs: [
        'English sentences of 4–5 words',
        'English vocabulary growth'
      ],
      literacyWeight: 1,
      followUp: 'After Doctor is well-rehearsed, do VET — same vocabulary, but the patient is an animal. "My dog has a sore paw." Then DENTIST ("open wide, let me see your teeth"). Each medical variation reinforces and extends the vocabulary.',
      relatedIds: ['book-zog', 'conv-body-parts', 'conv-feelings-vocab']
    },

    {
      id: 'play-hairdresser',
      category: 'pretend-play',
      ages: [3, 4, 5],
      title: 'Pretend Hairdresser',
      hook: 'Sit her in front of a mirror with a brush. "How would you like your hair today?"',
      body: 'Pretend Hairdresser is the perfect domestic-vocabulary game for hair, body, and personal care. It also gives Sophie a place to play with self-care language in English — which is otherwise pretty Bulgarian-dominant since Bulgarian-speaking adults usually do her hair.\n\nSetup: a chair in front of a mirror. A brush, a comb, hair ties, hair clips. No actual cutting. Sophie can be either the hairdresser OR the customer. The customer role gives her more passive English exposure; the hairdresser role gives her more active English production.\n\nKey phrases: "Take a seat please." "How would you like your hair today?" "Just a trim?" "A wash and blow-dry?" "Up or down?" "Plait or ponytail?" "Bunches or pigtails?" "What about a fringe?" "All done — how does that look?"\n\nVocabulary: hairdresser, salon, chair, mirror, brush, comb, scissors (pretend), hair tie, clip, plait, ponytail, bunches, pigtails, fringe, curls, straight, wavy, long, short, blow-dryer.\n\nThis is also a great opportunity to practise the COMPARATIVE: "Do you want it SHORTER or LONGER? CURLIER or STRAIGHTER?" Comparative English is a tricky grammar bit and pretend hairdresser is a natural place to drill it.\n\nAdd a chat element. Hairdressers chat with customers. "How\'s your day been? Going on holiday this year?" Modelling adult small-talk in English is excellent practice — Sophie will copy.',
      examples: [
        'Vocabulary: hairdresser, salon, chair, mirror, brush, comb, scissors, hair tie, clip, plait, ponytail, bunches, pigtails, fringe, curls, straight, wavy, long, short, blow-dryer, shampoo, conditioner',
        'Hairdresser phrases: "Take a seat please" / "How would you like your hair today?" / "Just a trim?" / "Wash and blow-dry?" / "How does that look?" / "There you go, all done"',
        'Customer phrases: "Could you give me a trim please?" / "I\'d like a plait" / "I\'d like it shorter" / "What do you recommend?"',
        'Comparative grammar: shorter, longer, curlier, straighter, wavier',
        'Small-talk to model: "How\'s your day been?" / "Going anywhere nice on holiday?" / "Lovely weather today, isn\'t it?"'
      ],
      dialogue: [
        { adult: 'Hello! How would you like your hair today?', child: '(takes brush) I\'d like a plait please.' },
        { adult: 'Of course. Should it be a long one or a short one?', child: 'Long!' },
        { adult: '(pretends to plait) How\'s your day been?', child: 'Good. I went to the park.' },
        { adult: 'Lovely! There you go, all done. How does that look?', child: 'Beautiful! Thank you!' },
        { adult: 'My pleasure. See you next time!', child: 'Bye!' }
      ],
      duration: '15–20 min',
      where: ['home', 'bathtime'],
      skillTags: ['vocabulary', 'english-conversation', 'storytelling', 'turn-taking', 'english-maintenance'],
      milestoneRefs: [
        'English sentences of 4–5 words',
        'English vocabulary growth'
      ],
      literacyWeight: 1,
      followUp: 'After hairdresser, do MAKE-UP COUNTER (with safe non-toxic kid makeup or just bare brushes) — same vocabulary domain, different verbs (applying, blending). Then BEAUTICIAN (manicure) — pure vocabulary play with no actual product.',
      relatedIds: ['play-doctor', 'play-shop', 'conv-describe-things']
    },

    {
      id: 'play-post-office',
      category: 'pretend-play',
      ages: [3, 4, 5],
      title: 'Pretend Post Office',
      hook: 'Set up a post office. Write a "letter", stamp it, "send" it. Receive it back tomorrow.',
      body: 'Pretend Post Office is a brilliant literacy AND vocabulary game. To send a letter, Sophie has to (1) write or scribble something on paper, (2) put it in an envelope, (3) write an address, (4) stick on a stamp. Four print-awareness tasks in one game.\n\nSetup: a "post office desk" — a counter with a notebook (the postmaster\'s log), envelopes, stamps (real stamps or printed stickers), pretend money. Plus a separate "letter writing desk" with paper, crayons, and pencils. And a "post box" — any box with a slit cut in.\n\nThe transaction: Sophie writes a letter (scribbles count). She brings it to the post office. "I\'d like to send this letter please." You weigh it, charge her some pretend money, sell her a stamp, she sticks the stamp on, drops it in the postbox.\n\nKey vocabulary: post, letter, envelope, stamp, address, postcode, postbox, postman, postwoman, postal worker, parcel, package, send, deliver, weigh, register, first class, second class.\n\nFor the address bit, get her to "address" the envelope to a real family member. "I\'m sending this to Granny." Write GRANNY in big letters on the front. Even just letters = print awareness.\n\nDelivery: become the postman the next day. Knock at her door. "Special delivery for Sophie!" Hand over the letter she sent yesterday. She opens it. Real-life letter joy.',
      examples: [
        'Vocabulary: post, letter, envelope, stamp, address, postcode, postbox, postman, postwoman, parcel, package, send, deliver, weigh, register, first class, second class, write, sign, signature',
        'Postal phrases: "I\'d like to send this letter" / "First class or second class?" / "Special delivery!" / "Sign here please" / "When will it arrive?"',
        'Letter content to write: "Dear Granny, I love you. Love from Sophie." / "Dear Daddy, see you tonight" / Drawings count as letters',
        'Variations: send a parcel (wrap a small toy in paper and tape, address it) / post a postcard / register a letter',
        'Real-life link: when you send REAL letters or parcels (Christmas cards, birthday cards), include Sophie in the process. She licks the stamp, drops it in the postbox.'
      ],
      dialogue: [
        { adult: 'Hello! I\'d like to send this letter please.', child: '(takes letter) First class or second class?' },
        { adult: 'First class please. How much is that?', child: 'Two pounds. Do you need stamps?' },
        { adult: 'Yes please. (hands over coins)', child: '(sticks pretend stamp on) Here you are. Put it in the postbox.' },
        { adult: '(puts letter in box) When will it arrive?', child: 'Tomorrow! The postman will bring it.' },
        { adult: 'Thank you so much!', child: 'You\'re welcome! Have a nice day!' }
      ],
      duration: '20 min',
      where: ['home'],
      skillTags: ['vocabulary', 'english-conversation', 'pre-writing', 'storytelling', 'english-maintenance'],
      milestoneRefs: [
        'English sentences of 4–5 words',
        'Shows print awareness',
        'English vocabulary growth'
      ],
      literacyWeight: 2,
      followUp: 'After pretend post, send a real letter. Help her dictate a letter to Granny — you scribe. She decorates. Together you fold, envelope, stamp, post. Two weeks later Granny replies. The real-world letter cycle is one of the most rewarding early-literacy experiences.',
      relatedIds: ['play-shop', 'lit-writing-name']
    },

    {
      id: 'play-bus-driver',
      category: 'pretend-play',
      ages: [3, 4, 5],
      title: 'Pretend Bus / Train Driver',
      hook: 'Line up chairs as bus seats. Sophie is the driver. "Tickets please, all aboard!"',
      body: 'Pretend Bus or Train Driver is a brilliant transport-vocabulary game and a way to bring Wheels on the Bus (separate song item) to life in roleplay.\n\nSetup: line up chairs in pairs to make bus seats. One chair at the front is the driver\'s seat — give her a steering wheel (a frying pan or pretend wheel). Other passengers are stuffed toys. Or you and Daddy can be passengers.\n\nKey phrases: "All aboard!" "Tickets please." "Where are you going?" "That\'ll be one pound." "Please take your seat." "Next stop: the park!" "Mind the gap!" "Hold on tight!" "Last stop, everyone off!"\n\nVocabulary: bus, train, driver, conductor, passenger, ticket, fare, stop, station, platform, route, terminus, all aboard, mind the gap, please take your seat, single, return.\n\nThe ROUTE is the structure. Map out a route with destinations: "We\'re going from home to the park to the shop to the seaside." Each stop, she announces the destination, passengers get on or off, the bus drives to the next stop.\n\nSing Wheels on the Bus while "driving". The two activities reinforce each other beautifully — the song teaches the actions; the roleplay teaches the social interaction.\n\nNext-level: TRAIN driver. More elaborate vocabulary (carriage, conductor, ticket inspector, platform, station announcement). Use the family stairs as the platform. "Mind the gap between the train and the platform!"',
      examples: [
        'Vocabulary: bus, train, driver, conductor, passenger, ticket, fare, stop, station, platform, route, terminus, all aboard, mind the gap, please take your seat, single ticket, return ticket, day pass',
        'Driver phrases: "All aboard!" / "Tickets please" / "Next stop: the park!" / "Mind the gap" / "Last stop, everyone off!" / "Hold on tight!"',
        'Passenger phrases: "Two tickets to the park please" / "Could I have a return please?" / "Excuse me, is this seat taken?" / "Where are we?" / "Could you tell me when we reach…?"',
        'Routes to try: home → park → shop → home / school → park → grandparents → school',
        'Variations: train driver (more vocabulary), London Underground (mind the gap, change at…), school bus (children passengers)'
      ],
      dialogue: [
        { adult: '(holding pretend ticket) Hello driver! One ticket to the park please.', child: '(takes ticket) All aboard! That\'ll be one pound.' },
        { adult: '(hands over coin and sits) Thank you.', child: 'Hold on tight! Next stop, the park!' },
        { adult: '(mimes bumpy bus) Are we nearly there?', child: 'Almost! Two more stops!' },
        { adult: 'Lovely. Could you tell me when we arrive?', child: 'Yes! Here\'s the park! Last stop, everyone off!' },
        { adult: 'Thank you driver! You drive a brilliant bus.', child: 'Thank you! See you next time!' }
      ],
      duration: '15–20 min',
      where: ['home'],
      skillTags: ['vocabulary', 'english-conversation', 'storytelling', 'turn-taking'],
      milestoneRefs: [
        'English sentences of 4–5 words',
        'English vocabulary growth'
      ],
      literacyWeight: 1,
      followUp: 'After bus and train driver, do AEROPLANE PILOT (cabin, seatbelt, take-off, landing, captain, cabin crew) — the most elaborate transport vocabulary. Use this BEFORE any real flight to prep her for the words she\'ll hear at the airport.',
      relatedIds: ['song-wheels-on-the-bus', 'play-shop']
    },

    {
      id: 'play-teacher',
      category: 'pretend-play',
      ages: [3, 4, 5],
      title: 'Sophie Teaches You',
      hook: 'She\'s the teacher. You\'re the pupil. She teaches you the alphabet (or anything).',
      body: 'Sophie Teaches You is the most powerful pretend-play scenario for English literacy reinforcement. The role-reversal — she\'s the expert, you\'re the learner — forces her to ACTIVELY PRODUCE everything she\'s learned, in English, with confidence.\n\nSetup: she has a small whiteboard or piece of paper, a marker, and "pupils" (you, or her teddies). She stands at the front. You sit attentively. "Good morning class. Today we\'re going to learn the alphabet."\n\nLet her teach what she\'s recently been learning. If she\'s been doing letter hunts, ask her to teach you the alphabet. "What\'s this letter, teacher?" She points to A. "It says /a/!" Or if she\'s been doing counting: "Teacher, can you teach me to count?" She counts to ten. You repeat after her.\n\nThe magic is that the role-reversal makes her CONFIDENT producer of English. She\'s the boss; she\'s explaining. She\'ll say things like "Now everyone, repeat after me!" — adult English she\'s heard at kindergarten or seen on YouTube.\n\nKey teacher phrases to MODEL by being a "good pupil": "Yes teacher", "Please miss can I…", "I don\'t know teacher", "Could you say that again please". Her hearing you use these phrases (in her game) drills her own school English.\n\nThis is also a brilliant assessment tool for you. If she can teach you the alphabet, she KNOWS the alphabet. If she gets stuck on a letter while teaching, you know what to revisit.',
      examples: [
        'Things she can teach: alphabet, counting 1–10, days of the week, colours, body parts, animal names, family members, the words to a song or rhyme',
        'Teacher phrases she may use: "Sit down please" / "Everyone listen!" / "Repeat after me" / "Well done!" / "No, look — like this" / "Very good, Sophie [your name]!" / "Now you try"',
        'Good-pupil phrases for you to model: "Yes teacher" / "Please miss, can I have a go?" / "I don\'t know teacher" / "Could you say that again please?" / "Thank you, teacher"',
        'Lessons that work well: alphabet (she shows you each letter and the sound), counting to 10, days of the week song, body-parts song, a known rhyme',
        'Assessment opportunity: notice what she GETS RIGHT (she knows it) and what she STUMBLES on (revisit later)'
      ],
      dialogue: [
        { adult: 'Good morning teacher!', child: 'Good morning class! Sit down please. Today we will learn the alphabet.' },
        { adult: 'Please teacher, what\'s the first letter?', child: '(points) This is A. A says /a/, like apple.' },
        { adult: 'Ahhh — apple! Got it.', child: 'Now you say it. /a/.' },
        { adult: '/a/. Like that?', child: 'Yes! Very good! Next letter — B. B says /b/, like ball.' },
        { adult: 'Thank you teacher!', child: 'Well done! Class dismissed!' }
      ],
      duration: '15–20 min',
      where: ['home'],
      skillTags: ['english-conversation', 'storytelling', 'letter-names', 'letter-sounds', 'vocabulary', 'english-maintenance'],
      milestoneRefs: [
        'English sentences of 4–5 words',
        'Knows all 26 letter names',
        'Cannot name at least half the letters',
        'refuses to use English at home'
      ],
      literacyWeight: 2,
      followUp: 'When she\'s been "teacher" a few times, vary the subject — make HER teach you a story she\'s heard ("Today we will hear the story of the Gruffalo"). Story-retelling as a teacher is even more challenging English. Then she can be a "DOCTOR teacher" or a "ZOO teacher" — combining roleplay categories.',
      relatedIds: ['lit-letter-s-hunt', 'conv-counting-things', 'book-the-gruffalo']
    },

    {
      id: 'play-tea-party',
      category: 'pretend-play',
      ages: [3, 4, 5],
      title: 'Formal Tea Party',
      hook: 'Lay a proper tea — cups, saucers, biscuits. "Would you care for a cup of tea, Madam?"',
      body: 'A Formal Tea Party is the most British English-vocabulary game possible. It introduces the full register of polite RP-English entertaining: "Would you care for…", "Do help yourself", "May I pour you another cup?", "Just a splash of milk please", "How charming."\n\nSetup: lay a proper "tea table" — cups, saucers, teapot, a plate of biscuits or fruit. Pretend tea is just water or actual weak tea (decaf, milky). Sit her up properly. Use the FULL polite English: "Would you like to come to tea?" Invite her teddies as guests.\n\nKey phrases — these are higher-register than everyday English: "Would you care for a cup of tea?" "Do help yourself." "May I pour you another cup?" "Just a splash of milk please." "How charming." "Would you pass the milk?" "What a delicious biscuit!" "Have you had a pleasant day?"\n\nVocabulary: cup, saucer, teapot, milk jug, sugar bowl, tea, biscuit, slice, pour, sip, refill, splash, dash, lump, spoonful.\n\nThe formal small-talk is the gold. Tea-party English includes the kind of phrases — "What lovely weather we\'re having", "How are you keeping?" — that signal a refined English register. These are absent from kindergarten and modern speech but appear constantly in books, TV, and adult settings.\n\nPair with reading The Tiger Who Came to Tea — the book IS a tea party. Discuss what a tiger would do at THEIR tea party.',
      examples: [
        'Vocabulary: cup, saucer, teapot, milk jug, sugar bowl, tea, biscuit, slice, pour, sip, refill, splash, dash, lump, spoonful, kettle, brew, steep',
        'Polite formal phrases: "Would you care for a cup of tea?" / "Do help yourself" / "May I pour you another cup?" / "Just a splash of milk please" / "How charming" / "Would you pass the milk?" / "What a delicious biscuit!"',
        'Small-talk: "Have you had a pleasant day?" / "What lovely weather" / "How are you keeping?" / "Have you been to the park this week?"',
        'Higher-register replies: "Yes, thank you, that would be lovely" / "Just a small one please" / "Oh, what a treat" / "I couldn\'t possibly have another"',
        'Variation: garden tea party (outdoors), Mad Hatter\'s tea party (silly version — Alice in Wonderland themed), birthday tea party'
      ],
      dialogue: [
        { adult: 'Welcome, Madam Sophie! Would you care for a cup of tea?', child: 'Yes please. Just a small one.' },
        { adult: '(pours) Milk and sugar?', child: 'Just a splash of milk please. No sugar.' },
        { adult: '(pours milk) There you go. Do help yourself to a biscuit.', child: 'Thank you! (takes biscuit) Mmm, what a delicious biscuit!' },
        { adult: 'How are you keeping these days?', child: 'Very well, thank you. I went to the park yesterday.' },
        { adult: 'Oh how lovely! Would you like another cup?', child: 'Just one more please. Thank you for the lovely tea!' }
      ],
      duration: '15–20 min',
      where: ['home'],
      skillTags: ['vocabulary', 'english-conversation', 'turn-taking', 'english-maintenance'],
      milestoneRefs: [
        'English sentences of 4–5 words',
        'English vocabulary growth',
        'refuses to use English at home'
      ],
      literacyWeight: 1,
      followUp: 'After tea party is grooved, host a real tea party with grandparents or family friends (in English). Sophie pours the tea (with help). She uses the polite phrases for real. Real-world transfer of pretend skill — the highest level of language work.',
      relatedIds: ['book-tiger-came-to-tea', 'play-restaurant', 'conv-please-thank-you']
    },

    // ─── OUTDOOR (4 items) ─────────────────────────────────────────

    {
      id: 'out-colour-scavenger',
      category: 'outdoor',
      ages: [3, 4, 5],
      title: 'Colour Scavenger Hunt',
      hook: 'On any walk: "Find me three things that are YELLOW. Find me three GREEN things."',
      body: 'Colour Scavenger Hunt is the simplest outdoor English vocabulary game and works on any walk. Pick a colour. She has to spot three (or five, or seven) things of that colour before you get home.\n\nThe vocabulary practice is layered. First, she has to recognise the colour. Then she has to NAME the object she\'s seen. "I see a yellow… leaf!" Two English words minimum per find. With a richer prompt — "tell me about it" — she adds adjectives: "A bright yellow leaf with brown edges."\n\nUse it as a colour-vocabulary stretcher. Don\'t just do red, blue, yellow — push into the harder shades. "Find me something TURQUOISE." "Find me something BEIGE." "Something GOLDEN." This forces specificity in her colour vocabulary.\n\nMake it competitive. "We need to spot five RED things before we get to the corner." Time pressure plus quantity pressure = focus.\n\nVariations: SHAPE scavenger (find three circles, three squares). NATURE scavenger (find a leaf, a stone, a pinecone, a feather). LETTER scavenger (find something starting with /s/, /a/, /t/). The format is endlessly variable; the vocabulary keeps stretching.\n\nThis is also fantastic for the kid who whines on walks. The hunt focus turns a boring trudge into an active mission.',
      examples: [
        'Easy colours: red, blue, yellow, green, orange, purple, pink, brown',
        'Stretch colours: turquoise, beige, golden, silver, scarlet, lilac, navy, peach',
        'Shape scavenger: circles (manholes, signs, wheels), squares (windows, paving), triangles (signs, roof shapes)',
        'Nature scavenger: leaf, stone, pinecone, feather, twig, acorn, mushroom, flower, insect',
        'Letter scavenger: things starting with /s/ on the walk (sign, stone, shoe, snail, soap, sky)',
        'Number scavenger: count five red cars, count three dogs, count seven leaves'
      ],
      duration: '15 min (length of walk)',
      where: ['walking', 'outdoor', 'kindergarten-drop-off'],
      skillTags: ['vocabulary', 'description', 'english-conversation', 'english-maintenance'],
      milestoneRefs: [
        'names 8+ colours',
        'English vocabulary growth',
        'English sentences of 4–5 words'
      ],
      literacyWeight: 1,
      followUp: 'When colour hunts are easy, combine with adjectives — "Find me a BRIGHT YELLOW thing", "Find me a DARK BLUE thing", "Find me a SHINY thing". Compound descriptions force richer English. Then introduce comparatives: "Find me TWO red things. Which is bigger?"',
      relatedIds: ['conv-color-naming', 'out-shape-spotting', 'out-five-senses-walk']
    },

    {
      id: 'out-weather-words',
      category: 'outdoor',
      ages: [3, 4, 5],
      title: 'Weather Words On The Walk',
      hook: 'On every walk out: "What\'s the weather doing? Sunny? Drizzly? Blustery?"',
      body: 'Weather Words on the Walk reinforces the weather vocabulary set she\'s been learning in conversation (see Weather Words conversation item), but applied DIRECTLY to the actual weather she\'s in.\n\nAs you step outside, ask: "What\'s the weather like today? Tell me three weather words." She might say "sunny, warm, bright". Or "cold, windy, grey." Three words per walk. Note them in her head.\n\nIf it changes during the walk — sun goes behind a cloud, a light drizzle starts — point that out. "Oh! It WAS sunny, now it\'s CLOUDY. The weather changed." Weather-change vocabulary (became, turned, started, stopped) is great verb work.\n\nUse the body-vs-weather link: "It\'s freezing — can you feel your nose getting cold?" "It\'s muggy — I can feel my forehead getting sticky." Connecting weather to body sensation makes both more memorable.\n\nThe seasonal version: each season, ask her what season we\'re in. "It\'s autumn — what does autumn feel like? Crunchy leaves, cold mornings, dark evenings, rain." Build a sensory profile of each season in English.\n\nWeather is also a great hook for English ETYMOLOGY/IDIOMS: "raining cats and dogs", "under the weather", "fair-weather friend". Idioms at 3 are absorbed without explanation — let her hear them and they\'ll stick.',
      examples: [
        'Daily prompts: "Three weather words for today" / "What\'s the weather doing right now?" / "Has the weather changed since we left?"',
        'Weather verbs: started raining, stopped raining, cleared up, turned cold, became warmer, getting darker, brightening up',
        'Body-link sentences: "I can feel my cheeks getting red" / "My fingers are tingling — it\'s really cold" / "My hair is blowing — it\'s windy"',
        'Seasonal sensory profiles: spring (mild, blossom, fresh, rainy), summer (hot, sunny, humid, sticky), autumn (crisp, crunchy leaves, foggy mornings), winter (freezing, dark, frosty, snowy)',
        'Idioms to drop in: "raining cats and dogs" / "under the weather" / "a bolt from the blue" / "stormy mood" / "fair-weather friend"'
      ],
      duration: '5 min',
      where: ['walking', 'outdoor', 'kindergarten-drop-off'],
      skillTags: ['vocabulary', 'description', 'english-conversation', 'english-maintenance'],
      milestoneRefs: [
        'English vocabulary growth',
        'English sentences of 4–5 words'
      ],
      literacyWeight: 1,
      followUp: 'Build a WEATHER JOURNAL — a small notebook where each day you and Sophie draw and write the day\'s weather. By the end of a month she\'ll have a record. The combined draw-write practice is brilliant pre-literacy work. Patterns will emerge ("it\'s rained five days this week!").',
      relatedIds: ['conv-weather-words', 'out-five-senses-walk']
    },

    {
      id: 'out-bird-animal-naming',
      category: 'outdoor',
      ages: [3, 4, 5],
      title: 'Bird and Animal Naming Walk',
      hook: 'Every bird, dog, cat you see — name it. "Look — a pigeon. There\'s a sparrow. That dog is a labrador."',
      body: 'Bird and Animal Naming on walks is the easiest specific-vocabulary stretch you can do. Every walk passes dogs, pigeons, sparrows, squirrels, magpies — generic categories Sophie probably knows, but the SPECIFIC names (labrador vs spaniel, pigeon vs sparrow vs magpie) are harder and need explicit teaching.\n\nDogs are everywhere on UK walks. Each one: "That\'s a labrador. The next one might be a beagle. That little one is a Yorkie." Learn the 10 most common breeds and name them as you pass. Sophie will start spotting them herself within weeks.\n\nBirds: pigeon (common, grey-blue), sparrow (small, brown, chirpy), magpie (black and white, big), crow (all black), robin (red breast — UK\'s national bird, point it out), blackbird (sleek black, yellow beak), seagull, swan, duck.\n\nOther animals: squirrel (grey is UK; red is special), fox (urban or rural), hedgehog (rare but possible), rabbit, mouse, butterfly, bee, ladybird, snail, slug, worm.\n\nAdd descriptive verbs: "The pigeon is PECKING at the bread." "The squirrel is SCAMPERING up the tree." "The dog is WAGGING his tail." Action verbs plus animal names = rich English.\n\nPair with a children\'s bird-spotter book. The RSPB does free guides. Use them as a real-life I-Spy.',
      examples: [
        'UK garden birds: pigeon, sparrow, magpie, crow, robin, blackbird, blue tit, great tit, starling, swan, duck, seagull',
        'Common dog breeds: labrador, golden retriever, beagle, spaniel (cocker / springer), Jack Russell, Yorkshire terrier ("Yorkie"), poodle, pug, bulldog, dalmatian, husky',
        'Other UK wildlife: grey squirrel, red squirrel (special), fox, hedgehog, badger (rare), rabbit, mouse, vole, bat',
        'Insects on walks: butterfly, bee, wasp, ladybird (UK; "ladybug" in US), ant, spider, snail, slug, worm, beetle, fly',
        'Action verbs: pecking, scampering, wagging, slithering, hopping, flying, swimming, sniffing, chasing'
      ],
      duration: '15 min (walk)',
      where: ['walking', 'outdoor', 'kindergarten-drop-off'],
      skillTags: ['vocabulary', 'english-maintenance', 'description', 'english-conversation'],
      milestoneRefs: [
        'English vocabulary growth',
        'English sentences of 4–5 words'
      ],
      literacyWeight: 1,
      followUp: 'After basic naming, start a SPOTTED LIST — a piece of paper she keeps with all the birds, dogs, and animals she\'s spotted that week. By the end she should have 10–15 species. The list itself is pre-literacy work (writing in her own way) and gives her ownership of the vocabulary.',
      relatedIds: ['conv-animal-sounds', 'out-five-senses-walk', 'song-old-macdonald']
    },

    {
      id: 'out-shape-spotting',
      category: 'outdoor',
      ages: [3, 4, 5],
      title: 'Shape-Spotting Walk',
      hook: 'On a walk: "Find me a circle. A square. A triangle. A rectangle."',
      body: 'Shape-Spotting Walks teach geometric vocabulary in the real world. Shapes are EVERYWHERE outdoors — manholes are circles, paving stones are squares, road signs are triangles or octagons, windows are rectangles. Once Sophie sees them, she\'ll see them everywhere.\n\nStart with the four basic shapes: circle, square, triangle, rectangle. Spot one of each on the walk. "Find me a CIRCLE." She points at a manhole cover. "Yes! A circle. What about a SQUARE?" She points at a paving stone. "Yes! Now a TRIANGLE." Trickier — but road signs (give way, slow) are often triangular.\n\nThen layer in: oval, diamond, star, hexagon (the shape of football panels), octagon (stop sign shape). Eight shapes is a solid age-3 set.\n\nUse 3D shapes too on this walk: sphere (a ball, a globe lamp), cube (a brick, a box), cylinder (a lamp post, a bin, a can), cone (a traffic cone, an ice cream cone), pyramid (occasionally on roofs).\n\nVocabulary stretch: combine shape and material. "A wooden square — a plank." "A metal circle — a coin." "A glass rectangle — a window." Compound English.\n\nPair this with a shape book or shape-sorting toy at home. Cross-context reinforcement makes the words stick.',
      examples: [
        '2D shapes (basic 4): circle, square, triangle, rectangle',
        '2D shapes (extended): oval, diamond, star, hexagon, octagon, pentagon, heart',
        '3D shapes: sphere (ball), cube (box), cylinder (lamp post), cone (traffic cone), pyramid',
        'Real-world examples: circle (manhole, wheel, plate), square (paving, window frame), triangle (give-way sign), rectangle (door, window, brick), hexagon (football panel), octagon (stop sign)',
        'Material + shape: wooden square (plank), metal circle (coin), glass rectangle (window), plastic cone (traffic cone)'
      ],
      duration: '10 min (during walk)',
      where: ['walking', 'outdoor', 'kindergarten-drop-off'],
      skillTags: ['vocabulary', 'description', 'english-maintenance'],
      milestoneRefs: [
        'English vocabulary growth',
        'English sentences of 4–5 words'
      ],
      literacyWeight: 1,
      followUp: 'After basic shapes, do PROPERTIES of shapes. "How many sides does a square have? A triangle? A hexagon?" This is a tiny geometry lesson disguised as a vocabulary game. By age 5 she should know that triangle = 3 sides, square = 4, pentagon = 5, hexagon = 6.',
      relatedIds: ['conv-describe-things', 'out-colour-scavenger']
    },

    // ─── BEDTIME (3 items) ─────────────────────────────────────────

    {
      id: 'bed-story-telling-day',
      category: 'bedtime',
      ages: [3, 4, 5],
      title: 'Tell Your Day In Order',
      hook: 'After lights out: "Tell me your whole day in order. First… then… last."',
      body: 'Tell Your Day In Order is the bedtime version of the First/Then/Last conversation item. It\'s a more structured ask: instead of three good things (which is unstructured), she has to give an actual TEMPORAL SEQUENCE of her day.\n\nWith lights out and her tucked in: "Tell me everything that happened today, in order. Start with breakfast."\n\nShe\'ll need scaffolding at first. Help her with three buckets: "What did you do in the MORNING? What about in the AFTERNOON? What about in the EVENING?" Three sections, each easier to retrieve than the whole day.\n\nThe English she produces here is unique: PAST-TENSE narrative. "I had toast. I went to kindergarten. We played outside. I had pasta for lunch." Past tenses in English are full of irregulars (had, went, ate, did, made) — exactly the irregulars she needs to master.\n\nSupply re-casts gently. If she says "I eat banana", say back "Oh yes, you ATE a banana — yum." She hears the correct past tense without being corrected.\n\nThe routine also builds NARRATIVE structure. Days have beginnings, middles, ends, just like stories. Practising telling her day in order is practising telling a STORY — preparation for everything from school essays to job interviews. (Yes, you\'re building those at age 3.)\n\nKeep it 5 minutes max. The day-recap is calming and bedtime-appropriate. Don\'t turn it into an interrogation.',
      examples: [
        'Scaffolding questions if she\'s stuck: "What did you do in the morning?" / "What about after lunch?" / "What about before dinner?" / "What was the LAST thing you did before bath?"',
        'Sequence words to model: first, then, next, after that, after, before, finally, last, in the end, this morning, this afternoon, this evening',
        'Past tense irregulars to re-cast: had (not haved), went (not goed), ate (not eated), did (not doed), made (not maked), said (not sayed)',
        'Question follow-ups: "What was the best part?" / "What surprised you?" / "Was anything tricky?" / "Did anything funny happen?"',
        'Variations: tell the day BACKWARDS (much harder — start from "right now" and work back to breakfast); tell yesterday\'s day; tell what we\'ll do tomorrow (future tense practice)'
      ],
      duration: '5 min',
      where: ['bedtime'],
      skillTags: ['storytelling', 'english-conversation', 'vocabulary', 'comprehension', 'english-maintenance'],
      milestoneRefs: [
        'tell a simple story with a beginning and end',
        'English sentences of 4–5 words',
        'refuses to use English at home'
      ],
      literacyWeight: 1,
      followUp: 'When 3-bucket day-telling is fluent, push for finer detail. Pick ONE moment of her day and ask: "Tell me MORE about THAT bit." She zooms in. Zoom-in skill is a sophisticated narrative move that\'ll serve her for years.',
      relatedIds: ['bed-three-good-things', 'conv-story-sequencing', 'conv-time-words']
    },

    {
      id: 'bed-favourite-word',
      category: 'bedtime',
      ages: [3, 4, 5],
      title: '"What\'s Your Favourite Word?"',
      hook: 'After lights out: "What\'s your favourite English word today?" Collect them over weeks.',
      body: 'What\'s Your Favourite Word? is the gentlest English-curation bedtime routine. After lights out, ask: "What\'s your favourite English word today? Just one word. Any word."\n\nShe\'ll usually pick something silly. "Banana!" "Tickly!" "Splat!" That\'s perfect. The point is she\'s ACTIVELY CHOOSING from her English vocabulary — a small, deliberate act of language ownership.\n\nKeep a "Favourite Words" notebook by the bed. Write down each evening\'s word. Over weeks, you build a list of her own English vocabulary in her own hand-picked order. Read the list back to her occasionally. "Look at all your favourite words from this month."\n\nWhy this is powerful: English in her brain is constantly competing with Bulgarian for her preferred-vocabulary slots. When she actively picks English words as "favourites", she\'s consolidating English as the home language, in her own choice, every night.\n\nThe words also become a vocabulary diagnostic. If her favourite words are all super-common (cat, mum, ball), she\'s not yet venturing into rich vocabulary. If she picks "magnificent" or "scrumptious", she\'s active in the richer registers.\n\nMix it up occasionally: "What\'s your favourite word starting with /p/?" "What\'s a FUNNY word?" "What\'s a LONG word?" Constraints make her think.',
      examples: [
        'Question variations: "What\'s your favourite word today?" / "What\'s a funny word?" / "What\'s a long word?" / "What\'s a word that starts with /b/?" / "What word did you hear today that you liked?"',
        'Words she might pick (any are valid): banana, tickly, splat, mummy, dinosaur, sparkle, squelch, woof, fart (yes, fart is allowed)',
        'Notebook habit: keep a "Favourite Words" notebook by the bed. Write each evening\'s word. Read the list back occasionally.',
        'Variation: ask for her favourite WORD-PAIR. "Tickly toes." "Squishy banana." Two-word combos are stretchier.',
        'Pair with the Three Good Things routine alternately — Mondays/Wednesdays/Fridays: Three Good Things. Tuesdays/Thursdays: Favourite Word. Saturdays/Sundays: Made-up Story.'
      ],
      duration: '3 min (part of bedtime)',
      where: ['bedtime'],
      skillTags: ['vocabulary', 'english-maintenance', 'english-conversation'],
      milestoneRefs: [
        'English vocabulary growth',
        'refuses to use English at home'
      ],
      literacyWeight: 1,
      followUp: 'When she\'s collected 20–30 favourite words, do an EXTENSION. Pick one and ask her to use it in a sentence. "You said \'squelch\' last week. Can you use \'squelch\' in a sentence?" Word-to-sentence is a real production task.',
      relatedIds: ['bed-three-good-things', 'conv-feelings-vocab']
    },

    {
      id: 'bed-made-up-story',
      category: 'bedtime',
      ages: [3, 4, 5],
      title: 'Made-Up Story Collaboration',
      hook: 'You start: "Once upon a time…" Then she continues. You swap every sentence.',
      body: 'The Made-Up Story Collaboration is the most powerful English production task possible at bedtime. You and Sophie alternate sentences to build a story together. You start: "Once upon a time, there was a little mouse." She continues: "The mouse lived in a house." You: "One day, the mouse went on an adventure." Her: "She went to find a magical biscuit." And so on.\n\nWhy it\'s gold: she has to ACTIVELY GENERATE story sentences in English. Not retrieve — INVENT. That\'s the highest level of language production. By 4 she should be able to sustain her own contribution for 5–6 sentences in a row.\n\nYour job is partly to be a generous collaborator (accept whatever she introduces, even if it doesn\'t make sense), and partly to nudge the story forward when it stalls. "And then SUDDENLY…" "But what she didn\'t know was…" "Just then, a [character] appeared." These story-driving phrases keep the narrative moving.\n\nUse classic story structures: "Once upon a time" (setup), "One day" (inciting incident), "But then" (complication), "Luckily" (resolution help), "And in the end" (conclusion). Modelling the story-shape teaches her how stories work.\n\nIf she gets stuck or it\'s late, end the story with "And then she fell asleep, just like Sophie." Bedtime story closing.\n\nThis is also a wonderful intimacy moment. You\'re collaborating on a creative work in the dark, in English, just the two of you. It\'s how a child learns that English is the language of imagination at home.',
      examples: [
        'Opening prompts: "Once upon a time…" / "A long long time ago…" / "In a faraway land…" / "There was once a little [animal]…"',
        'Driving phrases to model: "And then suddenly…" / "But what she didn\'t know was…" / "Just then, a [character] appeared" / "Luckily, she had a [object]" / "And in the end…"',
        'Story structures: setup → inciting incident → complication → resolution → conclusion',
        'Easy story starters: a mouse on an adventure, a princess finding a dragon, a teddy bear going to school, a fish swimming to the sea',
        'Ending phrases: "And in the end…" / "And they all lived happily ever after" / "And she fell fast asleep, just like Sophie"',
        'Variation: TELL THE WHOLE STORY (no swapping) — she narrates a 5-sentence story from start to finish. Harder.'
      ],
      duration: '10 min (part of bedtime)',
      where: ['bedtime'],
      skillTags: ['storytelling', 'english-conversation', 'vocabulary', 'comprehension', 'english-maintenance'],
      milestoneRefs: [
        'tell a simple story with a beginning and end',
        'English sentences of 4–5 words',
        'English vocabulary growth'
      ],
      literacyWeight: 2,
      followUp: 'When collaborative stories are flowing, ask her to TELL THE WHOLE STORY herself — start to finish, with no swap. Five sentences minimum. This is real narrative production. Write down one of her stories — she\'ll be thrilled to see her own story in print, and it\'s great print-awareness reinforcement.',
      relatedIds: ['conv-story-questions', 'conv-story-sequencing', 'book-the-gruffalo']
    },
  ]
};
