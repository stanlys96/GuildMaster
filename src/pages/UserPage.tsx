import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Mail, PersonStanding, PersonStandingIcon, Save } from "lucide-react";
import { Sidebar } from "../components/Sidebar";
import { useFormik } from "formik";
import { FcElectricity } from "react-icons/fc";
import GradientButton from "../components/GradientButton";
import { BsPatchCheckFill } from "react-icons/bs";
import { BiMoney, BiSupport } from "react-icons/bi";
import { TfiSupport } from "react-icons/tfi";

export const UserPage = () => {
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
        <div className="py-5 px-10 grid grid-cols-4 gap-4 w-full">
          <div className="bg-background/50 p-5 h-fit">
            <img
              src="https://new.trakteer.id/_assets/v11/58f22ed129686b82f48cdeee35ef5796e98ef74d.png"
              className="w-[100px] h-[100px] rounded-full mx-auto"
            />
            <div className="mt-2 text-center">
              <div className="flex flex-row justify-center gap-x-1 items-center">
                <p>Kitsunee</p>
                <BsPatchCheckFill size={20} className="text-blue-500" />
              </div>
              <p className="text-[#FFFFFF80]">@kitsunex</p>
              <p className="text-[#FFFFFF]">Digital artist and Webtonist</p>
            </div>
            <div className="mt-6 border border-[#88888850] rounded-md px-4 py-3">
              <GradientButton
                // loading={loading}
                type="submit"
                fullWidth
                className="flex justify-center items-center"
              >
                <BiMoney />
                <span className="flex flex-row gap-x-1 self-center items-center justify-center">
                  Support
                </span>
              </GradientButton>
            </div>
          </div>
          <div className="w-full col-span-3 flex flex-col gap-y-4">
            <img
              src="https://mirror-uploads.trakteer.id/images/cover/cvr-MNPBxwjZC4y24P6fg7yC4TVbhREM2XXx1707364293.jpg"
              className="w-full h-[225px] rounded-md"
            />
            <div className="flex flex-row items-center gap-x-2">
              <div className="border bg-[#88888830] border-[#88888850] rounded-md py-2 px-5 cursor-pointer w-fit">
                <p>Home</p>
              </div>
              <div className="border border-[#88888850] rounded-md py-2 px-5 cursor-pointer w-fit">
                <p>Shop</p>
              </div>
              <div className="border border-[#88888850] rounded-md py-2 px-5 cursor-pointer w-fit">
                <p>AlterFun</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </div>
  );
};
