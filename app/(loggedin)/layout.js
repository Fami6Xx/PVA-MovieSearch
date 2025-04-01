"use server";

import {getServerSession} from "next-auth/next";
import {authOptions} from "@/lib/auth";
import {redirect} from "next/navigation";

const Layout = async ({children}) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/login");
  }
  return (
    <>
      {children}
    </>
  );
};

export default Layout;