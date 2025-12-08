export default function StudyFlashcardHeader() {
    return (
        <Header classname={"mb-4 py-6 middle:px-4 lg:px-8 flex items-center justify-between"}>
            <Flex classname={"items-center gap-2"}>
                <Button
                  variant="secondary" 
                  type="back"
                  onclick={handleBack}
                >
                    <LuArrowLeft className="w-5 h-5" />
                </Button>
                <HeaderText classname={"text-xl font-bold text-slate-900 dark:text-white"}>{title}</HeaderText>
            </Flex>

            <Flex classname={"items-center justify-end"}>
                <Menus>
                    <Menus.Toggle />

                    <Menus.Lists>
                        <Menus.Buttons onClick={handleEdit}>
                            <RiEditLine className="w-4 h-4" />
                            Edit
                        </Menus.Buttons>
                        <Menus.Buttons onClick={handleDelete}>
                            <RiDeleteBin5Line className="w-4 h-4" />
                            Delete
                        </Menus.Buttons>
                    </Menus.Lists>
                </Menus>
            </Flex>
        </Header>
    );
}