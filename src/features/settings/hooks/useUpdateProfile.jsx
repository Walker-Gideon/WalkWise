import { useState } from "react";
import toast from "react-hot-toast";
import { doc, updateDoc } from "firebase/firestore";

import { db } from "/src/service/firebase";
import { useUserData } from "/src/user/hook/useUserData";
import { uploadProfileImage } from "/src/helper/helpers";

export function useUpdateProfile() {
  const { userData, firebaseUser } = useUserData();
  const [isLoading, setIsLoading] = useState(false);

  const updateProfile = async (newUsername, image) => {
    if (!firebaseUser) return false;

    setIsLoading(true);
    const pendingUpdates = {};

    try {
      // 1. Handle username update
      if (
        newUsername &&
        newUsername.trim() &&
        newUsername !== userData?.username
      ) {
        pendingUpdates.username = newUsername.trim();
      }

      // 2. Handle image upload and update
      if (image) {
        try {
          // Pass uid along to generate user-specific asset paths
          const downloadURL = await uploadProfileImage(image, firebaseUser.uid);
          pendingUpdates.photoURL = downloadURL;
        } catch (uploadError) {
          // Catches specific Cloudinary failures without breaking the whole process
          toast.error(uploadError.message || "Image upload failed.");
          return false;
        }
      }

      // 3. Commit mutations in a single batch atomic update
      if (Object.keys(pendingUpdates).length > 0) {
        const userRef = doc(db, "users", firebaseUser.uid);
        await updateDoc(userRef, pendingUpdates);
        
        toast.success("Profile updated successfully!");
        return true;
      }

      toast("No changes to update.");
      return false;

    } catch (err) {
      console.error("Database sync error:", err);
      toast.error("Failed to save changes to profile.");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { updateProfile, isLoading };
}
