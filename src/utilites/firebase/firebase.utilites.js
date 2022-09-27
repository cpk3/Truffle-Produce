//this whole file set up is based on the configurations google requires 
//file is js code with unique keys that refer to the instance created in the project section of firebase online 

import { initializeApp } from 'firebase/app';
import {getAuth, 
        signInWithRedirect, 
        signInWithPopup, 
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        GoogleAuthProvider, 
        signOut,
        onAuthStateChanged} from 'firebase/auth';
import {
    getFirestore,
    doc, 
    getDoc,
    setDoc} from 'firebase/firestore';

//apiKey - need this visible in config in order for firebase to access 
const firebaseConfig = {
    apiKey: "AIzaSyBrY_dmTHtCz9PrJlIVcLU65J-goQNtep0",
    authDomain: "truffle-project.firebaseapp.com",
    projectId: "truffle-project",
    storageBucket: "truffle-project.appspot.com",
    messagingSenderId: "686659864024",
    appId: "1:686659864024:web:0ee3b3b8df5f884c3ddead"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  //googleAuthProvider is a class we get from firebase authentication itself - theres a facebook one OR native providers (dont need to import)
  // create a NEW googleAuthProvider as we have different provider instances doing different things on the website - multiple diff providers
const Provider = new GoogleAuthProvider(); 

Provider.setCustomParameters({
    prompt: "select_account"
});

//google authentication - dont need to create NEW getAuth (like provider) as the auth should be the SAME every time for one website+user
export const auth = getAuth()
//const = passed a new googleAuthProvider and the user's authenitication_code - used in the sign-in component
export const signInWithGooglePopup = () => signInWithPopup(auth, Provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, Provider);

//pass the firestore database as 'database'
export const database = getFirestore();

//a function recieivng the authentication data + provider (from the sign-in component) as parameters for userAuth
//checking for exisitng user references on the database
export const createUserDocumentFromAuth = async (userAuth, additionalInfo= {}) => {
//if dont recieve input then dont run the function - protective 
    if(!userAuth) return;

    const userDocRef = doc(database, 'users', userAuth.uid);

    // previous check - console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    //previous checks 
    // console.log(userSnapshot);
    // console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const {displayName, email } =userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, 
                email,
                createdAt,
                ...additionalInfo
            })
        } catch (error) {console.log('error creating user', error.message);
            }
    }
    return userDocRef;
}; 
 
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword (auth, email, password);
  };

  export const signOutUser = () => signOut(auth);

  //if sign in or out - auth changes = runs this function. need to tell function to stop listening 
  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)

  //listener models listen for changes using 
  /** next: callback  -->eg. used
   * error: errorCallback
   * complete: completedCallback
   */