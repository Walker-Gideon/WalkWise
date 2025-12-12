import { db } from "./firebase";
import { doc, updateDoc } from "firebase/firestore";

/**
 * Update user document
 * @param {string} userId - The user's ID
 * @param {Object} data - The data to update
 * @returns {Promise<void>}
 */
export async function updateUser(userId, data) {
  const userRef = doc(db, "users", userId);
  await updateDoc(userRef, data);
}
