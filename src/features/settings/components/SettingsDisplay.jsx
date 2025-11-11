import Card from "/src/components/Card";
import Paragraph from "/src/ui/Paragraph";
import HeaderText from "/src/ui/HeaderText";
import Header from "/src/ui/Header";
import Group from "/src/ui/Group";
import Flex from "/src/ui/Flex";
import Button from "/src/ui/Button";

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
          {/* <div>
            <div className={`mb-4 ${styling.label}`}>
              <label htmlFor="name">Display Name</label>
              <Input
                type="text"
                name="username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                placeholder={displayUsername || "Enter username"}
                classname={styling.input}
              />
            </div>

            <div className={styling.label}>
              <label htmlFor="name">Email</label>
              <input
                className={`rounded-sm border border-stone-300 px-1.5 py-1.5 text-sm text-black transition-all duration-300 placeholder:text-xs focus:outline-hidden disabled:cursor-not-allowed disabled:bg-gray-200 dark:disabled:bg-gray-500 ${styling.input}`}
                disabled={true}
                placeholder={
                  displayEmail ? displayEmail : "example123@gmail.com"
                }
              />
            </div>

            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Email cannot be changed. Contact support if needed.
            </p>
          </div> */}
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
