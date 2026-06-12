import { useNavigate } from "react-router-dom";
import { LuMapPinned } from "react-icons/lu";

import Button from "/src/ui/Button";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 text-center dark:bg-slate-900">
      <div className="space-y-6 max-w-md">
        {/* Animated Icon / Visual */}
        <div className="flex justify-center">
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400 shadow-sm">
            <LuMapPinned className="h-12 w-12 animate-bounce" />
            <span className="absolute -top-1 -right-2 rounded-md bg-red-500 px-2 py-0.5 text-xs font-bold text-white shadow-sm">
              404
            </span>
          </div>
        </div>

        {/* Heading text */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            You've wandered off track!
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400">
            The path or page you are looking for doesn't exist, or has been relocated within the application.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Button
            variant="primary"
            ariaLabel="Back to Safety"
            onClick={() => navigate("/", { replace: true })}
            className={"w-full sm:w-auto px-6 py-3 text-base shadow-lg"}
          >
            Back to Safety
          </Button>
        </div>
      </div>
    </div>
  );
}