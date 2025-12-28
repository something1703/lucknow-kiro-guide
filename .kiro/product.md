# Lucknow Local Tehzeeb & Slang Interpreter - Knowledge Base

## 1. Introduction

**Purpose**: This knowledge base encodes Lucknow's cultural intelligence—politeness norms, indirect speech patterns, slang, tone variations, and social etiquette—to steer AI behavior from generic responses to culturally nuanced, contextually appropriate outputs.

**Core Capability**: Transform literal interpretation into cultural understanding by applying structured rules for tone analysis, implied meaning inference, and tehzeeb-based response generation.

**Behavioral Intelligence Focus**: Indirect communication, respect hierarchies, polite disagreement, elder interaction protocols, and context-dependent meaning shifts.

---

## 2. Knowledge Base Schema

### Phrase Entry Schema
```
Phrase: [Lucknow expression in original language/transliteration]
Literal Meaning: [Direct word-for-word translation]
Implied Meaning: [Cultural interpretation and actual intent]
Tone Category: [polite | casual | sarcastic | respectful | teasing]
Usage Context: [When, where, and with whom this phrase is appropriate]
Social Appropriateness: [Who can use it, relationship requirements, formality level]
Risks / Misinterpretation Notes: [Common mistakes, what to avoid]
Example Conversation Use: [Realistic dialogue snippet showing proper usage]
```

### Behavioral Rule Schema
```
Rule Name: [Descriptive identifier]
Rule Type: [disagreement | refusal | respect_marker | humor | elder_interaction]
Description: [Explicit reasoning guideline]
Application Context: [When this rule applies]
Examples: [Situation → Correct Behavior vs Incorrect Behavior]
Exceptions: [Special cases where rule doesn't apply]
```

---

## 3. Behavioral Rules

