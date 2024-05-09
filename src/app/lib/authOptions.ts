import { NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
export const authOptions: NextAuthOptions = {
    providers: [
      // CredentialsProvider({
      //     name: "Login",
      //     credentials: {
      //         email: { label: "Email", placeholder: "Enter your email address" },
      //         password: { label: "Enter your password", placeholder: "Enter your password"},
      //     },
  
      //     async authorize(credentials){
      //         if(!credentials || !credentials.email || !credentials.password)
      //             return null;
      //         const user = users.find((item)=> item.email === credentials.email);
      //         if(user?.password === credentials.password){
      //             return { ...user, id: user.id.toString() } as User;
      //         }
      //         return null;
      //     },
      // }),
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" },
        },
        // authorize: async (credentials) => {
        //   if (!credentials || !credentials.email || !credentials.password) {
        //     return Promise.resolve(null); // Return null if credentials are missing
        //   }
        
        //   const client = await pool.connect();
        //   if (client) {
        //       console.log("Connected to the database successfully"); // Log a success message
        //     }
  
        //   try {
        //     const result = await client.query(
        //       "SELECT * FROM user_details WHERE email = $1",
        //       [credentials.email]
        //     );
        //     const user = result.rows[0];
        
        //     if (user && (await compare(credentials.password, user.password))) {
        //       return Promise.resolve(user);
        //     } else {
        //       return Promise.resolve(null);
        //     }
        //   } catch (error) {
        //     return Promise.reject(new Error("Error authenticating user"));
        //   } finally {
        //     client.release();
        //   }
        // },
        authorize: async (credentials) => {
          try {
            const response = await fetch('http://localhost:5000/api/authenticate', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(credentials),
            });
  
            if (response.ok) {
              const data = await response.json();
              const user = data.user;
              return Promise.resolve(user);
            } else {
              return Promise.resolve(null);
            }
          } catch (error) {
            return Promise.reject(new Error('Error authenticating user'));
          }
        },
        
      }),
      
      // google provider
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_ID_SECRET as string,
      }),
    ],
    pages: {
      signIn: "/signup",
    },
    session: {
      maxAge: 60 * 60 * 5,
    },
    callbacks: {
      async jwt({ token, user }) {
        console.log("User object:", { user });
        if (user) {
          token.email = user.email;
        }
  
        return { ...token, ...user };
      },
      async session({ session, token }) {
        console.log(token, 'token generated');
        // Add the token data to the session
        session.user = token;
        // session.maxAge = token.maxAge || session.maxAge;
        return session;
        // session.user = token;
        // return session;
      },
    },
    
  secret: process.env.NEXTAUTH_SECRET,
  };