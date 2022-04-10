import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import app from "../firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider;

const useFirebase = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
        console.log('google sign in clicked');
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => { });
    }
    return { user, setUser, signInWithGoogle, handleSignOut };
}
export default useFirebase;