### Rule: Polite Disagreement
**Type**: disagreement
**Description**: Never directly contradict or say "no" in formal or elder interactions. Use softening phrases, indirect language, and deferential tone.
**Application Context**: Formal settings, elder interactions, professional contexts, initial meetings
**Examples**:
- Situation: Elder suggests incorrect information
  - Correct: "Ji, aap bilkul sahi keh rahe hain, lekin shayad ek aur nazariya bhi ho sakta hai..." (Yes, you're absolutely right, but perhaps another perspective could be...)
  - Incorrect: "Nahi, aap galat hain" (No, you're wrong)
- Situation: Disagreeing with a plan
  - Correct: "Bahut achha vichaar hai, bas thoda sochna padega" (Very good idea, just need to think about it a bit)
  - Incorrect: "Yeh plan kaam nahi karega" (This plan won't work)
**Exceptions**: Close friends in casual settings may use more direct language

### Rule: Indirect Refusal Patterns
**Type**: refusal
**Description**: Declining invitations or requests requires face-saving language. Never refuse directly—use time delays, vague commitments, or cite obligations.
**Application Context**: All social invitations, requests for favors, unwanted proposals
**Examples**:
- Situation: Declining dinner invitation
  - Correct: "Abhi thoda kaam hai, phir kabhi zaroor" (Have some work now, definitely next time)
  - Incorrect: "Nahi, mujhe nahi aana" (No, I don't want to come)
- Situation: Refusing a favor request
  - Correct: "Dekhte hain, koshish karunga" (Let's see, I'll try)
  - Incorrect: "Main yeh nahi kar sakta" (I can't do this)
**Exceptions**: Emergency situations requiring clear communication

### Rule: Respect Markers
**Type**: respect_marker
**Description**: Mandatory linguistic markers that signal respect, deference, and social hierarchy. Omission is considered rude.
**Application Context**: All interactions with elders, strangers, formal settings, service contexts
**Markers**:
- "Aap" (formal you) - Required for elders, strangers, formal contexts; never use "tum" or "tu"
- "Ji" (respectful yes/acknowledgment) - Append to responses with elders
- "Pehle aap" (you first) - Offer precedence in doorways, serving food, seating
- "Meharbani" (kindness/favor) - Frame requests as asking for kindness
- "Janab" (sir/respectful address) - Use with unknown males in formal contexts
**Examples**:
- Correct: "Aap pehle, janab" (You first, sir)
- Incorrect: "Tum jao" (You go - using informal "tum")
**Exceptions**: Close family members of same age may use informal pronouns

### Rule: Humor Norms and Boundaries
**Type**: humor
**Description**: Teasing and sarcasm are acceptable among friends but require established relationship. Self-deprecating humor is safer than mocking others.
**Application Context**: Friend circles, casual settings, after relationship establishment
**Boundaries**:
- Never tease about: family honor, religious matters, physical disabilities, poverty
- Avoid sarcasm with: elders, new acquaintances, formal settings
- Safe topics: food preferences, cricket loyalties, minor mishaps
**Examples**:
- Acceptable: "Tumhare haath ka khana toh hotel se bhi bekar hai" (Your cooking is worse than hotel food - among close friends)
- Unacceptable: Using same phrase with elder or new acquaintance
**Exceptions**: Established friend groups may have inside jokes that break general rules

### Rule: Elder Interaction Etiquette
**Type**: elder_interaction
**Description**: Elevated politeness protocol requiring formal language, physical deference, and indirect communication. Elders are never contradicted directly.
**Application Context**: Anyone significantly older, parents' generation, teachers, religious figures
**Requirements**:
- Always use "aap" and "ji"
- Stand when elder enters room
- Offer seat, food, tea first
- Never interrupt or contradict
- Use "pehle aap" for precedence
- Accept advice even if disagreeing (respond with "ji, sochenge" - yes, will think about it)
**Examples**:
- Greeting: "Adaab, kaise hain aap?" (Respectful greeting, how are you?)
- Leaving: "Ijazat dijiye" (Please give permission to leave)
- Disagreeing: "Aap ka kehna bilkul sahi hai, bas main thoda aur samajhna chahta hoon" (What you say is absolutely right, I just want to understand a bit more)
**Exceptions**: None - elder respect is non-negotiable in Lucknow culture


### Rule: Emergency Directness Exception
**Type**: safety / disagreement  
**Description**: In urgent or dangerous situations, direct speech overrides politeness rules to prevent harm.
**Application Context**: Accidents, medical emergencies, safety warnings
**Examples**:
- Correct: "Ruko! Aage mat badho!" (Stop! Don’t go ahead!)
- Correct: "Doctor bulao — abhi!" (Call a doctor — now!)
- Incorrect: "Shayad rukna behtar hoga" (Perhaps stopping would be better)
**Exceptions**: Once crisis ends, respectful tone is restored

**Reasoning**:  
Lucknow culture prioritizes **human safety over politeness rituals**.


---

## 4. Tone Classification Guide

### Polite Tone
**Characteristics**: Formal language, respect markers, softening phrases, indirect requests
**Indicators**: "aap", "ji", "meharbani", "shayad" (perhaps), "agar mumkin ho" (if possible)
**Usage**: Strangers, elders, formal settings, service interactions
**Example**: "Agar aap ki meharbani ho toh thoda paani mil sakta hai?" (If you would be so kind, could I get some water?)

### Casual Tone
**Characteristics**: Relaxed language, may use "tum", direct but friendly
**Indicators**: "yaar" (friend), "chal" (let's go/come on), "kya baat hai" (what's up)
**Usage**: Friends, peers, informal settings
**Example**: "Chal yaar, chai peete hain" (Come on friend, let's have tea)

### Sarcastic Tone
**Characteristics**: Surface meaning opposite of intent, requires context to detect, often playful
**Indicators**: Exaggerated praise, context mismatch, tone of voice (in speech)
**Usage**: Close friends only, casual settings, established relationships
**Example**: "Wah, kya timing hai tumhari" (Wow, what timing you have - said when someone arrives very late)

### Respectful Tone
**Characteristics**: Maximum formality, multiple respect markers, deferential language
**Indicators**: "janab", "aap", "pehle aap", "ijazat", "meharbani"
**Usage**: Elders, authority figures, very formal occasions, first meetings
**Example**: "Janab, pehle aap, meharbani hogi" (Sir, you first, it would be a kindness)

### Teasing Tone
**Characteristics**: Playful mockery, friendly ribbing, requires established relationship
**Indicators**: Exaggeration, playful insults, reference to shared experiences
**Usage**: Close friends only, casual settings, mutual comfort established
**Example**: "Tumse toh meri dadi bhi jaldi chalti hai" (Even my grandmother walks faster than you - playful teasing among friends)

---

## 5. Phrase Interpretation Entries

### Entry 1
**Phrase**: "Abhi thoda kaam hai"
**Literal Meaning**: I have some work right now
**Implied Meaning**: I don't want to do this / I'm politely declining your invitation or request
**Tone Category**: polite
**Usage Context**: Declining invitations, requests, or proposals without directly refusing
**Social Appropriateness**: Safe with anyone; maintains relationship harmony; face-saving for both parties
**Risks / Misinterpretation Notes**: Non-locals may take literally and ask "when will you be free?"; repeated use with same person may seem evasive
**Example Conversation Use**:
```
Friend: "Chalo, movie dekhne chalte hain"
You: "Abhi thoda kaam hai, phir kabhi pakka"
(Let's go watch a movie / I have some work now, definitely next time)
```

### Entry 2
**Phrase**: "Pehle aap"
**Literal Meaning**: You first
**Implied Meaning**: Showing respect and deference; offering precedence as courtesy
**Tone Category**: respectful
**Usage Context**: Doorways, serving food, seating arrangements, any situation requiring courtesy
**Social Appropriateness**: Essential with elders, guests, formal settings; omission considered rude
**Risks / Misinterpretation Notes**: Not using this with elders is major breach of etiquette; can lead to back-and-forth if both parties insist
**Example Conversation Use**:
```
At doorway with elder
Elder: "Chalo andar"
You: "Pehle aap, janab"
(Let's go inside / You first, sir)
```

### Entry 3
**Phrase**: "Dekhte hain"
**Literal Meaning**: Let's see / We'll see
**Implied Meaning**: Probably not going to happen, but I don't want to refuse directly
**Tone Category**: polite
**Usage Context**: Non-committal response to requests, proposals, or plans you're uncertain about
**Social Appropriateness**: Universally acceptable; softer than direct refusal
**Risks / Misinterpretation Notes**: Persistent people may interpret as "maybe yes" and keep asking; can seem evasive if overused
**Example Conversation Use**:
```
Relative: "Kal hamare ghar khana khaane aana"
You: "Dekhte hain, agar time hua toh zaroor"
(Come eat at our house tomorrow / Let's see, if there's time then definitely)
```

### Entry 4
**Phrase**: "Aap ka kehna bilkul sahi hai"
**Literal Meaning**: What you're saying is absolutely correct
**Implied Meaning**: I disagree but won't contradict you directly (especially with elders)
**Tone Category**: respectful
**Usage Context**: Polite disagreement with elders or in formal settings
**Social Appropriateness**: Required when disagreeing with elders; maintains respect while preserving your position
**Risks / Misinterpretation Notes**: May be taken as genuine agreement; follow-up with "lekin" (but) softens disagreement
**Example Conversation Use**:
```
Elder: "Yeh rasta chhota hai"
You: "Aap ka kehna bilkul sahi hai, lekin shayad doosra rasta kam traffic mein ho"
(This route is shorter / What you say is absolutely right, but perhaps the other route has less traffic)
```

### Entry 5
**Phrase**: "Bas thoda adjust kar lo"
**Literal Meaning**: Just adjust a little
**Implied Meaning**: Accept the inconvenience without complaining; make do with less than ideal situation
**Tone Category**: casual
**Usage Context**: When asking someone to accommodate imperfect arrangements
**Social Appropriateness**: Common among friends, family; can seem dismissive if used with guests or in formal settings
**Risks / Misinterpretation Notes**: May minimize legitimate concerns; overuse can strain relationships
**Example Conversation Use**:
```
Host: "Sofa pe so jaana, bed nahi hai"
Guest: "Koi baat nahi"
Host: "Bas thoda adjust kar lo"
(Sleep on sofa, no bed available / No problem / Just adjust a little)
```

### Entry 6
**Phrase**: "Meharbani hogi"
**Literal Meaning**: It will be a kindness
**Implied Meaning**: Please do this favor for me; framing request as asking for kindness rather than demanding
**Tone Category**: polite
**Usage Context**: Making requests, asking for help, seeking favors
**Social Appropriateness**: Appropriate in all contexts; softens requests; shows humility
**Risks / Misinterpretation Notes**: None - universally polite way to make requests
**Example Conversation Use**:
```
You: "Agar aap ki meharbani ho toh yeh kaam kal tak ho sakta hai?"
Other: "Ji zaroor"
(If you would be so kind, could this work be done by tomorrow? / Yes, certainly)
```

### Entry 7
**Phrase**: "Wah, kya baat hai"
**Literal Meaning**: Wow, what a thing/matter
**Implied Meaning**: Context-dependent - can be genuine praise OR sarcastic mockery
**Tone Category**: casual OR sarcastic (context-dependent)
**Usage Context**: Genuine: celebrating achievement; Sarcastic: mocking mistake or poor timing
**Social Appropriateness**: Genuine use: universal; Sarcastic use: close friends only
**Risks / Misinterpretation Notes**: Tone and context critical - same words mean opposite things; sarcasm with wrong person causes offense
**Example Conversation Use**:
```
Genuine: Friend scores well on exam
You: "Wah, kya baat hai! Bahut badhiya"
(Wow, what a thing! Very good)

Sarcastic: Friend arrives 2 hours late
You: "Wah, kya baat hai, kya timing hai tumhari"
(Wow, what a thing, what timing you have)
```

### Entry 8
**Phrase**: "Ijazat dijiye"
**Literal Meaning**: Please give permission
**Implied Meaning**: I'm taking your leave now; respectful way to exit conversation or location
**Tone Category**: respectful
**Usage Context**: Leaving elder's presence, exiting formal meetings, ending conversations with authority figures
**Social Appropriateness**: Required with elders and formal contexts; shows proper upbringing
**Risks / Misinterpretation Notes**: Not using this when leaving elder's presence is disrespectful
**Example Conversation Use**:
```
You: "Bahut achha laga aap se milkar, ab ijazat dijiye"
Elder: "Khuda hafiz, beta"
(It was very nice meeting you, now please give permission to leave / God protect you, child)
```

### Entry 9
**Phrase**: "Aap ki marzi"
**Literal Meaning**: Your wish/will
**Implied Meaning**: I defer to your decision; you have authority here; I won't impose my preference
**Tone Category**: respectful
**Usage Context**: Deferring to elders, guests, or authority figures on decisions
**Social Appropriateness**: Shows proper respect; appropriate with elders, hosts, seniors
**Risks / Misinterpretation Notes**: Can seem passive-aggressive if used with peers; genuine deference required
**Example Conversation Use**:
```
Elder: "Kya khana pasand karoge?"
You: "Aap ki marzi, jo bhi aap kahein"
(What food would you like? / Your wish, whatever you say)
```

### Entry 10
**Phrase**: "Thoda sa"
**Literal Meaning**: A little bit
**Implied Meaning**: Minimizing request or problem to seem less burdensome; polite understatement
**Tone Category**: polite
**Usage Context**: Making requests, describing problems, asking for help
**Social Appropriateness**: Universal politeness strategy; reduces imposition
**Risks / Misinterpretation Notes**: May understate serious issues; people might not realize urgency
**Example Conversation Use**:
```
You: "Thoda sa paani mil sakta hai?"
Host: "Haan zaroor, aur kuch chahiye?"
(Could I get a little bit of water? / Yes certainly, anything else needed?)
```

### Entry 11
**Phrase**: "Koshish karunga"
**Literal Meaning**: I will try
**Implied Meaning**: Probably won't happen, but I don't want to refuse directly; non-committal response
**Tone Category**: polite
**Usage Context**: Responding to requests you're unlikely to fulfill; avoiding direct refusal
**Social Appropriateness**: Face-saving for both parties; softer than "no"
**Risks / Misinterpretation Notes**: Creates false hope if other person takes it as commitment; overuse damages credibility
**Example Conversation Use**:
```
Friend: "Kal meri madad kar sakte ho?"
You: "Dekhta hoon, koshish karunga"
(Can you help me tomorrow? / I'll see, I'll try)
```

### Entry 12
**Phrase**: "Aap ko takleef ho rahi hogi"
**Literal Meaning**: You must be experiencing difficulty/discomfort
**Implied Meaning**: Acknowledging someone's inconvenience; showing empathy and consideration
**Tone Category**: polite
**Usage Context**: When someone is waiting, accommodating you, or experiencing inconvenience
**Social Appropriateness**: Shows good manners and awareness; appropriate in all contexts
**Risks / Misinterpretation Notes**: None - always appreciated
**Example Conversation Use**:
```
You arrive late
You: "Maaf kijiye, aap ko takleef ho rahi hogi"
Other: "Koi baat nahi"
(Sorry, you must have been inconvenienced / No problem)
```

### Entry 13
**Phrase**: "Bas, ho gaya"
**Literal Meaning**: Enough, it's done
**Implied Meaning**: Context-dependent - can mean "stop now" OR "task completed" OR "I'm satisfied"
**Tone Category**: casual
**Usage Context**: Stopping someone from serving more food, indicating task completion, setting boundaries
**Social Appropriateness**: Casual contexts; with elders use "bas, bahut ho gaya, shukriya" (enough, it's plenty, thank you)
**Risks / Misinterpretation Notes**: Can seem abrupt with elders; add softening words for politeness
**Example Conversation Use**:
```
Host keeps serving food
You: "Bas, bahut ho gaya, shukriya"
Host: "Thoda aur le lo"
(Enough, it's plenty, thank you / Take a little more)
```

### Entry 14
**Phrase**: "Aap ki dua se"
**Literal Meaning**: By your blessings/prayers
**Implied Meaning**: Attributing success or good fortune to elder's blessings; showing humility and respect
**Tone Category**: respectful
**Usage Context**: Responding to elder's inquiry about achievements or well-being
**Social Appropriateness**: Required with elders when discussing personal success; shows proper values
**Risks / Misinterpretation Notes**: Not using this when elder asks about success seems arrogant
**Example Conversation Use**:
```
Elder: "Kaam kaisa chal raha hai?"
You: "Aap ki dua se sab theek hai"
(How is work going? / By your blessings, all is well)
```

### Entry 15
**Phrase**: "Yaar, tu bhi na"
**Literal Meaning**: Friend, you also...
**Implied Meaning**: Playful exasperation or teasing; affectionate criticism among friends
**Tone Category**: teasing
**Usage Context**: Close friends only; playful complaints or teasing
**Social Appropriateness**: Only with established friends; never with elders or new acquaintances
**Risks / Misinterpretation Notes**: Using with wrong person is disrespectful; requires mutual comfort
**Example Conversation Use**:
```
Friend forgets to bring promised item
You: "Yaar, tu bhi na, kitni baar bhool jata hai"
Friend: "Sorry yaar, agli baar pakka"
(Friend, you also, how many times do you forget / Sorry friend, next time for sure)
```

### Entry 16
**Phrase**: "Chalo, koi nahi"
**Literal Meaning**: Okay, no one/nothing
**Implied Meaning**: It's okay, don't worry about it; accepting situation gracefully; letting go of disappointment
**Tone Category**: casual
**Usage Context**: Accepting apologies, dealing with disappointments, moving past problems
**Social Appropriateness**: Universal; shows maturity and grace
**Risks / Misinterpretation Notes**: May seem dismissive of serious issues; gauge situation appropriateness
**Example Conversation Use**:
```
Friend: "Sorry, main nahi aa paunga"
You: "Chalo, koi nahi, phir kabhi"
(Sorry, I won't be able to come / Okay, no problem, some other time)
```

### Entry 17
**Phrase**: "Aap ka naam?"
**Literal Meaning**: Your name?
**Implied Meaning**: Polite way to ask someone's name using respectful "aap"
**Tone Category**: polite
**Usage Context**: Meeting new people, formal introductions, showing respect
**Social Appropriateness**: Appropriate for strangers, elders, formal contexts; use "tumhara naam?" only with clear peers
**Risks / Misinterpretation Notes**: Using "tu" or "tum" with strangers is rude
**Example Conversation Use**:
```
Meeting someone new
You: "Adaab, aap ka naam?"
Other: "Main Ahmed hoon, aap?"
(Greetings, your name? / I'm Ahmed, and you?)
```

### Entry 18
**Phrase**: "Bas, aur kya"
**Literal Meaning**: Just, and what else
**Implied Meaning**: Context-dependent - can mean "that's all" OR "what else can I say" OR "obviously"
**Tone Category**: casual
**Usage Context**: Confirming something obvious, ending list of items, rhetorical response
**Social Appropriateness**: Casual conversations; with elders be more explicit
**Risks / Misinterpretation Notes**: Can seem dismissive; tone matters
**Example Conversation Use**:
```
Friend: "Tum bhi cricket dekhoge?"
You: "Bas, aur kya! Zaroor dekhunga"
(Will you also watch cricket? / Obviously! I'll definitely watch)
```

### Entry 19
**Phrase**: "Shukriya" vs "Meharbani"
**Literal Meaning**: Thank you vs Kindness
**Implied Meaning**: Shukriya = simple thanks; Meharbani = deeper gratitude acknowledging favor/kindness
**Tone Category**: polite (shukriya) / respectful (meharbani)
**Usage Context**: Shukriya for routine thanks; Meharbani for significant favors or with elders
**Social Appropriateness**: Both polite; meharbani shows deeper respect and cultural awareness
**Risks / Misinterpretation Notes**: Using only "thanks" (English) can seem westernized/less respectful
**Example Conversation Use**:
```
Routine: Someone passes water
You: "Shukriya"

Significant: Elder helps with important matter
You: "Bahut meharbani, aap ki dua se sab ho gaya"
(Much kindness, by your blessings everything was done)
```

### Entry 20
**Phrase**: "Arre, yeh kya kar rahe ho"
**Literal Meaning**: Hey, what are you doing
**Implied Meaning**: Context-dependent - can be genuine question OR playful teasing OR mild criticism
**Tone Category**: casual OR teasing (context-dependent)
**Usage Context**: Friends doing something unexpected, playful intervention, mild criticism
**Social Appropriateness**: Casual settings with friends; never with elders (use "aap kya kar rahe hain" with respect)
**Risks / Misinterpretation Notes**: Tone critical; can seem rude if used with wrong person
**Example Conversation Use**:
```
Friend about to make mistake
You: "Arre, yeh kya kar rahe ho, ruk jao"
Friend: "Kya hua?"
(Hey, what are you doing, stop / What happened?)
```

### Entry 21
**Phrase**: "Aap ko pata hai"
**Literal Meaning**: You know
**Implied Meaning**: Assuming shared knowledge; building rapport; seeking agreement
**Tone Category**: casual
**Usage Context**: Conversations where shared understanding exists; building connection
**Social Appropriateness**: Universal; creates conversational flow
**Risks / Misinterpretation Notes**: Overuse can seem presumptuous; ensure listener actually knows
**Example Conversation Use**:
```
You: "Aap ko pata hai, Hazratganj mein naya restaurant khula hai"
Other: "Haan, suna hai"
(You know, a new restaurant opened in Hazratganj / Yes, I heard)
```

### Entry 22
**Phrase**: "Thik hai, theek hai"
**Literal Meaning**: Okay, okay (repeated)
**Implied Meaning**: I understand, stop explaining; I accept but may not fully agree; ending discussion
**Tone Category**: casual
**Usage Context**: Acknowledging repeated explanations, accepting situation, ending debate
**Social Appropriateness**: Casual contexts; with elders use single "ji, theek hai" to avoid seeming dismissive
**Risks / Misinterpretation Notes**: Repetition can seem impatient or dismissive; use carefully
**Example Conversation Use**:
```
Friend explaining something repeatedly
You: "Thik hai, thik hai, samajh gaya"
Friend: "Pakka samjhe?"
(Okay, okay, I understood / You understood for sure?)
```

### Entry 23
**Phrase**: "Kal" (context-dependent time)
**Literal Meaning**: Yesterday OR tomorrow
**Implied Meaning**: Context determines if past or future; can also mean "some other day" (indefinite)
**Tone Category**: casual
**Usage Context**: Referring to past or future day; sometimes used vaguely for indefinite future
**Social Appropriateness**: Universal; context usually clarifies meaning
**Risks / Misinterpretation Notes**: Ambiguity can cause confusion; specify "kal" (tomorrow) vs "parson" (day after) vs "beeta kal" (yesterday) if unclear
**Example Conversation Use**:
```
Clear future: "Kal milte hain" (Let's meet tomorrow)
Clear past: "Kal maine use dekha" (Yesterday I saw him)
Vague: "Kal karenge" (We'll do it some other day - may mean indefinite future)
```

### Entry 24
**Phrase**: "Aap se milkar khushi hui"
**Literal Meaning**: It was happiness meeting you
**Implied Meaning**: Polite closing phrase; expressing pleasure at meeting; formal farewell
**Tone Category**: polite
**Usage Context**: Ending first meetings, formal farewells, professional contexts
**Social Appropriateness**: Universal politeness; shows good manners
**Risks / Misinterpretation Notes**: None - always appropriate
**Example Conversation Use**:
```
Ending first meeting
You: "Aap se milkar bahut khushi hui, phir milenge"
Other: "Ji zaroor, khuda hafiz"
(It was very nice meeting you, we'll meet again / Yes certainly, God protect you)
```

### Entry 25
**Phrase**: "Bas, chal raha hai"
**Literal Meaning**: Just, it's going/running
**Implied Meaning**: Things are okay but not great; managing; getting by; modest response to "how are things"
**Tone Category**: casual
**Usage Context**: Responding to "kaise ho" or "kya haal hai"; showing modesty about life situation
**Social Appropriateness**: Universal; shows humility rather than boasting
**Risks / Misinterpretation Notes**: May understate actual success (cultural modesty); listener understands things are likely better than stated
**Example Conversation Use**:
```
Friend: "Kaam kaisa chal raha hai?"
You: "Bas, chal raha hai, aap sunao"
(How is work going? / Just going along, you tell me)
```

### Entry 26
**Phrase**: "Aap ki baat mein dum hai"
**Literal Meaning**: There is strength/substance in your words
**Implied Meaning**: You make a valid point; I see wisdom in what you're saying; acknowledging correctness
**Tone Category**: respectful
**Usage Context**: Agreeing with someone's argument or advice, especially elders
**Social Appropriateness**: Shows respect and thoughtfulness; appropriate in discussions
**Risks / Misinterpretation Notes**: None - shows good listening and respect
**Example Conversation Use**:
```
Elder gives advice
You: "Aap ki baat mein dum hai, main zaroor sochonga"
Elder: "Beta, tumhare bhale ke liye keh raha hoon"
(There is substance in your words, I will definitely think about it / Child, I'm saying this for your good)
```

### Entry 27
**Phrase**: "Arre wah"
**Literal Meaning**: Oh wow
**Implied Meaning**: Genuine appreciation and delight; celebrating something positive
**Tone Category**: casual
**Usage Context**: Reacting to good news, achievements, pleasant surprises
**Social Appropriateness**: Universal positive expression; shows enthusiasm
**Risks / Misinterpretation Notes**: Can be sarcastic if tone is wrong, but usually genuine
**Example Conversation Use**:
```
Friend: "Mujhe promotion mil gaya"
You: "Arre wah! Bahut badhiya, mubarak ho"
(I got a promotion / Oh wow! Very good, congratulations)
```

### Entry 28
**Phrase**: "Aap ka hukum"
**Literal Meaning**: Your order/command
**Implied Meaning**: I will do as you say; showing complete deference; acknowledging authority
**Tone Category**: respectful
**Usage Context**: Responding to elder's instructions or requests; showing obedience
**Social Appropriateness**: With elders and authority figures; shows proper respect
**Risks / Misinterpretation Notes**: Can seem overly formal with peers; reserve for genuine respect situations
**Example Conversation Use**:
```
Elder: "Kal subah aa jana"
You: "Ji, aap ka hukum"
(Come tomorrow morning / Yes, your command)
```

### Entry 29
**Phrase**: "Maaf karna" vs "Maaf kijiye"
**Literal Meaning**: Forgive (informal) vs Forgive (formal)
**Implied Meaning**: Both apologize; "kijiye" shows more respect using formal "aap" form
**Tone Category**: casual (karna) / polite (kijiye)
**Usage Context**: Karna with friends; Kijiye with elders, strangers, formal contexts
**Social Appropriateness**: Match formality to relationship; using wrong form shows poor judgment
**Risks / Misinterpretation Notes**: Using informal with elders is disrespectful
**Example Conversation Use**:
```
With friend: "Maaf karna yaar, bhool gaya"
With elder: "Maaf kijiye, galti ho gayi"
(Forgive me friend, I forgot / Please forgive me, a mistake happened)
```

### Entry 30
**Phrase**: "Aap ki seva mein"
**Literal Meaning**: In your service
**Implied Meaning**: Extreme deference; offering oneself in service; very formal respect
**Tone Category**: respectful
**Usage Context**: Very formal contexts, religious settings, extreme respect situations
**Social Appropriateness**: Reserved for highest respect situations; can seem excessive in casual contexts
**Risks / Misinterpretation Notes**: Overuse seems insincere; use only when genuine deep respect warranted
**Example Conversation Use**:
```
Meeting highly respected elder or religious figure
You: "Adaab, aap ki seva mein hazir hoon"
Elder: "Khush raho, beta"
(Greetings, I am present in your service / Be happy, child)
```

### Entry 31
**Phrase**: "Adaab arz hai"
**Literal Meaning**: I present my respectful greetings
**Implied Meaning**: Extremely polite and graceful greeting rooted in Lucknow tehzeeb; expresses warmth + humility
**Tone Category**: respectful
**Usage Context**: Formal greetings, meeting elders, cultural gatherings, literary or tehzeeb-aware environments
**Social Appropriateness**: Highly respectful; signals refinement and classical Lucknow upbringing
**Risks / Misinterpretation Notes**: May sound overly formal among casual peer groups
**Example Conversation Use**:
```
Meeting elder at gathering
You: "Adaab arz hai, kaise hain aap?"
Elder: "Khush raho beta"
```
### Entry 32
**Phrase**: "Janab-e-aali"
**Literal Meaning**: Honorable / respected sir
**Implied Meaning**: Elevated admiration + social grace; conveys deep respect
**Tone Category**: respectful
**Usage Context**: Addressing respected elders, guests, senior figures, cultural personalities
**Social Appropriateness**: Appropriate in high-respect contexts; marks Lucknowi tehzeeb
**Risks / Misinterpretation Notes**: Should not be used casually or jokingly
**Example Conversation Use**:
```
Introducing an elder guest
You: "Janab-e-aali, tashreef lijiye"
Guest: "Bari meharbani"
```
### Entry 33
**Phrase**: "Tashreef rakhiye"
**Literal Meaning**: Please place your presence (please sit)
**Implied Meaning**: Elegant, refined invitation to be seated
**Tone Category**: respectful
**Usage Context**: Welcoming guests, elders, formal home visits
**Social Appropriateness**: Universally polite and graceful
**Risks / Misinterpretation Notes**: None — culturally safe in formal settings
**Example Conversation Use**:
```
Guest enters home
You: "Tashreef rakhiye, chai lat(a) hoon"
Guest: "Shukriya"
```

---

## 6. Indirect Communication Patterns

### Pattern: Implied Refusal
**Structure**: Time delay + vague commitment + face-saving phrase
**Examples**:
- "Abhi thoda kaam hai" (have work now) = I don't want to
- "Dekhte hain" (let's see) = probably not
- "Koshish karunga" (I'll try) = unlikely to happen
- "Phir kabhi" (some other time) = not interested
**Recognition Rule**: When someone gives non-specific time or conditional response to invitation/request, interpret as polite refusal

### Pattern: Indirect Disagreement
**Structure**: Agreement phrase + softening word + alternative view
**Examples**:
- "Aap bilkul sahi keh rahe hain, lekin..." (You're absolutely right, but...)
- "Haan, par shayad..." (Yes, but perhaps...)
- "Aap ka kehna theek hai, bas..." (What you say is correct, just...)
**Recognition Rule**: Initial agreement followed by "lekin/par/bas" signals polite disagreement

### Pattern: Implied Request
**Structure**: Observation + indirect need statement
**Examples**:
- "Thoda garam lag raha hai" (feeling a bit hot) = can you turn on fan/AC
- "Paani khatam ho gaya" (water finished) = please get more water
- "Bahut der ho gayi" (it's gotten very late) = I should leave now / you should leave now
**Recognition Rule**: Statement of condition without explicit request implies action needed

### Pattern: Face-Saving Criticism
**Structure**: Positive frame + gentle criticism + supportive close
**Examples**:
- "Bahut achha kaam kiya, bas thoda aur dhyan dena padega" (Very good work, just need to pay a bit more attention)
- "Tumhari koshish achhi thi, agli baar aur behtar hoga" (Your effort was good, next time will be better)
**Recognition Rule**: Sandwich criticism between positive statements to maintain relationship

### Pattern: Hierarchical Deference
**Structure**: Respect marker + deferral phrase + elder's authority
**Examples**:
- "Aap ki marzi" (your wish) = you decide
- "Jaise aap kahein" (as you say) = I defer to you
- "Aap behtar jante hain" (you know better) = accepting elder's judgment
**Recognition Rule**: Phrases that transfer decision authority signal respect hierarchy

---

## 7. Cultural Risk / Misinterpretation Notes

### High-Risk Behaviors
1. **Using "tum" or "tu" with elders or strangers**: Major disrespect; always use "aap"
2. **Direct refusal ("nahi")**: Face-threatening; use indirect refusal patterns
3. **Contradicting elders directly**: Disrespectful; use agreement + softening structure
4. **Omitting "pehle aap" with elders**: Breach of etiquette; always offer precedence
5. **Sarcasm with new acquaintances**: High misinterpretation risk; reserve for established friends

### Moderate-Risk Behaviors
1. **Overusing "dekhte hain"**: Seems evasive; damages credibility
2. **Taking indirect refusals literally**: Causes awkwardness; learn to read signals
3. **Being too direct in formal settings**: Seems rude; add softening phrases
4. **Not using "ji" with elders**: Mildly disrespectful; shows poor upbringing
5. **Teasing about sensitive topics**: Can offend; stick to safe topics

### Context-Dependent Risks
1. **"Wah, kya baat hai"**: Genuine praise vs sarcasm depends entirely on tone and context
2. **"Kal"**: Ambiguous time reference; clarify if confusion possible
3. **"Bas, ho gaya"**: Can be polite or abrupt depending on tone and relationship
4. **"Thik hai, thik hai"**: Repetition can seem dismissive; use single "theek hai" with elders

### Tone-Misclassification Risks
1. **Teasing misunderstood as insult** — outsiders miss playful tone
2. **Indirect refusal mistaken as “maybe yes”** — leads to social discomfort
3. **Respect tone mistaken for submissiveness** — politeness ≠ weakness
4. **Literal translations lose emotional meaning** — meaning = tone + relationship
5. **Sarcasm used with elders** — becomes direct disrespect

**Interpretation Guideline**:  
Always evaluate meaning using **relationship + setting + tone** together.


### Safe Practices
1. **Always use "aap" until explicitly told otherwise**: Shows respect; never wrong
2. **Add "ji" when responding to elders**: Simple respect marker; always appreciated
3. **Use "pehle aap" in precedence situations**: Universal politeness; never inappropriate
4. **Frame requests with "meharbani"**: Softens requests; shows humility
5. **Accept elder advice with "aap ki dua se"**: Attributes success to blessings; shows values

---

## 8. Test Prompts & Expected Localized Behavior

### Evaluation Prompt 1: Tone Interpretation
**Prompt**: "Someone says 'Wah, kya timing hai tumhari' when you arrive late. What does this mean?"

**Generic AI Response** (Wrong/Shallow):
"This means 'Wow, what timing you have' - they are complimenting your timing."

**Lucknow-Aware AI Response** (Nuanced/Contextual):
"This is sarcastic teasing. While literally it says 'wow, what timing you have,' the context of arriving late makes this playful mockery among friends. The speaker is pointing out your poor timing in a humorous way. This tone is only appropriate with close friends - using it with elders or new acquaintances would be disrespectful. The sarcasm is signaled by the mismatch between the praise words and the negative context."

**Demonstrates**: Tone interpretation, context-dependent meaning, social appropriateness boundaries

---

### Evaluation Prompt 2: Indirect Refusal Recognition
**Prompt**: "You invite someone to dinner and they respond 'Abhi thoda kaam hai, phir kabhi.' What are they really saying?"

**Generic AI Response** (Wrong/Shallow):
"They are saying they have some work right now but would like to come another time. You should ask them when they're free."

**Lucknow-Aware AI Response** (Nuanced/Contextual):
"This is a polite indirect refusal. While literally they say 'I have some work now, some other time,' this is a face-saving way to decline without directly saying no. 'Phir kabhi' (some other time) is intentionally vague and usually means they're not interested. Asking repeatedly when they're free would miss the social signal and create awkwardness. The culturally appropriate response is to accept gracefully with 'Chalo, koi nahi' (okay, no problem) and not press further. This pattern maintains relationship harmony by avoiding direct rejection."

**Demonstrates**: Implied meaning recognition, indirect communication patterns, appropriate response

---

### Evaluation Prompt 3: Respect Marker Usage
**Prompt**: "How should you greet an elder you're meeting for the first time?"

**Generic AI Response** (Wrong/Shallow):
"You can say 'Hello, nice to meet you' or 'Hi, how are you?'"

**Lucknow-Aware AI Response** (Nuanced/Contextual):
"Use 'Adaab' or 'Assalam-walaikum' as greeting, followed by 'Aap kaise hain?' (How are you? - using formal 'aap'). Never use 'tum' or 'tu' with elders. When they respond, add 'ji' to show respect: 'Ji, shukriya' (Yes, thank you). If entering a room, use 'Pehle aap' (You first) to offer precedence. When leaving, say 'Ijazat dijiye' (Please give permission to leave). These respect markers are non-negotiable with elders - omitting them signals poor upbringing and disrespect. The linguistic formality demonstrates cultural values of hierarchy and deference."

**Demonstrates**: Cultural appropriateness, respect markers, elder interaction protocol

---

### Evaluation Prompt 4: Polite Disagreement
**Prompt**: "An elder suggests a route you know is longer. How do you respond?"

**Generic AI Response** (Wrong/Shallow):
"You should politely tell them they're wrong and explain the correct route."

**Lucknow-Aware AI Response** (Nuanced/Contextual):
"Never directly contradict an elder. Use the structure: agreement + softening + alternative. Say: 'Aap ka kehna bilkul sahi hai, lekin shayad doosra rasta kam traffic mein ho' (What you say is absolutely right, but perhaps the other route has less traffic). This maintains respect while gently offering an alternative. The key is 'shayad' (perhaps) which softens the disagreement. If the elder insists, defer with 'Aap behtar jante hain' (You know better) rather than arguing. Direct contradiction like 'Nahi, aap galat hain' (No, you're wrong) would be deeply disrespectful and damage the relationship."

**Demonstrates**: Polite disagreement structure, elder interaction rules, indirect communication

---

### Evaluation Prompt 5: Context-Dependent Interpretation
**Prompt**: "Someone says 'Dekhte hain' when you ask them to help with a project. What should you understand?"

**Generic AI Response** (Wrong/Shallow):
"They said 'let's see' which means they're considering it and might help. Follow up with them later."

**Lucknow-Aware AI Response** (Nuanced/Contextual):
"'Dekhte hain' (let's see) is typically a polite non-commitment that leans toward 'no.' It's softer than direct refusal but signals they're unlikely to help. The culturally aware response is to not count on their help and make alternative arrangements. Following up repeatedly would miss the social signal and create awkwardness. If they were genuinely interested, they'd say 'Haan, zaroor' (Yes, certainly) or 'Koshish karunga' (I'll try - which is also somewhat non-committal). Accept the signal gracefully and move on without pressing."

**Demonstrates**: Implied meaning, indirect refusal patterns, appropriate follow-up behavior

---

### Evaluation Prompt 6: Sarcasm vs Genuine Praise
**Prompt**: "Your friend says 'Tumhare haath ka khana toh hotel se bhi bekar hai.' Is this an insult?"

**Generic AI Response** (Wrong/Shallow):
"Yes, they're saying your cooking is worse than hotel food, which is insulting."

**Lucknow-Aware AI Response** (Nuanced/Contextual):
"Among close friends, this is playful teasing, not a genuine insult. The exaggeration ('worse than hotel food') signals humor rather than serious criticism. This teasing tone is only acceptable with established friends who have mutual comfort. Using this with elders, new acquaintances, or in formal settings would be genuinely insulting. The relationship context determines interpretation - same words mean different things based on who's speaking. Close friends understand this as affectionate ribbing and might respond with similar teasing. The cultural boundary is clear: teasing requires established relationship and mutual understanding."

**Demonstrates**: Tone classification, relationship-dependent meaning, social appropriateness boundaries

---

### Evaluation Prompt 7: Request Framing
**Prompt**: "You need to ask someone for a favor. How should you phrase it?"

**Generic AI Response** (Wrong/Shallow):
"Just ask directly: 'Can you do this for me?' or 'I need your help with something.'"

**Lucknow-Aware AI Response** (Nuanced/Contextual):
"Frame requests with humility using 'meharbani' (kindness): 'Agar aap ki meharbani ho toh...' (If you would be so kind...). This presents the request as asking for kindness rather than demanding. Add softening phrases like 'thoda sa' (a little bit) to minimize the imposition: 'Thoda sa waqt de sakte hain?' (Could you give a little bit of time?). With elders, add more deference: 'Aap ki bahut meharbani hogi agar...' (It would be very kind of you if...). Direct requests without softening seem demanding and rude. The linguistic structure shows respect and acknowledges you're asking a favor, not entitled to help."

**Demonstrates**: Culturally appropriate request framing, respect markers, politeness strategies

---

### Evaluation Prompt 8: Time Reference Ambiguity
**Prompt**: "Someone says 'Kal milte hain.' When are you meeting?"

**Generic AI Response** (Wrong/Shallow):
"'Kal' means tomorrow, so you're meeting tomorrow."

**Lucknow-Aware AI Response** (Nuanced/Contextual):
"'Kal' is ambiguous - it can mean 'tomorrow' OR 'yesterday' OR vaguely 'some other day.' Context determines meaning. If said while parting: likely tomorrow. If discussing past events: yesterday. If said vaguely without specific plans: indefinite future (similar to 'phir kabhi'). To avoid confusion, listen for additional context or clarify: 'Kal matlab kal?' (Tomorrow meaning tomorrow?). In casual usage, 'kal' for indefinite future is common - 'Kal karenge' often means 'we'll do it sometime' rather than literally tomorrow. The ambiguity is culturally accepted; people rely on context clues."

**Demonstrates**: Context-dependent interpretation, linguistic ambiguity, clarification strategies

---

### Evaluation Prompt 9: Modesty in Success
**Prompt**: "An elder asks how your new job is going and it's going very well. How do you respond?"

**Generic AI Response** (Wrong/Shallow):
"Tell them honestly that it's going great and you're doing well."

**Lucknow-Aware AI Response** (Nuanced/Contextual):
"Show modesty and attribute success to elder's blessings: 'Aap ki dua se sab theek chal raha hai' (By your blessings, everything is going well). Even if things are excellent, say 'Bas, chal raha hai' (Just going along) rather than boasting. This demonstrates humility and proper values. Directly stating 'Bahut achha chal raha hai, main bahut successful hoon' (Going very well, I'm very successful) would seem arrogant and disrespectful. The cultural expectation is to downplay personal achievement and credit elders' blessings. This isn't false modesty - it's showing you understand success comes with support and blessings, not just personal effort."

**Demonstrates**: Cultural modesty norms, elder interaction, attribution of success

---

### Evaluation Prompt 10: Ending Conversations Respectfully
**Prompt**: "You need to leave an elder's house. How do you exit the conversation?"

**Generic AI Response** (Wrong/Shallow):
"Say 'I have to go now, bye' or 'It was nice talking to you, see you later.'"

**Lucknow-Aware AI Response** (Nuanced/Contextual):
"Use formal exit protocol: 'Bahut achha laga aap se milkar' (It was very nice meeting you), then 'Ab ijazat dijiye' (Now please give permission to leave). Wait for elder's acknowledgment before actually leaving. Never just announce you're leaving - asking permission shows respect. Elder typically responds with 'Khuda hafiz' or 'Jate raho' (God protect you / Keep going). If elder offers more tea/food, politely decline: 'Bahut meharbani, lekin ab der ho rahi hai' (Much kindness, but it's getting late). Simply saying 'bye' or leaving without permission ritual is disrespectful and shows poor upbringing."

**Demonstrates**: Elder interaction protocol, formal exit procedures, respect markers

---

### Evaluation Prompt 11: Accepting Hospitality
**Prompt**: "A host keeps insisting you eat more food but you're full. What do you do?"

**Generic AI Response** (Wrong/Shallow):
"Just say 'No thank you, I'm full' firmly so they stop asking."

**Lucknow-Aware AI Response** (Nuanced/Contextual):
"Hosts will insist multiple times - this is cultural hospitality norm. Politely decline with appreciation: 'Bas, bahut ho gaya, shukriya. Bahut mazedaar tha' (Enough, it's plenty, thank you. It was very delicious). They'll likely insist again - repeat politely with 'Sach mein, aur nahi ho payega' (Truly, I can't manage more). Never be abrupt or firm - that's rude. The host's insistence shows generosity; your polite repeated refusals show appreciation while setting boundary. Eventually they'll accept. Complimenting the food while declining ('bahut mazedaar tha') softens the refusal. This dance of insistence and polite refusal is expected cultural behavior."

**Demonstrates**: Hospitality norms, polite refusal repetition, cultural expectations

---

### Evaluation Prompt 12: Humor Boundaries
**Phrase**: "Is it okay to make jokes about someone's family in Lucknow culture?"

**Generic AI Response** (Wrong/Shallow):
"It depends on the joke and your relationship with the person."

**Lucknow-Aware AI Response** (Nuanced/Contextual):
"No. Family honor is a serious boundary - never joke about someone's family members, especially female relatives. This is deeply offensive regardless of relationship closeness. Safe teasing topics include: food preferences, cricket team loyalties, minor mishaps, harmless habits. Absolutely avoid: family honor, religious matters, physical disabilities, poverty, caste. Even among close friends, these topics are off-limits. Self-deprecating humor is safer than mocking others. The cultural value of 'izzat' (honor/respect) means family-related jokes can cause serious offense and damage relationships permanently. When in doubt, stick to light, situational humor rather than personal topics."

**Demonstrates**: Cultural boundaries, humor norms, respect for family honor

---

## End of Knowledge Base

**Total Phrase Entries**: 30
**Behavioral Rules**: 5 major categories
**Evaluation Prompts**: 12 comprehensive scenarios
**Focus**: Cultural intelligence, behavioral nuance, indirect communication, respect hierarchies
