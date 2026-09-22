import { FormEvent, useState } from "react";
import { bookingHref, isTodo, siteConfig } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";
import { TodoMark } from "../ui/TodoMark";

type Props = {
  id?: string;
  compact?: boolean;
};

export function BookingWidget({ id = "reservar", compact = false }: Props) {
  const { content } = useLang();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(String(siteConfig.capacity.guests));

  const destination = bookingHref();
  const pending = isTodo(siteConfig.booking.url);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (pending) return;

    const url = new URL(destination);
    if (checkIn) url.searchParams.set("check_in", checkIn);
    if (checkOut) url.searchParams.set("check_out", checkOut);
    if (guests) url.searchParams.set("guests", guests);
    window.open(url.toString(), "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id={id}
      className={`rounded-3xl border border-[#556B2F]/20 bg-white shadow-md ${
        compact ? "p-4" : "p-6 md:p-8"
      }`}
    >
      <form
        onSubmit={onSubmit}
        className={`grid gap-4 ${compact ? "" : "md:grid-cols-4 md:items-end"}`}
      >
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-gray-700">
            {content.ui.booking.checkIn}
          </span>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-3 py-2"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-gray-700">
            {content.ui.booking.checkOut}
          </span>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-3 py-2"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-gray-700">
            {content.ui.booking.guests}
          </span>
          <input
            type="number"
            min={1}
            max={siteConfig.capacity.guests}
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-3 py-2"
          />
        </label>
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-[#556B2F] px-6 py-3 text-sm font-medium text-white hover:bg-[#445323] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {content.ui.booking.submit}
        </button>
      </form>
      {pending && (
        <p className="mt-3 text-sm text-gray-600">
          <TodoMark>TODO_DATA_BOOKING_URL</TodoMark>
        </p>
      )}
      {!pending && content.ui.booking.note && (
        <p className="mt-3 text-sm text-gray-600">{content.ui.booking.note}</p>
      )}
    </section>
  );
}
