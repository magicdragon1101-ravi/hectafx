"use client";

import React, { useEffect, useState } from "react";
import cn from "classnames";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { supabase } from "@/libs/supabase";
import { useRouter } from "next/navigation";

const Auth = () => {
  const [type, setType] = useState("SignIn");

  const onClick = (text) => {
    if (text !== type) setType(text);
  };

  const router = useRouter();

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      return session;
    };
    const checkSession = async () => {
      const user = await getSession();
      if (user) {
        router.push("/");
      }
    };

    checkSession();
  }, [router]);

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className={cn("container", type === "SignUp" ? "right-panel-active" : "")}>
        <SignIn />
        <SignUp />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="font-bold">Welcome Back!</h1>
              <p className="text-sm font-thin leading-5 tracking-widest mt-5 mb-8">
                To keep connected with us please signin with your personal info
              </p>
              <button
                id="SignIn"
                onClick={() => onClick("SignIn")}
                className="rounded bg-transparent border border-solid border-white text-xs text-white font-bold px-10 py-3 uppercase tracking-[1px] transform transition-transform duration-80 ease-in active:scale-95"
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="font-bold">Hello, Friend!</h1>
              <p className="text-sm font-thin leading-5 tracking-widest mt-5 mb-8">
                Enter your personal details and start journey with us
              </p>
              <button
                id="SignUp"
                onClick={() => onClick("SignUp")}
                className="rounded bg-transparent border border-solid border-white text-xs text-white font-bold px-10 py-3 uppercase tracking-[1px] transform transition-transform duration-80 ease-in active:scale-95"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
