# Page-by-Page Implementation Guide

## ⚠️ IMPORTANT: German Version Uses "Du" (Informal)

All German copy in this guide uses **"Du"** (informal) instead of "Sie" (formal).

**Why this works for your brand:**
- ✅ Modern tech/startup positioning
- ✅ Personal, direct approach (matches "just me" message)
- ✅ Anti-establishment positioning (agencies use "Sie")
- ✅ Younger decision-makers (30-45) expect "Du" in tech
- ✅ More approachable and conversational

**Consistency rule:** Once you choose "Du", use it everywhere. Mixing looks unprofessional.

---

## How to Use This Guide

Each section shows:
- **FILE LOCATION** - Where to make the change
- **FIND** - The current text
- **REPLACE WITH** - The new optimized text
- **WHY** - Brief explanation of the change

---

## 1. NAVIGATION (`src/components/layout/Navigation.tsx`)

### Change 1.1: Navigation Labels

**FILE:** `src/components/layout/Navigation.tsx`

**FIND (English):**
```jsx
Web Design
Software Design
UX Design
Work
About
```

**REPLACE WITH:**
```jsx
Websites You Own
Build Your Software
Fix What's Broken
Our Work
Our Story
```

---

**FIND (German):**
```jsx
Web Design
Software Design
UX Design
Arbeiten
Über Mich
```

**REPLACE WITH:**
```jsx
Websites, die dir gehören
Deine Software bauen
Reparieren, was kaputt ist
Unsere Arbeiten
Unsere Geschichte
```

**WHY:** Benefit-focused labels communicate value immediately. People understand what they'll get.

---

## 2. FOOTER (`src/components/layout/Footer.tsx`)

### Change 2.1: Tagline

**FILE:** `src/components/layout/Footer.tsx`

**FIND:**
```jsx
Building digital assets for the AI age.
```

**REPLACE WITH (English):**
```jsx
You pay once. You own it forever.
```

**REPLACE WITH (German):**
```jsx
Einmal zahlen. Für immer besitzen.
```

**WHY:** Original is vague buzzwords. New version is concrete and differentiating.

---

## 3. HOME PAGE (`src/pages/Home.tsx`)

### Change 3.1: Meta Description

**FILE:** `src/pages/Home.tsx` (SEO section)

**FIND (English):**
```jsx
Stop renting your tech stack. I build fast, custom software assets that you own. React, Next.js, AI-Accelerated.
```

**REPLACE WITH:**
```jsx
Most companies rent their website from WordPress or Webflow. We build yours. You own it forever. No monthly fees. Starting at €5,800.
```

---

**FIND (German):**
```jsx
Schluss mit Baukasten-Abos. Ich entwickle blitzschnelle Software-Assets, die Ihnen gehören. React, Next.js, AI-Accelerated.
```

**REPLACE WITH:**
```jsx
Die meisten Firmen mieten ihre Website von WordPress oder Webflow. Wir bauen deine. Sie gehört dir für immer. Keine monatlichen Kosten. Ab €5.800.
```

**WHY:** Remove jargon ("tech stack", "assets", "AI-Accelerated"). Add concrete pricing. Clear contrast with competition.

---

### Change 3.2: Hero Headline

**FILE:** `src/pages/Home.tsx` (Hero Section)

**FIND (English):**
```jsx
WEBSITES & MVPS AS REAL COMPANY ASSETS.
```

**REPLACE WITH:**
```jsx
Your website. Your code. Your property.
```

---

**FIND (German):**
```jsx
WEBSEITEN & MVPS ALS ECHTES FIRMENEIGENTUM.
```

**REPLACE WITH:**
```jsx
Deine Website. Dein Code. Dein Eigentum.
```

**WHY:** Remove all caps (aggressive). Remove jargon ("assets", "Firmeneigentum"). Three short, powerful statements.

---

### Change 3.3: Hero Description

**FILE:** `src/pages/Home.tsx` (Hero Section)

**FIND (English):**
```jsx
Stop renting your tech stack. I build fast, custom software assets that you own. 100% Source Code Handover. Engineered with AI Speed, secured by human expertise.
```

**REPLACE WITH:**
```jsx
Right now, you're probably paying WordPress €50 every month. Or Webflow €200. Forever.

That's €2,400 per year for something you'll never own.

We're different. You pay once. We build your website. We give you the code. It's yours. Forever.

Need changes? Any developer can help you. You're not stuck with us.
```

