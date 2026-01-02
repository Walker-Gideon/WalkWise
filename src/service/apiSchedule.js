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
 * Create a new session
 * @param {Object} data - The session data to create
 * @returns {Promise<Object>} The created session
 */
export async function createSession(data) {
  const ref = collection(db, "schedule");
  const docRef = await addDoc(ref, data);

  const docSnap = await getDoc(docRef);
  return { id: docRef.id, ...docSnap.data() };
}

/**
 * Update an existing session
 * @param {string} id - The ID of the session to update
 * @param {Object} data - The session data to update
 * @returns {Promise<Object>} The updated session
 */
export async function updateSession(id, data) {
  const ref = doc(db, "schedule", id);
  await updateDoc(ref, data);
  return { id, ...data };
}

/**
 * Fetch sessions for a specific user
 * @param {string} userId
 * @returns {Promise<Array>} Array of sessions
 */
export async function getSessions(userId) {
  if (!userId) return [];

  const sessionsRef = collection(db, "schedule");
  const q = query(sessionsRef, where("userId", "==", userId));
  const snapshot = await getDocs(q);

  const userSessions = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return userSessions;
}

/**
 * Delete a session
 * @param {string} id
 * @returns {Promise<Object>} The session
 */
export async function deleteSession(id) {
  const ref = doc(db, "schedule", id);
  await deleteDoc(ref);
}
