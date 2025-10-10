import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Mail, PersonStanding, PersonStandingIcon, Save } from "lucide-react";
import { Sidebar } from "../components/Sidebar";
import { useFormik } from "formik";
import { FcElectricity } from "react-icons/fc";
import GradientButton from "../components/GradientButton";

export const ProfilePage = () => {
  const navigate = useNavigate();
  const createFormik = useFormik<any>({
    initialValues: {
      username: "",
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
      creator: false,
    },
    onSubmit: () => {},
  });
  return (
    <div>
      <Header
        element={
          <div
            onClick={() => navigate("/profile")}
            className="flex gap-x-2 items-center cursor-pointer"
          >
            <PersonStandingIcon size={30} />
            <div className="flex flex-col text-white">
              <p className="text-[12px]">Stanly Sukmajaya</p>
              <p className="text-[12px] text-[#FFFFFF75]">@stanly_sukmajaya</p>
            </div>
          </div>
        }
      />
      <section className="text-white flex gap-x-2 relative bg-gradient-to-br from-surface via-background to-dark-900 min-h-[90vh] w-[100vw]">
        <Sidebar />
        <form className="p-4 grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <p>Name</p>
            <input
              id="name"
              name="name"
              type="text"
              onBlur={createFormik.handleBlur}
              value={createFormik.values.name}
              onChange={createFormik.handleChange}
              placeholder="Name"
              className={`w-full mx-auto text-white shadow-sm focus-visible:outline-none rounded p-3 text-sm ${
                false
                  ? "dark:bg-zinc-700 bg-zinc-100 cursor-not-allowed"
                  : "dark:bg-zinc-800 bg-[#2D2F33]"
              }`}
              disabled={false}
            />
            <p>Username</p>
            <div className="flex flex-col gap-y-1">
              <div className="rounded-md flex items-center gap-x-2 border border-[#88888850] px-2 py-1">
                <div className="rounded-md flex gap-x-1 items-center bg-[#88888880] px-2 py-1 w-[7.5rem]">
                  <FcElectricity />
                  <p className="text-[#ffffff80] text-[14px]">Full Page</p>
                </div>
                <p className="text-[#62BAD9] cursor-pointer text-[13px]">
                  alter-fun.vercel.app/stanly_sukmajaya
                </p>
              </div>
              <div className="rounded-md flex items-center gap-x-2 border border-[#88888850] px-2 py-1">
                <div className="rounded-md flex gap-x-1 items-center bg-[#88888880] px-2 py-1 w-[7.5rem]">
                  <FcElectricity />
                  <p className="text-[#ffffff80] text-[14px]">Gift Page</p>
                </div>
                <p className="text-[#62BAD9] cursor-pointer text-[13px]">
                  alter-fun.vercel.app/stanly_sukmajaya/gift
                </p>
              </div>
              <div className="rounded-md flex items-center gap-x-2 border border-[#88888850] px-2 py-1">
                <div className="rounded-md flex gap-x-1 items-center bg-[#88888880] px-2 py-1 w-[7.5rem]">
                  <FcElectricity />
                  <p className="text-[#ffffff80] text-[14px]">Simple Page</p>
                </div>
                <p className="text-[#62BAD9] cursor-pointer text-[13px]">
                  alter-fun.vercel.app/stanly_sukmajaya/tip
                </p>
              </div>
            </div>
            <p>Bio / Occupation</p>
            <textarea
              id="name"
              name="name"
              rows={4}
              onBlur={createFormik.handleBlur}
              value={createFormik.values.name}
              onChange={createFormik.handleChange}
              placeholder="Bio/Occupation"
              className={`w-full mx-auto text-white shadow-sm focus-visible:outline-none rounded p-3 text-sm ${
                false
                  ? "dark:bg-zinc-700 bg-zinc-100 cursor-not-allowed"
                  : "dark:bg-zinc-800 bg-[#2D2F33]"
              }`}
              disabled={false}
            />
            <GradientButton
              // loading={loading}
              type="submit"
              fullWidth
              className="md:w-[75%] lg:w-[50%] w-full mr-auto flex items-center justify-center"
            >
              <Save />
              <span className="flex flex-row gap-x-1 self-center items-center justify-center">
                Save Changes
              </span>
            </GradientButton>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-x-2 items-center">
              <Mail />
              <p>Message for your supporters</p>
            </div>
            <textarea
              id="name"
              name="name"
              rows={4}
              onBlur={createFormik.handleBlur}
              value={createFormik.values.name}
              onChange={createFormik.handleChange}
              placeholder="Name"
              className={`w-full mx-auto text-white shadow-sm focus-visible:outline-none rounded p-3 text-sm ${
                false
                  ? "dark:bg-zinc-700 bg-zinc-100 cursor-not-allowed"
                  : "dark:bg-zinc-800 bg-[#2D2F33]"
              }`}
              disabled={false}
            />
            <div className="flex gap-x-1 items-center">
              <PersonStanding color="white" />
              <p>About</p>
            </div>
            <textarea
              id="name"
              name="name"
              rows={6}
              onBlur={createFormik.handleBlur}
              value={createFormik.values.name}
              onChange={createFormik.handleChange}
              placeholder="Name"
              className={`w-full mx-auto text-white shadow-sm focus-visible:outline-none rounded p-3 text-sm ${
                false
                  ? "dark:bg-zinc-700 bg-zinc-100 cursor-not-allowed"
                  : "dark:bg-zinc-800 bg-[#2D2F33]"
              }`}
              disabled={false}
            />
          </div>
        </form>
      </section>
    </div>
  );
};
