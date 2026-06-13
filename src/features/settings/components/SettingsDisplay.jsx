import { useEffect, useState } from "react";
import { LuUser } from "react-icons/lu";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

import Box from "/src/ui/Box";
import Form from "/src/ui/Form";
import Flex from "/src/ui/Flex";
import Input from "/src/ui/Input";
import Group from "/src/ui/Group";
import Button from "/src/ui/Button";
import Spinner from "/src/ui/Spinner";
import Header from "/src/ui/Header";
import Card from "/src/components/Card";
import Paragraph from "/src/ui/Paragraph";
import HeaderText from "/src/ui/HeaderText";
import FormRow from "/src/components/FormRow";

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
  const hasChanges =
    (newUsername.trim() !== (userData?.username || "").trim() &&
      newUsername.trim() !== "") ||
    image !== null;

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
          <div className="relative">
            {preview ? (
              <img
                src={preview}
                alt="preview"
                className="medium:w-32 medium:h-32 h-24 w-24 rounded-full border-4 border-white object-cover shadow-md dark:border-slate-800"
              />
            ) : userData?.photoURL ? (
              <img
                src={userData.photoURL}
                alt="User profile"
                className="medium:w-32 medium:h-32 h-24 w-24 rounded-full border-4 border-white object-cover shadow-md dark:border-slate-800"
              />
            ) : (
              <Box
                adjustWidth={true}
                classname={
                  "rounded-full flex items-center justify-center medium:w-32 medium:h-32 h-24 w-24 border-2 borderStyling bg-slate-100 dark:bg-slate-700"
                }
              >
                <LuUser className="medium:w-16 medium:h-16 h-10 w-10 text-slate-400" />
              </Box>
            )}

            <label
              htmlFor="profile-upload"
              className={
                "absolute right-1 bottom-1 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-slate-600 text-white shadow-lg transition-colors hover:bg-slate-700"
              }
              title="Change Photo"
            >
              <MdOutlineAddPhotoAlternate className="h-5 w-5" />
              <input
                id="profile-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
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
            Email cannot be changed.
          </Paragraph>
        </Group>
        <Flex classname={"mt-4 items-center justify-end"}>
          <Button
            submit={true}
            type="colors"
            disabled={isLoading || !hasChanges}
            classname={"flex items-center justify-center min-w-[140px]"}
          >
            {isLoading ? (
              <Spinner
                primary={true}
                spinnerWidth="h-4 w-4"
                label="Saving..."
              />
            ) : (
              "Save Changes"
            )}
          </Button>
        </Flex>
      </Form>
    </Card>
  );
}
