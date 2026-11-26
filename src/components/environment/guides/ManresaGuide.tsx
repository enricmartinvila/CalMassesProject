import { siteConfig } from "../../../config/siteConfig";
import { distanceLabel } from "../../../config/distanceLabel";
import { useLang } from "../../../hooks/useLang";
import type { LandingDefinition } from "../../../content/landings/types";
import { Band, Btn, Route, Sec, Split, Steps } from "../../cm/Blocks";
import { LandingShell } from "../../cm/LandingShell";

export function ManresaGuide({ landing }: { landing: LandingDefinition }) {
  const { lang, path, content } = useLang();
  const [near, base, forTwo, combine] = landing.sections;

  return (
    <LandingShell
      landing={landing}
      guide="manresa"
      eyebrow={content.ui.nav.entornoManresa}
      heroImage={siteConfig.images.vineyard}
      toc={[
        { id: "cerca", label: near.h2 },
        { id: "base", label: base.h2 },
        { id: "dos", label: forTwo.h2 },
        { id: "combinar", label: combine.h2 },
      ]}
    >
      <Sec id="cerca" h2={near.h2} intro={near.paragraphs}>
        <Route destination={content.ui.nav.entornoManresa} label={distanceLabel("manresa", lang)} />
      </Sec>
      <Band src={siteConfig.images.exterior} />
      <Split id="base" h2={base.h2} paragraphs={base.paragraphs} images={[siteConfig.images.placeta]} />
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
      <Sec id="combinar" h2={combine.h2} intro={combine.paragraphs}>
        <Steps
          items={(combine.cards ?? []).map((c) => ({ title: c.title, text: c.text, to: path(c.route), cta: c.cta }))}
        />
      </Sec>
    </LandingShell>
  );
}
