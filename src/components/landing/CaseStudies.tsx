import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Leaf, Truck, Scale, Server, Building, Store } from 'lucide-react';
import { getAllCaseStudies, CaseStudy } from '../../data/caseStudies';

interface CaseStudiesProps {
  lang: 'de' | 'en' | 'ja';
}

const iconMap = {
  leaf: Leaf,
  truck: Truck,
  scale: Scale,
  server: Server,
  building: Building,
  store: Store,
};

export const CaseStudies: React.FC<CaseStudiesProps> = ({ lang }) => {
  const isDe = lang === 'de';
  const isJa = lang === 'ja';
  const caseStudies = getAllCaseStudies(lang);

  // Additional mini case studies (no detail pages)
  const miniCases = isJa ? [
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
  ] : isDe ? [
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
  ] : [
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
  ];

  const projectPath = isDe ? 'projekte' : 'projects';

  // Labels
  const problemLabel = isJa ? "課題" : isDe ? "Problem" : "Problem";
  const solutionLabel = isJa ? "解決策" : isDe ? "Lösung" : "Solution";
  const resultLabel = isJa ? "成果" : isDe ? "Ergebnis" : "Result";
  const viewCaseStudyLabel = isJa ? "導入事例を見る" : isDe ? "Case Study ansehen" : "View Case Study";

  return (
    <section id="case-studies" className="fluid-section bg-white">
      <div className="container-responsive">
        <div className="text-center mb-16 reveal">
          <p className="text-sonic-orange font-mono fluid-xs uppercase tracking-widest mb-4">
            {isJa ? "導入事例" : isDe ? "Fallstudien" : "Case Studies"}
          </p>
          <h2 className="fluid-section-title font-bold text-zinc-900 tracking-tight mb-4">
            {isJa 
              ? "6つの成功プロジェクト、" 
              : isDe 
              ? "6 erfolgreiche Projekte," 
              : "6 successful projects,"}
            <br />
            <span className="text-zinc-400">
              {isJa 
                ? "有料化する前に実現しました。" 
                : isDe 
                ? "bevor wir überhaupt Geld genommen haben." 
                : "before we even took money."}
            </span>
          </h2>
          <p className="text-zinc-500 fluid-lg max-w-2xl mx-auto">
            {isJa 
              ? "信頼できないサービスは提供したくありませんでした。"
              : isDe 
              ? "Wir wollten keinen Service anbieten, dem du nicht vertrauen kannst."
              : "We didn't want to offer a service you couldn't trust."}
          </p>
        </div>

        {/* Featured Case Studies (with detail pages) */}
        {caseStudies.length > 0 && (
          <div className="mb-12">
            <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
              {caseStudies.map((caseStudy: CaseStudy) => {
                const IconComponent = iconMap[caseStudy.icon];
                return (
                  <Link 
                    key={caseStudy.slug}
                    to={`/${lang}/${projectPath}/${caseStudy.slug}`}
                    className="group bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-100 hover:border-sonic-orange/30 hover:shadow-lg transition-all reveal"
                  >
                    <div className="grid md:grid-cols-3">
                      {/* Color Block with Icon */}
                      <div className="p-8 md:p-10 flex flex-col justify-center items-center text-white relative" style={{ backgroundColor: caseStudy.color }}>
                        <IconComponent className="text-white/30 mb-4" size={48} />
                        <div className="text-center">
                          <div className="fluid-2xl font-bold mb-1">
                            {caseStudy.preview.metric}
                          </div>
                          <div className="fluid-sm text-white/70">
                            {caseStudy.preview.metricLabel}
                          </div>
                        </div>
                        <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowUpRight className="text-white" size={16} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="md:col-span-2 p-8 md:p-10">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <span className="text-sonic-orange font-mono fluid-xs uppercase tracking-widest">
                              {caseStudy.industry}
                            </span>
                            <h3 className="fluid-xl font-bold text-zinc-900 mt-1">
                              {caseStudy.title}
                            </h3>
                          </div>
                        </div>

                        {/* Problem */}
                        <div className="mb-3">
                          <span className="fluid-xs font-bold text-zinc-500 uppercase tracking-wider">
                            {problemLabel}
                          </span>
                          <p className="text-zinc-600 mt-1 fluid-base">{caseStudy.preview.problem}</p>
                        </div>

                        {/* Solution */}
                        <div className="mb-3">
                          <span className="fluid-xs font-bold text-sonic-orange uppercase tracking-wider">
                            {solutionLabel}
                          </span>
                          <p className="text-zinc-600 mt-1 fluid-base">{caseStudy.preview.solution}</p>
                        </div>

                        {/* Result */}
                        <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                          <span className="fluid-xs font-bold text-green-600 uppercase tracking-wider">
                            {resultLabel}
                          </span>
                          <p className="text-zinc-900 font-medium mt-1 fluid-base">{caseStudy.preview.result}</p>
                        </div>

                        {/* View Case Study Link */}
                        <div className="mt-6 flex items-center gap-2 text-sonic-orange font-semibold fluid-sm group-hover:gap-3 transition-all">
                          <span>
                            {viewCaseStudyLabel}
                            <span className="sr-only">: {caseStudy.title}</span>
                          </span>
                          <ArrowUpRight size={16} aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Mini Case Studies (no detail pages) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {miniCases.map((caseStudy, i) => (
            <div key={i} className="bg-zinc-50 rounded-2xl p-8 md:p-10 border border-zinc-100 hover:border-zinc-200 transition-colors reveal delay-100">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <h3 className="fluid-xl font-bold text-zinc-900">
                  {caseStudy.title}
                </h3>
                <div className="bg-orange-50 text-sonic-orange px-3 py-1 rounded-full fluid-sm font-bold border border-orange-100">
                  {caseStudy.metric}
                </div>
              </div>

              {/* Problem */}
              <div className="mb-4">
                <span className="fluid-xs font-bold text-zinc-500 uppercase tracking-wider">
                  {problemLabel}
                </span>
                <p className="text-zinc-600 mt-1 fluid-base">{caseStudy.problem}</p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <span className="fluid-xs font-bold text-sonic-orange uppercase tracking-wider">
                  {solutionLabel}
                </span>
                <p className="text-zinc-600 mt-1 fluid-base">{caseStudy.solution}</p>
              </div>

              {/* Result */}
              <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
                <span className="fluid-xs font-bold text-sonic-orange uppercase tracking-wider">
                  {resultLabel}
                </span>
                <p className="text-zinc-900 font-medium mt-1 fluid-base">{caseStudy.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
