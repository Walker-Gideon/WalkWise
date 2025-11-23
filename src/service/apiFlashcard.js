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

// Fetch all flashcards for a specific user (or all if userId is null)
export async function getFlashcards(userId = null) {
  const colRef = collection(db, "flashcards");

  let q;
  if (userId) {
    q = query(
      colRef,
      where("userId", "==", userId),
      orderBy("createdAt", "desc"),
    );
  } else {
    q = query(colRef, orderBy("createdAt", "desc"));
  }

  const snapshot = await getDocs(q);
  const flashcards = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return flashcards;
}
