import { getScheduleStatus } from "/src/helper/helpers";

/**
 * Calculate the success rate of sessions
 * @param {Array} sessions - The list of sessions
 * @returns {number} The success rate percentage
 */
export function useSuccessRate(sessions) {
  if (!sessions || sessions.length === 0) return 0;

  let completed = 0;
  let totalApplicable = 0;

  sessions.forEach(session => {
    const status = getScheduleStatus(session); // Completed, Due, In Progress, Pending
    
    if (status === "Completed") {
        completed++;
        totalApplicable++;
    } else if (status === "Due" || status === "In Progress") {
        totalApplicable++;
    }
    // "Pending" sessions (future) are ignored
  });

  if (totalApplicable === 0) return 0; 

  return Math.round((completed / totalApplicable) * 100);
}
