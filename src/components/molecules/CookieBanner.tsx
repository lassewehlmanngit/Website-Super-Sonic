import React, { useState, useEffect } from 'react';
import { X, Cookie, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookieBannerProps {
    lang: 'de' | 'en' | 'ja';
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ lang }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            // Small delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const isDe = lang === 'de';
    const isJa = lang === 'ja';

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 z-[100] md:left-auto md:right-4 md:w-96 animate-fade-in-up">
            <div className="bg-white rounded-2xl shadow-xl border border-zinc-200 p-6 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-sonic-orange/5 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 rounded-full bg-sonic-orange/10 flex items-center justify-center text-sonic-orange">
                            <Cookie size={20} />
                        </div>
                    </div>

                    <h3 className="text-lg font-bold text-zinc-900 mb-2">
                        {isJa ? "クッキーについて" : isDe ? "Cookies & Datenschutz" : "Cookies & Privacy"}
                    </h3>

                    <p className="text-sm text-zinc-600 mb-6 leading-relaxed">
                        {isJa
                            ? "当サイトでは、サービスの向上とユーザー体験の改善のためにクッキーを使用しています。"
                            : isDe
                                ? "Wir nutzen Cookies, um dir das bestmögliche Erlebnis zu bieten. Keine Tracking-Monster, nur das Nötigste."
                                : "We use cookies to give you the best possible experience. No tracking monsters, just the essentials."}
                    </p>

                    <div className="flex flex-col gap-3">
                        <button
                            onClick={handleAccept}
                            className="w-full py-3 px-4 bg-zinc-900 hover:bg-black text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2 text-sm"
                        >
                            <ShieldCheck size={16} />
                            {isJa ? "同意する" : isDe ? "Alles klar, einverstanden" : "Got it, I agree"}
                        </button>
                        <div className="flex justify-center gap-4 text-xs text-zinc-400">
                            <Link to={isDe ? "/impressum" : "/en/imprint"} className="hover:text-zinc-600 transition-colors">
                                {isJa ? "運営者情報" : isDe ? "Impressum" : "Imprint"}
                            </Link>
                            <span className="text-zinc-300">•</span>
                            <Link to={isDe ? "/datenschutz" : "/en/privacy"} className="hover:text-zinc-600 transition-colors">
                                {isJa ? "プライバシーポリシー" : isDe ? "Datenschutz" : "Privacy"}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