---

**FIND (German):**
```jsx
Schluss mit WordPress-Updates und Baukasten-Abos. Ich entwickle blitzschnelle, maßgeschneiderte Software-Assets, die Ihnen gehören. 100% Quellcode-Übergabe.
```

**REPLACE WITH:**
```jsx
Gerade zahlst du wahrscheinlich jeden Monat €50 an WordPress. Oder €200 an Webflow. Für immer.

Das sind €2.400 pro Jahr für etwas, das dir nie gehören wird.

Wir machen das anders. Du zahlst einmal. Wir bauen deine Website. Wir geben dir den Code. Sie gehört dir. Für immer.

Brauchst du Änderungen? Jeder Entwickler kann dir helfen. Du sitzt nicht bei uns fest.
```

**WHY:** Open with relatable pain (monthly fees). Use concrete numbers. Short sentences. Address lock-in fear.

---

### Change 3.4: Independence Guarantee

**FILE:** `src/pages/Home.tsx` (Trust Badge)

**FIND (English):**
```jsx
You receive full copyright and source code (GitHub). You are not tied to any agency.
```

**REPLACE WITH:**
```jsx
We give you everything. The code lives in your GitHub account. If you don't like us tomorrow, walk away with your website. No questions asked.
```

---

**FIND (German):**
```jsx
Sie erhalten das volle Urheberrecht und den Source Code (GitHub). Sie sind an keine Agentur gebunden.
```

**REPLACE WITH:**
```jsx
Wir geben dir alles. Der Code liegt in deinem GitHub-Account. Wenn wir dir morgen nicht mehr gefallen, gehst du mit deiner Website. Keine Fragen.
```

**WHY:** Less legal language. More emotional. Addresses "what if I hate working with them" fear.

---

### Change 3.5: Services Section Headline

**FILE:** `src/pages/Home.tsx` (Services Bento Grid)

**FIND (English):**
```jsx
MY PRODUCTS.
```

**REPLACE WITH:**
```jsx
Three Ways We Help You.
```

---

**FIND (German):**
```jsx
MEINE PRODUKTE.
```

**REPLACE WITH:**
```jsx
Drei Wege, wie wir dir helfen.
```

**WHY:** "My products" is self-centered. "We help you" is customer-focused.

---

### Change 3.6: Service Card 1 (Web Design)

**FILE:** `src/pages/Home.tsx` (Services Bento Grid - Card 1)

**FIND (English):**
```jsx
Headline: The Marketing Asset
Description: High-Performance Website. Un-hackable. Yours.
```

**REPLACE WITH:**
```jsx
Headline: Get More Customers
Description: A fast website that people trust. Shows up in Google. Turns visitors into buyers. Starting at €5,800.
```

---

**FIND (German):**
```jsx
Headline: The Marketing Asset
Description: High-Performance Website. Un-hackbar. Ihr Eigentum.
```

**REPLACE WITH:**
```jsx
Headline: Mehr Kunden gewinnen
Description: Eine schnelle Website, der die Leute vertrauen. Erscheint bei Google. Verwandelt Besucher in Käufer. Ab €5.800.
```

**WHY:** Lead with benefit ("Get More Customers"). Explain how in simple terms. Add price for transparency.

---

### Change 3.7: Service Card 2 (App Design)

**FILE:** `src/pages/Home.tsx` (Services Bento Grid - Card 2)

**FIND (English):**
```jsx
Headline: The Validation MVP
Description: Software prototype in 2-4 weeks. Test before cash runs out.
```

**REPLACE WITH:**
```jsx
Headline: Test Your Idea Fast
Description: A working version of your software in 2 weeks. Show it to real customers. Find out if people want it before you spend €100k.
```

---

**FIND (German):**
```jsx
Headline: The Validation MVP
Description: Software Prototyp in 2-4 Wochen. Testen, bevor das Geld ausgeht.
```

**REPLACE WITH:**
```jsx
Headline: Teste deine Idee schnell
Description: Eine funktionierende Version deiner Software in 2 Wochen. Zeige sie echten Kunden. Finde heraus, ob die Leute sie wollen, bevor du €100k ausgibst.
```

**WHY:** Remove jargon ("Validation MVP"). Change negative framing ("cash runs out") to risk mitigation.

---

### Change 3.8: Service Card 3 (UX Design)

**FILE:** `src/pages/Home.tsx` (Services Bento Grid - Card 3)

