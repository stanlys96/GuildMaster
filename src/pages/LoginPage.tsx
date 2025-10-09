import { useFormik } from "formik";
import Header from "../components/Header";
import GradientButton from "../components/GradientButton";

export const LoginPage = () => {
  const createFormik = useFormik<any>({
    initialValues: {
      name: "",
      tokenName: "",
      description: "",
      initialTokenAmount: "",
      tokenAllocation: "",
      support: 50,
      quorum: 50,
      coreMemberThreshold: 50,
      members: [],
    },
    onSubmit: () => {},
  });
  return (
    <div>
      <Header register={false} />
      <section className="flex relative justify-center text-white bg-gradient-to-br from-surface via-background to-dark-900 py-8 h-[90vh] w-[100vw]">
        <div className="w-full px-[100px]">
          <div className="flex flex-col gap-y-5">
            <p className="font-semibold text-[28px] text-center">Login</p>
            <input
              id="name"
              name="name"
              type="text"
              onBlur={createFormik.handleBlur}
              value={createFormik.values.name}
              onChange={createFormik.handleChange}
              placeholder="Username"
              className={`md:w-[75%] lg:w-[50%] w-full mx-auto text-white shadow-sm focus-visible:outline-none rounded p-3 text-sm ${
                false
                  ? "dark:bg-zinc-700 bg-zinc-100 cursor-not-allowed"
                  : "dark:bg-zinc-800 bg-[#2D2F33]"
              }`}
              disabled={false}
            />
            <input
              id="name"
              name="name"
              type="text"
              onBlur={createFormik.handleBlur}
              value={createFormik.values.name}
              onChange={createFormik.handleChange}
              placeholder="Username"
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
                Login
              </span>
            </GradientButton>
          </div>
        </div>
      </section>
    </div>
  );
};
