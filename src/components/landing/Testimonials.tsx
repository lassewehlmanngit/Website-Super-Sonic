import React from 'react';
import { Quote, Star } from 'lucide-react';

interface TestimonialsProps {
  lang: 'de' | 'en' | 'ja';
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const isDe = lang === 'de';
  const isJa = lang === 'ja';

  const title = isJa ? "お客様の声" : isDe ? "Was Kunden sagen" : "What Clients Say";
  const subtitle = isJa 
    ? "実際にNorddorfを利用された方々の感想です。" 
    : isDe 
    ? "Echte Stimmen von echten Projekten." 
    : "Real voices from real projects.";

  const testimonials: Testimonial[] = isJa ? [
    {
      quote: "以前のサイトは古く、モバイル対応もしていませんでした。Norddorfのおかげで、問い合わせが劇的に増えました。",
      author: "山田 太郎",
      role: "代表取締役",
      company: "山田工務店"
    },
    {
      quote: "非常にスムーズなプロセスでした。デザインの提案から公開まで、驚くほど速かったです。",
      author: "佐藤 花子",
      role: "マーケティングマネージャー",
      company: "テックソリューションズ株式会社"
    },
    {
      quote: "技術的なことは全くわかりませんでしたが、すべてお任せできて安心でした。結果にも大満足です。",
      author: "鈴木 一郎",
      role: "オーナー",
      company: "カフェ・鈴木"
    }
  ] : isDe ? [
    {
      quote: "Unsere alte Seite war von 2015 und nicht mobilfähig. Seit dem Relaunch haben wir 40% mehr Anfragen.",
      author: "Michael Weber",
      role: "Geschäftsführer",
      company: "Weber Handwerk GmbH"
    },
    {
      quote: "Ich hatte Angst vor einem langen, komplizierten Prozess. Aber es war super einfach und das Ergebnis ist top.",
      author: "Sarah Müller",
      role: "Inhaberin",
      company: "Praxis Müller"
    },
    {
      quote: "Endlich eine Website, die wirklich uns gehört. Keine monatlichen Gebühren mehr und sie ist verdammt schnell.",
      author: "Thomas Klein",
      role: "CEO",
      company: "Klein Logistik"
    }
  ] : [
    {
      quote: "Our old site was from 2015 and not mobile-friendly. Since the relaunch, inquiries have increased by 40%.",
      author: "Michael Weber",
      role: "CEO",
      company: "Weber Crafts"
    },
    {
      quote: "I was afraid of a long, complicated process. But it was super simple and the result is top-notch.",
      author: "Sarah Miller",
      role: "Owner",
      company: "Miller Practice"
    },
    {
      quote: "Finally a website that truly belongs to us. No more monthly fees and it's incredibly fast.",
      author: "Thomas Klein",
      role: "CEO",
      company: "Klein Logistics"
    }
  ];

  return (
    <section id="testimonials" className="fluid-section bg-zinc-50 relative overflow-hidden">
      {/* Background decoration */}
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

        {/* Mobile: Horizontal Scroll | Desktop: Grid */}
        <div className="
          flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4
          md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:mx-0 md:px-0
          scrollbar-hide
        ">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i} 
              className="
                flex-none w-[85vw] md:w-auto snap-center
                bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300
                flex flex-col h-full reveal
              "
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 text-sonic-orange mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <blockquote className="flex-grow mb-8">
                <p className="text-zinc-700 fluid-lg font-medium leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-zinc-50 mt-auto">
                <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-400 font-bold text-lg shrink-0">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-zinc-900 fluid-base">
                    {testimonial.author}
                  </div>
                  <div className="text-zinc-500 fluid-sm">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
