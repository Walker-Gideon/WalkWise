import { db } from "./firebase";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

/**
 * Create a new flashcard
 * @param {Object} data - The flashcard data to create
 * @returns {Promise<Object>} The created flashcard
 */
export async function createFlashcard(data) {
  const ref = collection(db, "flashcards");
  const docRef = await addDoc(ref, data);

  const docSnap = await getDoc(docRef);
  return { id: docRef.id, ...docSnap.data() };
}

/**
 * Update an existing flashcard
 * @param {string} id - The ID of the flashcard to update
 * @param {Object} data - The flashcard data to update
 * @returns {Promise<Object>} The updated flashcard
 */
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

/**
 * Delete a flashcard
 * @param {string} id
 * @returns {Promise<Object>} The flashcard
 */
export async function deleteFlashcard(id) {
  const ref = doc(db, "flashcards", id);
  await deleteDoc(ref);
}