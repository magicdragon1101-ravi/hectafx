import React from "react";
import { redirect } from "next/navigation";
import Auth from "@/components/auth";
import { supabase } from "@/libs/supabase";

const AuthPage = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/");
  }

  return <Auth />;
};

export default AuthPage;
