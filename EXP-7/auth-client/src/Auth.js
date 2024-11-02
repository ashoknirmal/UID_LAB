import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';  // Import the CSS file

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const toggleMode = () => setIsLogin(!isLogin);

    const handleAuth = async (e) => {
        e.preventDefault();
        try {
            const endpoint = isLogin ? '/login' : '/signup';
            const response = await axios.post(`http://localhost:5000${endpoint}`, {
                email,
                password,
                username: isLogin ? undefined : username,
            });

            setMessage(response.data.message);

            if (isLogin) {
                localStorage.setItem('token', response.data.token);
            }
        } catch (err) {
            setMessage(err.response?.data?.message || 'Error');
        }
    };

    return (
        <div className="auth-container">
            <h2>{isLogin ? 'Login' : 'Signup'}</h2>
            <form className="auth-form" onSubmit={handleAuth}>
                {!isLogin && (
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                )}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
            </form>
            <p className="auth-message">{message}</p>
            <button className="auth-toggle" onClick={toggleMode}>
                {isLogin ? 'Switch to Signup' : 'Switch to Login'}
            </button>
        </div>
    );
};

export default Auth;
