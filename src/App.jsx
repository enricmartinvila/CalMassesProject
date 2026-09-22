import { Navigate, Route, Routes } from "react-router-dom";
import { DEFAULT_LANG, SUPPORTED_LANGS } from "./config/siteConfig";
import { LangProvider } from "./hooks/useLang";
import { SiteLayout } from "./components/layout/SiteLayout";
import { HomePage } from "./components/home/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { ReservarPage } from "./pages/ReservarPage";
import { LegalPage } from "./pages/LegalPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { AlojamientoPage, FincaPage, SisuPage } from "./pages/ContentPages";
import {
  LandingBagesPage,
  LandingBarcelonaPage,
  LandingEnoturismoSeoPage,
  LandingManresaSeoPage,
  LandingMontserratSeoPage,
  LandingParaDosPage,
  LandingPiscinaPage,
} from "./pages/SeoLandings";
import { pathFor } from "./i18n/routes";

function LangRoutes() {
  return (
    <LangProvider>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />

          <Route path="alojamiento" element={<AlojamientoPage />} />
          <Route path="allotjament" element={<AlojamientoPage />} />
          <Route path="accommodation" element={<AlojamientoPage />} />

          <Route path="cal-masses" element={<FincaPage />} />
          <Route path="sisu" element={<SisuPage />} />

          <Route path="contacto" element={<ContactPage />} />
          <Route path="contacte" element={<ContactPage />} />
          <Route path="contact" element={<ContactPage />} />

          <Route path="reservar" element={<ReservarPage />} />
          <Route path="book" element={<ReservarPage />} />

          {/* SEO landings */}
          <Route path="alojamiento-rural-bages" element={<LandingBagesPage />} />
          <Route path="allotjament-rural-bages" element={<LandingBagesPage />} />
          <Route path="rural-accommodation-bages" element={<LandingBagesPage />} />

          <Route
            path="alojamiento-rural-cerca-manresa"
            element={<LandingManresaSeoPage />}
          />
          <Route
            path="allotjament-rural-prop-de-manresa"
            element={<LandingManresaSeoPage />}
          />
          <Route
            path="rural-accommodation-near-manresa"
            element={<LandingManresaSeoPage />}
          />

          <Route
            path="alojamiento-cerca-montserrat"
            element={<LandingMontserratSeoPage />}
          />
          <Route
            path="allotjament-prop-de-montserrat"
            element={<LandingMontserratSeoPage />}
          />
          <Route
            path="accommodation-near-montserrat"
            element={<LandingMontserratSeoPage />}
          />

          <Route
            path="alojamiento-rural-para-dos-bages"
            element={<LandingParaDosPage />}
          />
          <Route
            path="allotjament-rural-per-a-dos-bages"
            element={<LandingParaDosPage />}
          />
          <Route
            path="rural-accommodation-for-two-bages"
            element={<LandingParaDosPage />}
          />

          <Route
            path="alojamiento-rural-piscina-bages"
            element={<LandingPiscinaPage />}
          />
          <Route
            path="allotjament-rural-piscina-bages"
            element={<LandingPiscinaPage />}
          />
          <Route
            path="rural-accommodation-pool-bages"
            element={<LandingPiscinaPage />}
          />

          <Route
            path="escapada-rural-cerca-barcelona"
            element={<LandingBarcelonaPage />}
          />
          <Route
            path="escapada-rural-prop-de-barcelona"
            element={<LandingBarcelonaPage />}
          />
          <Route
            path="rural-getaway-near-barcelona"
            element={<LandingBarcelonaPage />}
          />

          <Route
            path="enoturismo-pla-de-bages"
            element={<LandingEnoturismoSeoPage />}
          />
          <Route
            path="enoturisme-pla-de-bages"
            element={<LandingEnoturismoSeoPage />}
          />
          <Route
            path="wine-tourism-pla-de-bages"
            element={<LandingEnoturismoSeoPage />}
          />

          {/* Anticannibalization redirects from previous URLs */}
          <Route
            path="alojamiento-cerca-manresa"
            element={<Navigate to="../alojamiento-rural-cerca-manresa" replace />}
          />
          <Route
            path="escapada-para-dos"
            element={<Navigate to="../alojamiento-rural-para-dos-bages" replace />}
          />
          <Route
            path="escapada-per-a-dos"
            element={<Navigate to="../allotjament-rural-per-a-dos-bages" replace />}
          />
          <Route
            path="getaway-for-two"
            element={<Navigate to="../rural-accommodation-for-two-bages" replace />}
          />

          <Route path="aviso-legal" element={<LegalPage kind="aviso" />} />
          <Route path="avis-legal" element={<LegalPage kind="aviso" />} />
          <Route path="legal-notice" element={<LegalPage kind="aviso" />} />
          <Route path="privacidad" element={<LegalPage kind="privacidad" />} />
          <Route path="privacitat" element={<LegalPage kind="privacidad" />} />
          <Route path="privacy" element={<LegalPage kind="privacidad" />} />
          <Route path="cookies" element={<LegalPage kind="cookies" />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </LangProvider>
  );
}

function detectBrowserLang() {
  if (typeof navigator === "undefined") return DEFAULT_LANG;
  const raw = (navigator.language || "es").split("-")[0].toLowerCase();
  if (raw === "ca" || raw === "en" || raw === "es") return raw;
  return DEFAULT_LANG;
}

export default function App() {
  const preferred = detectBrowserLang();

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={pathFor(preferred, "home")} replace />}
      />
      {SUPPORTED_LANGS.map((lang) => (
        <Route key={lang} path={`/${lang}/*`} element={<LangRoutes />} />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
