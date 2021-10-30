import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAtentication from "../Pages/Firebase/Firebase.init";



initializeAtentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()

    const SignInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
        .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        SignInWithGoogle,
        logOut
    }

}

export default useFirebase;