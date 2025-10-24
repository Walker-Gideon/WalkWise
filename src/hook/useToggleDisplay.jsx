export default function useToggleDisplay(setter, delay = 200) {
  const toggleFlashcardDisplays = () => {
    setTimeout(() => {
      setter((show) => !show);
    }, delay);
  };
  return toggleFlashcardDisplays;
}
