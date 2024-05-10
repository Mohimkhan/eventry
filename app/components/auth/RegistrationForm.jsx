"use client";

import { registerUser } from "@/actions/user";
import { toast } from "react-toastify";

const RegistrationForm = () => {

  const handleSubmit  = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      await registerUser(formData);
      toast.success("User Created Successfully", {
        icon: <span>🚀</span>
      })
    } catch (error) {
      toast.success("Error while creating User", {
        icon: <span>❌</span>
      })
    }
  }

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

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
        />
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

      <button
        type="submit"
        className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
