"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGooglePlusG, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { supabase } from "@/libs/supabase";
import { showError, showSuccess } from "../../libs/notification";

const SignIn = () => {
  const [state, setState] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const signIn = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword(state);

    if (error) {
      showError(error.message);
    } else {
      // for (const key in state) setState({ ...state, [key]: "" });
      setState({ email: "", password: "" });
      showSuccess("Welcome");
    }
  };

  return (
    <div className="absolute top-0 h-full duration-500 sign-in-container">
      <form onSubmit={signIn}>
        <h1 className="font-bold">Sign In</h1>
        <div className="flex justify-center mt-5">
          <Link
            href={"/"}
            className="text-sm m-4 text-gray-700 no-underline border border-solid border-gray-300 rounded-full inline-flex justify-center items-center mx-1.5 h-10 w-10"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
          <Link
            href={"/"}
            className="text-sm m-4 text-gray-700 no-underline border border-solid border-gray-300 rounded-full inline-flex justify-center items-center mx-1.5 h-10 w-10"
          >
            <FontAwesomeIcon icon={faGooglePlusG} />
          </Link>
          <Link
            href={"/"}
            className="text-sm m-4 text-gray-700 no-underline border border-solid border-gray-300 rounded-full inline-flex justify-center items-center mx-1.5 h-10 w-10"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Link>
        </div>
        <span className="text-xs">or use your account</span>
        <input name="email" type="email" value={state.email} onChange={handleChange} placeholder="Email" required />
        <input
          name="password"
          type="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <Link href={"/forgotpwd"} className="text-sm m-4 text-gray-700 no-underline">
          Forgot your password?
        </Link>
        <button
          type="submit"
          className="rounded bg-red-500 border border-solid border-red-200 text-xs text-white font-bold px-11 py-3 uppercase tracking-[1px] transform transition-transform duration-80 ease-in active:scale-95"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
