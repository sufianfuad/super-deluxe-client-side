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
    //admin state
    const [admin, setAdmin] = useState(false);

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

                //save user to database
                saveUser(email, name, 'POST');

                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                        // setUser(result?.user)
                    })
                    .catch(error => {
                        // console.log(error.message);
                    });
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
                const destination = location?.state?.from || '/dashboard';
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
                console.log(result)
                const user = result.user;
                saveUser(user?.email, user?.displayName, 'PUT');
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

    //admin load
    useEffect(() => {
        fetch(`http://localhost:7000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email])


    //Save User
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:7000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    //user Logout

    const logOut = (location, history) => {
        //for loading
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                //== redirect
                const destination = location?.state?.from || '/';
                history.replace(destination);
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
        admin,
        logOut
    }
}

export default useFirebase;