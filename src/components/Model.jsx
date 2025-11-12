import { LuX } from "react-icons/lu";
import { LuTarget } from "react-icons/lu";
import { LuCalendar } from "react-icons/lu";
import { LuClock } from "react-icons/lu";

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
            classname={""}
          >
            <LuX />
          </Button>
        </Flex>

        {/* Form */}
        {/* 
      
    Auto generated number of cards
    (date and time) 
    Cancel and add session buttons  */}
        <Form onsubmit={() => {}} classname={"mt-6"}>
          {/* Select tag input */}

          {/* Number of Cards */}
          <FormRow label="Number of Cards">
            <Group classname={"relative"}>
              <LuTarget className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                type="number"
                placeholder="Auto-filled after selecting tag"
                classname={`w-full dark:text-white pl-8  disabled:cursor-not-allowed`}
                disabled={true}
                //   value={formData.count}
              />
            </Group>
          </FormRow>

          <Flex variant="between" classname={"gap-2 my-4"}>
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
        </Form>
      </Group>
    </Overlay>
  );
}