**FIND (English):**
```jsx
Headline: UX Audit & Rescue
Description: We find the leaks where you lose revenue.
```

**REPLACE WITH:**
```jsx
Headline: Fix Why People Leave
Description: Your website gets visitors. But they don't buy. We find exactly where they give up. Then we fix it. Most clients see 20-40% more sales.
```

---

**FIND (German):**
```jsx
Headline: UX Audit & Rescue
Description: Wir finden die Löcher im System, wo Sie Umsatz verlieren.
```

**REPLACE WITH:**
```jsx
Headline: Reparieren, warum Leute gehen
Description: Deine Website bekommt Besucher. Aber sie kaufen nicht. Wir finden genau, wo sie aufgeben. Dann reparieren wir es. Die meisten Kunden sehen 20-40% mehr Verkäufe.
```

**WHY:** "UX Audit" sounds like paperwork. "Fix why people leave" is the actual problem. Add social proof (20-40%).

---

### Change 3.9: Velocity Section

**FILE:** `src/pages/Home.tsx` (Velocity Section)

**FIND (English):**
```jsx
Headline: Weeks? No. Days.
Description: The old agency world is slow. I use AI acceleration for the code, so we can focus on the architecture and strategy.
```

**REPLACE WITH:**
```jsx
Headline: Why we're faster than agencies.
Description: Normal agencies have 5 people in every meeting. They bill €150 per hour. Everything takes months.

We use AI for the boring parts. Writing repetitive code. Formatting. Testing. That means you get a real person focused on making your business better. Not on typing.
```

---

**FIND (German):**
```jsx
Headline: Wochen? Nein. Tage.
Description: Die alte Agentur-Welt ist langsam. Ich nutze KI-Beschleunigung für den Code, damit wir uns auf die Architektur konzentrieren können.
```

**REPLACE WITH:**
```jsx
Headline: Warum wir schneller sind als Agenturen.
Description: Normale Agenturen haben 5 Leute in jedem Meeting. Sie rechnen €150 pro Stunde ab. Alles dauert Monate.

Wir nutzen KI für die langweiligen Teile. Repetitiven Code schreiben. Formatieren. Testen. Das bedeutet, du bekommst eine echte Person, die sich darauf konzentriert, dein Geschäft besser zu machen. Nicht aufs Tippen.
```

**WHY:** Explain the pain first (agencies are slow and expensive). Then explain how AI helps in simple terms.

---

### Change 3.10: Process Step 1

**FILE:** `src/components/LiveProcess.tsx` or `src/pages/Home.tsx` (Process Section)

**FIND (English):**
```jsx
Step 1: Goal & Kickoff
We define the goal. I structure the project for the AI.
```

**REPLACE WITH:**
```jsx
Step 1: Goal & Kickoff

What we do: You tell us what you need. We ask questions until we understand your business.

What you get: A simple document that says exactly what we'll build. No surprises later.
```

---

**FIND (German):**
```jsx
Step 1: Ziel & Start
Wir definieren das Ziel. Ich strukturiere das Projekt für die AI.
```

**REPLACE WITH:**
```jsx
Step 1: Ziel & Start

Was wir tun: Du sagst uns, was du brauchst. Wir stellen Fragen, bis wir dein Geschäft verstehen.

Was du bekommst: Ein einfaches Dokument, das genau sagt, was wir bauen werden. Keine Überraschungen später.
```

**WHY:** "Structure the project for the AI" is internal process. Focus on customer experience instead.

---

### Change 3.11: Process Step 2

**FILE:** Same as above

**FIND (English):**
```jsx
Step 2: The Draft
You get a complete, functional version. Not a static image.
```

**REPLACE WITH:**
```jsx
Step 2: The Draft

What we do: We build a working version. You can click through it. Test it on your phone.

What you get: A real website you can show to your team. Not just pictures in a PDF.
```

---

**FIND (German):**
```jsx
Step 2: Der Entwurf
Sie erhalten eine vollständige, funktionierende Version. Kein statisches Bild.
```

**REPLACE WITH:**
```jsx
Step 2: Der Entwurf

Was wir tun: Wir bauen eine funktionierende Version. Du kannst durchklicken. Auf deinem Handy testen.

Was du bekommst: Eine echte Website, die du deinem Team zeigen kannst. Nicht nur Bilder in einem PDF.
```

**WHY:** Give concrete details. "You can click through it" is more tangible than "functional version."

---

### Change 3.12: FAQ 1 (Source Code Ownership)

