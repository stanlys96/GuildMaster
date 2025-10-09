import { useFormik } from "formik";
import Header from "../components/Header";
import GradientButton from "../components/GradientButton";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface RegisterFormikProps {
  username: string;
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const createFormik = useFormik<RegisterFormikProps>({
    initialValues: {
      username: "",
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    onSubmit: async (values) => {
      if (
        !values.username.trim() ||
        !values.name.trim() ||
        !values.email.trim() ||
        !values.password.trim() ||
        !values.repeatPassword.trim()
      ) {
        return Swal.fire({
          title: "Fill all fields.",
          text: "Please fill all the required fields!",
          icon: "question",
        });
      }
      if (values.password !== values.repeatPassword) {
        return Swal.fire({
          title: "Password doesn't match.",
          text: "Your password and repeat password don't match.",
          icon: "question",
        });
      }
      try {
        setLoading(true);
        const toastId = toast.loading(`Logging in...`, {
          id: "login",
          duration: Infinity,
        });
        const response = await axios.post(
          "http://localhost:3001/users/register",
          {
            username: values.username,
            email: values.email,
            name: values.name,
            password: values.password,
          }
        );
        if (!response.data.success) {
          toast.error(response.data.message, {
            id: toastId,
            duration: 4000,
          });
        } else {
          toast.success(`Successfully registered!`, {
            id: toastId,
            duration: 4000,
          });
          createFormik.resetForm();
          navigate("/login");
        }
        setLoading(false);
      } catch (e) {
        setLoading(false);
        return Swal.fire({
          title: "Error!",
          text: e?.toString(),
          icon: "error",
        });
      }
    },
  });
  return (
    <div>
      <Header register={true} />
      <section className="flex relative justify-center text-white bg-gradient-to-br from-surface via-background to-dark-900 py-8 h-[90vh] w-[100vw]">
        <div className="w-full px-[100px]">
          <div className="flex flex-col gap-y-5">
            <p className="font-semibold text-[28px] text-center">Register</p>
            <form
              className="flex flex-col gap-y-5"
              onSubmit={createFormik.handleSubmit}
            >
              <div className="md:w-[75%] lg:w-[50%] w-full mx-auto">
                <div className="w-full border border-white mx-auto py-1 px-3 bg-[#88888850] rounded-sm">
                  <p className="text-[12px]">
                    https://alter-fun.vercel.app/{createFormik.values.username}
                  </p>
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  onBlur={createFormik.handleBlur}
                  value={createFormik.values.username}
                  onChange={createFormik.handleChange}
                  placeholder="Username"
                  className={`w-full mx-auto text-white shadow-sm focus-visible:outline-none rounded p-3 text-sm ${
                    false
                      ? "dark:bg-zinc-700 bg-zinc-100 cursor-not-allowed"
                      : "dark:bg-zinc-800 bg-[#2D2F33]"
                  }`}
                  disabled={false}
                />
              </div>
              <input
                id="name"
                name="name"
                type="text"
                onBlur={createFormik.handleBlur}
                value={createFormik.values.name}
                onChange={createFormik.handleChange}
                placeholder="Name"
                className={`md:w-[75%] lg:w-[50%] w-full mx-auto text-white shadow-sm focus-visible:outline-none rounded p-3 text-sm ${
                  false
                    ? "dark:bg-zinc-700 bg-zinc-100 cursor-not-allowed"
                    : "dark:bg-zinc-800 bg-[#2D2F33]"
                }`}
                disabled={false}
              />
              <input
                id="email"
                name="email"
                type="email"
                onBlur={createFormik.handleBlur}
                value={createFormik.values.email}
                onChange={createFormik.handleChange}
                placeholder="Email"
                className={`md:w-[75%] lg:w-[50%] w-full mx-auto text-white shadow-sm focus-visible:outline-none rounded p-3 text-sm ${
                  false
                    ? "dark:bg-zinc-700 bg-zinc-100 cursor-not-allowed"
                    : "dark:bg-zinc-800 bg-[#2D2F33]"
                }`}
                disabled={false}
              />
              <input
                id="password"
                name="password"
                type="password"
                onBlur={createFormik.handleBlur}
                value={createFormik.values.password}
                onChange={createFormik.handleChange}
                placeholder="Password"
                className={`md:w-[75%] lg:w-[50%] w-full mx-auto text-white shadow-sm focus-visible:outline-none rounded p-3 text-sm ${
                  false
                    ? "dark:bg-zinc-700 bg-zinc-100 cursor-not-allowed"
                    : "dark:bg-zinc-800 bg-[#2D2F33]"
                }`}
                disabled={false}
              />
              <input
                id="repeatPassword"
                name="repeatPassword"
                type="password"
                onBlur={createFormik.handleBlur}
                value={createFormik.values.repeatPassword}
                onChange={createFormik.handleChange}
                placeholder="Repeat Password"
                className={`md:w-[75%] lg:w-[50%] w-full mx-auto text-white shadow-sm focus-visible:outline-none rounded p-3 text-sm ${
                  false
                    ? "dark:bg-zinc-700 bg-zinc-100 cursor-not-allowed"
                    : "dark:bg-zinc-800 bg-[#2D2F33]"
                }`}
                disabled={false}
              />
              <GradientButton
                loading={loading}
                type="submit"
                fullWidth
                className="md:w-[75%] lg:w-[50%] w-full mx-auto flex justify-center"
              >
                <span className="flex flex-row gap-x-1 self-center items-center justify-center">
                  Register
                </span>
              </GradientButton>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
