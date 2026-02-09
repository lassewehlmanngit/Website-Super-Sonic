import React from "react";
import { tinaField } from "tinacms/dist/react";
import { Hero as HeroUI } from "../Hero";

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
 * Hero Block Wrapper
 * 
 * Connects TinaCMS data to the Hero UI component.
 * Implements the Adapter Pattern.
 */
export const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <div data-tina-field={tinaField(data)}>
      <HeroUI 
        eyebrow={data.eyebrow}
        headline={data.headline}
        subheadline={data.subheadline}
        body={data.body}
        primaryCta={data.primaryCta}
        secondaryCta={data.secondaryCta}
        variant={data.variant}
        backgroundImage={data.backgroundImage}
        tinaFields={{
          eyebrow: tinaField(data, "eyebrow"),
          headline: tinaField(data, "headline"),
          subheadline: tinaField(data, "subheadline"),
          body: tinaField(data, "body"),
          primaryCta: data.primaryCta ? tinaField(data.primaryCta, "label") : undefined,
          secondaryCta: data.secondaryCta ? tinaField(data.secondaryCta, "label") : undefined,
        }}
      />
    </div>
  );
};

export default Hero;