**FILE:** `src/pages/Home.tsx` (FAQ Section)

**FIND (English):**
```jsx
Q: Who owns the source code after development?
A: You own the source code 100%. You get full access to the GitHub repository. No hidden clauses. You can give the code to any developer anytime or develop it further yourself.
```

**REPLACE WITH:**
```jsx
Q: Who owns my website after you build it?

A: You do. 100%.

Think of it like buying a house. After you pay us, we give you the keys. The website is yours.

We put all the code in a secure folder online (called GitHub). Only you can access it. You can hire any developer to change it. Or sell your company with the website included.

We have zero claim on your website after we hand it over.
```

---

**FIND (German):**
```jsx
Q: Wer besitzt den Quellcode nach der Entwicklung?
A: Sie besitzen den Quellcode zu 100%. Sie erhalten Zugriff auf das GitHub Repository. Keine versteckten Klauseln. Sie können den Code jederzeit an einen anderen Entwickler geben oder selbst weiterentwickeln.
```

**REPLACE WITH:**
```jsx
F: Wem gehört meine Website, nachdem ihr sie gebaut habt?

A: Dir. 100%.

Denk daran wie beim Hauskauf. Nachdem du uns bezahlt hast, geben wir dir die Schlüssel. Die Website gehört dir.

Wir legen den ganzen Code in einen sicheren Ordner online (genannt GitHub). Nur du kannst darauf zugreifen. Du kannst jeden Entwickler beauftragen, es zu ändern. Oder deine Firma mit der Website verkaufen.

Wir haben null Anspruch auf deine Website, nachdem wir sie übergeben haben.
```

**WHY:** Use metaphor (house) to explain technical concept. Break into short paragraphs. Address unstated fear ("what if I want to sell my company").

---

### Change 3.13: FAQ 3 (WordPress Comparison)

**FILE:** `src/pages/Home.tsx` (FAQ Section)

**FIND (English):**
```jsx
Q: What's the difference between a custom website and WordPress?
A: WordPress is slow, insecure, and hard to maintain. Our custom websites are fast (100/100 Core Web Vitals), secure, and low maintenance. You own the code. No monthly plugin costs. No security updates needed.
```

**REPLACE WITH:**
```jsx
Q: Why not just use WordPress?

A: WordPress is like renting an apartment. Our websites are like owning a house.

With WordPress:
• You pay forever (€50-200/month)
• Plugins break after updates
• Hackers target it (it's 43% of all websites)
• Slow loading = people leave = lost money

With us:
• You pay once
• Nothing breaks (no plugins)
• Custom-built = hard to hack
• Fast loading = people stay = more money

Here's the real difference: A WordPress site takes 3-5 seconds to load. Ours takes 0.8 seconds. Google did a study: Every second of delay costs you 20% of your visitors.
```

---

**FIND (German):**
```jsx
Q: Was ist der Unterschied zwischen einer Custom Website und WordPress?
A: WordPress ist langsam, unsicher und schwer zu warten. Unsere Custom Websites sind schnell (100/100 Core Web Vitals), sicher und wartungsarm. Sie besitzen den Code. Keine monatlichen Plugin-Kosten. Keine Sicherheits-Updates nötig.
```

**REPLACE WITH:**
```jsx
F: Warum nicht einfach WordPress nutzen?

A: WordPress ist wie eine Wohnung mieten. Unsere Websites sind wie ein Haus besitzen.

Mit WordPress:
• Du zahlst für immer (€50-200/Monat)
• Plugins brechen nach Updates
• Hacker zielen darauf ab (es sind 43% aller Websites)
• Langsames Laden = Leute gehen = verlorenes Geld

Mit uns:
• Du zahlst einmal
• Nichts bricht (keine Plugins)
• Individuell gebaut = schwer zu hacken
• Schnelles Laden = Leute bleiben = mehr Geld

Hier ist der echte Unterschied: Eine WordPress-Site braucht 3-5 Sekunden zum Laden. Unsere braucht 0,8 Sekunden. Google machte eine Studie: Jede Sekunde Verzögerung kostet dich 20% deiner Besucher.
```

**WHY:** Use comparison table format. Add concrete statistics. Connect speed to money (the thing they care about).

---

### Change 3.14: FAQ 6 (AI Safety)

**FILE:** `src/pages/Home.tsx` (FAQ Section)

