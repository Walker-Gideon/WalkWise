import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { LuX, LuTarget, LuCalendar, LuClock } from "react-icons/lu";

import Flex from "/src/ui/Flex";
import Form from "/src/ui/Form";
import Group from "/src/ui/Group";
import Button from "/src/ui/Button";
import Spinner from "/src/ui/Spinner";
import SpanText from "/src/ui/SpanText";
import Model from "/src/components/Model";
import HeaderText from "/src/ui/HeaderText";
import FormRow from "/src/components/FormRow";
import Conditional from "/src/components/Conditional";

import { useFetchCards } from "/src/hook/useCards";
import { useSessions } from "../hooks/useSessions";
import { useSchedule } from "../context/ScheduleContext";
import { useUpdateSession } from "../hooks/useUpdateSession";
import { useCreateSession } from "../hooks/useCreateSession";

export default function SessionForm() {
  const { sessions } = useSessions();
  const { flashcards = [] } = useFetchCards();
  const { updateSession, isUpdating } = useUpdateSession();
  const { createSession, isCreating } = useCreateSession();
  const { selectedId, setSelectedId, setIsDisplaySessionForm } = useSchedule();

  const [maxLength, setMaxLength] = useState(40);

  useEffect(() => {
    const handleResize = () => {
      setMaxLength(window.innerWidth < 450 ? 22 : window.innerWidth < 640 ? 30 : 40);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
    defaultValues: {
      tag: "",
    },
  });

  const sesssionSelectedId = watch("tag");
  const isSubmitting = isCreating || isUpdating;

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
             handleCloseModal();
          },
        }
      );
    } else {
      createSession(sessionData, {
        onSuccess: () => {
           handleCloseModal();
        },
      });
    }
  };

  function handleCloseModal() {
    setIsDisplaySessionForm(false);
    setSelectedId(null);
    setValue("tag", "");
    setValue("cardCount", "");
    setValue("date", "");
    setValue("time", "");
  }

  const baseInputStyles = "rounded-sm border border-stone-300 px-1.5 py-1.5 text-sm text-black transition-all duration-300 placeholder:text-xs hover:border-slate-400 focus:ring-2 focus:ring-slate-400 focus:outline-hidden";
  const errorStyling = "text-red-500 text-xs absolute bottom-0 left-0";

  return (
    <Model styling={"mx-8"}>
      <Flex variant="between">
        <HeaderText type="secondary">
          <Conditional condition={selectedId}>
            <SpanText>Edit Study Session</SpanText>
          </Conditional>
          <Conditional condition={!selectedId}>
            <SpanText>Add Study Session</SpanText>
          </Conditional>
        </HeaderText>
        <Button
          variant="secondary"
          onclick={handleCloseModal}
          classname={"medium:text-2xl text-xl dark:text-white"}
        >
          <LuX />
        </Button>
      </Flex>
      <Form onsubmit={handleSubmit(onSubmit)} classname={"mt-6"}>
        <FormRow label="Select Tag *" error={errors?.tag?.message} errStyling={errorStyling} classname={"relative pb-5"}>
          <select
            className="input w-full disabled:cursor-not-allowed dark:text-white dark:bg-slate-700 text-sm"
            {...register("tag", { required: "Tag is required" })}
          >
            <option value="" disabled hidden>
              Select a flashcard tag
            </option>
            <Conditional condition={flashcards.length === 0}>
              <option disabled>No flashcards found</option>
            </Conditional>
            <Conditional condition={flashcards.length > 0}>
              {flashcards.map((card) => (
                <option key={card.id} value={card.id} className="text-sm">
                  {card?.title?.length > maxLength ? `${card.title.slice(0, maxLength)}...` : card.title}
                </option>
              ))}
            </Conditional>
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
          <FormRow label="Date *" error={errors?.date?.message} errStyling={errorStyling} classname={"relative pb-5"}>
            <Group classname={"relative"}>
              <LuCalendar className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="date"
                className={`${baseInputStyles} w-full pl-8 dark:text-white dark:bg-slate-700`}
                {...register("date", { required: "Date is required" })}
              />
            </Group>
          </FormRow>
          <FormRow label="Time *" error={errors?.time?.message} errStyling={errorStyling} classname={"relative pb-5"}>
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
              handleCloseModal();
            }}
            type="border"
            classname={"w-full border-stone-300 dark:text-white"}
          >
            Cancel
          </Button>
          <Button
            type="colors"
            disabled={isSubmitting}
            classname={"w-full flex items-center justify-center"}
          >
            <Conditional condition={isSubmitting}>
              <Spinner primary={true} spinnerWidth={"h-4 w-4"} styling={"border-2"} />
            </Conditional>
            <Conditional condition={!isSubmitting}>
              <Conditional condition={selectedId}>
                <SpanText>Save Changes</SpanText>
              </Conditional>
              <Conditional condition={!selectedId}>
                <SpanText>Add Session</SpanText>
              </Conditional>
            </Conditional>
          </Button>
        </Flex>
      </Form>
    </Model>
  );
}
