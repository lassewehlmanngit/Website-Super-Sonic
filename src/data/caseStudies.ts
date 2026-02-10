// ============================================
// CASE STUDY DATA TYPES
// ============================================

export interface CaseStudyMetric {
  label: string;
  value: string;
  comparison?: string;
}

export interface CaseStudyPreview {
  problem: string;
  solution: string;
  result: string;
  metric: string;
  metricLabel: string;
}

export interface CaseStudyStory {
  hook: string;
  turningPoint: string;
  transformation: string;
}

export interface CaseStudyContent {
  intro: string;
  story?: CaseStudyStory;
  challenge: string[];
  approach: string[];
  features: { title: string; description: string }[];
  results: string[];
  techStack: string[];
  metrics: CaseStudyMetric[];
  conclusion: string;
}

export interface CaseStudySEO {
  title: string;
  description: string;
}

export interface CaseStudyFAQ {
  question: string;
  answer: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  year: string;
  heroImage?: string;
  images?: Record<string, string>;
  color: string;
  icon: 'leaf' | 'truck' | 'scale' | 'server' | 'building' | 'store';
  liveUrl?: string;
  preview: CaseStudyPreview;
  content: CaseStudyContent;
  faqs?: CaseStudyFAQ[];
  seo: CaseStudySEO;
}

export interface MiniCaseStudy {
  title: string;
  problem: string;
  solution: string;
  result: string;
  metric: string;
  metricLabel: string;
}

export interface LocalizedCaseStudies {
  de: CaseStudy[];
  en: CaseStudy[];
  ja: CaseStudy[];
}

export interface LocalizedMiniCaseStudies {
  de: MiniCaseStudy[];
  en: MiniCaseStudy[];
  ja: MiniCaseStudy[];
}

// ============================================
// CASE STUDY DATA
// ============================================

