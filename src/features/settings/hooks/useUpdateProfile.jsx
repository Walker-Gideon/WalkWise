import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";

import { db } from "/src/service/firebase";
import { useUserData } from "/src/user/hook/useUserData";
import { uploadProfileImage } from "/src/helper/helpers";

export function useUpdateProfile() {
  const { userData, firebaseUser } = useUserData();
  const [isLoading, setIsLoading] = useState(false);

  const updateProfile = async (newUsername, image) => {
    if (!firebaseUser) return;
    setIsLoading(true);

    let hasChanges = false;
    let successMessage = "";

    try {
      // 1. Handle username update
      if (
        newUsername &&
        newUsername.trim() &&
        newUsername !== userData?.username
      ) {
        const userRef = doc(db, "users", firebaseUser.uid);
        await updateDoc(userRef, { username: newUsername });
        hasChanges = true;
      }

      // 2. Handle image upload and update
      if (image) {
        const downloadURL = await uploadProfileImage(image, firebaseUser.uid);
        if (downloadURL) {
          const userRef = doc(db, "users", firebaseUser.uid);
          await updateDoc(userRef, { photoURL: downloadURL });
          hasChanges = true;
        } else {
          toast.error("Failed to upload image.");
          setIsLoading(false);
          return false;
        }
      }

      if (hasChanges) {
        successMessage = "Profile updated successfully!";
        toast.success(successMessage);
        return true;
      } else {
        toast("No changes to update.");
        return false;
      }
    } catch (error) {
      toast.error("Failed to update profile.");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { updateProfile, isLoading };
}
