<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Form, Link, redirect } from "react-router-dom";
=======
import React, { useState } from "react";
import { Link } from "react-router-dom";
>>>>>>> a8505f672081936549c121ed3cc1a5c9c3cc8a6e
import { LeftArrow } from "../../../commons/Icons/Icons";
import axios from "axios";

const SignUp = () => {
  const [user, setUser] = useState({});
  const [errMsg, setErrMsg] = useState("");
  const [isSuccess, SetIsSuccess] = useState(false);

  const getUserHandler = (e) => {
    const newObj = {};
    newObj[e.target.id] = e.target.value;
    setUser((prev) => {
      return { ...prev, ...newObj };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrMsg("");

      const respone = await axios({
        method: "post",
        url: "https://greenery-server.herokuapp.com/api/auth/signup",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({ ...user }),
      });

      if (respone.status === 200) {
        setErrMsg(respone.data);
      } else {
        SetIsSuccess(true);
<<<<<<< HEAD
        
=======
>>>>>>> a8505f672081936549c121ed3cc1a5c9c3cc8a6e
      }
    } catch (err) {
      setErrMsg(err);
    }
  };

  return (
    <section>
      <div className="flex items-center justify-center w-full h-screen container-custom ">
        <div className="relative w-full md:w-4/5 background-vegetable px-5 py-20 rounded-xl shadow-03">
          <Link to="/" className="absolute top-5 left-5 btn btn-primary">
            <LeftArrow /> Home
          </Link>

          <form className="md:w-1/2 mx-auto" onSubmit={handleSubmit}>
            <h2 className="my-5">Create Account</h2>
            {errMsg && <h4 className="text-red-01">{errMsg}</h4>}
            {isSuccess ? (
              <h4>
                Your account is created,{" "}
                <Link to="/auth/login" className="text-blue-01 underline">
                  Log in
                </Link>
              </h4>
            ) : (
              <>
                <div className="mb-5">
                  <label
                    htmlFor="username"
                    className="block font-bold px-4 text-black-01 "
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border-green-01 border-[1px] mb-4"
                    id="username"
                    onChange={getUserHandler}
                  />

                  <label
                    htmlFor="email"
                    className="block font-bold px-4 text-black-01"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="w-full border-green-01 border-[1px] mb-4"
                    id="email"
                    onBlur={getUserHandler}
                  />

                  <label
                    htmlFor="password"
                    className="block font-bold px-4 text-black-01"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    id="password"
                    className="w-full border-green-01 border-[1px] mb-4"
                    onChange={getUserHandler}
                  />
                </div>

                <button type="submit" className="w-full btn btn-primary">
                  Create Account
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
