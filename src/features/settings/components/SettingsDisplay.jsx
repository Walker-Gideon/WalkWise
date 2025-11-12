import { LuUser } from "react-icons/lu";

import FormRow from "/src/components/FormRow";
import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import Card from "/src/components/Card";
import Header from "/src/ui/Header";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Input from "/src/ui/Input";
import Label from "/src/ui/Label";
import Flex from "/src/ui/Flex";
import Form from "/src/ui/Form";
import Box from "/src/ui/Box";

export default function SettingsRight() {
  return (
    <Card classname={"my-4 mx-5 medium:w-140 w-auto lg:w-160"}>
      <Header classname={"mb-4"}>
        <HeaderText variant="secondary">Profile Information</HeaderText>
        <Paragraph variant="small" classname={"dark:text-slate-400"}>
          Update your profile information visible to other users
        </Paragraph>
      </Header>

      <Form onsubmit={() => {}}>
        <Flex variant="center" classname={"medium:my-10 my-8 w-full"}>
          <Label classname={"cursor-pointer"}>
            {/* {preview ? (
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
             ) : (  */}
            <Box
              adjustWidth={true}
              // bg-gradient-to-r from-slate-200 to-slate-300 transition-colors duration-300 dark:from-slate-600 dark:to-slate-700
              classname={
                "rounded-full flex items-center justify-center medium:w-30 medium:h-30 h-20 w-20 border-2 border-slate-500"
              }
            >
              {/* text-white */}
              <LuUser
                className={`medium:w-20 medium:h-20 h-10 w-10 text-slate-500`}
              />
            </Box>
            {/* )} */}
            <input
              type="file"
              // ref={fileInputRef}
              accept="image/*"
              className="hidden"
              // onChange={handleImageChange}
            />
          </Label>
        </Flex>

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
      </Form>
    </Card>
  );
}
