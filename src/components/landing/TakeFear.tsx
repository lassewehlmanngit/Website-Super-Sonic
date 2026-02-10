import React from 'react';
import { Shield, Wrench, MessageSquare } from 'lucide-react';

interface TakeFearProps {
  lang: 'de' | 'en' | 'ja';
}

export const TakeFear: React.FC<TakeFearProps> = ({ lang }) => {
  const isDe = lang === 'de';
  const isJa = lang === 'ja';

  return (
    <section id="guarantee" className="fluid-section bg-zinc-900 text-white">
      <div className="container-responsive max-w-4xl mx-auto text-center">
        <div className="reveal">
          <div className="w-20 h-20 bg-sonic-orange/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Shield className="text-sonic-orange" size={40} />
          </div>

          <h2 className="fluid-section-title font-bold mb-6 tracking-tight">
            {isJa ? "万が一、問題が発生したら？" : isDe ? "Was, wenn doch etwas schief läuft?" : "What if something goes wrong?"}
          </h2>

          <p className="fluid-body text-zinc-400 leading-relaxed mb-10">
            {isJa ? (
              <>
                問題は起こります。私たちが解決します。<strong className="text-white">何かあれば、すぐに対応します。</strong>
              </>
            ) : isDe ? (
              <>
                Probleme passieren. Wir lösen sie. <strong className="text-white">Wenn etwas nicht läuft, kümmern wir uns darum. Punkt.</strong>
              </>
            ) : (
              <>
                Problems happen. We fix them. <strong className="text-white">If something breaks, we're here to solve it. Simple as that.</strong>
              </>
            )}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700 flex items-center gap-4">
              <Wrench className="text-sonic-orange" size={24} />
              <span className="text-white font-medium fluid-base">
                {isJa ? "無料バグ修正" : isDe ? "Kostenlose Bug-Fixes" : "Free Bug Fixes"}
              </span>
            </div>
            <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700 flex items-center gap-4">
              <MessageSquare className="text-sonic-orange" size={24} />
              <span className="text-white font-medium fluid-base">
                {isJa ? "直接コミュニケーション" : isDe ? "Direkte Kommunikation" : "Direct Communication"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