**FIND (English):**
```jsx
Q: Is code written with AI secure?
A: Yes. Every line of AI-generated code is reviewed by me. I have 10 years of enterprise security experience (Allianz, Volkswagen, Novartis). No hallucinations. No insecure code lines. You get AI speed with human expertise.
```

**REPLACE WITH:**
```jsx
Q: Is AI code safe? Won't it break?

A: Here's the truth: AI writes code fast. But it makes mistakes.

That's why I check every single line. I've built software for banks (Allianz) and car companies (Volkswagen) for 10 years. I know what breaks and what doesn't.

Think of AI like a junior developer who works 24/7. They're fast but need supervision. I'm the supervisor.

You get the speed of AI + the safety of human experience.
```

---

**FIND (German):**
```jsx
Q: Ist Code der mit KI geschrieben wurde sicher?
A: Ja. Jede Zeile KI-generierten Codes wird von mir geprüft. Ich habe 10 Jahre Erfahrung mit Enterprise-Sicherheit (Allianz, Volkswagen, Novartis). Keine Halluzinationen. Keine unsicheren Codezeilen. Sie bekommen KI-Geschwindigkeit mit menschlicher Expertise.
```

**REPLACE WITH:**
```jsx
F: Ist KI-Code sicher? Wird er nicht kaputt gehen?

A: Hier ist die Wahrheit: KI schreibt Code schnell. Aber sie macht Fehler.

Deshalb überprüfe ich jede einzelne Zeile. Ich habe 10 Jahre lang Software für Banken (Allianz) und Autofirmen (Volkswagen) gebaut. Ich weiß, was kaputtgeht und was nicht.

Denk an KI wie an einen Junior-Entwickler, der 24/7 arbeitet. Sie ist schnell, braucht aber Aufsicht. Ich bin die Aufsicht.

Du bekommst die Geschwindigkeit von KI + die Sicherheit menschlicher Erfahrung.
```

**WHY:** Admit the concern upfront. Use metaphor (junior developer). Show why human review matters.

---

## 4. ABOUT PAGE (`src/pages/About.tsx`)

### Change 4.1: Hero Headline

**FILE:** `src/pages/About.tsx`

**FIND (English):**
```jsx
10 YEARS. NO FLUFF.
```

**REPLACE WITH:**
```jsx
Hi. I'm the person who will build your website.
```

**Subheadline:**
```jsx
Not a team of 10. Not an agency. Just me. And I've been doing this for 10 years.
```

---

**FIND (German):**
```jsx
10 YEARS. KEIN BULLSHIT.
```

**REPLACE WITH:**
```jsx
Hallo. Ich bin die Person, die deine Website baut.
```

**Subheadline:**
```jsx
Kein Team von 10 Leuten. Keine Agentur. Nur ich. Und ich mache das seit 10 Jahren.
```

**WHY:** "No fluff" and "Kein Bullshit" are defensive. Personal introduction is warmer. Germans especially appreciate directness about who they're working with.

---

### Change 4.2: Bio Section

**FILE:** `src/pages/About.tsx`

**FIND (English):**
```jsx
I'm a UX designer with 10 years of experience. I was CEO of a tea brand and e-commerce company in Japan. I built processes and designed websites and software for Allianz, Novartis, Volkswagen, Sparkasse, 123erfasst, BLVRD, and several German startups.

I combine AI with my knowledge. This gives you the best of both worlds: speed and quality.
```

**REPLACE WITH:**
```jsx
I started building websites when I was 23. Taught myself everything.

Then I became a CEO. Ran an online tea company in Japan. Learned what it's like to worry about money. To need something built fast. To not have a million euros for an agency.

After that, I worked for the big guys. Banks. Car companies. Pharma. Learned how they build software that doesn't break.

Now I help small and medium companies get the same quality the big guys get. But without the big guy prices.
```

---

**FIND (German):**
```jsx
Ich bin UX-Designer mit 10 Jahren Erfahrung. Ich war CEO einer Teemarke und E-Commerce-Firma in Japan. Ich habe Prozesse aufgebaut und Websites sowie Software für Allianz, Novartis, Volkswagen, Sparkasse, 123erfasst, BLVRD und mehrere deutsche Startups entwickelt.

Ich kombiniere KI mit meinem Wissen. Das gibt Ihnen das Beste aus beiden Welten: Geschwindigkeit und Qualität.
```

