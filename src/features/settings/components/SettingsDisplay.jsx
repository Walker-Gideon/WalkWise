import { useEffect, useState } from "react";
import { LuUser, LuLoader } from "react-icons/lu";

import Conditional from "/src/components/Conditional";
import FormRow from "/src/components/FormRow";
import HeaderText from "/src/ui/HeaderText";
import Paragraph from "/src/ui/Paragraph";
import Card from "/src/components/Card";
import SpanText from "/src/ui/SpanText";
import Header from "/src/ui/Header";
import Button from "/src/ui/Button";
import Group from "/src/ui/Group";
import Input from "/src/ui/Input";
import Label from "/src/ui/Label";
import Flex from "/src/ui/Flex";
import Form from "/src/ui/Form";
import Box from "/src/ui/Box";

import { useUserData } from "/src/user/hook/useUserData";
import { useUpdateProfile } from "/src/features/settings/hooks/useUpdateProfile";

export default function SettingsDisplay() {
  const { userData } = useUserData();
  const { updateProfile, isLoading } = useUpdateProfile();

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [newUsername, setNewUsername] = useState("");

  // Initialize username when userData loads
  useEffect(() => {
    if (userData?.username) {
      setNewUsername(userData.username);
    }
  }, [userData]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const success = await updateProfile(newUsername, image);
    if (success) {
      setImage(null);
      setPreview(null);
    }
  };

  const displayEmail = userData?.email || "example@email.com";
  const displayUsername = userData?.username
    ? userData.username.charAt(0).toUpperCase() + userData.username.slice(1)
    : "";

  return (
    <Card classname={"my-10 medium:my-4.5 mx-5 w-auto md:w-3/4 lg:w-2/3"}>
      <Header>
        <HeaderText type="secondary">Profile Information</HeaderText>
        <Paragraph variant="small" classname={"secondary-text-color"}>
          Update your profile information visible to other users
        </Paragraph>
      </Header>

      <Form onsubmit={handleUpdate}>
        <Flex variant="center" classname={"my-7 w-full"}>
          <Label classname={"cursor-pointer"}>
            {preview ? (
            <img
              src={preview}
              alt="preview"
              className={`medium:w-30 medium:h-30 h-20 w-20 rounded-full object-cover`}
            />
             ) : userData?.photoURL ? ( 
             <img
              src={userData.photoURL}
              alt="User profile"
              className="medium:w-30 medium:h-30 h-20 w-20 rounded-full object-cover"
            /> 
             ) : (
            <Box
              adjustWidth={true}
              classname={
                "rounded-full flex items-center justify-center medium:w-30 medium:h-30 h-20 w-20 border-2 borderStyling"
              }
            >
              <LuUser
                className={`medium:w-20 medium:h-20 h-10 w-10 text-slate-500 dark:text-white`}
              />
            </Box>
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </Label>
        </Flex>

        <Group>
          <FormRow label="Display Name" classname={"mb-4"}>
            <Input
              type="text"
              name="name"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              placeholder="Enter username"
              classname={"w-full dark:text-slate-50"}
            />
          </FormRow>
          <FormRow label="Email">
            <Input
              classname={
                "w-full focus:outline-hidden disabled:cursor-not-allowed disabled:bg-gray-200 dark:text-white dark:disabled:bg-gray-500"
              }
              disabled={true}
              placeholder={displayEmail}
              value={displayEmail}
              readOnly
            />
          </FormRow>
          <Paragraph variant="small" classname={"mt-2 dark:text-slate-400"}>
            Email cannot be changed. Contact support if needed.
          </Paragraph>
        </Group>
        <Flex classname={"mt-4 items-center justify-end"}>
          <Button
            submit={true}
            type="colors"
            disabled={isLoading}
            classname={"flex items-center justify-center min-w-[120px]"}
          >
            <Conditional condition={!isLoading}>
              <SpanText>Save Changes</SpanText>
            </Conditional>
            <Conditional condition={isLoading}>
              <LuLoader className="h-5 w-5 animate-spin text-white" />
            </Conditional>
          </Button>
        </Flex>
      </Form>
    </Card>
  );
}
