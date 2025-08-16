import { useState } from "react";
import axios from "axios";
import Navbar from "../componenet/Navbar";
import React from "react";

function Profile() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    skills: "",
    github: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post("http://localhost:5713/api/profile", {
        ...form,
        skills: form.skills.split(","),
      });
      alert("Profile Added!");
      setForm({ name: "", email: "", skills: "", github: "" });
    } catch (error) {
      console.error("Error adding profile:", error);
      alert("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container min-h-screen bg-gray-100 flex items-center justify-center">
        <div
          className="transition-transform duration-500 hover:-rotate-x-3 hover:-rotate-y-3 hover:scale-95 
            bg-white shadow-xl p-10 rounded-2xl w-96"
        >
          {isSubmitting && (
            <div className="text-center text-gray-500 mb-2">Loading...</div>
          )}

          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Add Profile
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              type="text"
            />
            <input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="email"
            />
            <input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Skills (comma separated)"
              value={form.skills}
              onChange={(e) => setForm({ ...form, skills: e.target.value })}
              type="text"
            />
            <input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="GitHub Link"
              value={form.github}
              onChange={(e) => setForm({ ...form, github: e.target.value })}
              type="url"
            />

            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-amber-500 text-white p-3 rounded-md font-semibold hover:bg-amber-600"
            >
              {isSubmitting ? "Saving..." : "Save Profile"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Profile;
