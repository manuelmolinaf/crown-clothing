/**
 * Firebase utility module for authentication and Firestore database operations.
 *
 * @module firebaseUtils
 */
import {initializeApp} from 'firebase/app';
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

/**
 * Web app's Firebase configuration.
 * @type {Object}
 */
const firebaseConfig = {
  apiKey: 'AIzaSyAN14qOrB_sFMLGLkYupXDFQrOjv8s9d-w',
  authDomain: 'crown-clothing-79989.firebaseapp.com',
  projectId: 'crown-clothing-79989',
  storageBucket: 'crown-clothing-79989.appspot.com',
  messagingSenderId: '713741001402',
  appId: '1:713741001402:web:36aff84b331c9e516a1883'
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

/**
 * Firebase authentication object.
 * @type {Object}
 */
export const auth = getAuth();

/**
 * Sign in with Google using popup.
 * @function
 * @async
 * @returns {Promise<Object>} Authentication user data.
 */
export const signInWithGooglePopup = async () => signInWithPopup(auth, provider);

/**
 * Firebase firestore database object.
 * @type {Object}
 */
export const db = getFirestore();

/**
 * Create user document from authentication data.
 * @function
 * @async
 * @param {Object} userAuth Authentication data.
 * @param {Object} additionalInformation Additional user information.
 * @returns {Promise<Object>} User document reference.
 */
export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch(error) {
      console.log(`createUserDocumentFromAuth error: ${error}`);
    }
    return userDocRef;
  }
};

/**
 * Create user account with email and password.
 * @function
 * @async
 * @param {string} email User email.
 * @param {string} password User password.
 * @returns {Promise<Object>} Authentication user data.
 */
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

/**
 * Sign in user with email and password.
 * @function
 * @async
 * @param {string} email User email.
 * @param {string} password User password.
 * @returns {Promise<Object>} Authentication user data.
 */
export const signInAuthWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

/**
 * Sign out user.
 * @function
 * @async
 * @returns {Promise<void>}
 */
export const signOutUser = async () => await signOut(auth);

/**
 * Listen to authentication state changes.
 * @function
 * @param {function} callback Function to execute on state change.
 */
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
