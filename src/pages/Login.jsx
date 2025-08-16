import React from 'react'
import Navbar from '../componenet/Navbar'
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';




function Login() {
  const [user, setUser] = useState();
   const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  
  

  const onSubmit = async (data) => {
    try {
      const res = await fetch(
        "todo-backend-production-a956.up.railway.app/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      console.log("Login request body:", data);
      
      const result = await res.json();
      console.log("Login response:", result);

      if (result.user && result.user.username) {
        setUser(result.user); // save to state
        alert("Login successful!");
        localStorage.setItem("user", JSON.stringify(result.user));
        navigate("/Todo");
      } else {
        alert(result.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong");
    }
  };

  
  return (
    <>
      <Navbar/>

      <div className="container min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-xl p-10 rounded-2xl w-96">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              type="email"
            />
            {errors.email && <div className="text-red-500">{errors.email.message}</div>}

            <input
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
              type="password"
            />
            {errors.password && <div className="text-red-500">{errors.password.message}</div>}

            <input
              disabled={isSubmitting}
              type="submit"
              value="Login"
              className="w-full bg-amber-500 text-white p-3 rounded-md font-semibold hover:bg-amber-600"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;