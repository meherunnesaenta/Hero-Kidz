'use client'
import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'test@gmail.com' && password === '123456') {
      router.push(callbackUrl);
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[oklch(97%_0.01_95)]">
      
      <div className="w-full max-w-md p-8 rounded-2xl shadow-lg bg-white">
        
        <h2 className="text-2xl font-bold text-center mb-6 text-[oklch(35%_0.01_260)]">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[oklch(65%_0.23_35)]"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[oklch(65%_0.23_35)]"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <p className="text-sm text-[oklch(62%_0.24_28)]">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-2 rounded-lg text-white font-semibold 
            bg-[oklch(65%_0.23_35)] hover:bg-[oklch(58%_0.18_30)]"
          >
            Login
          </button>
        </form>

        {/* 🔁 Toggle to Register */}
        <p className="text-sm text-center mt-4">
          Don't have an account?{' '}
          <span
            onClick={() => router.push('/register')}
            className="text-[oklch(65%_0.23_35)] font-semibold cursor-pointer"
          >
            Register
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;