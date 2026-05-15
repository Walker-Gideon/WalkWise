import Heading from "/src/components/Heading";

export default function NoteGeneralHeader() {
    return (
        <Heading
            headerText="My Notes"
            theme={true}
            classname={`md:hidden`}
        />
    )
}