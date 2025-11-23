import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, db } from "../../service/firebase";
import { doc, onSnapshot } from "firebase/firestore";

export function useUserData() {
  const [firebaseUser, setFirebaseUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setFirebaseUser(user);

      if (!user) {
        setUserData(null);
        setLoading(false);
        return;
      }

      const userRef = doc(db, "users", user.uid);
      const unsubscribeDoc = onSnapshot(
        userRef,
        (snapshot) => {
          setUserData(snapshot.data());
          setLoading(false);
        },
        (err) => {
          setError(err);
          setLoading(false);
        },
      );

      return unsubscribeDoc;
    });

    return () => unsubscribeAuth();
  }, []);

  return { firebaseUser, userData, loading, error };
}
