import React, { useState } from 'react';

const Form = () => {
    const [isLogin, setIsLogin] = useState(true);
    const toggleForm = () => setIsLogin(!isLogin);

    return (
            <div className="w-full max-w-md p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold text-center text-white mb-6">
                    {isLogin ? 'Login' : 'Sign Up'}
                </h2>
                <form className="space-y-4">
                    {!isLogin && (
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full px-4 py-2 rounded-md bg-transparent border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                            required
                        />
                    )}
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 rounded-md bg-transparent border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 rounded-md bg-transparent border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full py-2 rounded-md bg-white text-black font-semibold hover:bg-opacity-90 transition"
                    >
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>
                <p className="mt-4 text-center text-white text-sm">
                    {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                    <button
                        onClick={toggleForm}
                        className="underline hover:text-gray-300 transition"
                    >
                        {isLogin ? 'Sign Up' : 'Login'}
                    </button>
                </p>
            </div>
        
    );
};

export default Form;
