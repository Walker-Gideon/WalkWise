import { LuArrowLeft, LuFlame, LuCheck } from "react-icons/lu";

import HeaderText from "/src/ui/HeaderText";
import Container from "/src/ui/Container";
import Header from "/src/ui/Header";
import Button from "/src/ui/Button";
import Flex from "/src/ui/Flex";

export default function StudyFlashcardSummary() {
    function handleBack() {}
  return (
    // mt-10 w-full p-6 md:mx-auto md:max-w-3xl
    <Container classname={"p-4"}>
      <Header classname={"mb-4 py-6 middle:px-4 lg:px-8"}>
        <Flex classname={"items-center gap-2"}>
            <Button
              variant="secondary" 
              type="back"
              onclick={handleBack}
            >
                <LuArrowLeft className="w-5 h-5" />
            </Button>

            <HeaderText classname={"text-xl font-bold text-slate-900 dark:text-white"}>
               Review Complete!
            </HeaderText>
        </Flex>
      </Header>

        <div className="">
          <p className="medium:text-4xl middle:text-5xl mt-2 text-2xl text-slate-900 lg:text-6xl dark:text-white">
            You reviewed all your flashcards.
          </p>
        </div>

        <span className="medium:text-9xl -rotate-90 transform text-7xl">
          🎉
        </span>

      <p className="medium:text-xl mt-6 mb-4 font-medium text-slate-900 dark:text-white">
        How you're doing
      </p>

      <div className="flex items-center gap-6">
        <div>
          <div className="flex h-25 w-25 items-center justify-center rounded-full border-8 border-green-200 text-green-200 dark:border-green-300/30 dark:text-green-300/30">
            <LuCheck className="h-16 w-16" />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="medium:w-60 flex w-full items-center justify-between rounded-full bg-green-200 px-3 py-2 text-sm font-bold text-green-900 dark:bg-green-300/30 dark:text-white">
            <span>Completed</span>
            <span>X</span>
          </p>
          <p className="medium:w-60 flex w-full items-center justify-between rounded-full bg-slate-500 px-3 py-2 text-sm font-bold text-white">
            <span>Terms left</span>
            <span>0</span>
          </p>
          <p className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
            <LuFlame />
            <span className="mt-0.5">
              Current Streak : X day
            </span>
          </p>
        </div>
      </div>

      <div className="medium:mt-8 mt-10 flex w-full justify-between gap-4">
        <Button
        //   variant="outline"
          classname="cursor-pointer dark:text-white flex items-center gap-1 text-sm"
          onclick={() => {}}
        >
          <LuArrowLeft />
          Review Again
        </Button>

        <Button
        //   variant="outline"
        //   classname="primaryButton"
          onclick={() => {}}
          classname="btn-primary"
        >
          Back to Flashcard
        </Button>
      </div>
    </Container>
  );
}
