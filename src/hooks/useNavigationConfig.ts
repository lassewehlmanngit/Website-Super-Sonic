import { useLocation } from 'react-router-dom';
import { GitCompare, Zap, Scale, Users, HelpCircle } from 'lucide-react';
import { useScrollPosition } from './useScrollPosition';

export const useNavigationConfig = () => {
  const { isScrolled } = useScrollPosition(20);
  const location = useLocation();
  const currentPath = location.pathname;
  
  const isDe = currentPath.startsWith('/de');
  const isJa = currentPath.startsWith('/ja');
  const isEn = !isDe && !isJa;
  
  const lang = isDe ? 'de' : isJa ? 'ja' : 'en';

  // Pages with dark/colored hero backgrounds
  const isLandingPage = currentPath === '/de' || currentPath === '/en' || currentPath === '/ja' || currentPath === '/';
  const isCaseStudyPage = currentPath.includes('/projekte/') || currentPath.includes('/projects/');
  const isDarkSection = isLandingPage || isCaseStudyPage;

  const links = {
    de: [
      { label: 'Vergleich', anchor: '#comparison', icon: GitCompare },
      { label: 'Prozess', anchor: '#engineering', icon: Zap },
      { label: 'Projekte', anchor: '#case-studies', icon: Scale },
      { label: 'Über Uns', anchor: '#ceo-letter', icon: Users },
      { label: 'FAQ', anchor: '#faq', icon: HelpCircle },
    ],
    ja: [
      { label: '比較', anchor: '#comparison', icon: GitCompare },
      { label: 'プロセス', anchor: '#engineering', icon: Zap },
      { label: 'プロジェクト', anchor: '#case-studies', icon: Scale },
      { label: '会社概要', anchor: '#ceo-letter', icon: Users },
      { label: 'FAQ', anchor: '#faq', icon: HelpCircle },
    ],
    en: [
      { label: 'Comparison', anchor: '#comparison', icon: GitCompare },
      { label: 'Process', anchor: '#engineering', icon: Zap },
      { label: 'Projects', anchor: '#case-studies', icon: Scale },
      { label: 'About Us', anchor: '#ceo-letter', icon: Users },
      { label: 'FAQ', anchor: '#faq', icon: HelpCircle },
    ]
  };

  const switchLang = (targetLang: string) => {
    const path = location.pathname;
    const pathWithoutLang = path.replace(/^\/(de|en|ja)/, '');
    return `/${targetLang}${pathWithoutLang}`;
  };

  const labels = {
    de: {
      menu: 'Menü',
      openMenu: 'Menü öffnen',
      closeMenu: 'Menü schließen',
      home: 'Zur Startseite',
      cta: 'Gratis-Entwurf',
      ctaLong: 'Gratis-Entwurf anfordern',
      nav: 'Hauptnavigation',
      trusted: 'Vertraut von Gründern',
      quote: '"Die beste Investition, die wir gemacht haben."',
      navTitle: 'Navigation'
    },
    ja: {
      menu: 'メニュー',
      openMenu: 'メニューを開く',
      closeMenu: 'メニューを閉じる',
      home: 'ホームへ',
      cta: '無料デザイン',
      ctaLong: '無料デザインをリクエスト',
      nav: 'メインナビゲーション',
      trusted: '創業者から信頼されています',
      quote: '「私たちが行った最高の投資です。」',
      navTitle: 'ナビゲーション'
    },
    en: {
      menu: 'Menu',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      home: 'Go to homepage',
      cta: 'Free Design',
      ctaLong: 'Request free design',
      nav: 'Main navigation',
      trusted: 'Trusted by founders',
      quote: '"Best investment we made."',
      navTitle: 'Navigation'
    }
  };

  return {
    lang,
    isDe,
    isJa,
    isEn,
    links: links[lang],
    labels: labels[lang],
    isScrolled,
    isDarkSection,
    switchLang,
    homeLink: `/${lang}`
  };
};
