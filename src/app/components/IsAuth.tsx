"use client";
import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";


export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const { data: session, status } = useSession();
    const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Wait for the session to load

    if (status === 'authenticated') {
      router.push('/');
      console.log('Login successful');
    }
  }, [status, router]);

  // Handle redirection and rendering based on session and status
  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!session) {
    router.push('/login'); // Redirect to login if no session
    return <p>Redirecting to login...</p>;
  }


    return <Component {...props} />;
  };
}