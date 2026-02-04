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
 * Create a new note
 * @param {Object} data - The note data to create
 * @returns {Promise<Object>} The created note
 */
export async function createNote(data) {
    try {
        const docRef = await addDoc(collection(db, "notes"), data);
        return { id: docRef.id, ...data };
    } catch (error) {
        console.error("Error creating note:", error);
        throw error;
    }
}