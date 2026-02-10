import React, { useState } from 'react';
import { Star, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

interface TestimonialsProps {
  lang: 'de' | 'en' | 'ja';
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  verified?: boolean;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const isDe = lang === 'de';
  const isJa = lang === 'ja';
  const [isExpanded, setIsExpanded] = useState(false);

  const title = isJa ? "お客様の声" : isDe ? "Was Kunden sagen" : "What Clients Say";
  const subtitle = isJa 
    ? "実際にNorddorfを利用された方々の感想です。" 
    : isDe 
    ? "Echte Stimmen von echten Projekten." 
    : "Real voices from real projects.";

  const showMoreText = isJa ? "もっと見る" : isDe ? "Mehr anzeigen" : "Show more";
  const showLessText = isJa ? "閉じる" : isDe ? "Weniger anzeigen" : "Show less";

  // Expanded dataset to demonstrate masonry layout (12 items)
  const testimonials: Testimonial[] = isJa ? [
    {
      quote: "以前のサイトは古く、モバイル対応もしていませんでした。Norddorfのおかげで、問い合わせが劇的に増えました。",
      author: "山田 太郎",
      role: "代表取締役",
      company: "山田工務店",
      verified: true
    },
    {
      quote: "非常にスムーズなプロセスでした。デザインの提案から公開まで、驚くほど速かったです。",
      author: "佐藤 花子",
      role: "マーケティングマネージャー",
      company: "テックソリューションズ株式会社",
      verified: true
    },
    {
      quote: "技術的なことは全くわかりませんでしたが、すべてお任せできて安心でした。結果にも大満足です。",
      author: "鈴木 一郎",
      role: "オーナー",
      company: "カフェ・鈴木",
      verified: true
    },
    {
      quote: "コストパフォーマンスが最高です。この価格でこのクオリティは他にはないと思います。",
      author: "田中 健太",
      role: "創業者",
      company: "スタートアップX",
      verified: true
    },
    {
      quote: "以前の制作会社とは連絡がつかなくなることがありましたが、Norddorfは常に迅速に対応してくれます。",
      author: "伊藤 美咲",
      role: "広報",
      company: "グローバル貿易",
      verified: true
    },
    {
      quote: "デザインが洗練されていて、ブランドイメージが向上しました。",
      author: "渡辺 徹",
      role: "CEO",
      company: "渡辺デザイン",
      verified: true
    },
    {
      quote: "SEOの効果も実感しています。検索順位が上がりました。",
      author: "小林 さくら",
      role: "店長",
      company: "フラワーショップさくら",
      verified: true
    },
    {
      quote: "自分で更新できるのが本当に便利です。もう修正依頼でお金を払う必要がありません。",
      author: "加藤 浩",
      role: "運営責任者",
      company: "NPO法人未来",
      verified: true
    },
    {
      quote: "14日で本当に完成するとは思いませんでした。約束を守ってくれて感謝しています。",
      author: "吉田 真一",
      role: "代表",
      company: "吉田会計事務所",
      verified: true
    },
    {
      quote: "シンプルで分かりやすい料金体系が決め手でした。",
      author: "松本 恵",
      role: "オーナー",
      company: "ビューティーサロンM",
      verified: true
    },
    {
      quote: "プロフェッショナルな仕事ぶりでした。また依頼したいです。",
      author: "井上 健",
      role: "CTO",
      company: "テックベンチャー",
      verified: true
    },
    {
      quote: "ウェブサイトが営業マンのように働いてくれています。",
      author: "木村 拓也",
      role: "営業部長",
      company: "木村商事",
      verified: true
    }
  ] : isDe ? [
    {
      quote: "Unsere alte Seite war von 2015 und nicht mobilfähig. Seit dem Relaunch haben wir 40% mehr Anfragen.",
      author: "Michael Weber",
      role: "Geschäftsführer",
      company: "Weber Handwerk GmbH",
      verified: true
    },
    {
      quote: "Ich hatte Angst vor einem langen, komplizierten Prozess. Aber es war super einfach und das Ergebnis ist top.",
      author: "Sarah Müller",
      role: "Inhaberin",
      company: "Praxis Müller",
      verified: true
    },
    {
      quote: "Endlich eine Website, die wirklich uns gehört. Keine monatlichen Gebühren mehr und sie ist verdammt schnell.",
      author: "Thomas Klein",
      role: "CEO",
      company: "Klein Logistik",
      verified: true
    },
    {
      quote: "Der Festpreis hat uns überzeugt. Keine versteckten Kosten, genau wie versprochen.",
      author: "Julia Wagner",
      role: "Marketing",
      company: "Wagner Consulting",
      verified: true
    },
    {
      quote: "Wir haben schon drei Agenturen verschlissen. Norddorf ist die erste, die wirklich liefert.",
      author: "Markus Schmidt",
      role: "Gründer",
      company: "Schmidt & Co.",
      verified: true
    },
    {
      quote: "Das Design ist modern und clean. Genau das, was wir gesucht haben.",
      author: "Lisa Bauer",
      role: "Creative Director",
      company: "Bauer Design",
      verified: true
    },
    {
      quote: "Die Ladezeit ist unglaublich. Google liebt unsere neue Seite.",
      author: "Jan Hoffmann",
      role: "SEO Manager",
      company: "Hoffmann Media",
      verified: true
    },
    {
      quote: "Ich kann Texte endlich selbst ändern, ohne Informatik studiert zu haben.",
      author: "Petra Schulz",
      role: "Inhaberin",
      company: "Bäckerei Schulz",
      verified: true
    },
    {
      quote: "14 Tage Deadline eingehalten. Respekt. Das habe ich in der Branche noch nie erlebt.",
      author: "Klaus Richter",
      role: "Projektleiter",
      company: "Richter Bau",
      verified: true
    },
    {
      quote: "Super Kommunikation, schnelle Umsetzung. Gerne wieder.",
      author: "Sandra Wolf",
      role: "HR Manager",
      company: "Wolf Personal",
      verified: true
    },
    {
      quote: "Endlich fühlen wir uns im Netz professionell repräsentiert.",
      author: "Tim Becker",
      role: "Geschäftsführer",
      company: "Becker IT",
      verified: true
    },
    {
      quote: "Die Investition hat sich schon nach zwei Monaten rentiert.",
      author: "Anna Koch",
      role: "Finanzvorstand",
      company: "Koch Finanzen",
      verified: true
    }
  ] : [
    {
      quote: "Our old site was from 2015 and not mobile-friendly. Since the relaunch, inquiries have increased by 40%.",
      author: "Michael Weber",
      role: "CEO",
      company: "Weber Crafts",
      verified: true
    },
    {
      quote: "I was afraid of a long, complicated process. But it was super simple and the result is top-notch.",
      author: "Sarah Miller",
      role: "Owner",
      company: "Miller Practice",
      verified: true
    },
    {
      quote: "Finally a website that truly belongs to us. No more monthly fees and it's incredibly fast.",
      author: "Thomas Klein",
      role: "CEO",
      company: "Klein Logistics",
      verified: true
    },
    {
      quote: "The fixed price convinced us. No hidden costs, exactly as promised.",
      author: "Julia Wagner",
      role: "Marketing",
      company: "Wagner Consulting",
      verified: true
    },
    {
      quote: "We've worn out three agencies. Norddorf is the first one that actually delivers.",
      author: "Markus Smith",
      role: "Founder",
      company: "Smith & Co.",
      verified: true
    },
    {
      quote: "The design is modern and clean. Exactly what we were looking for.",
      author: "Lisa Bauer",
      role: "Creative Director",
      company: "Bauer Design",
      verified: true
    },
    {
      quote: "The loading time is incredible. Google loves our new site.",
      author: "Jan Hoffman",
      role: "SEO Manager",
      company: "Hoffman Media",
      verified: true
    },
    {
      quote: "I can finally change texts myself without having studied computer science.",
      author: "Petra Schulz",
      role: "Owner",
      company: "Schulz Bakery",
      verified: true
    },
    {
      quote: "14-day deadline met. Respect. I've never experienced that in this industry.",
      author: "Klaus Richter",
      role: "Project Manager",
      company: "Richter Construction",
      verified: true
    },
    {
      quote: "Great communication, fast implementation. Would do it again.",
      author: "Sandra Wolf",
      role: "HR Manager",
      company: "Wolf Personnel",
      verified: true
    },
    {
      quote: "Finally, we feel professionally represented online.",
      author: "Tim Becker",
      role: "CEO",
      company: "Becker IT",
      verified: true
    },
    {
      quote: "The investment paid off after just two months.",
      author: "Anna Koch",
      role: "CFO",
      company: "Koch Finance",
      verified: true
    }
  ];

  return (
    <section id="testimonials" className="fluid-section bg-zinc-50 relative overflow-hidden">
      {/* Background decoration - subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sonic-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zinc-200/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container-responsive relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="fluid-section-title font-bold text-zinc-900 tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-zinc-500 fluid-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Masonry Grid Layout */}
        <div className="relative">
          <div 
            className={`
              columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 
              transition-all duration-700 ease-in-out
              ${!isExpanded ? 'max-h-[600px] overflow-hidden' : 'max-h-[3000px]'}
            `}
          >
            {testimonials.map((testimonial, i) => (
              <div 
                key={i} 
                className="break-inside-avoid bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-sonic-orange">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center gap-1 text-zinc-400 fluid-xs" title={isJa ? "認証済みクライアント" : isDe ? "Verifizierter Kunde" : "Verified Client"}>
                      <CheckCircle2 size={14} className="text-emerald-500" />
                      <span className="hidden sm:inline">{isJa ? "認証済み" : isDe ? "Verifiziert" : "Verified"}</span>
                    </div>
                  )}
                </div>
                
                {/* Quote */}
                <blockquote className="mb-6">
                  <p className="text-zinc-700 fluid-base leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-50">
                  <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-400 font-bold fluid-base shrink-0">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-zinc-900 fluid-sm leading-tight">
                      {testimonial.author}
                    </div>
                    <div className="text-zinc-500 fluid-xs leading-tight">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Fade Overlay (only when collapsed) */}
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-zinc-50 via-zinc-50/80 to-transparent pointer-events-none" />
          )}
        </div>

        {/* Show More / Less Button */}
        <div className="mt-8 text-center relative z-20">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 bg-white border border-zinc-200 text-zinc-700 hover:text-zinc-900 hover:border-zinc-300 px-6 py-3 rounded-full font-medium transition-all shadow-sm hover:shadow-md fluid-base group"
          >
            {isExpanded ? (
              <>
                {showLessText}
                <ChevronUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
              </>
            ) : (
              <>
                {showMoreText}
                <ChevronDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
