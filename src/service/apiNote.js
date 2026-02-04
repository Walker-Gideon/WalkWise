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
  serverTimestamp,
} from "firebase/firestore";

/**
 * Create a new note
 * @param {Object} data - The note data to create
 * @returns {Promise<Object>} The created note
 */
export async function createNote(data) {
    try {
        const timestamp = serverTimestamp();
        const noteData = { ...data, createdAt: timestamp, updatedAt: timestamp };
        const docRef = await addDoc(collection(db, "notes"), noteData);
        return { id: docRef.id, ...noteData };
    } catch (error) {
        console.error("Error creating note:", error);
        throw error;
    }
}