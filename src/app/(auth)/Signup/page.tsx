"use client";
import AuthLayout from "@/app/components/AuthLayout";
import Head from "next/head";
import React, { useState } from "react";
import Link from "next/link";
import styles from "../../../../public/styles/Form.module.css";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useFormik } from "formik";
import { signup_validate } from "@/app/lib/validation";
import { useRouter } from "next/dist/client/components/navigation";
import { toast } from "sonner";
import { Button } from "@nextui-org/react";

const Signup = () => {
  const [show, setShow] = useState({ password: false, cpassword: false });
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: any) => {
    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Response:", data);
        toast.success("User Created Successfully");
        // router.push("http://localhost:3000/login");
      } else {
        console.error("User registration failed");
        toast.error("User registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validate: signup_validate,
    onSubmit: onSubmit,
  });

  return (
    <AuthLayout>
      <Head>
        <title>Registration</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-2xl font-bold py-2">
            Registration
          </h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Welcome to Registration Page
          </p>
        </div>
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div
            className={`${styles.input_group} ${
              formik.errors.name && formik.touched.name ? "border-rose-500" : ""
            }`}
          >
            <input
              type="text"
              placeholder="User Name"
              className={styles.input_text}
              {...formik.getFieldProps("name")}
            />
            <span className="icon flex items-center px-4">
              <HiOutlineUser />
            </span>
          </div>
          {/* {formik.errors.name && formik.touched.name?<span className="text-red-500">{formik.errors.name}</span>: <></>} */}

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
              type={`${show.password ? "text" : "password"}`}
              //   name="password"
              placeholder="Password"
              className={styles.input_text}
              {...formik.getFieldProps("password")}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, password: !show.password })}
            >
              <HiFingerPrint />
            </span>
          </div>
          {/* {formik.errors.password && formik.touched.password?<span className="text-red-500">{formik.errors.password}</span>: <></>} */}

          <div
            className={`${styles.input_group} ${
              formik.errors.cpassword && formik.touched.cpassword
                ? "border-rose-500"
                : ""
            }`}
          >
            <input
              type={`${show.cpassword ? "text" : "password"}`}
              //   name="cpassword"
              placeholder="Confirm Password"
              className={styles.input_text}
              {...formik.getFieldProps("cpassword")}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
            >
              <HiFingerPrint />
            </span>
          </div>
          {/* {formik.errors.cpassword && formik.touched.cpassword?<span className="text-red-500">{formik.errors.cpassword}</span>: <></>} */}

            <div className="input-button">
              {loading ? <Button type="submit" isLoading isDisabled>
              Registering...
            </Button>: <Button type="submit" >
              Register
            </Button>}
            {/* <Button type="button" isLoading>
              Registering...
            </Button> */}
            
            </div>
            {/* {loading && <div className="spinner">Loading...</div>} */}
            {/* <div className="input-button">
              <button type="submit"  disabled={loading}>
                {loading ? "Registering..." : "Register"}
              </button>
              {loading && <div className="spinner">Loading...</div>}
          </div> */}

        </form>
        <p className="text-center text-gray-400">
          Already have account?{" "}
          <Link href={"/login"} className="text-blue-700">
            Sign In
          </Link>
        </p>
      </section>
    </AuthLayout>
  );
};

export default Signup;
