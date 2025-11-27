import { useMemo } from "react";

/*
const createdAgo = useFormattedDate(card.createdAt);
  const createdExact = useFormattedDate(card.createdAt, true);

  <p>Created: {createdAgo}</p>
      <p>Time: {createdExact}</p>
*/

export default function useFormattedDate(createdAt, timeDisplay = false) {
  const normalizeDate = (value) => {
    if (!value) return null;
    if (value.toDate) return value.toDate();
    if (typeof value === "string") return new Date(value);
    if (value instanceof Date) return value;

    return null;
  };

  return useMemo(() => {
    const dateObj = normalizeDate(createdAt);
    if (!dateObj) return "Loading...";

    const getTimeAgo = (date) => {
      const seconds = Math.floor((new Date() - date) / 1000);

      const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
      };

      for (const [unit, value] of Object.entries(intervals)) {
        const interval = Math.floor(seconds / value);
        if (interval >= 1) {
          return interval === 1
            ? `${interval} ${unit} ago`
            : `${interval} ${unit}s ago`;
        }
      }
      return "Just now";
    };

    const getExactTime = (date) => {
      return date.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
    };

    return timeDisplay ? getExactTime(dateObj) : getTimeAgo(dateObj);
  }, [createdAt, timeDisplay]);
}
