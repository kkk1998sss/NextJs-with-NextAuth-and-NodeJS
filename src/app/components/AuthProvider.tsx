"use client"
import { SessionProvider } from "next-auth/react";

const Authprovider = ({children}: { children: React.ReactNode}) => {
    return <SessionProvider>{children}</SessionProvider>
}

export default Authprovider;