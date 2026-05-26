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
      relatedIds: ['rhyme-hickory-dickory', 'game-rhyming-pairs']
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
};
