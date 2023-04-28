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
import axios from "axios";

const Login = () => {
  const router = useRouter();

  const googleLogin = async (response) => {
    const res = await fetch(`${BASE_URL}/${API_VERSION}/user/auth/google/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      body: JSON.stringify({ auth_token: response.credential }),
    });
    const data = await res.json();
    console.log(data);
    router.push("/");
  };
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      callback: googleLogin,
    });
    google.accounts.id.renderButton(document.getElementById("googleSignIn"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = document.getElementById("email1").value;
    const password = document.getElementById("password1").value;

    const formData = { email, password };
    axiosInstance
      .post(`${BASE_URL}/${API_VERSION}/user/login/`, formData)
      .then((res) => {
        // setUser();
        router.push("/");
      })
      .catch((error) => console.error(error));
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
        <button>
          <div className="fl-sm">
            <Image
              src="facebook.svg"
              id="fb-btn"
              alt=""
              width={57}
              height={44}
            />{" "}
            <p className="socialSUP">Sign in with Facebook</p>
          </div>{" "}
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

const SignUp = (csrfToken) => {
  const [userType, setUserType] = useState("client");

  const router = useRouter();
  const googleRegister = async (response) => {
    const res = await fetch(`${BASE_URL}/${API_VERSION}/user/auth/google/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      body: JSON.stringify({
        auth_token: response.credential,
        user_type: "client",
      }),
    });
    const jsonData = await res.json();
    console.log(jsonData);
    localStorage.setItem("user", JSON.stringify(jsonData.data));
    router.push("/AccountSettings");
  };
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      callback: googleRegister,
    });
    google.accounts.id.renderButton(document.getElementById("googleSignUp"), {
      theme: "outline",
      size: "large",
    });
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
  const { user, setUser } = useAuth();
  const [showLogin, setShowLogin] = useState(true);
  const [activeComponent, setActiveComponent] = useState("login");
  const router = useRouter();

  useEffect(() => {
    axios(`${BASE_URL}/${API_VERSION}/user/csrf/`, {
      withCredentials: true,
    }).then((res) => console.log(res));
    if (user.user_id) router.push("/");
  }, []);

  return (
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
            <Image src="loginbulb.svg" alt="" width={105.34} height={167.75} />
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
          {showLogin ? <Login /> : <SignUp />}
        </div>
      </div>
    </div>
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
