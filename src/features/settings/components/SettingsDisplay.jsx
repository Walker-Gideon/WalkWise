import Card from "/src/components/Card";
import FormRow from "/src/components/FormRow";
import Paragraph from "/src/ui/Paragraph";
import HeaderText from "/src/ui/HeaderText";
import Header from "/src/ui/Header";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";
import Button from "/src/ui/Button";
import Input from "/src/ui/Input";

export default function SettingsRight() {
  return (
    <Card classname={"mt-6 w-[50%] ml-5"}>
      <Header classname={"mb-4"}>
        <HeaderText variant="secondary">Profile Information</HeaderText>
        <Paragraph variant="small" classname={"dark:text-slate-400"}>
          Update your profile information visible to other users
        </Paragraph>
      </Header>

      <Group>
        <Group>
          {/* <div className="medium:my-10 my-8 flex w-full items-center justify-center">
            <label className="cursor-pointer">
              {preview ? (
                <img
                  src={preview}
                  alt="preview"
                  className={`medium:w-30 medium:h-30 h-20 w-20 rounded-full object-cover`}
                />
              ) : userData.photoURL ? (
                <img
                  src={userData.photoURL}
                  alt="User profile"
                  className="medium:w-30 medium:h-30 h-20 w-20 rounded-full object-cover"
                />
              ) : (
                <User
                  classname={"w-20 h-20 medium:w-30 medium:h-30"}
                  icon={"w-10 h-10"}
                />
              )}
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div> */}
        </Group>

        <Group>
          <FormRow label="Display Name" classname={"mb-4"}>
            <Input
              type="text"
              name="name"
              // value={}
              // onChange={}
              placeholder="Enter username"
              classname={"w-full"} //dark:text-white
            />
          </FormRow>
          <FormRow label="Email">
            <Input
              classname={
                "w-full focus:outline-hidden disabled:cursor-not-allowed disabled:bg-gray-200 dark:text-white dark:disabled:bg-gray-500"
              }
              disabled={true}
              placeholder="example123@gmail.com"
            />
          </FormRow>
          <Paragraph variant="small" classname={"mt-2 dark:text-slate-400"}>
            Email cannot be changed. Contact support if needed.
          </Paragraph>
        </Group>
        <Flex classname={"mt-4 items-end justify-end"}>
          <Button type="colors" onclick={() => {}}>
            Save Changes
          </Button>
        </Flex>
      </Group>
    </Card>
  );
}