**REPLACE WITH:**
```jsx
Ich fing an, Websites zu bauen, als ich 23 war. Habe mir alles selbst beigebracht.

Dann wurde ich CEO. Führte eine Online-Teefirma in Japan. Lernte, wie es ist, sich um Geld zu sorgen. Etwas schnell gebaut zu brauchen. Keine Million Euro für eine Agentur zu haben.

Danach arbeitete ich für die Großen. Banken. Autofirmen. Pharma. Lernte, wie sie Software bauen, die nicht kaputtgeht.

Jetzt helfe ich kleinen und mittleren Firmen, die gleiche Qualität zu bekommen wie die Großen. Aber ohne die Preise der Großen.
```

**WHY:** Tell a story arc (struggled → learned → now help others). Shows empathy for customer's situation.

---

## 5. WEB DESIGN SERVICE PAGE (`src/pages/ServiceWebDesign.tsx`)

### Change 5.1: Hero Headline

**FILE:** `src/pages/ServiceWebDesign.tsx`

**FIND:**
```jsx
OWN YOUR WEBSITE. 100% FUTURE PROOF.
```

**REPLACE WITH (English):**
```jsx
A website that makes you money.
```

**Subheadline:**
```jsx
Fast. Looks good. Easy to find on Google. And it's yours forever.
```

---

**REPLACE WITH (German):**
```jsx
Eine Website, die dir Geld bringt.
```

**Subheadline:**
```jsx
Schnell. Sieht gut aus. Leicht auf Google zu finden. Und sie gehört dir für immer.
```

**WHY:** "Future proof" is impossible to promise. "Makes you money" is the actual benefit.

---

### Change 5.2: Add Pricing Context

**FILE:** `src/pages/ServiceWebDesign.tsx` (Before pricing packages)

**ADD THIS NEW SECTION (English):**
```jsx
### What You'll Pay

Most agencies charge €15,000-50,000 for a website. Then €2,000/month for 'maintenance.'

We charge €5,800. Once. That includes everything you need to get started.

No monthly fees. No surprises. No 'oh, that feature costs extra.'
```

---

**ADD THIS NEW SECTION (German):**
```jsx
### Was du zahlen wirst

Die meisten Agenturen verlangen €15.000-50.000 für eine Website. Dann €2.000/Monat für 'Wartung.'

Wir verlangen €5.800. Einmal. Das beinhaltet alles, was du zum Starten brauchst.

Keine monatlichen Gebühren. Keine Überraschungen. Kein 'oh, diese Funktion kostet extra.'
```

**WHY:** Anchor pricing against expensive alternatives. Address "hidden fees" fear upfront.

---

### Change 5.3: Tech Stack Explanation

**FILE:** `src/pages/ServiceWebDesign.tsx` or `TechStackMatrix.tsx`

**FIND (or ADD NEW):**
Current tech stack just lists: React 19, TypeScript, Tailwind CSS, etc.

**REPLACE WITH / ADD BEFORE (English):**
```jsx
### What We Build With

We use modern tools that are fast and reliable:

React - The same technology Facebook and Netflix use. Very fast. Very stable.

TypeScript - Catches errors before your website goes live. Means fewer bugs.

Tailwind CSS - Makes your website look good on phones, tablets, and computers. Automatically.

Sanity CMS - You can edit your website yourself. No coding needed. Like WordPress but faster and safer.

You don't need to understand these tools. But any developer you hire later will recognize them. That's important.
```

---

**REPLACE WITH / ADD BEFORE (German):**
```jsx
### Womit wir bauen

Wir nutzen moderne Tools, die schnell und zuverlässig sind:

React - Die gleiche Technologie, die Facebook und Netflix nutzen. Sehr schnell. Sehr stabil.

TypeScript - Fängt Fehler ab, bevor deine Website live geht. Bedeutet weniger Bugs.

Tailwind CSS - Macht deine Website auf Handys, Tablets und Computern gut aussehend. Automatisch.

Sanity CMS - Du kannst deine Website selbst bearbeiten. Kein Coding nötig. Wie WordPress, aber schneller und sicherer.

Du musst diese Tools nicht verstehen. Aber jeder Entwickler, den du später beauftragst, wird sie erkennen. Das ist wichtig.
```

**WHY:** Translate technical terms into benefits. The last line addresses "am I locked into weird technology" fear.

---

## 6. APP DESIGN SERVICE PAGE (`src/pages/ServiceAppDesign.tsx`)

### Change 6.1: Complete Hero Rewrite

**FILE:** `src/pages/ServiceAppDesign.tsx`

