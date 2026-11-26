import { siteConfig } from "../../../config/siteConfig";
import { distanceLabel } from "../../../config/distanceLabel";
import { useLang } from "../../../hooks/useLang";
import type { LandingDefinition } from "../../../content/landings/types";
import { Band, Btn, Route, Sec, Split, Steps } from "../../cm/Blocks";
import { LandingShell } from "../../cm/LandingShell";

export function MontserratGuide({ landing }: { landing: LandingDefinition }) {
  const { lang, path, content } = useLang();
  const [day, honesty, more, forTwo] = landing.sections;
  const see = (
    <div className="cm-actions">
      <Btn to={path("alojamiento")}>{content.ui.cta.seeAccommodation}</Btn>
    </div>
  );

  return (
    <LandingShell
      landing={landing}
      guide="montserrat"
      eyebrow={content.ui.nav.entornoMontserrat}
      toc={[
        { id: "dia", label: day.h2 },
        { id: "ubicacion", label: honesty.h2 },
        { id: "combinar", label: more.h2 },
        { id: "alojamiento", label: forTwo.h2 },
      ]}
    >
      <Split id="dia" h2={day.h2} paragraphs={day.paragraphs} images={[day.image]}>
        {see}
      </Split>
      <Band src={siteConfig.images.vineyard} />
      <Sec id="ubicacion" h2={honesty.h2} intro={honesty.paragraphs}>
        {honesty.showDistanceKey ? (
          <Route
            destination={content.ui.nav.entornoMontserrat}
            label={distanceLabel(honesty.showDistanceKey, lang)}
          />
        ) : null}
      </Sec>
      <Sec id="combinar" h2={more.h2} intro={more.paragraphs}>
        <Steps
          items={(more.cards ?? []).map((c) => ({ title: c.title, text: c.text, to: path(c.route), cta: c.cta }))}
        />
      </Sec>
      <Band src={siteConfig.images.exterior} />
      <Split id="alojamiento" flip h2={forTwo.h2} paragraphs={forTwo.paragraphs} images={[siteConfig.images.interior]}>
        {see}
      </Split>
    </LandingShell>
  );
}
