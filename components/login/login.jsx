import React, { useState, useEffect } from "react";
import { Sdk, useInitFacebook } from "@nixjs23n6/facebook-login";
import Link from "next/link";
import Image from "next/image";
import { BASE_URL, API_VERSION } from "@/config";
import { useRouter } from "next/router";
import axiosInstance from "@/helpers/axios";
import useAuth from "@/contexts/auth.contexts";

const Login = () => {
  const router = useRouter();
  const { setUser } = useAuth();
  const [passwordShown, setPasswordShown] = useState(false);
  const [Error, setError] = useState(false);
  const googleLogin = async (response) => {
    axiosInstance
      .post(`${BASE_URL}/${API_VERSION}/user/auth/google/`, {
        auth_token: response.credential,
      })
      .then((res) => {
        const data = res.data;
        console.log(data);
        router.push("/");
      })
      .catch((err) => {
        if (err.code === "ERR_BAD_REQUEST") {
          router.reload();
        }
        console.error(err);
      });
  };
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      callback: googleLogin,
      context: "login",
      itpSupport: "true",
    });
    google.accounts.id.renderButton(document.getElementById("googleSignIn"), {
      text: "login_with",
      shape: "pill",
      logoAlignment: "center",
      theme: "outline",
      size: "large",
      width: "400",
    });
    google.accounts.id.prompt();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = document.getElementById("email1").value;
    const password = document.getElementById("password1").value;

    const formData = { email, password };
    axiosInstance
      .post(`${BASE_URL}/${API_VERSION}/user/login/`, formData)
      .then((res) => {
        setUser();
        router.push("/");
      })
      .catch((error) => {
        console.error(error);
        setErrorr(true);
      });
  };

  useInitFacebook({
    version: "v16.0",
    appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
  });
  const facebookLogin = (e) => {
    e.preventDefault();
    Sdk.login({
      scope: "email",
    })
      .then((response) => {
        const access_token = response.authResponse.accessToken;
        console.log(access_token);
        axiosInstance.post(`${BASE_URL}/${API_VERSION}/user/auth/facebook/`, {
          access_token,
        });
      })
      .catch(console.log);
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="form-container jst-SB "
      id="myForm2"
    >
      <div className=" gap64 sm-btn bottom-row3 row2-mb mt-159">
        <button>
          <div className="fl-sm" id="googleSignIn">
            <Image src="google.svg" alt="" width={57} height={44} />
            <p className="socialSUP">Sign in with Google</p>
          </div>
        </button>
        <button onClick={facebookLogin}>
          <div className="fl-sm">
            <Image src="facebook.svg" alt="" width={57} height={44} />
            <p className="socialSUP">Sign in with Facebook</p>
          </div>
        </button>
      </div>
      <div>
        <div></div>
      </div>
      <div className="bottom-row3 fl-gap32">
        <div className="fl nntr">
          <p id="Fs-16">or Login with your 77S design account</p>
        </div>
        <div className="bottom-row3 ">
          <input type="email" placeholder="Email" id="email1" required />
          <div style={{ position: "relative" }}>
            <input
              type={passwordShown ? "text" : "password"}
              placeholder="Password"
              id="password1"
              // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
              title="That email and password combination is incorrect."
              required
            />
            <button className="show_hide_Pass2" onClick={togglePassword}>
              {!passwordShown ? "Show" : "Hide"}
            </button>
          </div>
          <p
            className={Errorr ? "" : "DN"}
            style={{ textAlign: "left", color: "red" }}
          >
            The email and password combination is incorrect
          </p>
        </div>
        <div className="bottom-row4">
          <div>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="pdleft8">
              Remember Me
            </label>
          </div>
          <Link href="#">Forgot Password?</Link>
        </div>
        <button type="submit">Log in</button>
      </div>
    </form>
  );
};

export default Login;
