import React from 'react';
import { 
  Lightbulb, 
  Mail, 
  MonitorPlay, 
  CreditCard, 
  Rocket, 
  Globe, 
  LifeBuoy, 
  Wrench 
} from 'lucide-react';

interface ProcessStepsProps {
  lang: 'de' | 'en' | 'ja';
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({ lang }) => {
  const isDe = lang === 'de';
  const isJa = lang === 'ja';

  const steps = [
    {
      icon: Lightbulb,
      title: isJa ? "無料コンセプト" : isDe ? "Kostenloses Konzept" : "Free Concept",
      description: isJa 
        ? "新しいお客様は、無料のコンセプトウェブサイトを入手できます。フォームに記入するか、15分間の通話を予約して、ニーズを明確にします。これは完全に無料です。コンセプトが気に入った場合、または私たちのサービスに納得した場合は、予約に進むことができます。すでに納得している場合は、lasse@norddorf.comまで直接ご連絡ください。平均72時間以内に最初のコンセプトをお届けします。"
        : isDe 
        ? "Neukunden haben die Möglichkeit, ein kostenloses Konzept für ihre Website zu erhalten. Fülle dazu einfach das Formular aus oder buche ein 15-minütiges Gespräch, um Fragen und Anforderungen zu klären. Das ist für dich komplett kostenlos. Wenn dir das Konzept gefällt, kannst du unseren Service buchen. Wenn du bereits überzeugt bist, schreib mir direkt an lasse@norddorf.com. Das erste Konzept erhältst du im Durchschnitt innerhalb von 72 Stunden."
        : "New customers have the chance to get a free concept website. Either fill out the form or book a 15-minute call to clarify questions and needs. This is completely free. If you like the concept, you can book our service. If you're already convinced, reach out to lasse@norddorf.com. You'll receive the first concept within 72 hours on average.",
    },
    {
      icon: Mail,
      title: isJa ? "確認メール" : isDe ? "Bestätigung" : "Confirmation",
      description: isJa
        ? "最初のリクエストを受け取り、コンセプトの作成を開始したことを確認するメールをお送りします。このメールには、質問がある場合の15分間の無料予約リンクも含まれています。"
        : isDe
        ? "Die erste E-Mail bestätigt den Eingang deiner Anfrage und den Start der Arbeit am Konzept. Sie enthält auch einen Link für ein kostenloses 15-minütiges Gespräch, falls du Fragen hast."
        : "The first email confirms we received your request and started working on the concept. It also includes a 15-minute free booking link in case you have any questions.",
    },
    {
      icon: MonitorPlay,
      title: isJa ? "コンセプトの提示" : isDe ? "Konzept-Präsentation" : "Concept Presentation",
      description: isJa
        ? "2通目のメールには、コンセプトウェブサイトへのリンク、継続する場合の支払いリンク、そしてまだ質問がある場合の15分間の予約リンクが含まれています。"
        : isDe
        ? "Die zweite E-Mail enthält den Link zu deiner Konzept-Website, einen Zahlungslink, falls du weitermachen möchtest, und erneut einen Link für ein 15-minütiges Gespräch bei offenen Fragen."
        : "The second email contains the link to the concept website, a payment link if you want to continue, and a 15-minute booking link if there are still open questions.",
    },
    {
      icon: CreditCard,
      title: isJa ? "支払いと詳細" : isDe ? "Zahlung & Details" : "Payment & Details",
      description: isJa
        ? "支払いが完了すると、請求書とリクエスト受領確認をお送りします。また、ウェブサイトの変更、機能、情報などについての詳細なフォームをお送りし、これを使用して完全なウェブサイトを作成/コンセプトを更新します。"
        : isDe
        ? "Nach der Zahlung erhältst du eine Rechnung und eine Bestätigung. Außerdem bekommst du ein detailliertes Formular für Änderungswünsche, Features und Informationen, mit dem wir die komplette Website erstellen bzw. das Konzept finalisieren."
        : "Once paid, we send an invoice and confirmation. You'll also receive a detailed form for website changes, features, and information, which we use to create the complete website / update the concept.",
    },
    {
      icon: Rocket,
      title: isJa ? "ウェブサイトの納品" : isDe ? "Website-Übergabe" : "Website Delivery",
      description: isJa
        ? "完成したウェブサイトを、ログイン方法、アクセス方法、CMSの使用方法/テキストの変更方法に関する説明書とマニュアルとともにメールでお送りします。軽微な修正を依頼するオプションもあります。"
        : isDe
        ? "Du erhältst die fertige Website per E-Mail mit Anleitungen zum Login, Zugriff und zur Nutzung des CMS (Texte ändern). Du hast auch die Möglichkeit, kleinere Korrekturen anzufordern."
        : "You receive the ready website via email with instructions and a manual on how to log in, access the site, and use the CMS/change texts. You also have the option to ask for minor fixes.",
    },
    {
      icon: Globe,
      title: isJa ? "ローンチとホスティング" : isDe ? "Launch & Hosting" : "Launch & Hosting",
      description: isJa
        ? "その後、ウェブサイトはローンチ準備が整い、Renderで無料でホストされます。独自のドメインでホスティングが機能するようにドメインを設定するためのガイドをお渡しします。サポートが必要な場合は、メールまたは15分間のミーティングでお手伝いします。"
        : isDe
        ? "Danach ist die Website bereit für den Launch und wird kostenlos auf Render gehostet. Du erhältst eine Anleitung zur Einrichtung deiner Domain. Falls du Hilfe brauchst, unterstützen wir dich per E-Mail oder in einem kurzen 15-Minuten-Meeting."
        : "Afterwards, the website is launch-ready and hosted on Render for free. You get a guide on setting up your domain. If you need help, we assist via email or a quick 15-minute meeting.",
    },
    {
      icon: LifeBuoy,
      title: isJa ? "14日間のサポート" : isDe ? "14 Tage Support" : "14-Day Support",
      description: isJa
        ? "ローンチ後、14日間はウェブサイトに関するリクエストを1つ行うことができます。ブログ記事の実装、スタイルの変更、またはリードをより強力に獲得するためのフォームの実装などが可能です。"
        : isDe
        ? "Nach dem Launch hast du 14 Tage Zeit für eine Anfrage zur Website. Das kann ein Blog-Post sein, eine Stiländerung oder ein Formular zur besseren Lead-Qualifizierung."
        : "After launch, you have 14 days to make one request regarding the website. This could be implementing a blog post, a different style, or a form to qualify leads better.",
    },
    {
      icon: Wrench,
      title: isJa ? "長期メンテナンス" : isDe ? "Langzeit-Wartung" : "Long-term Maintenance",
      description: isJa
        ? "14日後以降の追加のリクエストやメンテナンスは、リクエストに応じた料金で行われます。"
        : isDe
        ? "NACH DEN 14 TAGEN werden zusätzliche Anfragen oder Wartungsarbeiten gegen eine Gebühr je nach Aufwand durchgeführt."
        : "AFTER THE 14 DAYS, additional requests or maintenance will be done for a fee depending on the request.",
    },
  ];

  return (
    <section className="fluid-section bg-paper relative overflow-hidden">
      <div className="container-responsive max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="fluid-section-title font-bold text-zinc-900 tracking-tight mb-4">
            {isJa ? "私たちのプロセス" : isDe ? "Unser Prozess" : "Our Process"}
          </h2>
          <p className="text-zinc-500 fluid-lg max-w-2xl mx-auto">
            {isJa 
              ? "透明性があり、シンプルで、あなたのために。"
              : isDe 
              ? "Transparent, einfach und für dich gemacht."
              : "Transparent, simple, and made for you."}
          </p>
        </div>

        <div className="grid gap-8 relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-zinc-200 hidden md:block" />

          {steps.map((step, index) => (
            <div key={index} className="relative flex gap-6 md:gap-10 reveal group">
              {/* Icon Bubble */}
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white border-2 border-zinc-100 flex items-center justify-center z-10 shadow-sm group-hover:border-sonic-orange group-hover:scale-110 transition-all duration-300">
                <step.icon className="w-6 h-6 text-zinc-400 group-hover:text-sonic-orange transition-colors" />
              </div>

              {/* Content */}
              <div className="flex-1 pt-2 pb-8 border-b border-zinc-100 last:border-0">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-sonic-orange">
                    {isJa ? `ステップ ${index + 1}` : isDe ? `Schritt ${index + 1}` : `Step ${index + 1}`}
                  </span>
                  <h3 className="text-xl font-bold text-zinc-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-zinc-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
