"use client";

import { performLogin } from "@/actions/user";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import SubmitButton from "../SubmitButton";

const LoginForm = () => {
  const { _, setAuth } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showEyeIcon, setShowEyeIcon] = useState(false);
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const found = await performLogin(formData);

      if (found) {
        setAuth({ ...found, password: null, phone: null });
        toast.success(`Welcome, ${found?.name}`, {
          icon: <span>🚀</span>,
        });
        router.push("/");
      }
    } catch (err) {
      toast.success(`User not found!`, {
        icon: <span>❌</span>,
      });
    }
  };

  return (
    <>
      <form
        className="login-form"
        onSubmit={onSubmit}
      >
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

        <SubmitButton>Login</SubmitButton>
      </form>
    </>
  );
};

export default LoginForm;
