import HeaderText from "/src/ui/HeaderText";
import Header from "/src/ui/Header";

export default function FlashcardHeader() {
  return (
    <Header>
      <HeaderText
        classname={
          "text-xl font-bold text-slate-900 dark:text-white medium:mb-2 medium:block hidden"
        }
      >
        My Flashcards
      </HeaderText>
    </Header>
  );
}