**FIND (English):**
```jsx
Headline: GET YOUR SOFTWARE NEXT WEEK.
Description: We build your software. You get the code. You own it forever. Fast and simple.
```

**REPLACE WITH:**
```jsx
# Test Your Software Idea Before Spending €100k

Here's the problem:

You have an idea for software. Maybe an app. Maybe a web platform.

You could hire developers. Spend €100,000. Wait 12 months.

Then find out nobody wants it.

Or you could do this:

We build a simple version in 2 weeks. Just the core feature. The thing that makes your idea unique.

You show it to real potential customers. They either love it or hate it.

If they love it: Great. Now you know it's worth building properly.

If they hate it: Also great. You just saved €100,000.

This is called an MVP. Minimum Viable Product. It's how smart companies test ideas.
```

---

**FIND (German):**
```jsx
Headline: GET YOUR SOFTWARE NEXT WEEK.
Description: We build your software. You get the code. You own it forever. Fast and simple.
```

**REPLACE WITH:**
```jsx
# Teste deine Software-Idee, bevor du €100k ausgibst

Hier ist das Problem:

Du hast eine Idee für Software. Vielleicht eine App. Vielleicht eine Web-Plattform.

Du könntest Entwickler einstellen. €100.000 ausgeben. 12 Monate warten.

Dann herausfinden, dass niemand es will.

Oder du könntest das tun:

Wir bauen eine einfache Version in 2 Wochen. Nur die Kernfunktion. Das Ding, das deine Idee einzigartig macht.

Du zeigst es echten potenziellen Kunden. Die lieben es entweder oder hassen es.

Wenn sie es lieben: Großartig. Jetzt weißt du, dass es sich lohnt, es richtig zu bauen.

Wenn sie es hassen: Auch großartig. Du hast gerade €100.000 gespart.

Das nennt man ein MVP. Minimum Viable Product. So testen kluge Firmen Ideen.
```

**WHY:** Current version jumps to solution. New version establishes pain first (waste €100k on wrong idea), then offers solution. Explains "MVP" since it's not common in German market.

---

## 7. UX DESIGN SERVICE PAGE (`src/pages/ServiceUX.tsx`)

### Change 7.1: Add Problem Story Before Hero

**FILE:** `src/pages/ServiceUX.tsx`

**ADD BEFORE HERO (English):**
```jsx
Let me guess:

Your website gets 10,000 visitors per month.

But only 50 of them become customers.

You don't know why the other 9,950 leave.

Your marketing team brings people to your website. But something on the website makes them leave. Maybe the checkout is confusing. Maybe the pricing isn't clear. Maybe the homepage doesn't explain what you do.

This is costing you real money. Every day.

Most companies just guess at solutions. 'Maybe we need more pictures?' 'Maybe the button should be bigger?'

We don't guess. We measure. We find exactly where people give up. Then we fix it.

Our average client sees 30% more conversions within 4 weeks.
```

---

**ADD BEFORE HERO (German):**
```jsx
Lass mich raten:

Deine Website bekommt 10.000 Besucher pro Monat.

Aber nur 50 von ihnen werden Kunden.

Du weißt nicht, warum die anderen 9.950 gehen.

Dein Marketing-Team bringt Leute auf deine Website. Aber etwas auf der Website lässt sie gehen. Vielleicht ist der Checkout verwirrend. Vielleicht ist das Pricing nicht klar. Vielleicht erklärt die Homepage nicht, was du tust.

Das kostet dich echtes Geld. Jeden Tag.

Die meisten Firmen raten nur bei Lösungen. 'Vielleicht brauchen wir mehr Bilder?' 'Vielleicht sollte der Button größer sein?'

Wir raten nicht. Wir messen. Wir finden genau, wo die Leute aufgeben. Dann reparieren wir es.

Unser durchschnittlicher Kunde sieht 30% mehr Conversions innerhalb von 4 Wochen.
```

**WHY:** UX audits are hard to sell because the problem is invisible. This section makes it visible and relatable.

---

## 8. WORK PAGE (`src/pages/Work.tsx`)

### Change 8.1: Case Study 1 (Neobank) - Add Story

**FILE:** `src/pages/Work.tsx` or individual case study file

**FIND:**
```jsx
Neobank Ventures (Fintech MVP)
A High-Frequency Trading Interface for Gen Z. React prototype in 72 hours.
Stats: Funding Raised $4.2M, Time to Build 3 Weeks.
```

