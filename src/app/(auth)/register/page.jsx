'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { postUser } from '@/actions/server/auth';

const Register = () => {
    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async(e) => {
        e.preventDefault();

        const form = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        const result =await postUser(form);
        

        router.push('/login');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[oklch(97%_0.01_95)]">

            <div className="w-full max-w-md p-8 rounded-2xl shadow-lg bg-white">

                <h2 className="text-2xl font-bold text-center mb-6 text-[oklch(35%_0.01_260)]">
                    Create Account
                </h2>

                <form onSubmit={handleRegister} className="space-y-4">

                    {/* Full Name */}
                    <div>
                        <label className="text-sm">Full Name</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[oklch(65%_0.23_35)]"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-sm">Email</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[oklch(65%_0.23_35)]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm">Password</label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter password"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[oklch(65%_0.23_35)]"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Error */}
                    {error && (
                        <p className="text-sm text-[oklch(62%_0.24_28)]">{error}</p>
                    )}

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full py-2 rounded-lg text-white font-semibold 
            bg-[oklch(65%_0.23_35)] hover:bg-[oklch(58%_0.18_30)] transition"
                    >
                        Register
                    </button>
                </form>

                {/* 🔁 Toggle to Login */}
                <p className="text-sm text-center mt-5">
                    Already have an account?{' '}
                    <span
                        onClick={() => router.push('/login')}
                        className="text-[oklch(65%_0.23_35)] font-semibold cursor-pointer"
                    >
                        Login
                    </span>
                </p>

            </div>
        </div>
    );
};

export default Register;