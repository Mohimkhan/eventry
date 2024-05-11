"use client";

import { registerUser } from "@/actions/user";
import { useState } from "react";
import { toast } from "react-toastify";
import SubmitButton from "../SubmitButton";

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showEyeIcon, setShowEyeIcon] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      await registerUser(formData);
      toast.success("User Created Successfully", {
        icon: <span>🚀</span>,
      });
    } catch (error) {
      toast.success("Error while creating User", {
        icon: <span>❌</span>,
      });
    }
  };

  return (
    <form
      className="login-form"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
        />
      </div>

      <div>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
        />
      </div>

      <div className="relative">
        <label htmlFor="password">Password</label>
        <input
          type={`${showPassword ? "text" : "password"}`}
          name="password"
          id="password"
          onChange={() => setShowEyeIcon(true)}
        />
        {showEyeIcon && (
          <span
            className="absolute top-[41px] right-2 text-black"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            <i
              className={`fas ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
            ></i>
          </span>
        )}
      </div>

      <div>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          name="phone"
          id="phone"
        />
      </div>

      <div>
        <label htmlFor="bio">Bio</label>
        <input
          className="min-h-16"
          type="text"
          name="bio"
          id="bio"
        />
      </div>

      <SubmitButton>Register</SubmitButton>
    </form>
  );
};

export default RegistrationForm;
