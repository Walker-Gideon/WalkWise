export function toggleFlashcardDisplays(setter, delay = 200) {
  setTimeout(() => {
    setter((show) => !show);
  }, delay);
}
