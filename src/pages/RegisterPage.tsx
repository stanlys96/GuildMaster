import { useFormik } from "formik";
import Header from "../components/Header";
import GradientButton from "../components/GradientButton";

export const RegisterPage = () => {
  const createFormik = useFormik<any>({
    initialValues: {
      username: "",
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    onSubmit: () => {},
  });
  return (
    <div>
      <Header register={true} />
      <section className="flex relative justify-center text-white bg-gradient-to-br from-surface via-background to-dark-900 py-8 h-[90vh] w-[100vw]">
        <div className="w-full px-[100px]">
          <div className="flex flex-col gap-y-5">
            <p className="font-semibold text-[28px] text-center">Register</p>
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
              fullWidth
              className="md:w-[75%] lg:w-[50%] w-full mx-auto flex justify-center"
              onClick={() => {}}
            >
              <span className="flex flex-row gap-x-1 self-center items-center justify-center">
                Register
              </span>
            </GradientButton>
          </div>
        </div>
      </section>
    </div>
  );
};
