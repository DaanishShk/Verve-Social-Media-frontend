import React, {createContext, useState} from 'react'

const AuthContext = createContext();
const baseUrl = process.env.REACT_APP_BASE_URL;

function Auth({children}) {
    const [user, setUser] = useState(retrieveUserDetails()? JSON.parse(retrieveUserDetails()): null);
    const [isAuth, setIsAuth] = useState(user? true: false);

    return (
        <AuthContext.Provider value={{baseUrl, user, setUser, isAuth, setIsAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

function retrieveUserDetails() {
    return localStorage.getItem("user") || sessionStorage.getItem("user");
}

export {Auth , AuthContext}
