import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Server, Leaf, Mail } from 'lucide-react';
import { Lang } from '../../types';

export const Footer: React.FC = () => {
  const location = useLocation();
  const currentLang: Lang = location.pathname.startsWith('/de') ? 'de' : location.pathname.startsWith('/ja') ? 'ja' : 'en';
  const isDe = currentLang === 'de';
  const isJa = currentLang === 'ja';

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinks = isJa ? [
    { label: '比較', anchor: '#comparison' },
    { label: '会社概要', anchor: '#ceo-letter' },
    { label: 'プロジェクト', anchor: '#case-studies' },
    { label: 'よくある質問', anchor: '#faq' },
    { label: 'お問い合わせ', anchor: '#form' },
  ] : isDe ? [
    { label: 'Vergleich', anchor: '#comparison' },
    { label: 'Über Uns', anchor: '#ceo-letter' },
    { label: 'Projekte', anchor: '#case-studies' },
    { label: 'FAQ', anchor: '#faq' },
    { label: 'Kontakt', anchor: '#form' },
  ] : [
    { label: 'Comparison', anchor: '#comparison' },
    { label: 'About Us', anchor: '#ceo-letter' },
    { label: 'Projects', anchor: '#case-studies' },
    { label: 'FAQ', anchor: '#faq' },
    { label: 'Contact', anchor: '#form' },
  ];

  const trustAriaLabel = isJa ? "信頼の証" : isDe ? "Vertrauensindikatoren" : "Trust indicators";
  const footerNavAriaLabel = isJa ? "フッターナビゲーション" : isDe ? "Footer-Navigation" : "Footer navigation";
  const legalAriaLabel = isJa ? "法的情報" : isDe ? "Rechtliche Informationen" : "Legal information";

  return (
    <footer className="bg-void text-white pb-20 pt-10 border-t border-zinc-800 relative z-20">
      <div className="container-responsive">
        
        {/* Trust Badges Row */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4 md:gap-6 mb-12 border-b border-zinc-800 pb-12" role="list" aria-label={trustAriaLabel}>
            <div className="flex items-center gap-3 bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800 text-xs md:text-sm text-zinc-400" role="listitem">
                <Server size={14} className="text-green-500" aria-hidden="true" />
                <span>{isJa ? "フランクフルトでホスト 🇩🇪" : "Hosted in Frankfurt 🇩🇪"}</span>
            </div>
            <div className="flex items-center gap-3 bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800 text-xs md:text-sm text-zinc-400" role="listitem">
                <Leaf size={14} className="text-green-500" aria-hidden="true" />
                <span>{isJa ? "100% グリーンエネルギー" : "100% Green Energy"}</span>
            </div>
            <div className="flex items-center gap-3 bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800 text-xs md:text-sm text-zinc-400" role="listitem">
                <ShieldCheck size={14} className="text-blue-500" aria-hidden="true" />
                <span>{isJa ? "100% 個人情報保護法準拠" : "100% DSGVO / GDPR"}</span>
            </div>
             <div className="flex items-center gap-3 bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800 text-xs md:text-sm text-zinc-400" role="listitem">
                <span>{isJa ? "トラッキングCookieなし" : "No Tracking Cookies"}</span>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
             <div className="text-2xl font-bold tracking-tighter mb-4">Norddorf<span className="text-sonic-orange">.</span></div>
             <div className="text-zinc-300 text-sm max-w-xs leading-relaxed mb-4">
               {isJa 
                 ? "中小企業向けウェブサイト。14日間納期、固定価格、100%所有。"
                 : isDe 
                 ? "Webseiten für den Mittelstand. 14 Tage Lieferzeit, Festpreis, 100% Eigentum."
                 : "Websites for SMBs. 14 days delivery, fixed price, 100% ownership."}
             </div>
             <a 
               href="mailto:hello@norddorf.com" 
               className="inline-flex items-center gap-2 text-sonic-orange hover:underline text-sm"
             >
               <Mail size={14} aria-hidden="true" />
               hello@norddorf.com
             </a>
          </div>

          {/* Navigation */}
          <div role="navigation" aria-label={footerNavAriaLabel}>
            <h4 className="text-white font-bold text-sm mb-4">{isJa ? "ナビゲーション" : "Navigation"}</h4>
            <ul className="grid grid-cols-2 gap-2 list-none">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.anchor}
                    onClick={(e) => handleAnchorClick(e, link.anchor)}
                    className="text-zinc-300 hover:text-white transition-colors text-sm cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div role="navigation" aria-label={legalAriaLabel}>
            <h4 className="text-white font-bold text-sm mb-4">{isJa ? "法的情報" : isDe ? "Rechtliches" : "Legal"}</h4>
            <ul className="flex flex-col gap-2 list-none">
              <li>
                <Link to={`/${currentLang}/${isJa ? 'tokushoho' : 'impressum'}`} className="text-zinc-400 hover:text-white transition-colors text-sm">
                    {isJa ? '特定商取引法に基づく表記' : isDe ? 'Impressum' : 'Imprint'}
                </Link>
              </li>
              <li>
                <Link to={`/${currentLang}/${isJa ? 'privacy' : isDe ? 'datenschutz' : 'privacy'}`} className="text-zinc-400 hover:text-white transition-colors text-sm">
                    {isJa ? 'プライバシーポリシー' : isDe ? 'Datenschutz' : 'Privacy'}
                </Link>
              </li>
              <li>
                <Link to={`/${currentLang}/${isJa ? 'terms' : isDe ? 'agb' : 'terms'}`} className="text-zinc-400 hover:text-white transition-colors text-sm">
                    {isJa ? '利用規約' : isDe ? 'AGB' : 'Terms & Conditions'}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-800 gap-4">
          <div className="text-zinc-300 text-sm">
            © {new Date().getFullYear()} Norddorf
          </div>
          <div className="text-zinc-400 text-sm">
            {isJa ? "一度支払えば、永遠にあなたのもの。" : isDe ? "Einmal zahlen. Für immer besitzen." : "You pay once. You own it forever."}
          </div>
        </div>

        {/* LocalBusiness Schema Helper */}
        <div className="hidden">
          <span itemProp="priceRange">€€€</span>
          <span itemProp="areaServed">{isJa ? "日本 / Japan" : "DACH / Germany"}</span>
        </div>
      </div>
    </footer>
  );
};
