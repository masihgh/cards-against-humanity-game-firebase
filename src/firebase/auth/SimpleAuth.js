import firebaseApp from '@/firebase/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
provider.setCustomParameters({   
    prompt : "select_account "
});

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export default provider