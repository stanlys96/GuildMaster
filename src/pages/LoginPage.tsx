import { useFormik } from "formik";
import Header from "../components/Header";
import GradientButton from "../components/GradientButton";
import Swal from "sweetalert2";
import { toast } from "sonner";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiRegisteredFill } from "react-icons/ri";

interface FormikProps {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const createFormik = useFormik<FormikProps>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      if (!values.email.trim() || !values.password.trim()) {
        return Swal.fire({
          title: "Fill all fields.",
          text: "Please fill all the required fields!",
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
          "https://alterfun-server-production.up.railway.app/users/login",
          {
            email: values.email,
            password: values.password,
          }
        );
        if (!response.data.success) {
          toast.error(response.data.message, {
            id: toastId,
            duration: 4000,
          });
        } else {
          toast.success(`Successfully logged in!`, {
            id: toastId,
            duration: 4000,
          });
          createFormik.resetForm();
          navigate("/manage");
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
      <Header
        element={
          <Link to="/register" className="flex flex-row items-center gap-x-2">
            <RiRegisteredFill size={20} color="white" />
            <p className="text-[14px]">Register</p>
          </Link>
        }
      />
      <section className="flex relative justify-center text-white bg-gradient-to-br from-surface via-background to-dark-900 py-8 h-[90vh] w-[100vw]">
        <div className="w-full px-[100px]">
          <form onSubmit={createFormik.handleSubmit}>
            <div className="flex flex-col gap-y-5">
              <p className="font-semibold text-[28px] text-center">Login</p>
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
              <GradientButton
                loading={loading}
                fullWidth
                type="submit"
                className="md:w-[75%] lg:w-[50%] w-full mx-auto flex justify-center"
              >
                <span className="flex flex-row gap-x-1 self-center items-center justify-center">
                  Login
                </span>
              </GradientButton>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
