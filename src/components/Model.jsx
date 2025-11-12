import { LuX, LuTarget, LuCalendar, LuClock } from "react-icons/lu";

import FormRow from "/src/components/FormRow";
import HeaderText from "/src/ui/HeaderText";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Input from "/src/ui/Input";
import Form from "/src/ui/Form";
import Flex from "/src/ui/Flex";
import Overlay from "./Overlay";

export default function Model({ onDisplaySessionForm }) {
  // Create one for saving the note

  // Default is Schedule
  return (
    <Overlay>
      <Group
        //  dark:bg-slate-800
        classname={
          "w-full max-w-md rounded-2xl border borderStyling bg-white p-6 shadow-2xl "
        }
      >
        <Flex variant="between">
          <HeaderText type="secondary">Add Study Session</HeaderText>
          <Button
            variant="secondary"
            onclick={() => onDisplaySessionForm((show) => !show)}
            classname={"medium:text-2xl text-xl"}
          >
            <LuX />
          </Button>
        </Flex>

        <Form onsubmit={() => {}} classname={"mt-6"}>
          <FormRow label="Select Tag *">
            <select
              className="input w-full disabled:cursor-not-allowed" //dark:bg-slate-700 dark:text-white
              // value={}
              // onChange={}
              // disabled={}
            >
              <option value="" disabled hidden>
                Select a flashcard tag
              </option>
              <option disabled>No flashcards found</option>

              {/* {flashcards.length === 0 ? (
                <option disabled>No flashcards found</option>
              ) : (
                flashcards.map((card) => (
                  <option key={card.id} value={card.tags?.trim()}>
                    {card.tags || "Untitled"}
                  </option>
                ))
              )} */}
            </select>
          </FormRow>

          <FormRow label="Number of Cards" classname={"my-4"}>
            <Group classname={"relative"}>
              <LuTarget className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                type="number"
                placeholder="Auto-filled after selecting tag"
                classname={"w-full pl-8 disabled:cursor-not-allowed"} //dark:text-white
                disabled={true}
                //   value={formData.count}
              />
            </Group>
          </FormRow>

          <Flex variant="between" classname={"gap-2 mb-4"}>
            <FormRow label="Date *">
              <Group classname={"relative"}>
                <LuCalendar className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  type="date"
                  classname={`w-full pl-8`} //dark:text-white
                  //   value={}
                  // onChange={}
                  // disabled={}
                />
              </Group>
            </FormRow>

            <FormRow label="Time *">
              <Group classname={"relative"}>
                <LuClock className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  type="time"
                  classname={`w-full pl-8`} //dark:text-white
                  //   value={}
                  // onChange={}
                  // disabled={}
                />
              </Group>
            </FormRow>
          </Flex>

          <Flex variant="between" classname={"gap-2 pt-4"}>
            <Button
              onclick={(e) => {
                e.preventDefault();
                onDisplaySessionForm((show) => !show);
              }}
              // classname="button dark:border-stone-300 border-slate-500 w-full dark:text-white disabled:cursor-not-allowed"
              type="border"
              classname={"w-full border-stone-300"}
              // disabled={}
            >
              Cancel
            </Button>
            <Button
              type="colors"
              classname={"w-full flex items-center justify-center"}
              onclick={(e) => {
                e.preventDefault();
              }}
            >
              {/* {isSubmitting ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Adding...
                </>
              ) : (
                <>
                  <LuPlus className="mr-2 h-4 w-4" />
                  Add Session
                </>
              )} */}
              Add Session
            </Button>
          </Flex>
        </Form>
      </Group>
    </Overlay>
  );
}
