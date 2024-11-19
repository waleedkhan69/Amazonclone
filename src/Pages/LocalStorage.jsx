import React, { useState, useEffect } from 'react';

const LocalStorage = () => {
    const [loggedIn, setLoggedIn] = useState(null);

    useEffect(() => {
        const isAuth = localStorage.getItem("isAuth") === "true";
        setLoggedIn(isAuth);
    }, []);

    const login = () => {
        localStorage.setItem("isAuth", "true");
        setLoggedIn(true);
    };

    const logout = () => {
        localStorage.setItem("isAuth", "false");
        setLoggedIn(false);
    };

    return (
        <div>
            <button onClick={login}>Login</button>
            {loggedIn ? <h1>Hello</h1> : <h1>Please Login</h1>}
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default LocalStorage;
