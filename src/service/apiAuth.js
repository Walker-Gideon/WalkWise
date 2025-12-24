import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

/**
 * Sign up a user and create Firestore document
 * @param {string} email
 * @param {string} username
 * @param {string} password
 */
export async function signUpUser({ email, username, password }) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;

    await updateProfile(user, { displayName: username, photoURL: null });

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      email,
      username,
      photoURL: null,
      isGoogleSignIn: false,
      createdAt: serverTimestamp(),
      streakCount: 0,
      lastActiveDate: null,
      settings: { theme: "light" },
      flashcards: [],
    });

    return { user };
  } catch (err) {
    let errorMessage = "Signup failed. Please try again.";

    if (err.code) {
      switch (err.code) {
        case "auth/email-already-in-use":
          errorMessage =
            "Email already in use. Please try a different email or sign in.";
          break;
        case "auth/invalid-email":
          errorMessage =
            "Invalid email address. Please check your email format.";
          break;
        case "auth/weak-password":
          errorMessage =
            "Password is too weak. Please choose a stronger password.";
          break;
        case "auth/network-request-failed":
          errorMessage =
            "Network error. Please check your internet connection.";
          break;
        case "auth/too-many-requests":
          errorMessage = "Too many attempts. Please try again later.";
          break;
        case "auth/operation-not-allowed":
          errorMessage =
            "Email/password signup is not enabled. Please contact support.";
          break;
        default:
          console.error("Firebase Auth Error:", err);
          errorMessage = err.message || "An unexpected error occurred. Please try again.";
      }
    } else {
        console.error("Unexpected Error:", err);
        errorMessage = err.message || "An unexpected error occurred. Please try again.";
    }

    throw new Error(errorMessage);
  }
}

/**
 * Sign in a user
 * @param {string} email
 * @param {string} password
 */
export async function loginUser({ email, password }) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return { user: userCredential.user };
  } catch (err) {
    let errorMessage = "Login failed. Please check your credentials.";

      if (err.code) {
        switch (err.code) {
          case "auth/invalid-email":
            errorMessage =
              "Invalid email address. Please check your email format.";
            break;
          case "auth/user-disabled":
            errorMessage =
              "Your account has been disabled. Please contact support.";
            break;
          case "auth/user-not-found":
            errorMessage =
              "No account found with this email. Please check your email or sign up.";
            break;
          case "auth/wrong-password":
            errorMessage = "Incorrect password. Please try again.";
            break;
          case "auth/too-many-requests":
            errorMessage = "Too many login attempts. Please try again later.";
            break;
          case "auth/network-request-failed":
            errorMessage =
              "Network error. Please check your internet connection.";
            break;
          case "auth/operation-not-allowed":
            errorMessage =
              "Email/password login is not enabled. Please contact support.";
            break;
          default:
            console.error("Firebase Auth Error:", err.code, err.message);
            errorMessage = "An unexpected error occurred. Please try again.";
        }
      } else {
        console.error("Login Error:", err);
        if (err.message?.includes("network")) {
          errorMessage =
            "Network error. Please check your internet connection.";
        } else {
          errorMessage = "Login failed. Please try again.";
        }
      }

      throw new Error(errorMessage);
  }
}