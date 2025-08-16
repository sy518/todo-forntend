import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Navbar from "../componenet/Navbar";

function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    console.log("Sending signup data:", data);

    // await delay(2) // simulating network delay
    let r = await fetch(
      "todo-backend-production-a956.up.railway.app/api/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    let res = await r.text();
    console.log(data, res);
    navigate("/Login");
    alert("Signup successful! Please login.");
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signupData),
    });
    const data = await res.json();
    alert(data.message);
  };
  return (
    <>
      <Navbar />
      <div className="container min-h-screen bg-gray-100 flex items-center justify-center">
        <div
          className="transition-transform duration-500 hover:-rotate-x-3 hover:-rotate-y-3 hover:scale-95 
          bg-white shadow-xl p-10 rounded-2xl w-96"
        >
          {isSubmitting && <div>Loading...</div>}
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            signup form
          </h2>
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="username"
              onChange={(e) =>
                setSignupData({ ...signupData, email: e.target.value })
              }
              {...register("username", {
                required: { value: true, message: "This field is required" },
                minLength: { value: 3, message: "Min length is 3" },
                maxLength: { value: 8, message: "Max length is 8" },
              })}
              type="text"
            />
            {errors.username && (
              <div className="red">{errors.username.message}</div>
            )}
            <br />
            <input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="email"
              onChange={(e) =>
                setSignupData({ ...signupData, email: e.target.value })
              }
              {...register("email", {
                required: { value: true, message: "This field is required" },
                pattern: {
                  value: /@/,
                  message: "@ is required",
                },
              })}
              type="email"
            />
            <input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="password"
              {...register("password", {
                minLength: { value: 7, message: "Minlength of password is 7" },
              })}
              type="password"
            />
            {errors.password && (
              <div className="red">{errors.password.message}</div>
            )}
            <br />
            <input
              disabled={isSubmitting}
              type="submit"
              value="Submit"
              className="w-full bg-amber-500 text-white p-3 rounded-md font-semibold hover:bg-amber-600"
            />
            {errors.myform && (
              <div className="red">{errors.myform.message}</div>
            )}
            {errors.blocked && (
              <div className="red">{errors.blocked.message}</div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
