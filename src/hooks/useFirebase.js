import { useEffect, useState } from "react";

import initializeFirebase from "../Pages/Login/Firebase/firebase.init";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signInWithPopup, GoogleAuthProvider,
    updateProfile,
    // getIdToken,
    signOut
} from "firebase/auth";

//import initialize firebase
initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({});
    // spinner loader
    const [isLoading, setIsLoading] = useState(true);
    //error set
    const [authError, setAuthError] = useState('');


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //user registration
    const registerUser = (email, password, name, history) => {
        //for loading
        setIsLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');

                //Set New User
                const newUser = { email, displayName: name }
                setUser(newUser);

                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then((result) => {
                        setUser(result?.user)
                    })
                    .catch(error => {
                        // console.log(error.message);
                    })
                history.replace('/');
            })
            .catch((error) => {
                console.log(error)
                setAuthError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));
    }
    //User Login
    const loginInUser = (email, password, location, history) => {
        //for loading
        setIsLoading(true);
        //
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user)

                //== redirect
                const destination = location?.state?.from || '/';
                history.replace(destination);

                //==
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


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
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch(error => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // user state Observed
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
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
        //for loading
        setIsLoading(true)
        signOut(auth)
            .then(() => {

            })
            .catch(err => {

            })
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        registerUser,
        loginInUser,
        signInUsingGoogle,
        isLoading,
        authError,
        logOut
    }
}

export default useFirebase;