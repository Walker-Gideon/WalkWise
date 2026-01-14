import { isSameMonth, isToday, isSameDay } from "date-fns";

import Paragraph from "/src/ui/Paragraph";
import Group from "/src/ui/Group";
import Box from "/src/ui/Box";

import { getScheduleStatus, getStatusColor } from "/src/helper/helpers";

export default function CalendarGrid({ calendarDays, currentMonth, sessions = [], showSessionDetails = false }) {
  return (
    <Group
      classname={
        "mb-3 grid grid-cols-7 gap-1 text-xs text-slate-500 dark:text-slate-400"
      }
    >
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
        <Box
          adjustWidth={true}
          key={day}
          classname={"py-1 text-center font-medium"}
        >
          {day}
        </Box>
      ))}

      {calendarDays.map((day) => {
        const dayNumber = day.getDate();
        const isCurrentMonth = isSameMonth(day, currentMonth);
        const isTodayDate = isToday(day);

        const backgroundColor = isTodayDate
          ? "bg-emerald-500 text-white"
          : isCurrentMonth
            ? "text-slate-600 dark:text-slate-400"
            : "text-slate-400 dark:text-slate-600";

        // Filter sessions for this day
        const daySessions = sessions.filter((session) => {
             if (!session.scheduledAt) return false;
             const sessionDate = session.scheduledAt.toDate ? session.scheduledAt.toDate() : new Date(session.scheduledAt);
             return isSameDay(sessionDate, day);
        });
        
        // Dynamic layout based on view mode
        const containerClasses = showSessionDetails 
            ? `flex flex-col items-start justify-start p-1 text-sm rounded-lg min-h-[80px] ${backgroundColor} relative border border-slate-100 dark:border-slate-800`
            : `flex flex-col items-center justify-center text-sm rounded-lg aspect-square ${backgroundColor} relative`;

        return (
          <Box
            adjustWidth={true}
            key={day.toISOString()}
            classname={containerClasses}
          >
            <span className={showSessionDetails ? "mb-1 font-semibold block w-full text-right px-1" : ""}>
               {dayNumber}
            </span>
            
            {/* Detailed View (Chips) */}
            {showSessionDetails && (
                <div className="flex flex-col gap-1 w-full overflow-hidden">
                    {daySessions.map((session, i) => {
                        const status = getScheduleStatus(session);
                        const statusColor = getStatusColor(status);
                        
                        return (
                            <Paragraph key={session.id || i} classname={`${statusColor} font-medium text-[10px] px-2 py-0.5 rounded-md truncate w-full`}>
                                {session.title}
                            </Paragraph>
                        )
                    })}
                </div>
            )}

            {/* Compact View (Dots) */}
            {!showSessionDetails && (
                <div className="flex justify-center gap-0.5 mt-1 absolute bottom-1">
                    {daySessions.slice(0, 3).map((session, i) => {
                        const status = getScheduleStatus(session);
                        
                        let dotColor = "bg-slate-400 dark:bg-slate-500"; // default
                        if (status === "Completed") dotColor = "bg-green-500 dark:bg-green-400";
                        if (status === "Due") dotColor = "bg-amber-500 dark:bg-amber-400";
                        if (status === "Pending") dotColor = "bg-blue-500 dark:bg-blue-400";
                        if (status === "In Progress") dotColor = "bg-blue-600 dark:bg-blue-500";

                        return (
                            <div key={i} className={`h-1.5 w-1.5 rounded-full ${dotColor}`} />
                        )
                    })}
                </div>
            )}
          </Box>
        );
      })}
    </Group>
  );
}
