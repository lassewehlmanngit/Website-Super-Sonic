import React from "react";
import { tinaField } from "tinacms/dist/react";
import { ArrowRight } from "lucide-react";

// Type will be generated after first `tinacms build`
// For now, use a flexible interface that matches the schema
interface HeroData {
  eyebrow?: string | null;
  headline?: string | null;
  subheadline?: string | null;
  body?: string | null;
  primaryCta?: {
    label?: string | null;
    url?: string | null;
    style?: string | null;
  } | null;
  secondaryCta?: {
    label?: string | null;
    url?: string | null;
    style?: string | null;
  } | null;
  variant?: string | null;
  backgroundImage?: string | null;
}

interface HeroProps {
  data: HeroData;
}

/**
 * Hero Block Component
 * 
 * Main hero section with visual editing support.
 * Every editable field has data-tina-field for click-to-edit.
 */
export const Hero: React.FC<HeroProps> = ({ data }) => {
  const isDark = data.variant === "dark" || data.variant === "centered";
  const isCentered = data.variant === "centered";
  
  return (
    <section 
      className={`min-h-[100dvh] pt-32 pb-20 flex flex-col relative overflow-hidden ${
        isDark ? "bg-[var(--color-bg,#0a0a0a)]" : "bg-[var(--color-bg-light,#fafafa)]"
      }`}
    >
      {/* Background gradient */}
      {isDark && (
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg,#0a0a0a)] via-[var(--color-bg,#0a0a0a)] to-zinc-900 pointer-events-none" />
      )}
      
      {/* Background image if provided */}
      {data.backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
          style={{ backgroundImage: `url(${data.backgroundImage})` }}
        />
      )}
      
      <div className={`container-responsive flex-grow flex flex-col justify-center relative z-10 ${
        isCentered ? "items-center text-center" : ""
      }`}>
        <div className={`max-w-4xl ${isCentered ? "mx-auto" : ""}`}>
          {/* Eyebrow */}
          {data.eyebrow && (
            <p 
              data-tina-field={tinaField(data, "eyebrow")}
              className={`font-mono text-sm tracking-wide mb-6 opacity-0 animate-fade-in-up ${
                isDark ? "text-[var(--color-primary,#FF5500)]" : "text-[var(--color-primary,#FF5500)]"
              }`}
              style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              {data.eyebrow}
            </p>
          )}

          {/* Headline */}
          <h1 
            className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 opacity-0 animate-fade-in-up ${
              isDark ? "text-white" : "text-[var(--color-text,#0a0a0a)]"
            }`}
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <span data-tina-field={tinaField(data, "headline")}>
              {data.headline}
            </span>
            {data.subheadline && (
              <>
                <br />
                <span 
                  data-tina-field={tinaField(data, "subheadline")}
                  className="text-[var(--color-primary,#FF5500)]"
                >
                  {data.subheadline}
                </span>
              </>
            )}
          </h1>

          {/* Body text */}
          {data.body && (
            <p 
              data-tina-field={tinaField(data, "body")}
              className={`text-lg md:text-xl leading-relaxed max-w-2xl mb-10 opacity-0 animate-fade-in-up ${
                isDark ? "text-zinc-400" : "text-zinc-600"
              } ${isCentered ? "mx-auto" : ""}`}
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              {data.body}
            </p>
          )}

          {/* CTAs */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up ${
              isCentered ? "justify-center" : ""
            }`}
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            {data.primaryCta?.label && (
              <a 
                href={data.primaryCta.url || "#"}
                data-tina-field={tinaField(data.primaryCta, "label")}
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-primary,#FF5500)] text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity group"
              >
                {data.primaryCta.label}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            )}
            {data.secondaryCta?.label && (
              <a 
                href={data.secondaryCta.url || "#"}
                data-tina-field={tinaField(data.secondaryCta, "label")}
                className={`inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full transition-colors ${
                  isDark 
                    ? "border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white" 
                    : "border border-zinc-300 text-zinc-700 hover:border-zinc-500 hover:text-zinc-900"
                }`}
              >
                {data.secondaryCta.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
