import Head from "next/head";
import Layout from "../layout/layout";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from "react";
import { signIn, signOut } from "next-auth/react";
import { useFormik } from "formik";
import login_validate from "../lib/validate";

export default function Login() {
  const [show, setShow] = useState(false);
  //formik hook
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login_validate,
    onSubmit,
  });

  console.log(formik.errors);

  async function onSubmit(values) {
    console.log(values);
  }

  //google Handler Function
  async function handleGoogleSignIn() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }

  //Github Login
  async function handleGithubSignIn() {
    signIn("github", { callbackUrl: "http://localhost:3000" });
  }

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">-LOGIN-</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            unde?
          </p>
        </div>
        {/* .form */}
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div className={styles.input_group}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input_text}
              {...formik.getFieldProps("email")}
            />
            <span className="Icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          {formik.errors.email && formik.touched.email ? (
            <span className="text-rose-500">{formik.errors.email}</span>
          ) : (
            <></>
          )}
          <div className={styles.input_group}>
            <input
              type={`${show ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              className={styles.input_text}
              {...formik.getFieldProps("password")}
            />
            <span
              className="Icon flex items-center px-4"
              onClick={() => setShow(!show)}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          {formik.errors.password && formik.touched.password ? (
            <span className="text-rose-500">{formik.errors.password}</span>
          ) : (
            <></>
          )}

          {/* login buttons */}
          <div className="input-button">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
          <div className="input-button">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className={styles.button_custom}
            >
              Sign in with Google{" "}
              <Image src={"/assests/google.png"} width="20" height={20}></Image>
            </button>
          </div>
          <div className="input-button">
            <button
              type="button"
              onClick={handleGithubSignIn}
              className={styles.button_custom}
            >
              Sign in with GitHub
              <Image src={"/assests/git.png"} width="25" height={25}></Image>
            </button>
          </div>
        </form>

        {/* bottom */}
        <p className="text center text-gray-400">
          Don't have an account Yet?{" "}
          <Link href={"/register"} className="text-blue-700">
            Sign Up
          </Link>
        </p>
      </section>
    </Layout>
  );
}
