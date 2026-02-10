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

/**
 * Fetch Notes for a specific user
 * @param {string} userId
 * @returns {Promise<Array>} Array of Notes
 */
export async function getNotes(userId) {
  if (!userId) return [];

  const notesRef = collection(db, "notes");
  const q = query(notesRef, where("userId", "==", userId));
  const snapshot = await getDocs(q);

  const userNotes = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return userNotes;
}

/**
 * Fetch a single note by ID
 * @param {string} noteId
 * @returns {Promise<Object>} The note data
 */
export async function getNoteById(noteId) {
    if (!noteId) return null;
    
    try {
        const docRef = doc(db, "notes", noteId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            return null; // Note not found
        }
    } catch (error) {
        console.error("Error fetching note:", error);
        throw error;
    }
}

/**
 * Update an existing note
 * @param {string} noteId
 * @param {Object} data - The data to update
 * @returns {Promise<Object>} The updated note data
 */
export async function updateNote(noteId, data) {
    if (!noteId) throw new Error("Note ID is required for update");
    
    try {
        const timestamp = serverTimestamp();
        const updateData = { ...data, updatedAt: timestamp };
        const docRef = doc(db, "notes", noteId);
        
        await updateDoc(docRef, updateData);
        return { id: noteId, ...updateData };
    } catch (error) {
        console.error("Error updating note:", error);
        throw error;
    }
}

/**
 * Delete a note
 * @param {string} id
 * @returns {Promise<Object>} The note
 */
export async function deleteNote(id) {
  if (!id) throw new Error("Note ID is required for deletion");

  const ref = doc(db, "notes", id);
  await deleteDoc(ref);
}