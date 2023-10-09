import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext(null);
const Provider = new GoogleAuthProvider()
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setuser] = useState(null);
   
    const googleSignin =() =>{
        return signInWithPopup(auth,Provider);
    }

    const SignUp = (email,password) =>{
        setuser(null);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const Signin = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password)
        
    }
    const Updateprofile = (name,photo) =>{
              return  updateProfile(auth.currentUser, {       
                 displayName: name,
                  photoURL: photo
      })
    }
    console.log(user)

    
    const LogOut = () => {
        signOut(auth).then(() => {
            console.log("success");
        }).catch((error) => {
            console.log("error");
        });
    }
    console.log(user);
    
    useEffect(() =>{
        const UnSubscribe = onAuthStateChanged(auth,(currentUser) =>{
            setuser(currentUser);
            console.log("State Change");
        });
        return(() =>{
            return UnSubscribe();
        })
        
    },[googleSignin,Signin])

    
      
    const userInfo = 
    {
        googleSignin,
        SignUp,
        user,
        Signin,
        LogOut,
        Updateprofile
      
      
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;