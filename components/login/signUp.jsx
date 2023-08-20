import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { BASE_URL, API_VERSION } from "@/config";
import axiosInstance from "@/helpers/axios";

const SignUp = ({ setShowLogin, setActiveComponent }) => {
  const [userType, setUserType] = useState("client");

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
        <input
          type="password"
          placeholder="Password"
          id="password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
          title="Use 8 or more characters with a mix of letters, numbers and symbols."
          minLength="8"
        />

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
        <button
          type="button"
          className="w-40 signupbtn bg-wh"
          onClick={() => {
            setShowLogin(true);
            setActiveComponent("login");
          }}
        >
          Log in
        </button>
      </div>
    </form>
  );
};

export default SignUp;
