/*
 * =====================================================================
 * SOPHIE'S DEVELOPMENTAL ROADMAP — DATA FILE
 * =====================================================================
 *
 * PURPOSE
 * -------
 * This file exports window.ROADMAP_DATA — an array of 10 age objects
 * covering ages 2–11. It is consumed by a standalone React SPA
 * (index.html + app.jsx + components.jsx) that renders a developmental
 * roadmap for Sophie. This file is intentionally self-contained: any
 * LLM or developer can update or regenerate it without reading any
 * other file in the project. All rendering logic lives in
 * components.jsx; this file is pure data.
 *
 * =====================================================================
 * SOPHIE'S CONTEXT  (read this before generating new content)
 * =====================================================================
 *
 * Name:        Sophie
 * Age:         3.5 years old (born approx. late 2022)
 * Languages:   English (dominant, stronger) + Bulgarian (bilingual)
 * Accent:      Natural RP (Received Pronunciation) — from English TV
 *              (Peppa Pig, Bluey, Hey Duggee). Preserve this at all costs.
 * Schooling:   Bulgarian kindergarten and Bulgarian school ONLY.
 *              School will NEVER teach English reading, writing, or grammar.
 * Home:        Primarily English-speaking family. Predominantly English
 *              children's books at home.
 * Parents:     Highly motivated. Willing to invest hours per day and hire
 *              private English tutors at appropriate ages.
 * Key risk:    Bulgarian school + peer immersion will gradually push
 *              Bulgarian toward dominance. Without deliberate action,
 *              English fluency and especially literacy will atrophy.
 * Key goal:    Sophie reaches full English literacy (reading, writing,
 *              speaking, comprehension) at the same rate as a child raised
 *              entirely in an English-speaking country — despite school
 *              providing zero English instruction.
 * Intelligence: Assume above average. Set bars high across all domains.
 *              Red flags should reflect what a bright, English-dominant
 *              bilingual child SHOULD be doing — not a typical average bar.
 *
 * =====================================================================
 * CONTENT PHILOSOPHY
 * =====================================================================
 *
 * English literacy is the primary non-standard addition to this roadmap.
 * Every age section explicitly includes:
 *   1. English literacy habits (phonics, reading, writing for that age)
 *   2. English-specific activities and resources (apps, book series,
 *      structured programs like Jolly Phonics or Reading Eggs)
 *   3. Bilingual maintenance guidance (code-switching norms, language
 *      boundaries, accent preservation)
 *   4. Red flags specific to English maintenance in a bilingual child
 *
 * Bulgarian is handled entirely by school. Only mention Bulgarian where
 * it directly interacts with English (e.g., Cyrillic vs. Latin letter
 * confusion, phoneme interference on the RP accent, code-switching norms).
 *
 * The English literacy progression across ages:
 *   Age 2–3 → Phonological awareness: rhymes, alliteration, syllables,
 *              letter NAMES (ABC song), love of English books
 *   Age 3–4 → Letter SOUNDS (phonics begins), letters in own name,
 *              print awareness, beginning sight words
 *   Age 4–5 → Full phonics (all 44 sounds), CVC word decoding, writing
 *              name + simple words, 20+ sight words
 *   Age 5–6 → Reading simple English books, complete sentences in writing,
 *              English tutor strongly recommended
 *   Age 6–7 → Reading chapter books, paragraphs in writing, UK Year 1–2
 *              standard
 *   Age 7–8 → Reading for pleasure (Roald Dahl level), short stories in
 *              writing, UK Year 2–3 standard
 *   Age 8–9 → Novels (Harry Potter level), analytical writing, UK Year 3–4
 *   Age 9–11 → Ambitious literature, essays, distinctive writing voice,
 *              UK Year 4–6 standard
 *
 * =====================================================================
 * FULL DATA SCHEMA
 * =====================================================================
 *
 * window.ROADMAP_DATA: Array<AgeObject>
 *   Ordered array of exactly 10 objects, ages 2–11 ascending.
 *   Do NOT change array length, age order, or field names.
 *
 * AgeObject {
 *
 *   age: number
 *     Whole-year age (2–11). Used as tab label and page heading.
 *     DO NOT CHANGE these values.
 *
 *   months: string
 *     12-month span for this age, e.g. "36–47". Format: "{n}–{n}" en-dash.
 *
 *   part: string
 *     Persona title shown in the navigation tab and hero badge.
 *     Convention: "The [Noun]". Keep to 1–3 words after "The".
 *
 *   partNumber: number
 *     Groups ages into developmental parts (shown as "PART III" etc.).
 *     Ages sharing a part use the same number. Current grouping:
 *       1 = ages 2–3 (Early Years)
 *       2 = age 4 (Pre-Literacy)   [note: original data skipped 2, starts 3]
 *       3–8 = ages 4–11 (see existing values)
 *     It is safe to keep existing partNumber values unchanged.
 *
 *   image: string
 *     Relative path to hero image. DO NOT CHANGE these paths.
 *     Existing mapping: age 2→assets/1.png, 3→assets/2.png,
 *     4→assets/3.png, 5→assets/4.png, 6→assets/5.png, 7→assets/6.png,
 *     8→assets/7.png, 9→assets/10.png, 10→assets/8.png, 11→assets/11.png
 *     NOTE: assets/9.png does NOT exist.
 *
 *   overview: string
 *     2–4 sentence paragraph describing this developmental stage.
 *     Written in second person ("your child", "Sophie"). Warm tone.
 *     Should reference the English/bilingual context where relevant.
 *     Keep under ~200 words.
 *
 *   sections: {
 *
 *     habits: {
 *       title: string
 *         Always "Weekly Habits to Build" — keep this constant.
 *       items: Array<{ title: string, body: string }>
 *         3–5 items. Short, actionable weekly habits.
 *         title: 2–5 word action phrase ("Read English Books Daily").
 *         body:  1–3 sentence explanation (what + why).
 *         RULE: ALWAYS include at least 1 English literacy habit per age.
 *     }
 *
 *     activities: {
 *       title: string
 *         "Play Ideas with Household Items" for ages 2–5.
 *         "Activities & Projects" for ages 6–11.
 *       items: Array<{ title: string, body: string }>
 *         4–5 items. Practical, low-cost or named-resource activities.
 *         RULE: ALWAYS include 1–2 English-specific activities per age.
 *     }
 *
 *     communication: {
 *       title: string
 *         "Language Moments" for ages 2–5.
 *         "Communication & Connection" for ages 6–11.
 *       items: Array<{ title: string, body: string }>
 *         2–3 items. Conversational strategies for parents.
 *         RULE: ALWAYS include 1 bilingual/English-maintenance tip per age.
 *     }
 *
 *   }
 *
 *   monthlyPlans: Array<MonthlyPlan>
 *     1–4 plan blocks per age (usually 2), each covering ~6 months.
 *
 *   MonthlyPlan {
 *     range: string   — e.g. "Months 36–41"
 *     title: string   — 3–6 words, e.g. "Sounds, Letters, and Stories"
 *     intro: string   — 1–2 sentence summary of the period's focus.
 *     items: Array<{ label: string, body: string }>
 *       3–5 focus areas. label = category (e.g. "English Literacy").
 *       body = 1–2 actionable sentences.
 *       RULE: ALWAYS include an "English Literacy" item in every plan.
 *   }
 *
 *   milestonesBy: string | null
 *     The deadline age/month for the milestones list.
 *     e.g. "48 months" or "72 months".
 *     Set to a value even when milestones is null, if redFlags is
 *     non-null (AlertBox uses this field for its intro sentence).
 *
 *   milestones: Array<string> | null
 *     Observable checkpoints. null = section hidden in the UI (age 2 only).
 *     Each item: observable behaviour in third person.
 *     6–9 items per age.
 *     RULE: Include 2–3 English-literacy-specific milestones.
 *     RULE: Set a HIGH bar — assume bright, above-average child.
 *
 *   redFlags: Array<string> | null
 *     Concerns warranting professional consultation or parental action.
 *     null = section hidden. Set for ALL ages in this file.
 *     Each item: present tense, no subject pronoun
 *       ("Cannot name 10 letters by 36 months").
 *     4–7 items per age.
 *     RULE: Include 1–2 flags for English maintenance in a bilingual child.
 *     RULE: Set a HIGH bar — what should a bright English-dominant
 *           bilingual child definitely be doing? Flag the absence of that.
 *
 * }
 *
 * =====================================================================
 * CONSTRAINTS FOR CONTENT GENERATION
 * =====================================================================
 * 1. Do NOT add, remove, or rename top-level fields.
 * 2. sections.habits.items, sections.activities.items, and
 *    sections.communication.items MUST be arrays of {title, body}.
 * 3. monthlyPlans[].items MUST be arrays of {label, body}.
 * 4. milestones MUST be Array<string> or null (not objects).
 * 5. redFlags MUST be Array<string> or null (not objects).
 * 6. image paths MUST NOT be changed.
 * 7. age values MUST NOT be changed.
 * 8. The array must remain exactly 10 elements, ages 2–11 in order.
 * =====================================================================
 */

