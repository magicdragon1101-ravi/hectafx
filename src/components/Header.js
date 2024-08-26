"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import NavItem from "./NavItem";
import { showError } from "@/libs/notification";
import { supabase } from "@/libs/supabase";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    const subscribeToAuthChanges = () => {
      const {
        data: { subscription: authListener },
      } = supabase.auth.onAuthStateChange((_, session) => {
        setUser(session?.user ?? null);
      });
      return authListener;
    };

    getUser();
    const authListener = subscribeToAuthChanges();

    return () => {
      if (authListener && typeof authListener.unsubscribe === "function") {
        authListener.unsubscribe();
      }
    };
  }, []);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      showError(error.message);
    } else {
      setUser(null);
    }
  };

  return (
    <header className="relative w-full z-[99]">
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md">
        <div className="relative flex flex-nowrap items-center justify-between px-6 py-2.5 sm:px-4">
          <div className="flex items-center">
            <Link href={"/"} className="w-[50px] h-[50px]">
              <img src="./logo.jpg" alt="LOGO" className="w-full h-full" />
            </Link>
          </div>
          <div className="flex items-center">
            <Navbar>
              <NavItem name="Home" link="/" />
            </Navbar>
            <div className="ml-5 flex flex-row">
              {user ? (
                <button
                  onClick={signOut}
                  className="border border-solid border-red-500 text-red-500 rounded-md px-6 py-2 mx-1 duration-300 hover:text-white hover:bg-red-500"
                >
                  Sign Out
                </button>
              ) : (
                <>
                  <Link href={"/auth"}>
                    <button className="border border-solid border-red-500 text-red-500 rounded-md px-6 py-2 mx-1 duration-300 hover:text-white hover:bg-red-500">
                      Sign In
                    </button>
                  </Link>
                  <Link href={"/auth"}>
                    <button className="border border-solid bg-red-500 text-white rounded-md px-6 py-2 mx-1 duration-300 hover:bg-red-600">
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
