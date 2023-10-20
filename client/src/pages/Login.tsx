import React from 'react';
import { useState } from 'react';
import RightBlock from '../components/RightBlock';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    console.log("form submitted");
  }

  return (
    <main className="flex min-h-screen w-full bg-white flex-row p-8 font-poppins">
      
      <div className="left-block w-1/2 bg-slate-100 mr-4 rounded-3xl pt-32 px-20 flex flex-col items-center">
        <div className="mb-8">
          <Logo/>
        </div>
        <h1 className="text-slate-800 text-4xl font-semibold mb-2">Welcome Back</h1>
        <h4 className="text-slate-600 text-xl mb-32">We missed you!</h4>

        <div className="flex h-full flex-column w-full max-w-lg">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-8">
              <label className="text-slate-800 mb-2 text-lg flex justify-start" htmlFor="email">Email</label>
              <input
                className="rounded-full py-4 px-8 bg-white w-full focus:outline-teal-600"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
              />
            </div>

            <div className="mb-2">
              <label className="text-slate-800 mb-2 text-lg flex justify-start" htmlFor="password">Password</label>
              <input
                className="rounded-full py-4 px-8 bg-white w-full focus:outline-teal-600"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
              />
            </div>
            <Link to="/dashboard" className="mb-20 flex justify-end underline">Forgot password?</Link>

            <div className="flex mb-10">
              <button type='submit' className="bg-teal-800 hover:bg-teal-900 text-white font-semibold w-full py-4 rounded-full">Sign in</button>
            </div>
            <div className="flex flex-row items-center mb-10">
              <hr className="w-full border border-slate-300"/>
              <p className="mx-4 text-slate-500">Or</p> 
              <hr className="w-full border border-slate-300"/>
            </div>
            <div className="flex mb-10">
              <button className="bg-slate-100 hover:bg-slate-50 text-teal-950 font-semibold w-full py-4 rounded-full border border-slate-500">Login with Google</button>
            </div>
            <p className="text-lg text-center">Not a member yet? <Link to="/Signup" className="text-teal-700 font-bold">Sign up</Link></p>
          </form>
        </div>
      </div>
      <RightBlock/>
    </main>
  )
}

export default Login