**REPLACE WITH (English):**
```jsx
### Neobank for 20-Somethings

The Problem:
This startup wanted to build a banking app for young people. They had €4M to raise from investors. But investors wanted to see something real. Not just slides.

What We Built:
A working prototype in 72 hours. You could create an account. Link a credit card. Track spending. All the core features.

Not polished. Not perfect. But real.

The Result:
They showed it to investors on Monday. By Friday, they had €4.2M committed.

Cost to build: €12,000
Money raised: €4,200,000
ROI: 35,000%
```

---

**REPLACE WITH (German):**
```jsx
### Neobank für 20-Jährige

Das Problem:
Dieses Startup wollte eine Banking-App für junge Leute bauen. Sie hatten €4M bei Investoren zu sammeln. Aber Investoren wollten etwas Echtes sehen. Nicht nur Folien.

Was wir gebaut haben:
Einen funktionierenden Prototypen in 72 Stunden. Man konnte ein Konto erstellen. Eine Kreditkarte verknüpfen. Ausgaben verfolgen. Alle Kernfunktionen.

Nicht poliert. Nicht perfekt. Aber echt.

Das Ergebnis:
Sie zeigten es Investoren am Montag. Bis Freitag hatten sie €4,2M zugesagt.

Baukosten: €12.000
Eingesammeltes Geld: €4.200.000
ROI: 35.000%
```

**WHY:** Numbers alone don't tell a story. This creates narrative tension (problem → solution → result) and makes success concrete.

---

## QUICK IMPLEMENTATION CHECKLIST

### Week 1: Critical Home Page Changes
- [ ] Navigation labels (5 min)
- [ ] Footer tagline (2 min)
- [ ] Hero headline (5 min)
- [ ] Hero description (10 min)
- [ ] Services section headline (2 min)
- [ ] All 3 service cards (15 min)
- [ ] FAQ 1 (ownership) (10 min)
- [ ] FAQ 3 (WordPress) (10 min)
- [ ] FAQ 6 (AI safety) (10 min)

**Total Time: ~70 minutes**

### Week 2: About & Service Pages
- [ ] About page headline (5 min)
- [ ] About page bio story (15 min)
- [ ] Web Design page hero (10 min)
- [ ] Web Design pricing context (10 min)
- [ ] App Design page complete rewrite (20 min)
- [ ] UX page problem story (15 min)

**Total Time: ~75 minutes**

### Week 3: Work & Polish
- [ ] Rewrite case study 1 with story (20 min)
- [ ] Rewrite case study 2 with story (20 min)
- [ ] German proofreading by native speaker (hire this out)
- [ ] Test all pages on mobile (30 min)

**Total Time: ~90 minutes + proofreading cost**

---

## TESTING YOUR CHANGES

After implementing, check:

1. **Readability Test**: Paste text into hemingwayapp.com
   - Target: Grade 5-6 (currently 9-11)
   
2. **Jargon Check**: Search your pages for:
   - "Asset", "Stack", "Architecture", "Leverage", "Utilize"
   - Replace with simpler words

3. **Mobile Test**: Read entire page on phone
   - Do headlines make sense without context?
   - Are paragraphs short (3-4 lines max)?

4. **German Native Review**: Hire a German copywriter for 1 hour
   - Focus on: Tone, natural phrasing, business appropriateness

5. **Customer Test**: Send to 3 potential clients
   - Ask: "What do we do?" (if they can't answer, headline failed)
   - Ask: "Why would you choose us?" (if unclear, value prop failed)

---

## COMMON MISTAKES TO AVOID

❌ **Don't** just swap words directly - rewrite for meaning
❌ **Don't** keep all caps headlines - use sentence case
❌ **Don't** use "we" and "I" inconsistently - pick one
❌ **Don't** translate English→German literally - hire native speaker
❌ **Don't** remove all technical terms - some customers want them
❌ **Don't** make everything informal - balance approachability with professionalism

✅ **Do** read changes out loud - does it sound natural?
✅ **Do** keep paragraphs short - 2-3 sentences max
✅ **Do** use specific numbers - "€5,800" not "affordable"
✅ **Do** address fears directly - "You're not stuck with us"
✅ **Do** explain technical terms when used - "GitHub (a secure folder online)"
✅ **Do** tell stories - problem→solution→result format

---

*This guide covers the highest-impact changes. Implement in order of priority. Measure results. Iterate based on data.*