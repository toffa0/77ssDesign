/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Link from "next/link";
import { Redirect } from "next";
import React, { useEffect, useState, useContext } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Cookies from "js-cookie";
import Image from "next/image";
import { BASE_URL, API_VERSION } from "@/config";
import { useRouter } from "next/router";
import axiosInstance from "@/helpers/axios";
import useAuth from "@/contexts/auth.contexts";
import Script from "next/script";
import { Sdk, useInitFacebook } from "@nixjs23n6/facebook-login";
import axios from "axios";
const Login = () => {
  const router = useRouter();
  const { setUser } = useAuth();

  const googleLogin = async (response) => {
    axios
      .post(
        `${BASE_URL}/${API_VERSION}/user/auth/google/`,
        {
          auth_token: response.credential,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          xsrfCookieName: "77SDESIGN_CSRF_TOKEN",
          xsrfHeaderName: "X-CSRFToken",
        }
      )
      .then((res) => {
        const data = res.data;
        console.log(data);
        setUser();
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
      .catch((error) => console.error(error));
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
          <input type="text" placeholder="Email" id="email1" />
          <input type="password" placeholder="Password" id="password1" />
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

const SignUp = () => {
  const [userType, setUserType] = useState("client");
  const { setUser } = useAuth();

  const router = useRouter();
  const googleRegister = async (response) => {
    axiosInstance
      .post(`${BASE_URL}/${API_VERSION}/user/auth/google/`, {
        auth_token: response.credential,
        user_type: userType,
      })
      .then((res) => {
        const data = res.data;
        console.log(data);
        setUser();
        router.push("/AccountSettings");
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      callback: googleRegister,
      context: "signup",
      itpSupport: "true",
    });
    google.accounts.id.renderButton(document.getElementById("googleSignUp"), {
      text: "signup_with",
      shape: "pill",
      logoAlignment: "center",
      theme: "outline",
      size: "large",
      width: "400",
    });
    google.accounts.id.prompt();
  }, []);

  const handleUserType = (e) => {
    setUserType(e.target.value);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const formData = { email, password, user_type: userType };

    axiosInstance
      .post(`${BASE_URL}/${API_VERSION}/user/register/`, formData)
      .then((res) => console.log(res.data))
      .catch((error) => console.error(error));
  };

  return (
    <form className="form-container jst-SB" id="myForm" onSubmit={handleSignup}>
      <div className="bottom-row2 row2-mtb gap15">
        <div className="fl fl-gap99 ali">
          <input
            type="radio"
            id="remember"
            name="accounttype"
            className="radioinp"
            defaultChecked
            onChange={handleUserType}
            value="client"
          />
          <label htmlFor="remember">Need design</label>
        </div>
        <div className="fl fl-gap99 ali">
          <input
            type="radio"
            id="remember2"
            name="accounttype"
            className="radioinp"
            onChange={handleUserType}
            value="designer"
          />
          <label htmlFor="remember2">Designer</label>
        </div>
      </div>

      <div className=" fl-gap31 sm-btn bottom-row2 row2-mb">
        <button>
          <div className="fl-sm" id="googleSignUp">
            <Image src="google.svg" alt="" width={57} height={44} />
            <p className="socialSUP">Sign Up with Google</p>
          </div>
        </button>
        <button>
          <div className="fl-sm">
            <Image
              src="facebook.svg"
              id="fb-btn"
              alt=""
              width={57}
              height={44}
            />{" "}
            <p className="socialSUP">Sign Up with Facebook</p>
          </div>{" "}
        </button>
      </div>
      <div>
        <div className="fl nntr">
          <p>Or, Create an account with email.</p>
        </div>
        <div className="fl fl-gap99">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>

        <input type="email" placeholder="Email" id="email" />
        <input type="password" placeholder="Password" id="password" />

        <div className="lldiv">
          <p id="ll" className="mb-11">
            Use 8 or more characters with a mix of letters, numbers and symbols
          </p>
          <p id="ll2" className="mb-61">
            By signing up, you agree to our Terms and Privacy
          </p>
        </div>
      </div>
      <div className="fl jst-SB">
        <button className="w-40 signupbtn">Sign Up</button>
        <button className="w-40 signupbtn bg-wh">Log in</button>
      </div>
    </form>
  );
};

const LoginSignUp = () => {
  const { user } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [activeComponent, setActiveComponent] = useState("signup");
  const router = useRouter();

  useEffect(() => {
    axiosInstance(`${BASE_URL}/${API_VERSION}/user/csrf/`);
    if (user) router.push("/");
  }, []);

  return (
    <>
      <div className="page1">
        <div className="page-container max2">
          <div className="img-part">
            <Link href="/" id="lg">
              {" "}
              <Image
                src="logo1.svg"
                className="logimg"
                alt=""
                width={149}
                height={40}
              />
            </Link>
            <div className="img-part2">
              <Image
                src="loginbulb.svg"
                alt=""
                width={105.34}
                height={167.75}
              />
              <h1>Discover</h1>
              <h3>the world’s best</h3>
              <h3>community of </h3>
              <h1>Talented</h1>
              <h3>and</h3>
              <h3>business owners</h3>
            </div>
          </div>
          <div className="form-part">
            <div className="switch-container">
              <button
                onClick={() => {
                  setShowLogin(false);
                  setActiveComponent("signup");
                }}
                className="btn-switch"
                id={`${activeComponent === "signup" ? "logactive2" : ""}`}
              >
                Sign Up
              </button>
              <button
                onClick={() => {
                  setShowLogin(true);
                  setActiveComponent("login");
                }}
                className="btn-switch"
                id={`${activeComponent === "login" ? "logactive" : ""}`}
              >
                Log in
              </button>
            </div>
            {showLogin ? <Login csrfToken /> : <SignUp csrfToken />}
          </div>
        </div>
      </div>
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="beforeInteractive"
      />
    </>
  );
};

export default LoginSignUp;

const styles = {
  footerContainer: {
    borderTop: "2px solid white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "4% 0",
    color: "#000",
  },
  footerLogo: {
    width: "100px",
  },
  footerLinks: {
    display: "flex",
    alignItems: "center",
  },
  footerLink: {
    marginRight: "20px",
    color: "#fff",
  },
  footerSeparator: {
    margin: "0 10px",
  },
  footerIcons: {
    display: "flex",
    alignItems: "center",
  },
  footerIcon: {
    marginRight: "10px",
    fontSize: "20px",
    color: "#000",
  },
};
