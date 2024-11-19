import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const isAuth = localStorage.getItem("isAuth") === "true";
        setIsAuthenticated(isAuth);
    }, []);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePassword = (password) => {
        return password.length >= 6; 
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError('Invalid email format');
            return;
        }
        if (!validatePassword(password)) {
            setError('Password must be at least 6 characters');
            return;
        }

        localStorage.setItem("isAuth", "true");
        setIsAuthenticated(true);
        navigate('/home');
    };

    const handleLogout = () => {
        localStorage.setItem("isAuth", "false");
        setIsAuthenticated(false);
        navigate('/login');
    };

    return (
        <div className="main flex h-screen justify-center items-center bg-gray-100">
            <form
                className="flex flex-col rounded-lg shadow-lg bg-white w-80 md:w-96 p-8"
                onSubmit={handleLogin}
            >
                <h1 className="text-2xl font-semibold text-center text-blue-600 mb-6">
                    {isAuthenticated ? 'Welcome Back' : 'Register Now'}
                </h1>
                <input
                    className="w-full py-3 px-4 mb-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <input
                    className="w-full py-3 px-4 mb-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                />
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <div className="flex justify-between items-center mt-4">
                    {isAuthenticated ? (
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                            type="button"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    ) : (
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                            type="submit"
                        >
                            Login
                        </button>
                    )}
                </div>
                <div className="text-center mt-4">
                    <p className="text-gray-600 text-sm">
                        {isAuthenticated ? (
                            <Link to="/home" className="text-blue-500 hover:underline">
                                Go to Home
                            </Link>
                        ) : (
                            <>
                                Already registered?{' '}
                                <Link to="/login" className="text-blue-500 hover:underline">
                                    Sign In
                                </Link>
                            </>
                        )}
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Registration;
