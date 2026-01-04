<div
            className={`scroll-container space-y-4 overflow-y-scroll ${todaySessions.length === 0 ? `h-170 lg:h-146` : `h-170`}`}
          >
            {todaySessions.length !== 0 ? (
              todaySessions.map((schedule) => (
                <CardContent key={schedule.id} role="button" type="innerCard">
                  <CardContent classname="flex items-center space-x-4">
                    <div
                      className={`h-4 w-4 rounded-full bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700`}
                    ></div>
                    <CardDiscription
                      classnameFirst="font-medium text-slate-900 dark:text-white"
                      classnameSecond="text-sm text-slate-500 dark:text-slate-400"
                      textOne={schedule.tag}
                      textTwo={`${schedule.count} cards • ${schedule.estimatedTime} min`}
                    />
                  </CardContent>

                  <CardContent classname="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-medium text-slate-900 dark:text-white">
                        {schedule.scheduledAt?.toDate
                          ? format(schedule.scheduledAt.toDate(), "HH:mm")
                          : "Invalid Time"}
                      </p>
                      <span className="inline-flex items-center space-x-1 rounded-full bg-slate-200 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-slate-900/30 dark:text-slate-300">
                        {getStatusIcon(getScheduleStatus(schedule))}
                        <span>{getScheduleStatus(schedule)}</span>
                      </span>
                    </div>

                    <Button
                      variant="outline"
                      onClick={() => handleScheduleSession(schedule.id)}
                      classname="rounded-sm bg-slate-500 p-2 text-white opacity-0 transition-colors group-hover:opacity-100 hover:bg-slate-600"
                    >
                      <LuPlay className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </CardContent>
              ))
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <p className="text-sm text-slate-500 dark:text-slate-50">
                  No sessions scheduled for today.
                </p>
              </div>
            )}
          </div>