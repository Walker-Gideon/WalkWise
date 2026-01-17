import { isAfter } from "date-fns";

/**
 * Get the status of a schedule session
 * @param {Object} session - The session object
 * @returns {string} The status of the session
 */ 
export function getScheduleStatus(session) {
  const status = session.status?.toLowerCase();
  
  if (status === "completed") return "Completed"; 
  if (status === "in-progress") return "In Progress";

  // Check if session has a scheduled time
  if (session.scheduledAt) {
    // If we have a Firestore timestamp, convert it
    const scheduledDate = session.scheduledAt.toDate ? session.scheduledAt.toDate() : new Date(session.scheduledAt);
    const now = new Date();

    if (isAfter(now, scheduledDate)) {
      return "Due";
    }
  }

  return "Pending";
}

/**
 * Get the color of a schedule session status
 * @param {string} status - The status of the session
 * @returns {string} The color of the session status
 */ 
export function getStatusColor(status) {
  switch (status) {
    case "Completed":
      return "bg-green-500 text-white";
    case "Due":
      return "bg-amber-500 text-white";
    case "In Progress":
      return "bg-blue-600 text-white";
    case "Pending":
    default:
      return "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300";
  }
}

/**
 * Format time in seconds to MM:SS
 * @param {number} time - Time in seconds
 * @returns {string} Formatted time string
 */
export function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes.toString().padStart(2, "0")} : ${seconds
    .toString()
    .padStart(2, "0")}`;
}