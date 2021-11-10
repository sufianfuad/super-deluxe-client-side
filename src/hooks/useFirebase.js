import { useEffect, useState } from "react";

import initializeFirebase from "../Pages/Login/Firebase/firebase.init";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signInWithPopup, GoogleAuthProvider,
    updateProfile,
    getIdToken,
    signOut
} from "firebase/auth";

//import initialize firebase
initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState([]);
    // spinner loader
    const [isLoading, setIsLoading] = useState(true);
    //error set
    const [authError, setAuthError] = useState('');


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    //GOOGLE login
    const signInUsingGoogle = (location, history) => {
        //for loading
        setIsLoading(true);
        //=====
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                // const user = result.user;
                // saveUser(user.email, user.displayName, 'PUT');
                //===
                setAuthError('');
                //== redirect
                // const destination = location?.state?.from || '/';
                // history.replace(destination);
            })
            .catch(error => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    //Observed user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                // getIdToken(user)
                //     .then(idToken => {
                //         setToken(idToken)
                //     })
            }
            else {
                setUser({});
            }
            //for loading
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    //user Logout

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {

            })
            .catch(err => {

            })
    }

    return {
        user,
        signInUsingGoogle,
        isLoading,
        authError,

        logOut
    }
}

export default useFirebase;