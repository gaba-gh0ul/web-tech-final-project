// src/components/LoginPage.jsx
import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
//import '../styles/LoginPage.css'; // optional: create this for styling

const LoginPage = ({ loggedIn, setLoggedIn }) => {
  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <>
      {!loggedIn ? (
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            handleLogin();
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      ) : (
        <p>You are signed in</p>
      )}
    </>
  );
};

export default LoginPage;
