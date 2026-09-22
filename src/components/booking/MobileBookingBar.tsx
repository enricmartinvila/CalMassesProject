import { Link } from "react-router-dom";
import { useLang } from "../../hooks/useLang";

export function MobileBookingBar() {
  const { content, path } = useLang();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden">
      <Link
        to={path("reservar")}
        className="flex w-full items-center justify-center rounded-full bg-[#556B2F] px-4 py-3 text-sm font-semibold text-white"
      >
        {content.ui.cta.availability}
      </Link>
    </div>
  );
}
