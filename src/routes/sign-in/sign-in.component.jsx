import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utilites/firebase/firebase.utilites";


const SignIn = () => {
    const logGoogleUser = async () => {
      const {user} = await signInWithGooglePopup();
      createUserDocumentFromAuth(user);
    };
  
    return (
      <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      </div>
    );
  };
  
  export default SignIn;