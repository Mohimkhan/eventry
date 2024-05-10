"use client";

import { performLogin } from "@/actions/user";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LoginForm = () => {
  const {_, setAuth } = useAuth();
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const found = await performLogin(formData);
      
      if (found) {
        setAuth(found);
        toast.success(`Welcome, ${found?.name}`, {
          icon: <span>🚀</span>,
        });
        router.push("/");
      }
    } catch (err) {
      toast.success(`User not found!`, {
        icon: <span>❌</span>
      })
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

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
          />
        </div>

        <button
          type="submit"
          className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