export const caseStudies: LocalizedCaseStudies = {
  de: [
    {
      slug: 'matcha-partners',
      title: 'Matcha Partners',
      client: 'Matcha Partners',
      industry: 'B2B Food & Beverage',
      year: '2024',
      heroImage: '/images/matcha-partners-landing-page.png',
      color: '#1B3C1D',
      icon: 'leaf',
      liveUrl: 'https://matcha-partners.com',
      preview: {
        problem: 'Komplexes B2B-Angebot klar kommunizieren – über drei Sprachen hinweg.',
        solution: 'Fokussierte Website mit intelligentem Bedarfsformular.',
        result: 'Schnellere Lead-Qualifizierung und klare Positionierung.',
        metric: '3',
        metricLabel: 'Sprachen: DE, EN, JP',
      },
      content: {
        intro: 'Wie wir für einen neuen Player im deutschen Matcha-Markt eine Website gebaut haben, die komplexe B2B-Anforderungen auf den Punkt bringt.',
        story: {
          hook: 'Die Matcha-Branche steht vor einem perfekten Sturm: Explodierende Nachfrage trifft auf alternde Farmer, die ihre Höfe nicht mehr bewirtschaften können. Schlechte Ernten durch Wetterextreme. Farmen, die nicht international versenden. Und eine Sprachbarriere, die westliche Einkäufer von japanischen Produzenten trennt. Matcha Partners hat sich gegründet, um genau diese Lücke zu schließen – direkt aus Japan heraus.',
          turningPoint: 'Der Schlüssel war Klarheit durch Reduktion. Statt einer Feature-überladenen Website entschieden wir uns für das Minimum, das maximale Wirkung erzielt. Ein Blog? Technisch vorbereitet, aber bewusst deaktiviert – aktivierbar, sobald Zeit da ist. Jedes Element musste eine Frage beantworten: Hilft das dem Kunden zu verstehen, wie Matcha Partners ihm helfen kann?',
          transformation: 'Heute landet jede Anfrage bereits vorqualifiziert beim Team. Das intelligente Formular erkennt, ob ein kleines Café oder ein Großkonzern anfragt – und passt die Folgekommunikation entsprechend an. Keine verschwendete Zeit mehr. Nur noch Gespräche, die zählen.',
        },
        challenge: [
          'Ein neues Unternehmen im umkämpften Matcha-Markt positionieren',
          'Die echten Risiken der Branche kommunizieren: Verfügbarkeit, alternde Farmer, fehlender internationaler Versand',
          'Drei Zielsprachen abdecken: Deutsch, Englisch und Japanisch',
          'Unterschiedliche Kundentypen ansprechen – vom Café bis zum Konzern',
          'Zeit sparen: Kein Blog-Aufwand zum Start, aber Flexibilität für später',
        ],
        approach: [
          'Radikal reduziert: Nur das Nötigste implementiert, um die Botschaft kristallklar zu halten',
          'Blog-System vorbereitet, aber bewusst deaktiviert – ein Schalter genügt zur Aktivierung',
          'Dreisprachige Architektur von Tag eins: DE, EN, JP mit sauberem URL-Routing',
          'Intelligentes Bedarfsformular, das Café-Anfragen von Enterprise-Anfragen unterscheidet',
        ],
        features: [
          {
            title: 'Bedarfs-Qualifizierung',
            description: 'Das Formular erkennt automatisch den Kundentyp – ein Café hat andere Bedürfnisse als ein Konzern mit 200kg Monatsbedarf.',
          },
          {
            title: 'Dreisprachig aus Japan',
            description: 'Vollständige Lokalisierung für den deutschen, englischen und japanischen Markt – mit Sitz direkt in Japan.',
          },
          {
            title: 'Blog on Demand',
            description: 'Content-System vollständig implementiert, aber bewusst deaktiviert. Ein Klick aktiviert es, wenn das Team bereit ist.',
          },
          {
            title: 'Klarheit vor Features',
            description: 'Jedes Element wurde auf seinen Nutzen geprüft. Was nicht zur Kernbotschaft beiträgt, flog raus.',
          },
        ],
        results: [
          'Klare Positionierung als Brücke zwischen japanischen Farmen und westlichen Einkäufern',
          'Sofortige Lead-Qualifizierung durch intelligentes Formular',
          'Zukunftssichere Architektur: Blog jederzeit aktivierbar',
          'Dreisprachige Präsenz ohne Mehraufwand im Alltag',
        ],
        techStack: ['React 18', 'TypeScript', 'Vite', 'TailwindCSS', 'i18n', 'React Router'],
        metrics: [
          { label: 'Sprachen', value: '3', comparison: 'DE, EN, JP' },
          { label: 'Time to Launch', value: 'Schnell', comparison: 'Fokus auf Essentielles' },
          { label: 'Blog-Status', value: 'Ready', comparison: 'Aktivierbar bei Bedarf' },
          { label: 'Formular-Typen', value: '2+', comparison: 'Café vs. Enterprise' },
        ],
        conclusion: 'Die Matcha Partners Website beweist: Weniger ist mehr. Durch konsequenten Fokus auf das Wesentliche entstand eine Plattform, die komplexe B2B-Anforderungen verständlich macht – in drei Sprachen, mit eingebauter Flexibilität für die Zukunft.',
      },
    },
    {
      slug: 'ivangs-bedachungen',
      title: 'Relaunch Ivangs Bedachungen',
      client: 'Ivangs Bedachungen',
      industry: 'Handwerk / Dachdecker',
      year: '2025',
      heroImage: '/images/Ivangs-Bedachungen/Bild-1-hero.png',
      images: {
        hero: '/images/Ivangs-Bedachungen/Bild-1-hero.png',
        services: '/images/Ivangs-Bedachungen/Bild-2-services.png',
        material: '/images/Ivangs-Bedachungen/Bild-3-material.png',
        ceo: '/images/Ivangs-Bedachungen/Bild-4-ceo.png',
        faq: '/images/Ivangs-Bedachungen/Bild-5-faq.png',
        cta: '/images/Ivangs-Bedachungen/Bild-6-cta.png',
        contact: '/images/Ivangs-Bedachungen/bild-7-contact.png',
      },
      color: '#E30613',
      icon: 'building',
      preview: {
        problem: 'Fachliche Exzellenz nicht digital sichtbar.',
        solution: 'Moderne Web-Plattform mit Fokus auf Kundenanfragen und Recruiting.',
        result: 'Mehr qualifizierte Kundenanfragen und eine moderne Lösung für das Mitarbeiter-Recruiting.',
        metric: '2',
        metricLabel: 'Zielgruppen',
      },
      content: {
        intro: 'Ivangs Bedachungen ist fachlich top aufgestellt. Unsere Aufgabe war es, diesen Standard ins Digitale zu übertragen. Die neue Seite sollte vor allem mobil funktionieren, schnell sein und dem Nutzer sofort zeigen, woran er ist.',
        story: {
          hook: 'Auf der Startseite entscheiden sich Besucher innerhalb von Sekunden. Wir haben die Navigation radikal vereinfacht. Wir trennen die Besucher direkt beim Einstieg: Links Kunden, Rechts Bewerber.',
          turningPoint: 'Niemand liest gerne lange Textblöcke. Wir haben das visuell gelöst. Jeder Fachbereich wird als eigene Kachel mit passendem Bild dargestellt.',
          transformation: 'Wir haben die Seite nicht nur optisch modernisiert, sondern Funktionen eingebaut, die dem Betrieb im Alltag Zeit sparen. Unabhängigkeit durch TinaCMS, Bewerbung leicht gemacht, Geschwindigkeit.',
        },
        challenge: [
          'Fachlichen Standard ins Digitale übertragen',
          'Mobile Optimierung und Geschwindigkeit',
          'Klare Nutzerführung für zwei Zielgruppen (Kunden & Bewerber)',
          'Vertrauen aufbauen trotz Distanz',
          'Bewerbungsprozess vereinfachen',
        ],
        approach: [
          'Radikale Vereinfachung der Navigation (Hero Section)',
          'Visuelle Erklärung der Leistungen statt Textwüsten',
          'Hervorhebung des Wettbewerbsvorteils (Materiallager)',
          'Persönlichkeit zeigen (Echte Fotos)',
          'FAQ zur Vorab-Klärung',
        ],
        features: [
          {
            title: 'Duale Hero-Section',
            description: 'Klare Trennung von Kunden und Bewerbern direkt beim Einstieg.',
          },
          {
            title: 'Visuelle Navigation',
            description: 'Leistungen werden als Kacheln mit Bildern dargestellt.',
          },
          {
            title: 'Materiallager-Showcase',
            description: 'Prominente Darstellung des Lagerbestands als Vertrauensbeweis.',
          },
          {
            title: 'Bewerbungs-Assistent',
            description: 'Interaktiver Wizard statt komplizierter Anschreiben.',
          },
        ],
        results: [
          'Mehr qualifizierte Kundenanfragen',
          'Moderne Lösung für das Mitarbeiter-Recruiting',
          'Zeitsparung im Alltag durch CMS und FAQ',
          'Schnelle Ladezeiten auch mobil',
        ],
        techStack: ['TinaCMS', 'React', 'TypeScript', 'TailwindCSS'],
        metrics: [
          { label: 'Zielgruppen', value: '2', comparison: 'Kunden & Bewerber' },
          { label: 'CMS', value: 'Tina', comparison: 'Volle Kontrolle' },
          { label: 'Speed', value: 'Fast', comparison: 'Mobil optimiert' },
          { label: 'Bewerbung', value: 'Einfach', comparison: 'Wizard statt Mail' },
        ],
        conclusion: 'Wir haben Ivangs Bedachungen eine digitale Plattform gebaut, die zwei Aufgaben erfüllt: Sie verkauft die Dienstleistung über Vertrauen und Verfügbarkeit und macht den Bewerbungsprozess so einfach wie möglich.',
      },
      faqs: [
        {
          question: 'Was kostet eine Dachsanierung?',
          answer: 'Die Kosten variieren je nach Umfang und Material. Wir bieten eine transparente Kostenschätzung nach einer ersten Besichtigung an.',
        },
        {
          question: 'Wie lange dauert eine Dachneudeckung?',
          answer: 'Dank unseres großen Materiallagers können wir oft schneller starten. Eine typische Einfamilienhaus-Dachsanierung dauert etwa 1-2 Wochen, abhängig vom Wetter.',
        },
        {
          question: 'Gibt es Förderungen für Dachsanierungen?',
          answer: 'Ja, insbesondere für energetische Sanierungen gibt es staatliche Förderungen (z.B. BAFA, KfW). Wir beraten Sie gerne zu den aktuellen Möglichkeiten.',
        },
      ],
      seo: {
        title: 'Case Study: Relaunch Ivangs Bedachungen | Norddorf',
        description: 'Relaunch der Website für Ivangs Bedachungen. Fokus auf Kundenanfragen, Recruiting und einfache Pflege mit TinaCMS.',
      },
    },
  ],
  en: [
    {
      slug: 'matcha-partners',
      title: 'Matcha Partners',
      client: 'Matcha Partners',
      industry: 'B2B Food & Beverage',
      year: '2024',
      heroImage: '/images/matcha-partners-landing-page.png',
      color: '#1B3C1D',
      icon: 'leaf',
      liveUrl: 'https://matcha-partners.com',
      preview: {
        problem: 'Communicate complex B2B offering clearly—across three languages.',
        solution: 'Focused website with intelligent needs assessment form.',
        result: 'Faster lead qualification and clear market positioning.',
        metric: '3',
        metricLabel: 'Languages: DE, EN, JP',
      },
      content: {
        intro: 'How we built a website for a new player in the German matcha market that cuts through complexity and gets straight to the point.',
        story: {
          hook: 'The matcha industry faces a perfect storm: Exploding demand meets aging farmers who can no longer work their fields. Poor harvests from extreme weather. Farms that don\'t ship internationally. And a language barrier separating Western buyers from Japanese producers. Matcha Partners was founded to bridge exactly this gap—operating directly from Japan.',
          turningPoint: 'The key was clarity through reduction. Instead of a feature-packed website, we chose the minimum that delivers maximum impact. A blog? Technically ready, but deliberately disabled—activatable the moment time allows. Every element had to answer one question: Does this help the customer understand how Matcha Partners can help them?',
          transformation: 'Today, every inquiry arrives pre-qualified. The intelligent form recognizes whether a small café or a large corporation is reaching out—and tailors follow-up communication accordingly. No more wasted time. Only conversations that matter.',
        },
        challenge: [
          'Position a new company in the competitive matcha market',
          'Communicate the real risks of the industry: availability, aging farmers, lack of international shipping',
          'Support three target languages: German, English, and Japanese',
          'Address different customer types—from cafés to corporations',
          'Save time: No blog effort at launch, but flexibility for later',
        ],
        approach: [
          'Radically reduced: Only implemented what\'s necessary to keep the message crystal clear',
          'Blog system prepared but deliberately disabled—one switch to activate',
          'Trilingual architecture from day one: DE, EN, JP with clean URL routing',
          'Intelligent needs assessment form that distinguishes café inquiries from enterprise requests',
        ],
        features: [
          {
            title: 'Needs Qualification',
            description: 'The form automatically identifies customer type—a café has different needs than a corporation ordering 200kg monthly.',
          },
          {
            title: 'Trilingual from Japan',
            description: 'Full localization for German, English, and Japanese markets—headquartered directly in Japan.',
          },
          {
            title: 'Blog on Demand',
            description: 'Content system fully implemented but deliberately disabled. One click activates it when the team is ready.',
          },
          {
            title: 'Clarity Over Features',
            description: 'Every element was tested for usefulness. Anything that didn\'t support the core message was cut.',
          },
        ],
        results: [
          'Clear positioning as the bridge between Japanese farms and Western buyers',
          'Instant lead qualification through intelligent form',
          'Future-proof architecture: Blog activatable anytime',
          'Trilingual presence without daily overhead',
        ],
        techStack: ['React 18', 'TypeScript', 'Vite', 'TailwindCSS', 'i18n', 'React Router'],
        metrics: [
          { label: 'Languages', value: '3', comparison: 'DE, EN, JP' },
          { label: 'Time to Launch', value: 'Fast', comparison: 'Focus on essentials' },
          { label: 'Blog Status', value: 'Ready', comparison: 'Activatable on demand' },
          { label: 'Form Types', value: '2+', comparison: 'Café vs. Enterprise' },
        ],
        conclusion: 'The Matcha Partners website proves: Less is more. Through consistent focus on what matters, we created a platform that makes complex B2B requirements understandable—in three languages, with built-in flexibility for the future.',
      },
    },
    {
      slug: 'ivangs-bedachungen',
      title: 'Relaunch Ivangs Bedachungen',
      client: 'Ivangs Bedachungen',
      industry: 'Handwerk / Dachdecker',
      year: '2025',
      heroImage: '/images/Ivangs-Bedachungen/Bild-1-hero.png',
      images: {
        hero: '/images/Ivangs-Bedachungen/Bild-1-hero.png',
        services: '/images/Ivangs-Bedachungen/Bild-2-services.png',
        material: '/images/Ivangs-Bedachungen/Bild-3-material.png',
        ceo: '/images/Ivangs-Bedachungen/Bild-4-ceo.png',
        faq: '/images/Ivangs-Bedachungen/Bild-5-faq.png',
        cta: '/images/Ivangs-Bedachungen/Bild-6-cta.png',
        contact: '/images/Ivangs-Bedachungen/bild-7-contact.png',
      },
      color: '#E30613',
      icon: 'building',
      preview: {
        problem: 'Fachliche Exzellenz nicht digital sichtbar.',
        solution: 'Moderne Web-Plattform mit Fokus auf Kundenanfragen und Recruiting.',
        result: 'Mehr qualifizierte Kundenanfragen und eine moderne Lösung für das Mitarbeiter-Recruiting.',
        metric: '2',
        metricLabel: 'Zielgruppen',
      },
      content: {
        intro: 'Ivangs Bedachungen ist fachlich top aufgestellt. Unsere Aufgabe war es, diesen Standard ins Digitale zu übertragen. Die neue Seite sollte vor allem mobil funktionieren, schnell sein und dem Nutzer sofort zeigen, woran er ist.',
        story: {
          hook: 'Auf der Startseite entscheiden sich Besucher innerhalb von Sekunden. Wir haben die Navigation radikal vereinfacht. Wir trennen die Besucher direkt beim Einstieg: Links Kunden, Rechts Bewerber.',
          turningPoint: 'Niemand liest gerne lange Textblöcke. Wir haben das visuell gelöst. Jeder Fachbereich wird als eigene Kachel mit passendem Bild dargestellt.',
          transformation: 'Wir haben die Seite nicht nur optisch modernisiert, sondern Funktionen eingebaut, die dem Betrieb im Alltag Zeit sparen. Unabhängigkeit durch TinaCMS, Bewerbung leicht gemacht, Geschwindigkeit.',
        },
        challenge: [
          'Fachlichen Standard ins Digitale übertragen',
          'Mobile Optimierung und Geschwindigkeit',
          'Klare Nutzerführung für zwei Zielgruppen (Kunden & Bewerber)',
          'Vertrauen aufbauen trotz Distanz',
          'Bewerbungsprozess vereinfachen',
        ],
        approach: [
          'Radikale Vereinfachung der Navigation (Hero Section)',
          'Visuelle Erklärung der Leistungen statt Textwüsten',
          'Hervorhebung des Wettbewerbsvorteils (Materiallager)',
          'Persönlichkeit zeigen (Echte Fotos)',
          'FAQ zur Vorab-Klärung',
        ],
        features: [
          {
            title: 'Duale Hero-Section',
            description: 'Klare Trennung von Kunden und Bewerbern direkt beim Einstieg.',
          },
          {
            title: 'Visuelle Navigation',
            description: 'Leistungen werden als Kacheln mit Bildern dargestellt.',
          },
          {
            title: 'Materiallager-Showcase',
            description: 'Prominente Darstellung des Lagerbestands als Vertrauensbeweis.',
          },
          {
            title: 'Bewerbungs-Assistent',
            description: 'Interaktiver Wizard statt komplizierter Anschreiben.',
          },
        ],
        results: [
          'Mehr qualifizierte Kundenanfragen',
          'Moderne Lösung für das Mitarbeiter-Recruiting',
          'Zeitsparung im Alltag durch CMS und FAQ',
          'Schnelle Ladezeiten auch mobil',
        ],
        techStack: ['TinaCMS', 'React', 'TypeScript', 'TailwindCSS'],
        metrics: [
          { label: 'Zielgruppen', value: '2', comparison: 'Kunden & Bewerber' },
          { label: 'CMS', value: 'Tina', comparison: 'Volle Kontrolle' },
          { label: 'Speed', value: 'Fast', comparison: 'Mobil optimiert' },
          { label: 'Bewerbung', value: 'Einfach', comparison: 'Wizard statt Mail' },
        ],
        conclusion: 'Wir haben Ivangs Bedachungen eine digitale Plattform gebaut, die zwei Aufgaben erfüllt: Sie verkauft die Dienstleistung über Vertrauen und Verfügbarkeit und macht den Bewerbungsprozess so einfach wie möglich.',
      },
      faqs: [
        {
          question: 'Was kostet eine Dachsanierung?',
          answer: 'Die Kosten variieren je nach Umfang und Material. Wir bieten eine transparente Kostenschätzung nach einer ersten Besichtigung an.',
        },
        {
          question: 'Wie lange dauert eine Dachneudeckung?',
          answer: 'Dank unseres großen Materiallagers können wir oft schneller starten. Eine typische Einfamilienhaus-Dachsanierung dauert etwa 1-2 Wochen, abhängig vom Wetter.',
        },
        {
          question: 'Gibt es Förderungen für Dachsanierungen?',
          answer: 'Ja, insbesondere für energetische Sanierungen gibt es staatliche Förderungen (z.B. BAFA, KfW). Wir beraten Sie gerne zu den aktuellen Möglichkeiten.',
        },
      ],
      seo: {
        title: 'Case Study: Relaunch Ivangs Bedachungen | Norddorf',
        description: 'Relaunch der Website für Ivangs Bedachungen. Fokus auf Kundenanfragen, Recruiting und einfache Pflege mit TinaCMS.',
      },
    },
  ],
  ja: [
    {
      slug: 'matcha-partners',
      title: 'Matcha Partners',
      client: 'Matcha Partners',
      industry: 'B2B 食品・飲料',
      year: '2024',
      heroImage: '/images/matcha-partners-landing-page.png',
      color: '#1B3C1D',
      icon: 'leaf',
      liveUrl: 'https://matcha-partners.com',
      preview: {
        problem: '複雑なB2Bサービスを3言語で明確に伝える必要がありました。',
        solution: 'インテリジェントなニーズ診断フォームを備えた、焦点を絞ったウェブサイト。',
        result: 'リード獲得の効率化と明確な市場ポジショニングを実現。',
        metric: '3',
        metricLabel: '言語: 日本語、英語、ドイツ語',
      },
      content: {
        intro: 'ドイツの抹茶市場に新規参入する企業のために、複雑なB2B要件を明確に伝えるウェブサイトを構築しました。',
        story: {
          hook: '抹茶業界は完璧な嵐に直面しています：爆発的な需要と、畑を耕せなくなった高齢の農家。異常気象による不作。国際配送を行わない農園。そして、西洋のバイヤーと日本の生産者を隔てる言語の壁。Matcha Partnersは、まさにこのギャップを埋めるために設立されました——日本から直接運営しています。',
          turningPoint: '鍵は、削減による明確さでした。機能満載のウェブサイトではなく、最大の効果を発揮する最小限を選びました。ブログ？技術的には準備完了ですが、意図的に無効化——時間ができたら有効化できます。すべての要素は一つの質問に答える必要がありました：これは顧客がMatcha Partnersがどのように役立つかを理解するのに役立つか？',
          transformation: '今日、すべての問い合わせは事前に選別されて届きます。インテリジェントなフォームは、小さなカフェか大企業かを認識し、それに応じてフォローアップコミュニケーションを調整します。無駄な時間はもうありません。重要な会話だけです。',
        },
        challenge: [
          '競争の激しい抹茶市場で新会社をポジショニング',
          '業界の本当のリスクを伝える：入手可能性、高齢化する農家、国際配送の欠如',
          '3つのターゲット言語をサポート：日本語、英語、ドイツ語',
          'カフェから大企業まで、異なる顧客タイプに対応',
          '時間を節約：ローンチ時にブログの労力なし、しかし将来の柔軟性あり',
        ],
        approach: [
          '徹底的に削減：メッセージを明確に保つために必要なものだけを実装',
          'ブログシステムは準備済みだが意図的に無効化——有効化はワンスイッチ',
          '初日から3言語アーキテクチャ：日本語、英語、ドイツ語のクリーンなURLルーティング',
          'カフェの問い合わせと企業の問い合わせを区別するインテリジェントなニーズ診断フォーム',
        ],
        features: [
          {
            title: 'ニーズ選別',
            description: 'フォームは自動的に顧客タイプを識別——カフェは月200kgを注文する企業とは異なるニーズを持っています。',
          },
          {
            title: '日本からの3言語対応',
            description: '日本語、英語、ドイツ語市場向けの完全なローカライゼーション——日本に本社を置いています。',
          },
          {
            title: 'オンデマンドブログ',
            description: 'コンテンツシステムは完全に実装されていますが、意図的に無効化されています。チームの準備ができたらワンクリックで有効化。',
          },
          {
            title: '機能より明確さ',
            description: 'すべての要素は有用性をテストされました。コアメッセージをサポートしないものは削除されました。',
          },
        ],
        results: [
          '日本の農園と西洋のバイヤーの架け橋としての明確なポジショニング',
          'インテリジェントなフォームによる即座のリード選別',
          '将来を見据えたアーキテクチャ：ブログはいつでも有効化可能',
          '日常の追加作業なしの3言語プレゼンス',
        ],
        techStack: ['React 18', 'TypeScript', 'Vite', 'TailwindCSS', 'i18n', 'React Router'],
        metrics: [
          { label: '言語', value: '3', comparison: '日本語、英語、ドイツ語' },
          { label: 'ローンチまでの時間', value: '高速', comparison: '本質に集中' },
          { label: 'ブログステータス', value: '準備完了', comparison: 'オンデマンドで有効化可能' },
          { label: 'フォームタイプ', value: '2+', comparison: 'カフェ vs. 企業' },
        ],
        conclusion: 'Matcha Partnersのウェブサイトは証明しています：少ないほど多い。重要なことへの一貫した集中により、複雑なB2B要件を理解しやすくするプラットフォームを作成しました——3言語で、将来のための柔軟性を内蔵しています。',
      },
    },
    {
      slug: 'ivangs-bedachungen',
      title: 'Relaunch Ivangs Bedachungen',
      client: 'Ivangs Bedachungen',
      industry: 'Handwerk / Dachdecker',
      year: '2025',
      heroImage: '/images/Ivangs-Bedachungen/Bild-1-hero.png',
      images: {
        hero: '/images/Ivangs-Bedachungen/Bild-1-hero.png',
        services: '/images/Ivangs-Bedachungen/Bild-2-services.png',
        material: '/images/Ivangs-Bedachungen/Bild-3-material.png',
        ceo: '/images/Ivangs-Bedachungen/Bild-4-ceo.png',
        faq: '/images/Ivangs-Bedachungen/Bild-5-faq.png',
        cta: '/images/Ivangs-Bedachungen/Bild-6-cta.png',
        contact: '/images/Ivangs-Bedachungen/bild-7-contact.png',
      },
      color: '#E30613',
      icon: 'building',
      preview: {
        problem: 'Fachliche Exzellenz nicht digital sichtbar.',
        solution: 'Moderne Web-Plattform mit Fokus auf Kundenanfragen und Recruiting.',
        result: 'Mehr qualifizierte Kundenanfragen und eine moderne Lösung für das Mitarbeiter-Recruiting.',
        metric: '2',
        metricLabel: 'Zielgruppen',
      },
      content: {
        intro: 'Ivangs Bedachungen ist fachlich top aufgestellt. Unsere Aufgabe war es, diesen Standard ins Digitale zu übertragen. Die neue Seite sollte vor allem mobil funktionieren, schnell sein und dem Nutzer sofort zeigen, woran er ist.',
        story: {
          hook: 'Auf der Startseite entscheiden sich Besucher innerhalb von Sekunden. Wir haben die Navigation radikal vereinfacht. Wir trennen die Besucher direkt beim Einstieg: Links Kunden, Rechts Bewerber.',
          turningPoint: 'Niemand liest gerne lange Textblöcke. Wir haben das visuell gelöst. Jeder Fachbereich wird als eigene Kachel mit passendem Bild dargestellt.',
          transformation: 'Wir haben die Seite nicht nur optisch modernisiert, sondern Funktionen eingebaut, die dem Betrieb im Alltag Zeit sparen. Unabhängigkeit durch TinaCMS, Bewerbung leicht gemacht, Geschwindigkeit.',
        },
        challenge: [
          'Fachlichen Standard ins Digitale übertragen',
          'Mobile Optimierung und Geschwindigkeit',
          'Klare Nutzerführung für zwei Zielgruppen (Kunden & Bewerber)',
          'Vertrauen aufbauen trotz Distanz',
          'Bewerbungsprozess vereinfachen',
        ],
        approach: [
          'Radikale Vereinfachung der Navigation (Hero Section)',
          'Visuelle Erklärung der Leistungen statt Textwüsten',
          'Hervorhebung des Wettbewerbsvorteils (Materiallager)',
          'Persönlichkeit zeigen (Echte Fotos)',
          'FAQ zur Vorab-Klärung',
        ],
        features: [
          {
            title: 'Duale Hero-Section',
            description: 'Klare Trennung von Kunden und Bewerbern direkt beim Einstieg.',
          },
          {
            title: 'Visuelle Navigation',
            description: 'Leistungen werden als Kacheln mit Bildern dargestellt.',
          },
          {
            title: 'Materiallager-Showcase',
            description: 'Prominente Darstellung des Lagerbestands als Vertrauensbeweis.',
          },
          {
            title: 'Bewerbungs-Assistent',
            description: 'Interaktiver Wizard statt komplizierter Anschreiben.',
          },
        ],
        results: [
          'Mehr qualifizierte Kundenanfragen',
          'Moderne Lösung für das Mitarbeiter-Recruiting',
          'Zeitsparung im Alltag durch CMS und FAQ',
          'Schnelle Ladezeiten auch mobil',
        ],
        techStack: ['TinaCMS', 'React', 'TypeScript', 'TailwindCSS'],
        metrics: [
          { label: 'Zielgruppen', value: '2', comparison: 'Kunden & Bewerber' },
          { label: 'CMS', value: 'Tina', comparison: 'Volle Kontrolle' },
          { label: 'Speed', value: 'Fast', comparison: 'Mobil optimiert' },
          { label: 'Bewerbung', value: 'Einfach', comparison: 'Wizard statt Mail' },
        ],
        conclusion: 'Wir haben Ivangs Bedachungen eine digitale Plattform gebaut, die zwei Aufgaben erfüllt: Sie verkauft die Dienstleistung über Vertrauen und Verfügbarkeit und macht den Bewerbungsprozess so einfach wie möglich.',
      },
      faqs: [
        {
          question: 'Was kostet eine Dachsanierung?',
          answer: 'Die Kosten variieren je nach Umfang und Material. Wir bieten eine transparente Kostenschätzung nach einer ersten Besichtigung an.',
        },
        {
          question: 'Wie lange dauert eine Dachneudeckung?',
          answer: 'Dank unseres großen Materiallagers können wir oft schneller starten. Eine typische Einfamilienhaus-Dachsanierung dauert etwa 1-2 Wochen, abhängig vom Wetter.',
        },
        {
          question: 'Gibt es Förderungen für Dachsanierungen?',
          answer: 'Ja, insbesondere für energetische Sanierungen gibt es staatliche Förderungen (z.B. BAFA, KfW). Wir beraten Sie gerne zu den aktuellen Möglichkeiten.',
        },
      ],
      seo: {
        title: 'Case Study: Relaunch Ivangs Bedachungen | Norddorf',
        description: 'Relaunch der Website für Ivangs Bedachungen. Fokus auf Kundenanfragen, Recruiting und einfache Pflege mit TinaCMS.',
      },
    },
  ],
};

