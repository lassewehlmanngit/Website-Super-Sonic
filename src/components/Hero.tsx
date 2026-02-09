import React from "react";
import { ArrowRight } from "lucide-react";

export interface HeroProps {
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
  // Optional: Pass through data-tina-field attributes for visual editing
  tinaFields?: {
    eyebrow?: string;
    headline?: string;
    subheadline?: string;
    body?: string;
    primaryCta?: string;
    secondaryCta?: string;
  };
}

/**
 * Hero UI Component
 * 
 * "Dumb" UI component for the Hero section.
 * Does not depend on TinaCMS directly.
 */
export const Hero: React.FC<HeroProps> = ({ 
  eyebrow, 
  headline, 
  subheadline, 
  body, 
  primaryCta, 
  secondaryCta, 
  variant, 
  backgroundImage,
  tinaFields = {}
}) => {
  const isDark = variant === "dark" || variant === "centered";
  const isCentered = variant === "centered";
  
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
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      <div className={`container-responsive flex-grow flex flex-col justify-center relative z-10 ${
        isCentered ? "items-center text-center" : ""
      }`}>
        <div className={`max-w-4xl ${isCentered ? "mx-auto" : ""}`}>
          {/* Eyebrow */}
          {eyebrow && (
            <p 
              data-tina-field={tinaFields.eyebrow}
              className={`font-mono text-sm tracking-wide mb-6 opacity-0 animate-fade-in-up ${
                isDark ? "text-[var(--color-primary,#FF5500)]" : "text-[var(--color-primary,#FF5500)]"
              }`}
              style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              {eyebrow}
            </p>
          )}

          {/* Headline */}
          <h1 
            className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 opacity-0 animate-fade-in-up ${
              isDark ? "text-white" : "text-[var(--color-text,#0a0a0a)]"
            }`}
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <span data-tina-field={tinaFields.headline}>
              {headline}
            </span>
            {subheadline && (
              <>
                <br />
                <span 
                  data-tina-field={tinaFields.subheadline}
                  className="text-[var(--color-primary,#FF5500)]"
                >
                  {subheadline}
                </span>
              </>
            )}
          </h1>

          {/* Body text */}
          {body && (
            <p 
              data-tina-field={tinaFields.body}
              className={`text-lg md:text-xl leading-relaxed max-w-2xl mb-10 opacity-0 animate-fade-in-up ${
                isDark ? "text-zinc-400" : "text-zinc-600"
              } ${isCentered ? "mx-auto" : ""}`}
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              {body}
            </p>
          )}

          {/* CTAs */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up ${
              isCentered ? "justify-center" : ""
            }`}
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            {primaryCta?.label && (
              <a 
                href={primaryCta.url || "#"}
                data-tina-field={tinaFields.primaryCta}
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-primary,#FF5500)] text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity group"
              >
                {primaryCta.label}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            )}
            {secondaryCta?.label && (
              <a 
                href={secondaryCta.url || "#"}
                data-tina-field={tinaFields.secondaryCta}
                className={`inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full transition-colors ${
                  isDark 
                    ? "border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white" 
                    : "border border-zinc-300 text-zinc-700 hover:border-zinc-500 hover:text-zinc-900"
                }`}
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
