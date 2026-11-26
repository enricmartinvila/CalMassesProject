import { siteConfig } from "../../../config/siteConfig";
import { useLang } from "../../../hooks/useLang";
import type { LandingDefinition } from "../../../content/landings/types";
import { Band, Btn, Callout, Sec, Split } from "../../cm/Blocks";
import { LandingShell } from "../../cm/LandingShell";

export function EnoturismoGuide({ landing }: { landing: LandingDefinition }) {
  const { path, content } = useLang();
  const [territory, sleepVine, sisu, bodegas, notTourist, stayWine] = landing.sections;

  return (
    <LandingShell
      landing={landing}
      guide="enoturismo"
      eyebrow={content.ui.nav.entornoEnoturismo}
      heroImage={siteConfig.images.vineyard}
      toc={[
        { id: "territorio", label: territory.h2 },
        { id: "vina", label: sleepVine.h2 },
        { id: "sisu", label: sisu.h2 },
        { id: "bodegas", label: bodegas.h2 },
        { id: "estancia", label: stayWine.h2 },
      ]}
    >
      <Sec id="territorio" h2={territory.h2} intro={territory.paragraphs} />
      <Band src={siteConfig.images.vineyard} />
      <Split id="vina" h2={sleepVine.h2} paragraphs={sleepVine.paragraphs} images={[siteConfig.images.garden]} />
      <Split id="sisu" flip h2={sisu.h2} paragraphs={sisu.paragraphs} images={[siteConfig.images.wine]}>
        {sisu.cta ? (
          <div className="cm-actions">
            <Btn to={path(sisu.cta.route)}>{sisu.cta.label}</Btn>
          </div>
        ) : null}
      </Split>
      <Sec id="bodegas" h2={bodegas.h2} intro={bodegas.paragraphs}>
        <Callout h3={notTourist.h2} paragraphs={notTourist.paragraphs ?? []} />
      </Sec>
      <Band src={siteConfig.images.wineAlt} />
      <Sec
        id="estancia"
        h2={stayWine.h2}
        intro={stayWine.paragraphs}
        headChildren={
          <div className="cm-actions">
            <Btn to={path("alojamiento")}>{content.ui.cta.seeAccommodation}</Btn>
            <Btn variant="ghost-dark" to={path("sisu")}>{content.ui.cta.knowSisu}</Btn>
          </div>
        }
      />
    </LandingShell>
  );
}
