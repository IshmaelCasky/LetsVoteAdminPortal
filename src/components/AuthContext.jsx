import React, { createContext, useContext, useEffect, useState } from 'react'
import { getAuth, signInWithEmailAndPassword, setUserCustomClaims} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {firebase } from '../firebase';

const AuthContext = createContext();
firebase();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const auth = getAuth();

    const handleLogin = (email, password) => {

        if(email === '' || password === '') {
            toast.error('please fill in all fields');
        } else {
            signInWithEmailAndPassword(auth, email, password)
            .then((response) => {
                navigate('/dashboard')
            })
            .catch((error) => {
                if(error.code === 'auth/wrong-password'){
                    toast.error('Please check the Password');
                  }
                if(error.code === 'auth/user-not-found'){
                    toast.error('Please check the Email');
                }
    
                if(error.code === 'auth/invalid-email'){
                    toast.error('Please check the Email');
                }
            });
        }
    }

    const logout = () => {
        sessionStorage.clear();
        auth.signOut();
        setUser(null);
        navigate('/');
    }

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(user => {
            if(user){
                if(user.email === "letsvoteadmin@yahoo.com"){
                    console.log(user.email);
                    setUser(user);
                    sessionStorage.setItem("Token", user.uid);
                } else {
                    setUser(null);
                }
            } else {
                setUser(null);
                sessionStorage.clear();
            }
        });
        return unsub;
    } , [auth]);

    useEffect(() => {
        
        if(user == null){
            setUser(null);
            navigate('/');
        } else {
            navigate('/dashboard');
        }
    } , [navigate, user, auth]);

    const context = {
        auth,
        handleLogin,
        user,
        logout
    }

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}