export const miniCaseStudies: LocalizedMiniCaseStudies = {
  de: [
    {
      title: "Der ausgebuchte Handwerksbetrieb",
      problem: "Website von 2005, nicht mobilfähig.",
      solution: "Sonic-Blueprint in 14 Tagen.",
      result: "45% mehr qualifizierte Anfragen über das neue Kontaktformular im ersten Monat.",
      metric: "+45%",
      metricLabel: "Mehr Anfragen"
    },
    {
      title: "Das IT-Systemhaus",
      problem: "Wordpress-Chaos, 8 Sekunden Ladezeit.",
      solution: "Umstellung auf unseren Sonic-Stack (Code-Sovereignty).",
      result: "Ladezeit unter 0,8s. Top-Rankings bei Google für lokale Keywords.",
      metric: "<0.8s",
      metricLabel: "Ladezeit"
    }
  ],
  en: [
    {
      title: "The Fully Booked Craftsman",
      problem: "Website from 2005, not mobile-friendly.",
      solution: "Sonic Blueprint in 14 days.",
      result: "45% more qualified inquiries through the new contact form in the first month.",
      metric: "+45%",
      metricLabel: "More inquiries"
    },
    {
      title: "The IT System House",
      problem: "WordPress chaos, 8 second load time.",
      solution: "Switch to our Sonic Stack (Code Sovereignty).",
      result: "Load time under 0.8s. Top rankings on Google for local keywords.",
      metric: "<0.8s",
      metricLabel: "Load time"
    }
  ],
  ja: [
    {
      title: "予約で埋まった職人企業",
      problem: "2005年のウェブサイト、モバイル非対応。",
      solution: "Sonicブループリントを14日で導入。",
      result: "新しいお問い合わせフォームから、初月で質の高いお問い合わせが45%増加。",
      metric: "+45%",
      metricLabel: "お問い合わせ増加"
    },
    {
      title: "ITシステム会社",
      problem: "WordPressの混乱、8秒の読み込み時間。",
      solution: "Sonicスタック（コード主権）への移行。",
      result: "読み込み時間0.8秒以下。地域キーワードでGoogle上位表示。",
      metric: "<0.8s",
      metricLabel: "読み込み時間"
    }
  ]
};

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getCaseStudyBySlug(slug: string, lang: 'de' | 'en' | 'ja'): CaseStudy | undefined {
  return caseStudies[lang].find((cs) => cs.slug === slug);
}

export function getAllCaseStudies(lang: 'de' | 'en' | 'ja'): CaseStudy[] {
  return caseStudies[lang];
}

export function getMiniCaseStudies(lang: 'de' | 'en' | 'ja'): MiniCaseStudy[] {
  return miniCaseStudies[lang];
}

export function getCaseStudySlugs(): string[] {
  // Slugs are the same for both languages
  return caseStudies.de.map((cs) => cs.slug);
}
