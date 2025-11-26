import { db } from "./firebase";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
} from "firebase/firestore";

// Create flashcard
export async function createFlashcard(data) {
  const ref = collection(db, "flashcards");
  const docRef = await addDoc(ref, data);

  const docSnap = await getDoc(docRef);
  return { id: docRef.id, ...docSnap.data() };
}

// Update flashcard
export async function updateFlashcard(id, data) {
  const ref = doc(db, "flashcards", id);
  await updateDoc(ref, data);
  return { id, ...data };
}

/**
 * Fetch flashcards for a specific user
 * @param {string} userId
 * @returns {Promise<Array>} Array of flashcards
 */
export async function getFlashcards(userId) {
  if (!userId) return [];

  const flashcardsRef = collection(db, "flashcards");
  const q = query(flashcardsRef, where("userId", "==", userId));
  const snapshot = await getDocs(q);

  const userFlashcards = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return userFlashcards;
}
