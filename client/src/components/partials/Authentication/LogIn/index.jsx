import axios from "axios";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../../../../context/AuthContext";

import { LeftArrow } from "../../../commons/Icons/Icons";
import NavBrand from "../../../commons/Navbrand/NavBrand";

const LogIn = () => {

  const { logged, setLogged, setAuth } = useAuthContext();


  const [user, setUser] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const getUserHandler = (e) => {
    const newObj = {};
    newObj[e.target.id] = e.target.value;
    setUser((prev) => {
      return { ...prev, ...newObj };
    });
  };

  const handleSubmit = async (e) => {
    setErrMsg("");
    e.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "https://greenery-server.herokuapp.com/api/auth/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({ ...user }),
      });

      if (response.data.message) {
        return setErrMsg(response.data.message);
      }

      setAuth(response.data);
      sessionStorage.setItem("auth", JSON.stringify(response.data));
      setLogged(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className="flex items-center justify-center w-full h-screen container-custom ">
        <div className="relative w-full md:w-4/5 background-vegetable px-5 py-20 rounded-xl shadow-03">
          {logged ? (
            <>
              <h3 className="flex flex-col sm:flex-row justify-center items-center gap-2 text-black-01">
                Welcome to <NavBrand />

              </h3>

              <p className="para-3 text-black-01 text-center my-4">
                What do you want to do next?
              </p>

              <div className="flex items-center justify-center gap-2">
                <Link to="/" className="btn btn-primary">
                  Go to Homepage
                </Link>
                <Link to="/shop" className="btn text-white bg-red-01">
                  Shop now
                </Link>
              </div>
            </>
          ) : (
            <>
              <Link to="/" className="absolute top-5 left-5 btn btn-primary">
                <LeftArrow /> Home
              </Link>
              <form onSubmit={handleSubmit} className="md:w-1/2 mx-auto">
                <h2 className="my-5">Log In</h2>
                {errMsg && <h3>{errMsg}</h3>}
                <div className="mb-5">
                  <label htmlFor="email" className="block text-black-01">
                    <span className="font-bold px-4">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="w-full border-green-01 border-[1px] mb-4"
                    id="email"
                    onBlur={getUserHandler}
                  />
                  <label htmlFor="password" className="block text-black-01">
                    <span className="font-bold px-4">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full border-green-01 border-[1px] mb-4"
                    id="password"
                    onBlur={getUserHandler}
                  />
                </div>

                <button type="submit" className="w-full btn btn-primary mb-4">
                  Log In
                </button>

                <p className="para-1">
                  Don't have an account?{" "}
                  <Link to="/auth/signup" className="text-blue-01 underline">
                    Sign up
                  </Link>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default LogIn;
