import { db } from "./firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";

// Create flashcard
export async function createFlashcard(data) {
  const ref = collection(db, "flashcards");
  const docRef = await addDoc(ref, data);
  return { id: docRef.id, ...data };
}

// Update flashcard
export async function updateFlashcard(id, data) {
  const ref = doc(db, "flashcards", id);
  await updateDoc(ref, data);
  return { id, ...data };
}
