import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { LuX, LuTarget, LuCalendar, LuClock } from "react-icons/lu";

import FormRow from "/src/components/FormRow";
import HeaderText from "/src/ui/HeaderText";
import Model from "/src/components/Model";
import Spinner from "/src/ui/Spinner";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Form from "/src/ui/Form";
import Flex from "/src/ui/Flex";

import { useSchedule } from "../context/ScheduleContext";
import { useCreateSession } from "../hooks/useCreateSession";
import { useUpdateSession } from "../hooks/useUpdateSession";
import { useSessions } from "../hooks/useSessions";
import { useFetchCards } from "/src/hook/useCards";

export default function SessionForm() {
  const { flashcards = [] } = useFetchCards();
  const { selectedId, setIsDisplaySessionForm } = useSchedule();
  const { createSession, isCreating } = useCreateSession();
  const { updateMutation: updateSession, isUpdating } = useUpdateSession();
  const { sessions } = useSessions();
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
    defaultValues: {
      tag: "",
    },
  });

  const sesssionSelectedId = watch("tag");

  useEffect(() => {
    if (sesssionSelectedId) {
      const selectedCard = flashcards.find((card) => card.id === sesssionSelectedId);
      const count = selectedCard?.pairs?.length || 0;
      setValue("cardCount", count);
    } else {
        setValue("cardCount", "");
    }
  }, [sesssionSelectedId, flashcards, setValue]);

  useEffect(() => {
    if (selectedId && sessions) {
      const sessionToEdit = sessions.find((s) => s.id === selectedId);
      if (sessionToEdit) {
        setValue("tag", sessionToEdit.tag);
        setValue("cardCount", sessionToEdit.numCards);
        
        if (sessionToEdit.scheduledAt) {
            const dateObj = sessionToEdit.scheduledAt.toDate ? sessionToEdit.scheduledAt.toDate() : new Date(sessionToEdit.scheduledAt);
            const year = dateObj.getFullYear();
            const month = String(dateObj.getMonth() + 1).padStart(2, '0');
            const day = String(dateObj.getDate()).padStart(2, '0');
            
            const hours = String(dateObj.getHours()).padStart(2, '0');
            const minutes = String(dateObj.getMinutes()).padStart(2, '0');

            setValue("date", `${year}-${month}-${day}`);
            setValue("time", `${hours}:${minutes}`);
        }
      }
    } else {
        setValue("tag", "");
        setValue("cardCount", "");
        setValue("date", "");
        setValue("time", "");
    }
  }, [selectedId, sessions, setValue]);

  const onSubmit = (data) => {
    const selectedCard = flashcards.find((card) => card.id === data.tag);
    
    // Combine date and time
    const scheduledAt = new Date(`${data.date}T${data.time}`);

    const sessionData = {
      ...data,
      title: selectedCard?.title || "Untitled Session",
      numCards: Number(data.cardCount),
      duration: Number(data.cardCount) * 1, // Estimating 1 min per card
      scheduledAt,
      status: "pending",
    };

    if (selectedId) {
      updateSession(
        { id: selectedId, data: sessionData },
        {
          onSuccess: () => {
            setIsDisplaySessionForm(false);
          },
        }
      );
    } else {
      createSession(sessionData, {
        onSuccess: () => {
          setIsDisplaySessionForm(false);
        },
      });
    }
  };

  const baseInputStyles = "rounded-sm border border-stone-300 px-1.5 py-1.5 text-sm text-black transition-all duration-300 placeholder:text-xs hover:border-slate-400 focus:ring-2 focus:ring-slate-400 focus:outline-hidden";
  const errorStyling = "text-red-500 text-sm";

  return (
    <>
    {isCreating || isUpdating && <Spinner />}
    <Model>
      <Flex variant="between">
        <HeaderText type="secondary">{selectedId ? "Edit Study Session" : "Add Study Session"}</HeaderText>
        <Button
          variant="secondary"
          onclick={() => setIsDisplaySessionForm((show) => !show)}
          classname={"medium:text-2xl text-xl dark:text-white"}
        >
          <LuX />
        </Button>
      </Flex>

      <Form onsubmit={handleSubmit(onSubmit)} classname={"mt-6"}>
        <FormRow label="Select Tag *" error={errors?.tag?.message} errStyling={errorStyling}>
          <select
            className="input w-full disabled:cursor-not-allowed dark:text-white dark:bg-slate-700"
            {...register("tag", { required: "Tag is required" })}
          >
            <option value="" disabled hidden>
              Select a flashcard tag
            </option>
            {flashcards.length === 0 ? (
              <option disabled>No flashcards found</option>
            ) : (
              flashcards.map((card) => (
                <option key={card.id} value={card.id}>
                  {card.title}
                </option>
              ))
            )}
          </select>
        </FormRow>

        <FormRow label="Number of Cards" classname={"my-4"}>
          <Group classname={"relative"}>
            <LuTarget className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="number"
              placeholder="Auto-filled after selecting tag"
              className={`${baseInputStyles} w-full pl-8 disabled:cursor-not-allowed dark:text-white dark:bg-slate-700`}
              disabled={true}
              {...register("cardCount")}
            />
          </Group>
        </FormRow>

        <Flex variant="between" classname={"gap-2 mb-4"}>
          <FormRow label="Date *" error={errors?.date?.message} errStyling={errorStyling}>
            <Group classname={"relative"}>
              <LuCalendar className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="date"
                className={`${baseInputStyles} w-full pl-8 dark:text-white dark:bg-slate-700`}
                {...register("date", { required: "Date is required" })}
              />
            </Group>
          </FormRow>

          <FormRow label="Time *" error={errors?.time?.message} errStyling={errorStyling}>
            <Group classname={"relative"}>
              <LuClock className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="time"
                className={`${baseInputStyles} w-full pl-8 dark:text-white dark:bg-slate-700`}
                {...register("time", { required: "Time is required" })}
              />
            </Group>
          </FormRow>
        </Flex>

        <Flex variant="between" classname={"gap-2 pt-4"}>
          <Button
            onclick={(e) => {
              e.preventDefault();
              setIsDisplaySessionForm((show) => !show);
            }}
            type="border"
            classname={"w-full border-stone-300 dark:text-white"}
          >
            Cancel
          </Button>
          <Button
            type="colors"
            classname={"w-full flex items-center justify-center"}
          >
            {selectedId ? "Save Changes" : "Add Session"}
          </Button>
        </Flex>
      </Form>
    </Model>
    </>
  );
}
