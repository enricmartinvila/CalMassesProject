import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../../hooks/useLang";

const STORAGE_KEY = "calmasses-cookie-consent";

export type ConsentState = "accepted" | "rejected" | null;

export function getConsent(): ConsentState {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(STORAGE_KEY);
  if (v === "accepted" || v === "rejected") return v;
  return null;
}

export function CookieBanner() {
  const { content, path } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getConsent() === null);
  }, []);

  const save = (value: "accepted" | "rejected") => {
    localStorage.setItem(STORAGE_KEY, value);
    window.dispatchEvent(new Event("calmasses-consent"));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-16 z-50 mx-auto max-w-3xl px-4 md:bottom-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-xl md:p-5">
        <p className="text-sm text-gray-700">
          {content.ui.cookie.message.startsWith("TODO_") ? (
            <span className="font-mono text-xs text-amber-900 bg-amber-100 px-1 rounded">
              {content.ui.cookie.message}
            </span>
          ) : (
            content.ui.cookie.message
          )}{" "}
          <Link to={path("cookies")} className="underline text-[#556B2F]">
            {content.ui.footer.cookies}
          </Link>
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => save("accepted")}
            className="rounded-full bg-[#556B2F] px-5 py-2 text-sm font-medium text-white"
          >
            {content.ui.cookie.accept}
          </button>
          <button
            type="button"
            onClick={() => save("rejected")}
            className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-800"
          >
            {content.ui.cookie.reject}
          </button>
        </div>
      </div>
    </div>
  );
}
