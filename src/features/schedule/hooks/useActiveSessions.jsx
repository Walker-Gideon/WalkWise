import { useSessions } from "./useSessions";
import { getScheduleStatus } from "/src/helper/helpers";

export function useActiveSessions() {
  const { sessions } = useSessions();

  const activeSessions = sessions?.filter(session => {
    const status = getScheduleStatus(session);
    return status !== 'Completed';
  }) || [];
    
  const nextSession = activeSessions.sort((a, b) => {
    const dateA = a.scheduledAt?.toDate ? a.scheduledAt.toDate() : new Date(a.scheduledAt || 0);
    const dateB = b.scheduledAt?.toDate ? b.scheduledAt.toDate() : new Date(b.scheduledAt || 0);
    return dateA - dateB;
  })[0];

  return { activeSessions, nextSession }
}