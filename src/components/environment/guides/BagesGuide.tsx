import { siteConfig } from "../../../config/siteConfig";
import { useLang } from "../../../hooks/useLang";
import type { LandingDefinition } from "../../../content/landings/types";
import { Band, Btn, Sec, Split } from "../../cm/Blocks";
import { LandingShell } from "../../cm/LandingShell";

export function BagesGuide({ landing }: { landing: LandingDefinition }) {
  const { path, content } = useLang();
  const [sleep, forTwo, between, wine] = landing.sections;

  return (
    <LandingShell
      landing={landing}
      guide="bages"
      eyebrow={content.ui.cta.discoverBages}
      heroImage={siteConfig.images.vineyard}
      toc={[
        { id: "dormir", label: sleep.h2 },
        { id: "dos", label: forTwo.h2 },
        { id: "entre", label: between.h2 },
        { id: "vino", label: wine.h2 },
      ]}
    >
      <Band src={siteConfig.images.exterior} />
      <Split id="dormir" h2={sleep.h2} paragraphs={sleep.paragraphs} images={[sleep.image]} />
      <Sec
        id="dos"
        h2={forTwo.h2}
        intro={forTwo.paragraphs}
        headChildren={
          <div className="cm-actions">
            <Btn to={path("alojamiento")}>{content.ui.cta.seeAccommodation}</Btn>
          </div>
        }
      />
      <Band src={siteConfig.images.garden} />
      <Sec id="entre" h2={between.h2} intro={between.paragraphs} />
      <Split id="vino" flip h2={wine.h2} paragraphs={wine.paragraphs} images={[wine.image]}>
        {wine.cta ? (
          <div className="cm-actions">
            <Btn to={path(wine.cta.route)}>{wine.cta.label}</Btn>
          </div>
        ) : null}
      </Split>
    </LandingShell>
  );
}
