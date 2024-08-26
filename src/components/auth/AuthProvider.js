"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/libs/supabase";

const AuthProvider = ({ accessToken, children }) => {
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription: authListener },
    } = supabase.auth.onAuthStateChange((_, session) => {
      if (session?.access_token !== accessToken) {
        router.refresh();
      }
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, [accessToken, supabase, router]);

  return children;
};

export default AuthProvider;
