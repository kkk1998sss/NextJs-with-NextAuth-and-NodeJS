"use client";
import Head from "next/head";
import React, { useState } from "react";
import AuthLayout from "@/app/components/AuthLayout";
import Link from "next/link";
import styles from "../../../../public/styles/Form.module.css";
import google from "../../../../public/assets/icons8-google.svg";
import github from "../../../../public/assets/icons8-github.svg";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/components/navigation";
import { useEffect } from "react";
import { useFormik } from "formik";
import Login_validate from "@/app/lib/validation";
import { toast } from "sonner";


const Login = () => {
  // const { data: session, status } = useSession();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: Login_validate,
    onSubmit,
  });
  // console.log(formik.errors);

  async function onSubmit(values: any) {
    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });
    console.log(status?.url);

    if(status?.ok) {
      toast.success('Login successful')
      router.push('http://localhost:3000/')

    }
  }

  const googlelogin = async () => {
    await signIn("google", {
      callbackUrl: "/",
      redirect: true,
    });
    
    toast.success('Login with Google successful')
  };

  // useEffect(() => {
  //   if (status === "loading") return;
  //   if (status === "authenticated") {
  //     router.push("/");
  //     console.log("Login Successfully");
  //   }
  //   if (!session) {
  //     router.push("/login");
  //     console.log("Logout Successfully");
  //   }
  // }, [status, session, router]);

  return (
    <AuthLayout>
      <Head>
        <title>Login</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-2xl font-bold py-2">Login</h1>
          <p className="w-3/4 mx-auto text-gray-400">Welcome to Login Page</p>
        </div>
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div
            className={`${styles.input_group} ${
              formik.errors.email && formik.touched.email
                ? "border-rose-500"
                : ""
            }`}
          >
            <input
              type="email"
              placeholder="Email"
              className={styles.input_text}
              {...formik.getFieldProps("email")}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol />
            </span>
          </div>
          {/* {formik.errors.email && formik.touched.email?<span className="text-red-500">{formik.errors.email}</span>: <></>} */}

          <div
            className={`${styles.input_group} ${
              formik.errors.password && formik.touched.password
                ? "border-rose-500"
                : ""
            }`}
          >
            <input
              type={`${show ? "text" : "password"}`}
              placeholder="Password"
              className={styles.input_text}
              {...formik.getFieldProps("password")}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow(!show)}
            >
              <HiFingerPrint />
            </span>
          </div>
          {/* {formik.errors.password && formik.touched.password?<span className="text-red-500">{formik.errors.password}</span>: <></>} */}

          <div className="input-button">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
          <div className="input-button">
            <button
              type="button"
              onClick={googlelogin}
              className={styles.button_custom}
            >
              SignIn with Google{" "}
              <Image src={google} alt={""} width={20} height={20} />
            </button>
          </div>
          <div className="input-button">
            <button type="button" className={styles.button_custom}>
              SignIn with Github{" "}
              <Image src={github} alt={""} width={20} height={20} />
            </button>
          </div>
        </form>
        <p className="text-center text-gray-400">
          dont have an account yet?{" "}
          <Link href={"/Signup"} className="text-blue-700">
            Sign Up
          </Link>
        </p>
      </section>
    </AuthLayout>
  );
};

export default Login;