window.ROADMAP_DATA = [

  // ───────────────────────────────────────────────────────────────────
  // AGE 2  |  The Explorer  |  months 24–35
  // Sophie is past this age. Content preserved for reference.
  // English focus: letter names, nursery rhymes, dense daily read-alouds,
  // and vocabulary explosion — all in English as the dominant language.
  // ───────────────────────────────────────────────────────────────────
  {
    age: 2,
    months: "24–35",
    part: "The Explorer",
    partNumber: 1,
    image: "assets/1.png",

    overview: "Two is a whirlwind of firsts: first proper sentences, first \"no!\", first best friend, and a fierce desire to do everything independently. For Sophie, this year is also a critical window to cement English as her dominant language through sheer volume of input — books, songs, conversation, and play. The vocabulary she accumulates in English before age three is the single biggest predictor of her English literacy success at school. Expect tantrums and breathtaking leaps forward, sometimes in the same afternoon.",

    sections: {

      habits: {
        title: "Weekly Habits to Build",
        items: [
          // English literacy habit #1 — read-alouds are the highest-ROI activity at this age
          {
            title: "Read English Books Twice Daily",
            body: "Aim for 10 minutes morning and bedtime. Interactive books (Dear Zoo, Where's Spot) work brilliantly — lift the flaps, ask 'What's behind the door?' The number of English words Sophie hears before age five is the single greatest predictor of her reading success."
          },
          // English literacy habit #2 — letter names before letter sounds
          {
            title: "Sing the ABC Song Daily",
            body: "Sung once a day, it becomes automatic within weeks. Progress to pointing at each letter on a fridge magnet set or alphabet poster while singing. Don't expect her to name letters yet — exposure is the goal."
          },
          {
            title: "Narrate Your Day in English",
            body: "Keep a running English commentary: 'I'm washing the red apple. Now I'm cutting it in half — one piece for you, one for me.' This constant stream of full sentences is vocabulary gold at this age."
          },
          {
            title: "Count Everything in English",
            body: "Count stairs as you climb, grapes on her plate, ducks in the bath. '1, 2, 3 — three ducks!' Connects number words to quantity and makes maths feel natural in English."
          },
          // Rhyming is a pre-reading skill, not just music
          {
            title: "English Nursery Rhymes Daily",
            body: "Learn 5+ classics: Twinkle Twinkle, Humpty Dumpty, Baa Baa Black Sheep, Hickory Dickory Dock, and Incy Wincy Spider. Rhyming awareness at age two is directly linked to reading ability at age six."
          }
        ]
      },

      activities: {
        title: "Play Ideas with Household Items",
        items: [
          // English-specific activity
          {
            title: "Alphabet Fridge Magnets",
            body: "Arrange letters in ABC order together. Focus on S-O-P-H-I-E. Don't expect her to name them yet — just handling, singing, and seeing them builds familiarity."
          },
          {
            title: "Kitchen Band",
            body: "Pots, pans, and wooden spoons. Rhythmic play builds phonological awareness — the same neural pathway used later to hear the beats inside words."
          },
          {
            title: "Pouring Station",
            body: "In the bath or a supervised basin, give her plastic cups and a small jug. Pouring and transferring builds the fine motor control she'll need for writing."
          },
          // English-specific activity
          {
            title: "Pretend Phone Calls in English",
            body: "Use an old remote or a block to 'call' Grandma or a favourite character. Encourages back-and-forth conversation in full English sentences."
          },
          {
            title: "Cardboard Box Fort",
            body: "A large box becomes a house, car, or rocket ship. Provide chunky crayons to decorate it — imaginative play and mark-making in one."
          }
        ]
      },

      communication: {
        title: "Language Moments",
        items: [
          // Bilingual-specific tip
          {
            title: "Expand Every English Sentence",
            body: "When she says 'juice,' you say 'You want more orange juice! Here's your juice in your blue cup.' Add colour, size, quantity. This is how vocabulary doubles in the dominant language."
          },
          {
            title: "Name Feelings in English",
            body: "When she's upset: 'You feel frustrated because the tower fell down.' The first step toward emotional intelligence — always modelled in English at home."
          },
          {
            title: "Accept Code-Switching for Now",
            body: "If she mixes Bulgarian and English in one sentence, that's completely normal and healthy at this age. Gently model the full English version without correcting: 'Yes, the big dog! The big dog is running fast.'"
          }
        ]
      }
    },

    monthlyPlans: [
      {
        range: "Months 24–29",
        title: "Words, Rhymes, and Wonder",
        // The mission for this half: dense vocabulary input and phonological foundations
        intro: "The primary mission is vocabulary explosion. Every new English word Sophie hears at this age is a brick in her literacy foundation. Keep the input rich, playful, and relentless.",
        items: [
          {
            label: "English Literacy",
            // Rhymes + read-alouds + ABC exposure = phonological awareness at 2
            body: "Read aloud twice daily. Focus on repetitive, rhyming books (Dr. Seuss, Julia Donaldson). Aim for her to know 10 nursery rhymes by mouth by 30 months. Sing the ABC daily with fridge magnets."
          },
          {
            label: "Language",
            body: "Expand 1–2 word utterances into full sentences. If she says 'doggy,' say 'Yes! The big fluffy doggy is running so fast!' Describe everything with adjectives and action words."
          },
          {
            label: "Motor Skills",
            body: "Chunky crayons for scribbling, stacking 6+ blocks, kicking a ball. These build the hand strength and coordination needed later for writing."
          },
          {
            label: "Independence",
            body: "Two-step requests in English: 'Get your cup and bring it to the table.' Builds listening skills and a sense of capability."
          }
        ]
      },
      {
        range: "Months 30–35",
        title: "Sentences, Stories, and Letters Begin",
        intro: "Three-word sentences are emerging and imaginative play is taking off. Keep English input rich and begin casual letter exposure through the alphabet.",
        items: [
          {
            label: "English Literacy",
            // Spell S-O-P-H-I-E with magnets; point to letters in books
            body: "Introduce alphabet board books where you point to and name each letter. Spell S-O-P-H-I-E with fridge magnets — don't expect her to read it, just normalise that letters make names. Continue daily read-alouds: aim for 15+ minutes total."
          },
          {
            label: "Language",
            body: "Ask open questions: 'What happened to the bear in the story?' Don't correct answers — celebrate any attempt at explanation."
          },
          {
            label: "Play",
            body: "Nurture imaginative play: 'cooking' in a toy kitchen, giving teddy a bath, a pretend shop. Language flourishes when children are in character."
          },
          {
            label: "Cognitive",
            body: "Shape sorters, 4-piece puzzles, matching games. Builds logical thinking and introduces vocabulary: 'circle,' 'triangle,' 'the same,' 'different.'"
          }
        ]
      }
    ],

    // milestonesBy still needed for AlertBox "by X months" text
    milestonesBy: "36 months",

    // milestones: null → MilestoneTracker component is hidden for age 2
    milestones: null,

    // Red flags for a bright bilingual child with English dominance
    redFlags: [
      "Says fewer than 50 clear English words by 24 months (bright English-dominant bilingual children often have 75–100+)",
      "Not combining at least two English words ('more juice,' 'daddy go') by 24 months",
      "Shows little or no interest in books, songs, or being read to",
      "Does not follow simple 2-step English instructions by 30 months ('Get your shoes and bring them here')",
      "English vocabulary growth appears to have plateaued despite daily immersion at home",
      "Completely refuses to use English, defaulting exclusively to Bulgarian in all contexts"
    ]
  },

  // ───────────────────────────────────────────────────────────────────
  // AGE 3  |  The Storyteller  |  months 36–47
  // THIS IS SOPHIE'S CURRENT AGE (she is 3.5, in the middle of this range).
  // English focus: phonological awareness (rhymes, syllables, initial sounds),
  // all 26 letter NAMES known, print awareness, letters of own name.
  // ───────────────────────────────────────────────────────────────────
  {
    age: 3,
    months: "36–47",
    part: "The Storyteller",
    partNumber: 1,
    image: "assets/2.png",

    overview: "Three is the age of 'why?' and make-believe, and Sophie is right in the middle of it. Her English is already her dominant language — a huge asset — and the task now is to turn that rich spoken vocabulary into phonological awareness: the ability to hear the individual sounds inside words. This invisible skill is the most powerful predictor of reading success and it's built entirely through rhymes, songs, clapping games, and word play. Alongside this, she should know all 26 letter names by the end of this year and recognise the letters in her own name. Bulgarian kindergarten is beginning, so home English input becomes even more deliberate.",

    sections: {

      habits: {
        title: "Weekly Habits to Build",
        items: [
          // Core English literacy habit — daily read-aloud with comprehension questions
          {
            title: "Read English Books Together (15 min)",
            body: "Move beyond just listening: ask 'What do you think will happen next?' and 'Why did she do that?' When she knows a book well, let her 'read' it to you from memory using the pictures. Comprehension begins here."
          },
          // Phonological awareness — the bridge to reading
          {
            title: "Daily English Rhyming Games",
            body: "In the car, bath, or at meals: 'What rhymes with cat? Hat! Bat! Fat! Mat!' Rhyming ability at age three is one of the strongest predictors of reading success at age six. Make it silly and fun — nonsense words count."
          },
          // Letter names — the prerequisite for letter sounds
          {
            title: "ABC Song + Letter Pointing",
            body: "Sing the ABC song daily while pointing to each letter on a chart or magnet set. Goal: Sophie can sing it clearly and independently by 42 months. Next step: say it without singing. Then: recognise individual letters when pointed to."
          },
          {
            title: "Count and Label in English",
            body: "Count stairs, sort the cutlery by type, name shapes in picture books. Aim: counting to 10 fluently and naming 8+ colours in English by 42 months."
          },
          // Letter of the week = systematic letter exposure before formal phonics
          {
            title: "Weekly 'Letter of the Week'",
            body: "Focus on one letter each week. Find it on cereal boxes, in books, on road signs. Draw it, trace it, make it with play-dough. Start with S (for Sophie), then O, P, H, I, E."
          }
        ]
      },

      activities: {
        title: "Play Ideas with Household Items",
        items: [
          // English phonological awareness game — no writing required
          {
            title: "'I Spy' with Initial Sounds",
            body: "'I spy something beginning with /b/... ball!' Say the sound, not the letter name. This develops phonemic awareness without any pressure. Play in English exclusively."
          },
          {
            title: "English Alphabet Puzzle",
            body: "A peg puzzle or foam mat with all 26 letters. Name each letter as she places it: 'That's a D!' Don't worry about the sounds yet — letter names first."
          },
          // Pre-writing: finger tracing builds motor memory before pencil control is ready
          {
            title: "Trace Letters in Sand or Flour",
            body: "Spread flour on a tray or use a sandpit. Trace S-O-P-H-I-E with a finger. No pen required — finger tracing builds the same motor memory as writing."
          },
          {
            title: "Homemade Play-Doh Letters",
            body: "Mix flour, salt, water, and oil. Roll snakes and bend them into letter shapes. 'This is an S — that's the first letter of your name, Sophie!'"
          },
          // Drawing people = key cognitive milestone
          {
            title: "Drawing People",
            body: "Ask her to draw Mummy, Daddy, and herself. A 'tadpole person' (circle head + line legs) is a major cognitive achievement. Narrate what she draws in English: 'That's Mummy's long hair!'"
          }
        ]
      },

      communication: {
        title: "Language Moments",
        items: [
          // Phonological awareness through conversation, not drilling
          {
            title: "Point Out Sounds in Words Casually",
            body: "While playing: 'Sophie starts with /s/... ssss... like sun and sock!' No lesson needed — casual observations build phoneme awareness naturally. Do this for 3–4 words a day."
          },
          // Comprehension questions build the schema for understanding text
          {
            title: "Ask Story Questions, Not Quiz Questions",
            body: "Instead of 'What colour is the bear?' try 'Why do you think the bear is sad?' Comprehension — understanding meaning — is what reading is ultimately about."
          },
          // Critical bilingual tip as Bulgarian kindergarten begins
          {
            title: "Make English the Home Language Anchor",
            body: "With Bulgarian now entering from kindergarten, it becomes vital that home conversations, all books, and TV remain predominantly in English. If she slips into Bulgarian-only, gently invite English: 'Can you tell me that in English too?' Keep it warm, not corrective."
          }
        ]
      }
    },

    monthlyPlans: [
      {
        range: "Months 36–41",
        // Sophie is currently in this range (she is 3.5)
        title: "Sounds, Syllables, and Letter Names",
        intro: "Sophie is here right now. Build phonological awareness aggressively — it's the invisible bridge between spoken language and reading, and it's built through play, not worksheets.",
        items: [
          {
            label: "English Literacy",
            // Syllable clapping + rhyming + letter names = phonological awareness trifecta
            body: "Focus entirely on phonological awareness: rhyming ('cat, hat, bat'), alliteration ('Peter Piper'), and syllable clapping ('el-e-phant' = 3 claps). Do this daily in 5-minute bursts. Also: she should know all 26 letter NAMES by the end of this period — names, not sounds."
          },
          {
            label: "Language",
            body: "Sentences should be 4–5 words in English. Encourage storytelling: 'Tell me what happened at kindergarten today.' Listen fully before expanding or questioning."
          },
          {
            label: "Fine Motor",
            body: "Child-safe scissors for snipping paper strips. Drawing circles and crosses. Chunky pencils for mark-making — pre-writing foundations. Don't force letter writing yet."
          },
          {
            label: "Social",
            body: "Play simple turn-taking board games (Snakes and Ladders, Pairs). Narrate: 'My turn, then your turn.' Parallel play gradually shifting to cooperative play is developmentally right."
          }
        ]
      },
      {
        range: "Months 42–47",
        title: "Letter Names to Letter Sounds",
        // This is the phonics bridge — knowing names → learning sounds
        intro: "She knows letter names. Now introduce that each letter makes a sound — the most important insight in early literacy. This is the start of phonics proper.",
        items: [
          {
            label: "English Literacy",
            // Jolly Phonics order: S, A, T, P, I, N first — most common sounds
            body: "Begin letter-sound correspondence for the 6 most useful letters: S (/s/), A (/a/), T (/t/), P (/p/), I (/i/), N (/n/) — the classic Jolly Phonics starting set. Use Jolly Phonics songs on YouTube. 'S says /s/ like snake!' 2–3 new sounds per month is excellent progress."
          },
          {
            label: "Pre-Writing",
            // Writing name = purposeful, motivating practice
            body: "Practice writing the letters of her name (S-O-P-H-I-E) on a whiteboard. No pressure — it's play. Focus on grip (tripod: thumb, index, middle finger) and direction (top to bottom, left to right). Neatness doesn't matter yet."
          },
          {
            label: "Cognitive",
            body: "Counting to 20, sorting objects by two attributes (colour AND size), 10–15 piece jigsaw puzzles. Introduce basic time vocabulary: yesterday, today, tomorrow."
          },
          {
            label: "Independence",
            body: "Encourage dressing herself independently (velcro, zips). Builds kindergarten self-sufficiency and the persistence she'll need for learning to read."
          }
        ]
      }
    ],

    milestonesBy: "48 months",

    // High-bar milestones for a bright, English-dominant bilingual child
    milestones: [
      "Knows all 26 letter names — can sing the alphabet and recognise individual letters when pointed to",
      "Correctly rhymes 3–4 words from a given prompt ('cat → hat, bat, mat')",
      "Speaks clearly in English sentences of 4–5 words; can tell a simple story with a beginning and end",
      "Recognises every letter in her own name (S-O-P-H-I-E) on sight",
      "Shows print awareness: knows books go left to right, text carries meaning, letters make words",
      "Counts correctly to 15+ in English and names 8+ colours and basic shapes",
      "Hops on one foot, catches a large ball, draws a recognisable person with head and limbs"
    ],

    redFlags: [
      "Cannot name at least half the letters of the alphabet by 42 months despite daily ABC exposure",
      "Shows no interest in rhyming and cannot produce a single rhyme by 42 months",
      "Speaking in sentences shorter than 3 words in English — her dominant language",
      "English vocabulary growth has slowed noticeably since starting Bulgarian kindergarten",
      "Consistently refuses to use English at home, defaulting entirely to Bulgarian",
      "No print awareness — treats books as objects rather than as carriers of meaning"
    ]
  },

  // ───────────────────────────────────────────────────────────────────
  // AGE 4  |  The Investigator  |  months 48–59
  // Critical year. Phonics begins in earnest. CVC word decoding begins.
  // School starts showing Cyrillic letters — watch for Latin/Cyrillic confusion.
  // Structured phonics program (Jolly Phonics, Reading Eggs) should begin now.
  // ───────────────────────────────────────────────────────────────────
  {
    age: 4,
    months: "48–59",
    part: "The Investigator",
    partNumber: 3,
    image: "assets/3.png",

    overview: "Four is the year phonics comes alive. Sophie's strong English vocabulary and the phonological awareness built at age three now meet the written word. This is when letter-sound correspondence becomes actual reading — first sounding out simple words, then blending them, then the magical moment a full sentence is decoded for the first time. Because school will never teach her to read in English, this year demands a structured phonics approach at home: Jolly Phonics workbooks, the Reading Eggs app, or a dedicated English phonics tutor. The investment you make this year pays dividends for the rest of her life.",

    sections: {

      habits: {
        title: "Weekly Habits to Build",
        items: [
          // The single most important habit at age 4
          {
            title: "Daily Phonics Practice (15–20 min)",
            body: "Use a structured programme: Jolly Phonics workbooks, the Reading Eggs app, or BBC Alphablocks (free on YouTube) followed by letter-sound practice. Consistency matters far more than duration — daily beats intensive weekly sessions. Cover all 44 English phonemes by age 5."
          },
          // Decodable readers are the bridge between phonics drills and real reading
          {
            title: "Read English Books Together (20 min)",
            body: "Move beyond picture books into simple-text decodable readers (Bob Books Level 1, Biff Chip & Kipper Stage 1–2). Read to her, then ask her to find words she knows. Don't pressure decoding — just build familiarity with text."
          },
          {
            title: "Write Her Name in English Daily",
            body: "Capital and lowercase: Sophie. Whiteboard, chalk on the pavement, finger in sand. Correct pencil grip gently now — tripod grasp (thumb, index, middle). Getting the grip right at four saves years of correction later."
          },
          // Sight words are the complement to phonics — high-frequency words that don't decode easily
          {
            title: "Sight Word Practice (5–10 at a Time)",
            body: "Start the Dolch pre-primer list: I, the, a, and, is, it, in, on, he, she, we, me, my, to, go, do, no, up, at, an. Flashcard games and 'word hunts' in books — never drilling. Knowing 20 sight words makes early reading dramatically easier."
          },
          // Sound stretching = the manual version of blending
          {
            title: "Play 'Sound Stretching' Daily",
            body: "Say a word in slow motion, stretching each sound: 'c...a...t.' Then snap it back: 'cat!' Great for car journeys. This is the physical act of blending, practised out loud before she does it on a page."
          }
        ]
      },

      activities: {
        title: "Play Ideas with Household Items",
        items: [
          // English-specific — structured phonics resource
          {
            title: "Alphablocks (BBC, Free on YouTube)",
            body: "The BBC animated series teaches blending beautifully. Watch together and pause to try the blends out loud. 10–15 minutes is enough — then do it in real life: 'What does /c/ /a/ /t/ say?'"
          },
          // English-specific — best phonics app for this age
          {
            title: "Reading Eggs App (Ages 3–7)",
            body: "A structured, adaptive phonics programme. After age 4.5, she can use it independently for 15 minutes. Covers all 44 phonemes in order, with games and decodable books. Available on tablet or phone."
          },
          {
            title: "DIY Phonics Letter Cards",
            body: "Make sets of letter cards together. Draw a picture for each sound: S = snake, A = apple. Making them is as valuable as using them — the act of drawing reinforces each sound-picture link."
          },
          {
            title: "'Sink or Float' Science Lab",
            body: "Predictions, experiments, results — in English. Builds vocabulary ('hypothesis,' 'result'), logical thinking, and gives rich material for English conversation."
          },
          {
            title: "Map Maker",
            body: "Draw a simple map of the living room and hide a 'treasure.' She follows the map to find it. Builds spatial reasoning and introduces directional vocabulary: left, right, above, below."
          }
        ]
      },

      communication: {
        title: "Language Moments",
        items: [
          // The most important phonics communication habit at age 4
          {
            title: "Sound Out Words Together — Slowly",
            body: "When she asks what a word says, don't just tell her — sound it out together: '/d/... /o/... /g/... dog!' Let her feel the decoding process with you before doing it alone. This models what reading actually is."
          },
          {
            title: "Find Letters and Words Everywhere",
            body: "'Look — that sign says STOP. S-T-O-P. What sound does S make?' Turn the environment into a reading lesson. Cereal boxes, shop signs, number plates — literacy is everywhere."
          },
          // Accent preservation + screen quality tip
          {
            title: "Keep English TV Premium and Plentiful",
            body: "Peppa Pig, Bluey, Hey Duggee, Charlie and Lola — high-quality British and Australian English that preserves her RP accent and models excellent vocabulary. Avoid dubbed content. Screen time in English is legitimate language input at this age."
          }
        ]
      }
    },

    monthlyPlans: [
      {
        range: "Months 48–53",
        title: "Phonics Launch",
        // This is the critical phonics window — all sounds by 54 months
        intro: "The mission is clear: establish all 26 letter sounds plus the most common digraphs (sh, ch, th) by month 53. This is the year structured phonics begins in earnest — don't wait for school, it will never come.",
        items: [
          {
            label: "English Literacy",
            // Jolly Phonics or Reading Eggs — daily, structured, progressive
            body: "Start a structured phonics programme (Jolly Phonics or Reading Eggs). Target: all single letter sounds plus sh, ch, th, wh by 54 months. Begin reading simple decodable books alongside (Bob Books Level 1 — just 3-letter words). Read a decodable book together every day."
          },
          {
            label: "Sight Words",
            body: "Introduce Dolch pre-primer words (20 words total). Use 'Go Fish' style games or word hunts in books. Don't test — play. Knowing these 20 words makes every decodable book feel achievable."
          },
          {
            label: "Math",
            body: "Count reliably to 20, touching each object once. Introduce addition as 'putting together': 3 apples + 2 apples = 5 apples. Name and draw basic 2D shapes."
          },
          {
            label: "Social Skills",
            body: "Cooperative play is central now. Coach through conflicts: 'What could you say to ask for a turn?' Role-play social situations with puppets. Empathy and social problem-solving build the emotional stability that supports learning."
          }
        ]
      },
      {
        range: "Months 54–59",
        title: "Blending and First Words",
        // The magic moment — sounds fusing into words
        intro: "With letter sounds in place, the focus shifts to blending: the magical process of fusing sounds into words. This is when she realises she can read.",
        items: [
          {
            label: "English Literacy",
            // CVC blending is the first reading milestone
            body: "Practise blending CVC words: cat, sit, hop, bed, fun. She should be able to sound out and read 20+ simple words by month 59. Introduce writing simple words from dictation: 'Can you write the word cat? /c/... /a/... /t/...' This encodes phonics in both directions."
          },
          {
            label: "Writing",
            body: "Aim for legible writing of her full name (Sophie) and at least 5 common words. Introduce lowercase alongside capitals. Correct grip is critical — lock it in now before habits form."
          },
          {
            label: "Read-Alouds",
            body: "Continue daily read-alouds of more complex picture books (Julia Donaldson, Dr. Seuss) to develop listening comprehension, vocabulary, and love of stories — the fuel that will power years of independent reading."
          },
          {
            label: "Life Skills",
            body: "Regular contribution to family chores: setting the table, feeding a pet, tidying her room. Builds responsibility, executive function, and the quiet confidence that supports learning."
          }
        ]
      }
    ],

    milestonesBy: "60 months",

    milestones: [
      "Knows all 26 letter sounds and the most common digraphs (sh, ch, th, wh)",
      "Sounds out and reads simple CVC words (cat, sit, hop, bed, fun) independently",
      "Writes her full first name (Sophie) legibly with correct letter formation",
      "Recognises 15–20 sight words (I, the, a, is, it, go, he, she, we, me, my)",
      "Tells stories with a clear beginning, middle, and end",
      "Counts reliably to 20+ and understands 'adding to' and 'taking away' with objects",
      "Draws a person with 5+ distinct body parts; copies simple shapes and patterns"
    ],

    redFlags: [
      "Cannot identify the sounds for most letters by 54 months despite daily structured phonics practice",
      "Cannot write their own name legibly by 54 months",
      "Not blending any CVC words by 56 months despite consistent phonics instruction — worth investigating for phonological processing difficulties",
      "Has fewer than 10 sight words by 59 months",
      "Consistently avoids or refuses phonics activities — this is a signal worth acting on early",
      "English vocabulary at home seems stagnant or is being displaced by Bulgarian equivalents"
    ]
  },

  // ───────────────────────────────────────────────────────────────────
  // AGE 5  |  The Creator  |  months 60–71
  // Reading begins in earnest. English tutor strongly recommended from now.
  // School may begin teaching Cyrillic — watch for B/В and other
  // Latin/Cyrillic confusions. Keep English and Bulgarian letters separate
  // in Sophie's mind by using different materials (English = books, Bulgarian = school).
  // ───────────────────────────────────────────────────────────────────
  {
    age: 5,
    months: "60–71",
    part: "The Creator",
    partNumber: 4,
    image: "assets/4.png",

    overview: "Five is the year reading becomes real. Sophie's phonics knowledge from age four now transforms into genuine reading — first sounding out short books, then simple sentences, then early readers with actual stories. Because school provides zero English literacy instruction, this year is critical: daily phonics consolidation, a levelled English reading scheme (Oxford Reading Tree, Biff Chip & Kipper), and ideally a private English reading tutor once a week. A child who can read English independently by age six is set up for a lifetime of self-directed learning — and Sophie is absolutely capable of this.",

    sections: {

      habits: {
        title: "Weekly Habits to Build",
        items: [
          // The primary habit: Sophie reads TO you, not the other way around
          {
            title: "Daily English Reading Practice (20 min)",
            body: "Sophie reads aloud to you from a levelled reader. Don't correct every error — keep the flow. After each page, ask 'What just happened?' Aim for Oxford Reading Tree Stage 3–4 (or Reading Eggs Book 50) by end of year. This single habit is worth more than any other."
          },
          // Consolidate phonics — blends and vowel digraphs
          {
            title: "Phonics Consolidation: Blends and Digraphs",
            body: "Work through consonant blends (bl, cr, st, tr, sp) and vowel digraphs (ai/rain, ee/feet, oa/boat, oo/moon). Reading Eggs or Jolly Phonics workbooks. Target: she can decode any phonetically regular word — no guessing from pictures."
          },
          // Writing as a habit, not just school homework
          {
            title: "English Writing Practice (10 min, 4×/week)",
            body: "Simple sentence writing: 'The cat sat on the mat.' Encourage invented spelling first (write what she hears), then gently show the correct version. A complete sentence a day — capital letter, words, full stop — builds the habit."
          },
          // The tutor recommendation
          {
            title: "Start a Weekly English Tutor (Strongly Recommended)",
            body: "A native or near-native English tutor who works on phonics, reading fluency, and comprehension once a week. Sofia has excellent options. This is your insurance policy — school will never provide this, and the gap to peers in English-speaking countries widens every year without it."
          },
          // Read above her level at bedtime — comprehension and vocabulary sprint
          {
            title: "Read Chapter Books as Bedtime Stories",
            body: "Read to her at a level far above what she can read alone: The Magic Tree House, Mr. Men stories, Nate the Great. This builds vocabulary, listening comprehension, and — critically — the desire to one day read these herself."
          }
        ]
      },

      activities: {
        title: "Play Ideas with Household Items",
        items: [
          // The reading scheme — buy or borrow
          {
            title: "Oxford Reading Tree / Biff Chip & Kipper",
            body: "The classic British reading scheme. Buy or borrow Stages 1–4. One book per evening. These are carefully levelled with only decodable words — exactly right for building fluency without frustration."
          },
          // Writing as a creative project
          {
            title: "Write a Mini Book Together",
            body: "She dictates, you write one sentence per page; she illustrates. Staple together. Seeing her own spoken words become a printed book she can read is one of the most motivating experiences in early literacy."
          },
          {
            title: "Phonics Board Games",
            body: "Zingo Sight Words, Boggle Junior, or Orchard Toys' 'Shopping List.' Games make phonics practice feel like play — and at this age, play is still the primary mode of learning."
          },
          {
            title: "Alphabet Typing on a Keyboard",
            body: "Find all 26 letters on a keyboard, type her name, type simple words she knows. Familiarising with the keyboard layout now pays dividends at 7–8 when schoolwork moves to typed format."
          },
          // Science + English vocabulary together
          {
            title: "Kitchen Science — Language-Rich Experiments",
            body: "Baking soda + vinegar (volcano), growing cress seeds in an egg cup. Narrate entirely in English: 'hypothesis,' 'experiment,' 'what do you predict?' Great for building academic English vocabulary."
          }
        ]
      },

      communication: {
        title: "Language Moments",
        items: [
          // Comprehension habit — the heart of reading for meaning
          {
            title: "Retell Stories for Comprehension",
            body: "After every book: 'What happened first? What happened in the middle? How did it end? Why did the character do that?' Comprehension — not just decoding — is what reading is ultimately for. Build this habit now."
          },
          // Discussion makes reading social and motivating
          {
            title: "Talk About What She's Reading",
            body: "Don't just praise effort. Ask: 'Why did the character do that? What would you have done?' Reading becomes a two-way conversation. Children who discuss books become dramatically better readers than those who read in silence."
          },
          // Accent preservation — important as Bulgarian peers increase
          {
            title: "Protect the RP Accent Actively",
            body: "Peppa Pig, Bluey, and British audiobooks (Roald Dahl read by the author on Audible) are excellent. Watch for Bulgarian phoneme interference: /th/ becoming /d/ or /z/, or the /r/ going Bulgarian-style. Model gently: 'We say think — can you say that?' Keep it light."
          }
        ]
      }
    },

    monthlyPlans: [
      {
        range: "Months 60–65",
        title: "From Phonics to Reading",
        // The biggest cognitive leap in early childhood literacy
        intro: "The hardest cognitive work of early literacy happens here: moving from sounding out individual letters to blending them fluently into words, and words into sentences. Everything else is in service of this.",
        items: [
          {
            label: "English Literacy",
            // Reading Eggs Book 50 is the benchmark for this period
            body: "Reading Eggs: target Lesson 50 by month 65. Daily decodable reader practice. She should be reading simple sentences independently ('The big red dog sat on the mat'). Consider starting a weekly English tutor now if not already."
          },
          {
            label: "Sight Words",
            body: "Expand to 40–50 Dolch sight words. Play 'word snap' or 'memory' with printed cards. High-frequency words make reading faster and more enjoyable — they're the glue between phonically decoded words."
          },
          {
            label: "Writing",
            body: "Write her name plus 5–10 simple words from dictation. Beginning to write simple sentences with support. Focus on spacing between words and left-to-right directionality."
          },
          {
            label: "Math",
            body: "Addition and subtraction within 10 using physical objects. Introduce the concept of zero. Count to 50. Simple number bonds to 10."
          }
        ]
      },
      {
        range: "Months 66–71",
        title: "Reading for Meaning",
        // Decoding becomes more automatic; comprehension can begin
        intro: "As decoding becomes less effortful, comprehension takes centre stage — understanding what she reads, not just pronouncing the words.",
        items: [
          {
            label: "English Literacy",
            // Oxford Tree Stage 3–4 = Reading Age ~5.5–6.0
            body: "Target: Oxford Reading Tree Stage 3–4 with minimal support. Comprehension questions after each book are now as important as accuracy: 'What was the problem? How did they solve it? What would you have done differently?' English tutor should be in place by now."
          },
          {
            label: "Writing",
            body: "Write a complete sentence independently: capital letter, words spaced correctly, full stop. 'I like my cat. She is fluffy and soft.' Aim for 2–3 sentences without help."
          },
          {
            label: "Social-Emotional",
            body: "Manage separation at school and activities with confidence. A settled child learns to read more easily. Name and process emotions in English at home: 'frustrated,' 'proud,' 'disappointed,' 'curious.'"
          },
          {
            label: "Independence",
            body: "Dress completely independently, pour her own drink, pack her reading book in her bag. Small acts of independence build the executive function that reading requires."
          }
        ]
      }
    ],

    milestonesBy: "72 months",

    milestones: [
      "Reads Oxford Reading Tree Stage 3–4 (or equivalent) with minimal support and good expression",
      "Decodes phonetically regular 4–5 letter words independently (frog, stamp, train)",
      "Writes complete simple sentences with capital letters and full stops",
      "Knows 40–50 English sight words and uses them automatically when reading",
      "Retells a story clearly with beginning, middle, and end — in English",
      "Counts to 50+ and understands simple addition/subtraction within 10",
      "Can write her full name (first and last) legibly in both capital and lowercase"
    ],

    redFlags: [
      "Cannot read simple CVC words independently by 66 months despite daily phonics instruction",
      "Has fewer than 25 sight words by 72 months",
      "Still predominantly guessing words from pictures rather than decoding at 66 months",
      "Writing is illegible or she cannot form most letters correctly by 72 months",
      "Shows avoidance, frustration, or anxiety around reading tasks — early investigation is far better than waiting",
      "English feels less natural than Bulgarian at home — she consistently prefers Bulgarian in all contexts including play"
    ]
  },

  // ───────────────────────────────────────────────────────────────────
  // AGE 6  |  The Builder  |  months 72–83
  // Reading fluency year. English tutor is now essential — she must
  // match UK Year 1 standard despite having no English at school.
  // Cyrillic reading begins at school — keep it clearly separate.
  // ───────────────────────────────────────────────────────────────────
  {
    age: 6,
    months: "72–83",
    part: "The Builder",
    partNumber: 5,
    image: "assets/5.png",

    overview: "Six is the year reading must become fluent and enjoyable. Sophie should be reading simple English chapter books independently — not just laboriously decoding, but reading with expression and beginning to enjoy stories on her own. Meanwhile, her Bulgarian classmates are learning to read Cyrillic at school. Sophie must be building English reading at home in parallel. A private English tutor 1–2 times per week is now essential, not optional. The tutor is your insurance that she reaches UK Year 1 standard despite receiving no English instruction at school.",

    sections: {

      habits: {
        title: "Weekly Habits to Build",
        items: [
          // She reads ALONE now — this is the goal of all the phonics work
          {
            title: "Daily Independent English Reading (20–30 min)",
            body: "She reads alone, without you prompting every word. Choose books one level below her best ability so it feels enjoyable, not laborious. Start a reading log — stickers or a chart. The goal is reading as pleasure, not reading as homework."
          },
          {
            title: "Read Aloud to Her Every Night",
            body: "Continue reading to her at a much higher level: Roald Dahl, The BFG, Charlie and the Chocolate Factory, Flat Stanley. This stretches vocabulary and comprehension far beyond what she can read herself. Never stop read-alouds, even as she becomes independent."
          },
          // Writing habit before school formalises it
          {
            title: "English Writing Practice (4×/week)",
            body: "A few sentences in a journal, a story, or a letter to a grandparent. Encourage free writing — don't correct spelling mid-flow; review together afterwards. The habit of writing in English, for pleasure, is what you're building."
          },
          // Non-negotiable now
          {
            title: "Weekly English Tutor Session",
            body: "The tutor works on reading fluency, phonics consolidation (split digraphs: a_e, i_e, o_e), spelling patterns, and comprehension. UK Year 1 standard is the target. Without this, the gap to English-speaking peers will widen every year."
          },
          // Family connection + English conversational fluency
          {
            title: "English 'Highs and Lows' at Dinner",
            body: "One good thing and one challenging thing from today — always in English. Builds emotional vocabulary ('frustrated,' 'proud,' 'embarrassed'), keeps conversational fluency sharp, and makes the home a safe English space."
          }
        ]
      },

      activities: {
        title: "Activities & Projects",
        items: [
          // The reading scheme moves into chapter books
          {
            title: "Level-Appropriate Chapter Book Series",
            body: "Horrid Henry (Level 2), Dirty Bertie, My Naughty Little Sister, Magic Treehouse. Series create reading momentum — finishing one book leads straight to the next. Let her choose within a curated set."
          },
          // Writing as a creative project, not a school task
          {
            title: "Write and Illustrate Her Own Book",
            body: "A 'real' project: 6–8 pages, stapled. She does everything — writes, draws, and designs the cover. Display it proudly. Develops pride in her English writing as a personal achievement."
          },
          // English word-building through games
          {
            title: "Scrabble Junior or Boggle Junior",
            body: "English word-building made competitive. Scrabble Junior uses pictures on the reverse — ideal for age 6. Makes spelling feel like a game and builds orthographic memory."
          },
          {
            title: "LEGO with Written Instructions",
            body: "Following written English instructions to build a model. Develops reading for a purpose, attention to detail, and spatial reasoning simultaneously."
          },
          // Passive English input during travel
          {
            title: "English Audiobooks on Journeys",
            body: "Roald Dahl read by the author (Audible), or David Walliams audiobooks. Fantastic RP accents, rich vocabulary, and stories that make long car journeys disappear."
          }
        ]
      },

      communication: {
        title: "Communication & Connection",
        items: [
          // English comprehension through discussion
          {
            title: "Talk About Books Like Adults",
            body: "'What do you think of the Twits? Were they funny or just horrible?' Treat her literary opinions as worth having. This builds the analytical English comprehension that reading tests measure — and that she'll need for life."
          },
          // Accent work — specific and actionable
          {
            title: "Gently Address Bulgarian Phoneme Creep",
            body: "Watch for /th/ → /d/ or /z/ ('de' instead of 'the'), and overly rolled /r/ sounds. Model gently: 'We say think — can you try it?' Never make it a big deal, but don't let it go unnoticed. The RP accent is a real asset."
          },
          // Books are the English domain anchor
          {
            title: "Establish Books as the English Domain",
            body: "'In our family, we read English books and we talk about books in English.' Make this explicit and warm — not a rule, but an identity. Books are Sophie's single greatest English asset."
          }
        ]
      }
    },

    monthlyPlans: [
      {
        range: "Months 72–77",
        title: "Cracking the Code",
        intro: "English reading fluency is the primary academic goal. Everything else supports it.",
        items: [
          {
            label: "English Literacy",
            // Oxford Stage 5–6 = Reading Age ~6.0–6.5
            body: "Target: Oxford Tree Stage 5–6 or Reading Age 6.0+ by month 77. Tutor focus: fluency (reading smoothly, not word-by-word), expression, and split digraphs (cake, time, note, cute). One book read per day — both decodable and enjoyable."
          },
          {
            label: "Spelling",
            body: "Introduce simple spelling patterns: -at, -an, -it word families. The Magic E rule. Short daily spelling: 5 words. Playful not pressured — 'Can you write the word that sounds like /h/ /o/ /p/ /e/? What does Magic E do?'"
          },
          {
            label: "Writing",
            body: "Write 2–3 sentences independently on a topic. Capital letter, spaces between words, full stop. Beginning to add describing words: 'the big fluffy cat.'"
          },
          {
            label: "Numeracy",
            body: "Addition and subtraction within 20. Doubling small numbers. Tell time to the hour and half hour on an analogue clock. Introduction to 2D and 3D shapes."
          }
        ]
      },
      {
        range: "Months 78–83",
        title: "Building Fluency and Independence",
        // Decoding is becoming automatic — comprehension deepens
        intro: "Reading becomes enjoyable rather than effortful as decoding becomes automatic. Comprehension and writing confidence grow in parallel.",
        items: [
          {
            label: "English Literacy",
            // Horrid Henry / My Naughty Little Sister = first real chapter books
            body: "Read short chapter books (Horrid Henry Level 2, My Naughty Little Sister) one chapter per sitting. Comprehension: 'Retell the chapter. Predict what happens next. What kind of person is this character?' Tutor consolidates phonics and begins comprehension work."
          },
          {
            label: "Writing",
            body: "Write a short paragraph (4–5 sentences) on a given topic. Beginning to use connectives (and, but, because, so, then). Punctuation: capital letters, full stops, question marks."
          },
          {
            label: "Social-Emotional",
            body: "Friendships are intense at six — alliances form and break. Use English to process social dynamics at home: 'What did you say? How do you think she felt? What could you do differently next time?'"
          },
          {
            label: "Life Skills",
            body: "Dress completely independently including buttons and zips. Help prepare simple snacks. Begin practising shoelace tying — it takes months, start now."
          }
        ]
      }
    ],

    milestonesBy: "84 months",

    milestones: [
      "Reads Oxford Tree Stage 5–6 or equivalent simple chapter books with good fluency and expression",
      "Writes a short paragraph (4–5 sentences) independently with basic punctuation",
      "Knows and applies the Magic E rule and common vowel digraphs (ai, ee, oa, oo)",
      "Can retell and discuss a story chapter in English with accuracy and opinion",
      "Counts to 100 and understands addition/subtraction within 20",
      "Can tie shoelaces independently",
      "Understands days of the week, months of the year, and tells time to the hour"
    ],

    redFlags: [
      "Reading fluency is still slow and laboured — word by word — at 78 months despite daily practice and tutor support",
      "Cannot write 2–3 coherent sentences independently by 80 months",
      "Not working with an English tutor and falling behind UK Year 1 standard",
      "Increasing reluctance to speak English at home — Bulgarian becoming the default language in all contexts",
      "Consistent phonics gaps still present at 84 months that tutor hasn't addressed — consider a specialist assessment",
      "Significant distress around starting school that is affecting appetite, sleep, or general wellbeing"
    ]
  },

  // ───────────────────────────────────────────────────────────────────
  // AGE 7  |  The Problem-Solver  |  months 84–95
  // Reading 'clicks' into reading for pleasure. This is the tipping point.
  // Roald Dahl, Horrid Henry, early chapter books with real plots.
  // English tutor: UK Year 2 standard. Writing: short stories, paragraphs.
  // ───────────────────────────────────────────────────────────────────
  {
    age: 7,
    months: "84–95",
    part: "The Problem-Solver",
    partNumber: 6,
    image: "assets/6.png",

    overview: "Seven is the year reading clicks into reading for pleasure — the tipping point that separates children who become lifelong readers from those who don't. Sophie should be able to pick up a chapter book in English, read it independently, and talk about it with genuine enthusiasm. This acceleration is everything: children who read for pleasure at seven gain vocabulary and knowledge at a rate that no classroom can match. Keep English books flowing, the tutor consistent, and introduce Sophie to the wider world of English literature — from Roald Dahl to C.S. Lewis.",

    sections: {

      habits: {
        title: "Weekly Habits to Build",
        items: [
          // Reading for pleasure — the goal of all the phonics work
          {
            title: "Daily Independent English Reading (30 min)",
            body: "A dedicated, distraction-free reading time. She chooses the book. The goal is pleasure, not performance. Track series she loves — once a series clicks, reading becomes self-sustaining."
          },
          // Read above her level at bedtime — vocabulary and comprehension sprint
          {
            title: "Read Ambitious Books Aloud Together (20 min)",
            body: "Read above her independent level: The Lion, the Witch and the Wardrobe; Charlotte's Web; Matilda; The Magic Finger. Her listening comprehension far exceeds her reading level. These books build extraordinary vocabulary and prove that reading is worthwhile."
          },
          // Writing habit — private, not school-directed
          {
            title: "English Journaling (3–4 Sentences, 4×/week)",
            body: "A notebook for free writing — what happened today, a story she invented, a description of a dream. Spelling doesn't need to be perfect. Encourages independent English expression beyond what any tutor or school could provide."
          },
          // Tutor level up
          {
            title: "English Tutor (1–2×/week, UK Year 2 Standard)",
            body: "Tutor focus: comprehension, creative writing, grammar basics (nouns, verbs, adjectives — introduce the terms), and reading response journals. She should be working at UK Year 2 standard: reading early chapter books independently, writing short stories with a beginning, middle, and end."
          },
          // Vocabulary habit — words from books become words she uses
          {
            title: "Look Up Interesting Words Together",
            body: "'What does peculiar mean? Let's check.' A physical children's dictionary is better than a phone at this age — the act of looking up, reading, and finding the word in context builds reference skills and vocabulary ownership."
          }
        ]
      },

      activities: {
        title: "Activities & Projects",
        items: [
          // The chapter book series that creates reading momentum
          {
            title: "Chapter Book Series — Go Deep",
            body: "Roald Dahl (Danny the Champion of the World, The BFG, George's Marvellous Medicine), Horrid Henry, The Boxcar Children, Magic Treehouse. Series create irresistible momentum — finishing one book leads immediately to the next."
          },
          // Letter writing — real audience, real purpose
          {
            title: "Write Letters to a Pen Pal",
            body: "A grandparent or English-speaking cousin via real letters or email. A real audience makes writing feel purposeful rather than performative. The social motivation to communicate is the best writing tutor there is."
          },
          {
            title: "Kitchen Science Experiment Reports",
            body: "After a simple experiment (baking soda + vinegar, sugar crystal growing), write an 'experiment report' in English: hypothesis, method, result, conclusion. Combines science and academic English writing."
          },
          // Music — discipline, fine motor, and focus
          {
            title: "Start Formal Music Lessons",
            body: "An excellent age to begin piano or violin. Formal music lessons at seven develops discipline, working memory, and fine motor control. The skills transfer directly to sustained reading and writing."
          },
          // Audiobooks — passive English during transitions
          {
            title: "English Audiobooks on Every Journey",
            body: "Roald Dahl read by the author (Audible), or David Walliams, or the Horrible Histories audiobooks. Superb RP accents, rich vocabulary, and story-world building. Makes every car journey count as English input."
          }
        ]
      },

      communication: {
        title: "Communication & Connection",
        items: [
          // Analytical English — what reading comprehension really is
          {
            title: "Discuss Books as Equals",
            body: "'What did you think of Matilda's parents? Were they believable villains? What would you have done in her situation?' Treat her literary opinions as genuinely interesting. This is what reading comprehension tests measure — and Sophie is capable of sophisticated literary thought."
          },
          // Complex language for complex ideas
          {
            title: "Push for 'Because' and Cause-Effect Language",
            body: "When she explains something in English, gently push for more: 'Why did that happen? What happened because of it?' Cause-and-effect language is the foundation of analytical English — essays, arguments, explanations all depend on it."
          },
          // Perspective-taking builds reading comprehension
          {
            title: "Discuss How Different People See Things",
            body: "Discuss how different characters in a story see the same event differently. 'The giant thinks he's being helpful. How does the girl see it?' Perspective-taking builds both empathy and sophisticated reading comprehension."
          }
        ]
      }
    },

    monthlyPlans: [
      {
        range: "Months 84–89",
        title: "Reading to Learn",
        // The shift from learning to read to reading to learn
        intro: "The shift from learning to read to reading to learn. English chapter books become a vehicle for knowledge, imagination, and vocabulary growth that no classroom can replicate.",
        items: [
          {
            label: "English Literacy",
            // UK Year 2 standard = Horrid Henry, Dirty Bertie level
            body: "Target: reading independently at UK Year 2 standard (Horrid Henry, Dirty Bertie, My Weird School). Tutor: character analysis, plot summary, predicting outcomes. Writing: 8–10 sentence stories with a clear problem and resolution. Begin distinguishing between speech and narration."
          },
          {
            label: "Spelling and Grammar",
            body: "Common spelling rules: -ing, -ed, -er endings. Nouns, verbs, adjectives — introduce the terms. The tutor can formalise what Sophie already knows intuitively through her reading."
          },
          {
            label: "Numeracy",
            body: "Two-digit addition and subtraction. Introduction to multiplication as repeated addition (3 groups of 4 = 12). Analogue clock to quarter-past and quarter-to. Introduction to money."
          },
          {
            label: "Social-Emotional",
            body: "Peer friendships intensify and become more complex. Use English to process social situations at home: 'What would you have done? How do you think she felt? What's a kind way to handle that?'"
          }
        ]
      },
      {
        range: "Months 90–95",
        title: "Growing Readers and Writers",
        intro: "Building stamina and sophistication: longer books, more complex writing tasks, and a stronger English reading identity.",
        items: [
          {
            label: "English Literacy",
            // Roald Dahl = the step up into richer vocabulary and longer plots
            body: "Introduce Roald Dahl (Danny the Champion of the World, The Magic Finger). Read together and independently. Writing project: a short story of 1–2 pages with a clear beginning, middle, end, and at least one interesting character with a personality."
          },
          {
            label: "Vocabulary",
            body: "Keep a 'word jar' — words she finds fascinating from reading. Review and use them in conversation and writing. Target: actively using 2–3 new vocabulary words per week. This habit, sustained for years, produces a remarkable English lexicon."
          },
          {
            label: "Independence",
            body: "Manages homework and school bag independently. Takes the lead on packing for a trip. Begins to organise her own time with less prompting from parents."
          },
          {
            label: "Life Skills",
            body: "Can make a simple phone call independently. Follows a basic recipe with minimal help. Manages morning routine (dress, breakfast, bag) entirely without prompting."
          }
        ]
      }
    ],

    milestonesBy: "96 months",

    milestones: [
      "Reads English chapter books (Horrid Henry, early Roald Dahl) independently and with genuine enjoyment",
      "Writes a short story (1–2 pages) with coherent plot, characters, and basic punctuation",
      "Reads and comprehends texts at UK Year 2–3 standard",
      "Knows and correctly uses common spelling rules (-ing, -ed, -er endings)",
      "Performs two-digit addition and subtraction; beginning multiplication tables (2s, 5s, 10s)",
      "Shows genuine empathy and can articulate another person's perspective clearly in English",
      "Manages daily routines (school bag, homework, hygiene) independently"
    ],

    redFlags: [
      "Not reading independently for pleasure in English — books consistently feel like a chore by 90 months",
      "Writing consistently below UK Year 2 standard despite tutor support — consider specialist assessment",
      "Significant phonics gaps remaining at 90 months (cannot decode unfamiliar words confidently)",
      "English is being used significantly less than Bulgarian across all home and social contexts",
      "Persistent anxiety about school, grades, or friendships that is affecting sleep, appetite, or behaviour",
      "Has very low frustration tolerance with reading or writing tasks — gives up quickly and consistently"
    ]
  },

  // ───────────────────────────────────────────────────────────────────
  // AGE 8  |  The Independent Thinker  |  months 96–107
  // Harry Potter enters. Reading for pleasure is firmly established (or urgent).
  // English tutor: UK Year 3 standard. Writing: descriptive paragraphs, stories.
  // Peer pressure intensifies — Bulgarian social dominance increases.
  // Hold the line on English as the home and reading language.
  // ───────────────────────────────────────────────────────────────────
  {
    age: 8,
    months: "96–107",
    part: "The Independent Thinker",
    partNumber: 7,
    image: "assets/7.png",

    overview: "Eight is the age of diving deep into passions, and Sophie's passion for English books should be well-established — or urgently built — by now. Peer pressure intensifies sharply at this age: Bulgarian dominates her social world entirely. Counterbalance this with English books she loves, British and Australian TV, English audiobooks on every journey, and continued tutor support. Her RP accent and sophisticated vocabulary are now genuine assets that will differentiate her for the rest of her life. Don't let them atrophy.",

    sections: {

      habits: {
        title: "Weekly Habits to Build",
        items: [
          // Reading for pleasure — non-negotiable
          {
            title: "Independent English Reading (30–45 min/day)",
            body: "Free choice, for pleasure. Keep a 'books read' list together — 20 English books a year is an excellent target for an eight-year-old. Let her choose freely from a well-stocked English shelf."
          },
          // Writing practice that builds range and stamina
          {
            title: "Weekly English Writing Practice",
            body: "A weekly writing project via tutor or independently: a book review, a short story chapter, a persuasive letter, an opinion piece. Building writing range and stamina across different text types."
          },
          // Discussion deepens English analytical ability
          {
            title: "Discussion Dinner Questions in English",
            body: "'If you could change one rule at school, what would it be and why? Give me your three best reasons.' Builds academic-register English: argument, evidence, conclusion — the building blocks of essay writing."
          },
          // A major household responsibility builds character and executive function
          {
            title: "Significant Household Responsibility",
            body: "A real family contribution she owns: weekly recycling, caring for a pet, helping with grocery shopping. Builds executive function and the sense of contribution that supports all learning."
          },
          // Passive English input — audiobooks during passive time
          {
            title: "English Audiobooks on Long Journeys",
            body: "Harry Potter (Stephen Fry's legendary reading), the Narnia series, Horrible Histories podcast. High-quality English in every spare moment. This is language acquisition that requires zero effort and delivers extraordinary vocabulary."
          }
        ]
      },

      activities: {
        title: "Activities & Projects",
        items: [
          // Harry Potter is the most powerful reading motivator for this age
          {
            title: "Long-Form English Book Series",
            body: "Harry Potter (start Book 1 now — she is ready), Percy Jackson, The Secret Seven, Famous Five, The Chronicles of Narnia. Long series provide sustained English immersion — 7 Harry Potter books = ~1 million words of rich English."
          },
          // Writing as play — removes the school association
          {
            title: "English Creative Writing Workshop at Home",
            body: "Pick a writing prompt together, both write for 15 minutes, then share what you wrote. Normalises writing as a fun, personal activity rather than a school obligation. Write alongside her."
          },
          // Research project — English as the language of knowledge
          {
            title: "Research an English-Language Topic",
            body: "Pick a passion (sharks, the Tudors, ancient Egypt, space) and create an illustrated 'expert guide' using English books and supervised web research. English as the language of intellectual exploration."
          },
          {
            title: "Block-Based Coding (Scratch)",
            body: "scratch.mit.edu teaches logical thinking through visual coding. Bonus: the entire interface is in English, so coding practice is also English practice."
          },
          // Writing to a real audience — maximum motivation
          {
            title: "Write to a Favourite Author",
            body: "Many children's authors respond to letters — Jacqueline Wilson, David Walliams, Michael Morpurgo. A real, motivated reason to write in English, to a real audience who might actually respond."
          }
        ]
      },

      communication: {
        title: "Communication & Connection",
        items: [
          // Current events in English — world citizenship through English
          {
            title: "Discuss Current Events in English",
            body: "Use BBC Newsround (free, age-appropriate). Read a story together and discuss in English: 'What do you think? Is that fair? What should happen?' Builds both civic awareness and formal register English."
          },
          // Peer pressure — English is the right language for this conversation
          {
            title: "Talk About Peer Pressure — In English",
            body: "As her Bulgarian social world expands, have explicit English conversations about what to do when friends want her to do something she knows is wrong. English is her language for deep reflection — use it."
          },
          // Abstract thinking in the dominant language
          {
            title: "Introduce Abstract English Concepts",
            body: "Discuss honesty, justice, fairness, and courage in the context of books and real-life events. Characters in English novels model these values constantly — use that."
          }
        ]
      }
    },

    monthlyPlans: [
      {
        range: "Months 96–101",
        title: "Reading Deeply, Writing Broadly",
        // Moving from fluency to analytical sophistication
        intro: "Moving from fluency to sophistication: longer books, more varied writing tasks, and beginning to analyse and respond to what she reads rather than just retelling it.",
        items: [
          {
            label: "English Literacy",
            // UK Year 3 = 100+ page chapter books, descriptive writing
            body: "Target: UK Year 3 reading standard — chapter books of 100+ pages. Tutor: comprehension analysis (theme, character development, author's word choices). Writing: descriptive paragraphs, dialogue with speech marks, a 1–2 page story with a clear problem and satisfying resolution."
          },
          {
            label: "Vocabulary",
            body: "Introduce a 'word of the week' — one ambitious vocabulary word used in conversation and writing. At this age: reluctant, peculiar, treacherous, exasperated, magnificent. Found in books she's reading. Keep a personal vocabulary notebook."
          },
          {
            label: "Numeracy",
            body: "All multiplication tables to 12×12 — target mastery by 108 months. Long addition and subtraction. Introduction to fractions as parts of a whole."
          },
          {
            label: "Social-Emotional",
            body: "Peer groups, 'clubs,' and social hierarchies intensify. Process complex social dynamics in English at home. Her stronger personal values — built partly through English literature — are her anchor."
          }
        ]
      },
      {
        range: "Months 102–107",
        title: "The Independent Reader and Thinker",
        // Sophie reads and writes English with independence and pleasure
        intro: "Sophie should be reading and writing English with genuine independence and pleasure — a voracious reader who also expresses herself confidently in writing.",
        items: [
          {
            label: "English Literacy",
            // Harry Potter is the turning point for many readers
            body: "Harry Potter Book 1 if not already reading. Begin non-fiction reading for interest (Horrible Histories, National Geographic Kids). Tutor: persuasive writing (argue a point of view with reasons and evidence), structuring arguments, using evidence from texts."
          },
          {
            label: "Grammar and Punctuation",
            body: "Speech marks for dialogue, commas in lists, apostrophes for contractions (can't, won't, I'm). These can be taught directly through the books she's reading and the writing she's producing."
          },
          {
            label: "Numeracy",
            body: "Fractions and decimals. Multi-step word problems. Use English for all maths discussion at home — 'If I have three-quarters of a pizza...'"
          },
          {
            label: "Life Skills",
            body: "Takes on household responsibilities independently. Begins using a planner or calendar for activities and school commitments. Can look up information using a dictionary and safe internet independently."
          }
        ]
      }
    ],

    milestonesBy: "108 months",

    milestones: [
      "Reads English novels of 150–200 pages independently and discusses them with insight and opinion",
      "Writes descriptive paragraphs and short stories with varied sentence structure and vocabulary",
      "Knows all multiplication tables to 12×12",
      "Uses speech marks, commas in lists, and apostrophes (contractions) correctly in writing",
      "Has a genuine love of English reading — voluntarily chooses books in free time",
      "Can research a topic and write a structured, factual report in English",
      "Has stable, warm friendships and can navigate complex social situations with maturity"
    ],

    redFlags: [
      "Reading English books is consistently a chore rather than a pleasure at 102 months — this is urgent",
      "Writing in English is significantly behind UK Year 3 standard despite ongoing tutor support",
      "English is rarely used at home outside of structured tutor or reading time — Bulgarian dominates completely",
      "Socially isolated, has no close friends, or is consistently targeted by peers",
      "Shows marked anxiety, persistently low self-esteem, or persistent sadness",
      "Academic performance in Bulgarian school is significantly below expectations — secondary stress affects all learning"
    ]
  },

  // ───────────────────────────────────────────────────────────────────
  // AGE 9  |  The Planner  |  months 108–119
  // Harry Potter Books 2–3. Writing with a distinctive voice begins.
  // English tutor: UK Year 4 standard. Touch-typing introduced.
  // Peer pressure at maximum — Bulgarian social dominance is total.
  // Hold the line: English books, English home, English identity.
  // ───────────────────────────────────────────────────────────────────
  {
    age: 9,
    months: "108–119",
    part: "The Planner",
    partNumber: 7,
    image: "assets/10.png",

    overview: "Nine is when peer acceptance becomes paramount and Bulgarian dominates Sophie's social world entirely. The temptation to coast on English is real — she can speak it well, but without deliberate daily practice, literacy and vocabulary will stagnate. Hold the line: the English tutor, the daily reading, and English as the family language of books and conversation are what keep her fluency, accent, and literary skills sharp. She is, by now, a genuinely accomplished English speaker and reader. That identity is worth protecting and celebrating.",

    sections: {

      habits: {
        title: "Weekly Habits to Build",
        items: [
          // Non-negotiable reading habit
          {
            title: "Daily English Reading (30–45 min, Self-Chosen)",
            body: "She reads what she loves, no compromise. Harry Potter Books 2–3, Percy Jackson, Narnia, His Dark Materials, The Inheritance Games. No daily reading means vocabulary and comprehension stagnate. This is the single most important English habit."
          },
          // Tutor advancing to Year 4 standard
          {
            title: "English Tutor (1–2×/week, UK Year 4 Standard)",
            body: "Creative writing, comprehension analysis, grammar, and spelling. She should be writing at a standard that would comfortably pass a UK Year 4 reading and writing assessment. Tutor focus: drafting, editing, and redrafting — first drafts are not final drafts."
          },
          // Private writing voice — no audience pressure
          {
            title: "English Journaling (Freeform, Weekly)",
            body: "Her own personal notebook. What she thinks, imagines, invents. No audience except herself. Builds a private English writing voice that is entirely her own — the seed of every great writer."
          },
          // Homework independence
          {
            title: "Independent Homework Management",
            body: "She plans and manages her own Bulgarian school homework using a planner. You are a consultant, not a manager. This independence is the same skill she uses to manage her own English reading and writing goals."
          },
          // Deep English conversation at home
          {
            title: "Discuss Books at Dinner",
            body: "'What part of the story surprised you most? Why do you think Dumbledore made that choice?' Intellectual English conversation as a family habit. The best vocabulary teaching happens in real conversation about real ideas."
          }
        ]
      },

      activities: {
        title: "Activities & Projects",
        items: [
          // Harry Potter + Percy Jackson = the sweet spot for age 9
          {
            title: "Ambitious English Book Series",
            body: "Harry Potter through Books 3–4, Percy Jackson (complete series), Septimus Heap, The Inheritance Games, Skulduggery Pleasant. Progress to longer and more complex books each term. Keep a list of completed books."
          },
          // Long project in English — builds stamina
          {
            title: "A Long-Term English Project",
            body: "A 2-week project: research a favourite author, write a biography and critical review of their best book, design a new book cover. Cross-disciplinary, motivating, and a genuine showcase of English skills."
          },
          // Touch-typing — foundational skill for all future schoolwork
          {
            title: "Learn Touch-Typing (10 min/day)",
            body: "TypingClub (free) or BBC Dance Mat Typing. Target: 15+ WPM with all home-row keys by the end of this year. All future schoolwork and university study will be typed. Start now before hunting-and-pecking becomes a habit."
          },
          // Social context for English if possible
          {
            title: "Join an Activity with English-Speaking Peers",
            body: "International school drama club, English-language book club, online English-speaking communities (supervised). Social motivation to use English is powerful — find any opportunity to make English a social language, not just a home one."
          },
          // Family planning in English
          {
            title: "Plan a Family Trip with Research",
            body: "She chooses a destination, researches it in English (opening times, what to pack, what to see), and presents findings to the family. Real purpose, real English, real pride."
          }
        ]
      },

      communication: {
        title: "Communication & Connection",
        items: [
          // Deep thinking in English — using Harry Potter for ethics
          {
            title: "Discuss Ethics Through English Books",
            body: "'Harry could have reported Malfoy — should he have? Why didn't he? What would you have done?' Deep moral reasoning in English, sparked by the books she loves. This is how sophisticated analytical thinking develops."
          },
          // Autonomy + English — she matters
          {
            title: "Involve Her in Family Decisions — In English",
            body: "'What do you think we should do about X? What are the pros and cons?' Her opinion is genuinely valued. This keeps English as the language of serious thought, not just instruction."
          },
          // The future opens up through English
          {
            title: "Talk About the Future in English",
            body: "What does she want to be? Where might she live? English-medium universities across Europe and beyond are a real possibility — and likely, given her skills. Make sure she knows that her English is a superpower."
          }
        ]
      }
    },

    monthlyPlans: [
      {
        range: "Months 108–113",
        title: "The Deep Reader",
        intro: "Longer, more complex books. Deeper comprehension work. Writing that begins to show a distinctive voice and personality.",
        items: [
          {
            label: "English Literacy",
            // UK Year 4 = 200+ page novels with complex themes
            body: "Target: UK Year 4 reading standard — novels of 200+ pages (Harry Potter Books 2–3, Percy Jackson). Tutor: inference and deduction, author's language choices, planning and drafting extended creative writing and structured non-fiction."
          },
          {
            label: "Grammar",
            body: "Complex sentences with subordinate clauses ('Although she was frightened, she stepped forward'). Varied punctuation: colons, semi-colons, parentheses. Point these out in the books she reads — that's where they live."
          },
          {
            label: "Numeracy",
            body: "Fractions, decimals, percentages. Multi-step word problems. Negative numbers. Use English for all problem-solving discussion at home."
          },
          {
            label: "Social-Emotional",
            body: "Sophisticated peer dynamics: loyalty, secrets, shifting alliances. Process all of this in English at home. A strong personal identity — as a reader, thinker, and English speaker — is her greatest protection from peer pressure."
          }
        ]
      },
      {
        range: "Months 114–119",
        title: "Writing with a Voice",
        // The shift from technically correct to personally expressive
        intro: "The goal now is not just technically correct English writing, but English writing with personality, style, and joy. First drafts are not final drafts.",
        items: [
          {
            label: "English Literacy",
            // Real writing projects — real audiences
            body: "Writing projects with real audiences: a short story with a distinctive first-person narrator, a persuasive letter to a real organisation, a book review for a 'publication' (family blog, school newsletter). Tutor: editing and redrafting — the revision process is where writing improves."
          },
          {
            label: "Vocabulary",
            body: "She should be noticing and collecting ambitious vocabulary from books. Target: using 5+ sophisticated words per written piece intentionally. A personal vocabulary notebook she chooses words for herself."
          },
          {
            label: "Independence",
            body: "Full independence on homework, school bag, and personal organisation. Can plan and execute a multi-step project over several days without reminders."
          },
          {
            label: "Life Skills",
            body: "Cook a simple meal independently from a recipe. Manage a small personal budget. Begin learning basic first aid (Red Cross Junior First Aider)."
          }
        ]
      }
    ],

    milestonesBy: "120 months",

    milestones: [
      "Reads English novels of 250+ pages independently (e.g., Harry Potter Books 2–3, Percy Jackson)",
      "Writes extended pieces (2–3 pages) with varied sentence structure, deliberate vocabulary, and a distinctive voice",
      "Performs at or above UK Year 4 standard in English reading and writing",
      "Has a strong, stable sense of herself as an English speaker and reader — it is part of her identity",
      "Manages homework and personal organisation independently with minimal reminders",
      "Can research and present information from multiple English sources",
      "Navigates complex peer relationships with resilience and clear personal values"
    ],

    redFlags: [
      "English reading for pleasure has dropped off significantly — books feel like homework at 114 months",
      "Writing is below UK Year 4 standard despite consistent tutor support",
      "English accent or phonology is shifting noticeably toward Bulgarian patterns",
      "Growing reluctance to speak or write in English outside of structured sessions",
      "Persistent and intense anxiety about academic performance or social standing that interferes with daily life",
      "Significant and unexplained behavioural change — warrants an honest, open conversation"
    ]
  },

  // ───────────────────────────────────────────────────────────────────
  // AGE 10  |  The Pre-Adolescent  |  months 120–131
  // His Dark Materials, The Hobbit. English as identity, not just a skill.
  // Tutor: UK Year 5 standard. Essays, formal/informal register, analysis.
  // Early puberty may begin. Keep the English conversation channel open.
  // ───────────────────────────────────────────────────────────────────
  {
    age: 10,
    months: "120–131",
    part: "The Pre-Adolescent",
    partNumber: 8,
    image: "assets/8.png",

    overview: "Ten stands at the doorway to adolescence. Sophie's English should now be a genuine source of pride and identity — a real differentiator from her Bulgarian peers, and the key to opportunities beyond Bulgaria's borders. Her tutor should be challenging her at a UK Year 5 standard: complex texts, analytical essays, sophisticated grammar. Socially, peer group is everything at this age. Keep English visible: audiobooks on every journey, English films and TV, books everywhere. She is building the English skills that will serve her in university and a career she hasn't imagined yet.",

    sections: {

      habits: {
        title: "Weekly Habits to Build",
        items: [
          // Tutor advances to Year 5 standard
          {
            title: "English Tutor (UK Year 5 Standard, 1–2×/week)",
            body: "Analytical reading (themes, symbolism, author intent), essay writing (introduction, three structured points with evidence, conclusion), advanced grammar and punctuation, and formal/informal register. This is the standard that opens doors to English-medium higher education."
          },
          // Ambitious reading — the vocabulary engine
          {
            title: "Daily English Reading (45 min)",
            body: "More ambitious books: His Dark Materials (Book 1), The Hobbit, the complete Narnia series, Judy Blume, Malorie Blackman. She should regularly finish books of 300+ pages. One ambitious complete series per term."
          },
          // Open conversations — the relationship is the intervention
          {
            title: "Open English Conversations Without an Agenda",
            body: "Car rides, walks, before bed. No lesson, no purpose — just talking about whatever she wants, in English. Keeps conversational fluency and the parent-child relationship both strong."
          },
          // Touch-typing advance
          {
            title: "Touch-Typing to 30+ WPM",
            body: "All future schoolwork, university applications, and career work will be typed. 10 minutes of TypingClub daily. Target: 30 words per minute with all fingers by end of year."
          },
          // Monthly goals — agency and self-belief
          {
            title: "Monthly Goal-Setting",
            body: "One academic English goal and one personal goal each month. Track progress together. Building the habit of deliberate goal-setting and self-monitoring is a skill that compounds over a lifetime."
          }
        ]
      },

      activities: {
        title: "Activities & Projects",
        items: [
          // Long series that challenges at this level
          {
            title: "Ambitious Complete English Series",
            body: "His Dark Materials (Philip Pullman — all three), The Hobbit, A Series of Unfortunate Events (complete set). One complete series per term. Series provide consistent, immersive English exposure across weeks."
          },
          // Public English communication — the next frontier
          {
            title: "Create and Deliver an English Presentation",
            body: "Research a topic she cares about, build slides, rehearse, and present to the family (or a small audience). Builds public English communication skills and formal register — assets for university and beyond."
          },
          // Real-world project with English research
          {
            title: "Write a Longer Creative English Project",
            body: "Over one school term: a completed short story of 6–8 pages, or a creative non-fiction piece, or a collection of poems. Planning, drafting, editing, and a final version she is proud of."
          },
          // Community engagement — empathy and English in the world
          {
            title: "Community Service Project",
            body: "A simple volunteering project — reading to younger children, helping at an animal shelter. If possible, find English-language volunteering contexts. Builds empathy, character, and social awareness."
          },
          {
            title: "Cook a Full Family Meal",
            body: "Plan, shop for, and cook a complete family meal from scratch. English throughout: read the recipe, estimate quantities, narrate as she cooks. A weekly contribution that builds real independence."
          }
        ]
      },

      communication: {
        title: "Communication & Connection",
        items: [
          // Puberty talk — in English, where the relationship is strong
          {
            title: "Talk Openly About Puberty — In English",
            body: "Frank, warm, and factual conversations about physical and emotional changes. Being able to discuss her body and feelings in English keeps the conversation in your shared language and keeps the relationship close."
          },
          // Media literacy — English for critical thinking
          {
            title: "Discuss Social Media and Online Culture in English",
            body: "What she sees online deserves thoughtful English-language analysis. What's real, what's performed, what's manipulative? English as the language of critical thinking about the world she inhabits."
          },
          // Privacy and respect
          {
            title: "Acknowledge Her Growing Need for Privacy",
            body: "Knock on her bedroom door. Give her space when she needs it. The relationship stays strong by respecting her autonomy. A child who feels respected keeps talking."
          }
        ]
      }
    },

    monthlyPlans: [
      {
        range: "Months 120–125",
        title: "Abstract Thinking and English Identity",
        intro: "Beginning to engage with big ideas — justice, identity, belonging, power — and exploring them through ambitious English literature and deep conversation.",
        items: [
          {
            label: "English Literacy",
            // UK Year 5 = His Dark Materials level, structured essays
            body: "Target: UK Year 5 standard. Ambitious novels with major themes (His Dark Materials). Tutor: literary analysis, essay structure (introduction, three points with textual evidence, conclusion), advanced punctuation, formal/informal register."
          },
          {
            label: "Creative Writing",
            body: "A longer term project: a complete short story (5–6 pages), a poem collection, or a personal essay. Draft, edit with tutor, and produce a final version she is proud to share."
          },
          {
            label: "Numeracy",
            body: "Geometry basics, introduction to algebra, complex multi-step word problems. Discuss problem-solving strategies in English — use English as the language of mathematical reasoning."
          },
          {
            label: "Social-Emotional",
            body: "Peer groups become more intense and more fragile. A strong personal identity — as a reader, thinker, and English speaker — is the foundation of resilience when social situations become difficult."
          }
        ]
      },
      {
        range: "Months 126–131",
        title: "Managing Complexity",
        intro: "More demanding schoolwork, emotional complexity of early adolescence, and the need to manage it all with growing maturity and humour.",
        items: [
          {
            label: "English Literacy",
            body: "Persuasive writing: a structured argument with a clear position, at least two supporting reasons with evidence, and acknowledgement of the counter-argument. Read English news and opinion pieces together (BBC Newsround, First News). Tutor: refining essays, advanced vocabulary in context."
          },
          {
            label: "Study Skills",
            body: "Note-taking, summarising, and managing deadlines for long-term Bulgarian school projects. These study skills — learnt and practised first in English — reinforce the same capabilities across all her schoolwork."
          },
          {
            label: "Social-Emotional",
            body: "Mood swings of early puberty are real and normal. Maintain the English conversation channel — in the car, before bed, on walks. She needs to know home is warm, safe, and non-judgmental."
          },
          {
            label: "Life Skills",
            body: "Touch-typing to 30 WPM. Manage her own schedule with a planner. Cook a meal from scratch weekly."
          }
        ]
      }
    ],

    milestonesBy: "132 months",

    milestones: [
      "Reads ambitious English novels of 300+ pages (e.g., His Dark Materials, The Hobbit) independently",
      "Writes structured essays and extended creative pieces at UK Year 5 standard",
      "Distinguishes between formal and informal register in English writing and speech",
      "Performs at or above UK Year 5 standard in English reading and writing assessments",
      "Has a strong self-identity as an English speaker — it is a genuine part of who she is",
      "Manages school projects and personal schedule with genuine independence",
      "Showing awareness of the wider world: social justice, culture, identity, and how stories reflect them"
    ],

    redFlags: [
      "English reading is not a regular voluntary activity — she rarely or never chooses books in free time",
      "Writing is consistently below UK Year 5 standard despite ongoing tutor support",
      "English accent has shifted significantly — Bulgarian phonology is dominant in all contexts",
      "Emotional instability of early puberty is significantly interfering with learning and relationships",
      "Persistent sadness, anxiety, withdrawal from family, or activities she once enjoyed",
      "Extreme preoccupation with body image or social comparison that feels unhealthy or obsessive"
    ]
  },

  // ───────────────────────────────────────────────────────────────────
  // AGE 11  |  The Philosopher  |  months 132–143
  // Ambitious literature: The Kite Runner (with guidance), A Wrinkle in Time.
  // Tutor: UK Year 6 / selective school entrance standard.
  // English is now a core part of Sophie's identity and future.
  // ───────────────────────────────────────────────────────────────────
  {
    age: 11,
    months: "132–143",
    part: "The Philosopher",
    partNumber: 8,
    image: "assets/11.png",

    overview: "Eleven is the cusp of adolescence and the beginning of everything. Sophie's English should now be formidable: a voracious reader of ambitious literature, a writer with a distinctive voice, and a speaker who sounds indistinguishable from a privately educated British peer. Her English is, and will increasingly become, a significant personal and professional advantage that will open doors across Europe and beyond. The secondary school transition brings new pressures, but also new opportunities. Your role shifts from teacher to trusted guide — and Sophie increasingly knows what she needs.",

    sections: {

      habits: {
        title: "Weekly Habits to Build",
        items: [
          // Sustained independent reading — the culmination of everything
          {
            title: "Sustained English Reading (45–60 min/day)",
            body: "She reads what she loves, completely freely. At this level: A Wrinkle in Time, The Lord of the Rings (with guidance), Malorie Blackman, Jacqueline Wilson, Markus Zusak. Aim for 24+ English books per year. No compromise on this."
          },
          // Approaching UK Year 6 / entrance exam standard
          {
            title: "English Tutor (UK Year 6 Standard, 1–2×/week)",
            body: "Analytical essays (thesis, evidence, counter-argument, conclusion), complex comprehension, advanced grammar, and creative and persuasive writing. She should be approaching the standard of UK selective secondary school entrance exams — a genuine indicator of her English achievement."
          },
          // Writing for herself — the purest form
          {
            title: "Personal Creative Writing (Not for School)",
            body: "Her own stories, poems, essays — written for herself, not for assessment. This is where her English voice is most purely and authentically her own. Encourage this as a private, treasured practice."
          },
          // Family goal-setting builds agency for the years ahead
          {
            title: "Monthly Goal-Setting and Review",
            body: "Academic and personal goals, set together and reviewed monthly. She owns this process. Building the habit of intentional, goal-directed effort is what will sustain her through the challenges ahead."
          },
          // The relationship is the intervention
          {
            title: "Active Listening — No Agenda",
            body: "Sometimes she just needs to be heard and understood without advice or judgement. Practise active listening. The English-language parent-child relationship, maintained warmly across adolescence, is her single greatest asset."
          }
        ]
      },

      activities: {
        title: "Activities & Projects",
        items: [
          // The books that will stay with her
          {
            title: "Ambitious Literature She Will Never Forget",
            body: "A Wrinkle in Time, The Book Thief, The Curious Incident of the Dog in the Night-Time, The Hitchhiker's Guide to the Galaxy, His Dark Materials (complete), The Hunger Games. One book that challenges and inspires her per month."
          },
          // Public performance in English — the ultimate confidence builder
          {
            title: "Debate or Public Speaking in English",
            body: "A school debate team, Model UN, or local English-language drama club. Public English performance — arguing a point, playing a character — builds exceptional confidence and is the clearest demonstration of English mastery."
          },
          // Long creative project — a body of work she owns
          {
            title: "A Sustained Creative English Project",
            body: "Over one school term: a long short story (10–12 pages), a creative non-fiction piece, a podcast episode script, or a short documentary storyboard. Planning, drafting, revising, and a finished artefact she is proud of."
          },
          // Giving back through English
          {
            title: "Read to a Younger Child in English",
            body: "Reading aloud to a younger sibling, cousin, or neighbour in English. Reinforces her identity as a capable, generous English user and models for a younger child that English is a language worth loving."
          },
          {
            title: "Budget for a Long-Term Personal Goal",
            body: "Plan and save for something significant over months: a piece of equipment for a hobby, a trip, a course. Financial literacy, executive function, and delayed gratification — skills for life."
          }
        ]
      },

      communication: {
        title: "Communication & Connection",
        items: [
          // Values through literature
          {
            title: "Discuss Values Deeply — In English",
            body: "'What matters most to you? What kind of person do you want to be?' Connect her values to the characters she admires in English books. Values built through story are values that stick."
          },
          // Listening is the most important communication skill at 11
          {
            title: "Be a Listener First",
            body: "At 11, she needs to be heard before she needs advice. Ask open questions in English. Sit with silence comfortably. 'What do you think you should do?' is more powerful than any suggestion you could offer."
          },
          // Her future is wide open
          {
            title: "Talk About the Future Without Pressure",
            body: "University possibilities, careers, places she might live. English-medium universities across Europe, the UK, and beyond are within her reach. Her language opens doors. Make sure she knows that and feels proud of it."
          }
        ]
      }
    },

    monthlyPlans: [
      {
        range: "Months 132–137",
        title: "Navigating New Structures",
        // Secondary school = new academic and social demands
        intro: "Secondary school brings new academic structures and social complexity. Sophie's English is now a stable foundation she builds on, not a remedial project. It is an asset that distinguishes her.",
        items: [
          {
            label: "English Literacy",
            // UK Year 6 / entrance exam standard
            body: "Target: UK Year 6 / selective school entrance standard. Analytical essays with three structured points and textual evidence. Tutor focus: inference, language analysis, complex vocabulary in context. Reading sophisticated YA and classic literature."
          },
          {
            label: "Writing Voice",
            body: "A longer personal project: a completed short story (8–10 pages), a creative non-fiction piece, or a personal essay. Multiple drafts, edited with tutor, final version produced with genuine craft and pride."
          },
          {
            label: "Social-Emotional",
            body: "Pre-teen friendships are volatile and intense. The English-speaking home is her stable, warm anchor. Protect and maintain evening connection rituals: dinner conversations, walks, or before-bed chats."
          },
          {
            label: "Organisation",
            body: "Multiple subjects, shifting homework deadlines, complex social calendar. Self-managing all of it with a planner, independently. You are the safety net, not the manager."
          }
        ]
      },
      {
        range: "Months 138–143",
        title: "Solidifying Identity",
        // She is becoming who she will be — English is part of that
        intro: "She is becoming who she will be. English is a core part of that identity — a language she loves, reads, writes, and thinks in. It is not a school subject. It is who she is.",
        items: [
          {
            label: "English Literacy",
            body: "She reads whatever she wants — that freedom is earned. Tutor: exam-style comprehension and essay writing if any English-language academic goals are on the horizon (UK, European, or international university). Keep the standard high."
          },
          {
            label: "Critical Thinking",
            body: "Complex, nuanced English discussions: ethics, politics, identity, the environment, the future. She should be able to argue a position clearly, acknowledge counter-arguments graciously, and change her mind when the evidence warrants it."
          },
          {
            label: "Social-Emotional",
            body: "Puberty, self-consciousness, social media, and a complex peer landscape. The relationship is the intervention — keep talking, in English, with warmth and without judgement. She is doing brilliantly."
          },
          {
            label: "Life Skills",
            body: "Fully independent in daily self-care, personal organisation, and household contribution. A genuine, valued member of the family — not a child being managed, but a young person being respected."
          }
        ]
      }
    ],

    milestonesBy: "144 months",

    milestones: [
      "Reads sophisticated English literature (e.g., The Book Thief, His Dark Materials, A Wrinkle in Time) with genuine comprehension and critical response",
      "Writes analytical essays and extended creative pieces at UK Year 6 standard",
      "Speaks English with a natural RP accent and vocabulary comparable to a privately educated British peer",
      "Has a strong, stable self-identity that includes being an English speaker and reader as a source of genuine pride",
      "Manages complex secondary school demands with appropriate independence and self-advocacy",
      "Thinks critically in English: argues positions, acknowledges evidence, and changes her mind when warranted",
      "Is developing clear personal values and beginning to apply them to real-world choices with integrity"
    ],

    redFlags: [
      "English feels like a foreign language — she is more comfortable in Bulgarian in every context including reading and deep thought",
      "Writing in English is below UK Year 6 standard and not closing the gap despite continued tutor support",
      "Shows persistent sadness, anxiety, withdrawal, or any indication of thoughts of self-harm — seek professional support immediately",
      "Completely disconnected from family while deeply enmeshed with a peer group that is a negative influence",
      "Academic performance at school is failing significantly — secondary stress will compound every other challenge",
      "Loss of English skills that were previously established — regression at this age is a serious flag that warrants investigation"
    ]
  }

];
