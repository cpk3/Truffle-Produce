//this whole file set up is based on the configurations google requires 
//file is js code with unique keys that refer to the instance created in the project section of firebase online 

import { initializeApp } from 'firebase/app';
import {getAuth, 
        signInWithRedirect, 
        signInWithPopup, 
        GoogleAuthProvider} from 'firebase/auth';
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

  //googleAuthProvider is a class we get from firebase authentication itself 
  // create a NEW googleAuthProvider as we have different provider instances doing different things on the website - multiple diff providers
const provider = new GoogleAuthProvider(); 

provider.setCustomParameters({
    prompt: "select_account"
});

//google authentication - dont need to create NEW getAuth (like provider) as the auth should be the SAME every time for one website+user
export const auth = getAuth()
//const = passed a new googleAuthProvider and the user's authenitication_code - used in the sign-in component
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//pass the firestore database as 'database'
export const database = getFirestore();

//a function recieivng the authentication data + provider (from the sign-in component) as parameters for userAuth
//checking for exisitng user references on the database
export const createUserDocumentFromAuth = async (userAuth) => {
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
            })
        } catch (error) {console.log('error creating user', error.message);
            }
    }
    return userDocRef;
}; 
 

