import { createContext, useState, useEffect} from "react";
import {onAuthStateChangedListener, createUserDocumentFromAuth} from '../utilites/firebase/firebase.utilites'

//as the actual value want to access 
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=>null,
}) 

//the component itself that recieves children (i.e. the app) and returns user info in a 'context wrapper'
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}

    useEffect(()=> {
        const unsubscribe = onAuthStateChangedListener((user)=>{
           if(user) {createUserDocumentFromAuth(user);}
           setCurrentUser(user);
        })

        return unsubscribe;

    }, []);
//empty dependency array - means the function only runs when the component mounts 
//the user will either be an authenticated user object or null when they sign out
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

