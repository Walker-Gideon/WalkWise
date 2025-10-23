import { RiDeleteBin5Line } from "react-icons/ri";

import HeaderText from "/src/ui/HeaderText";
import Container from "/src/ui/Container";
import Header from "/src/ui/Header";
import Group from "/src/ui/Group";
import Button from "../../../../ui/Button";
import Input from "../../../../ui/Input";

export default function CreateFlashcardLayout() {
  const styling = {
    label:
      "mb-1 block medium:text-xs text-sm font-medium text-slate-500 dark:text-slate-400",
    inputArea: "w-full input text-slate-900 dark:text-white",
  };

  return (
    <Container adjust={true}>
      <Header type="padding" classname={""}>
        <HeaderText variant="header">Create A New flashcard Set</HeaderText>
      </Header>

      <Group classname="mx-auto medium:mt-8 mt-14 max-w-3xl maxmid:max-w-4xl medium:h-[70vh] bg-red-500">
        <form className="space-y-2">
          {/* input tag */}
          <div className="medium:h-[41vh] medium:px-4 h-[36vh] space-y-6 overflow-y-scroll">
            <div className="flex flex-col gap-4 rounded-lg bg-slate-50 p-4 dark:bg-slate-600">
              <div>
                <div className="flex w-full items-center justify-between">
                  <label className={styling.label}>Term</label>

                  <Button>
                    <RiDeleteBin5Line className="h-4 w-4" />
                  </Button>
                </div>
                <Input type="text" placeholder="Enter term..." />
              </div>

              <div>
                <label className={styling.label}>Definition</label>
                <textarea
                  rows={2}
                  className={`resize-none ${styling.inputArea}`}
                  placeholder="Enter definition..."
                />
              </div>
            </div>
          </div>

          {/* add flashcard button */}

          {/* optional tag for set name */}

          {/* action button */}

          {/* notify information */}
        </form>
      </Group>
    </Container>
  );
}
