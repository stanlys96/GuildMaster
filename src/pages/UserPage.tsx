import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import {
  ArrowRight,
  Mail,
  PersonStanding,
  PersonStandingIcon,
  Save,
  Image,
  Dot,
} from "lucide-react";
import { Sidebar } from "../components/Sidebar";
import { useFormik } from "formik";
import { FcElectricity } from "react-icons/fc";
import GradientButton from "../components/GradientButton";
import { BsPatchCheckFill } from "react-icons/bs";
import { BiMoney, BiSupport } from "react-icons/bi";
import { TfiSupport } from "react-icons/tfi";
import { TbMailFilled } from "react-icons/tb";
import { MdArticle, MdMoney } from "react-icons/md";
import { CiMoneyBill } from "react-icons/ci";
import { DonateComponent } from "../components/DonateComponent";
import { useState } from "react";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { ShopComponent } from "../components/ShopComponent";

export const UserPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("home");
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
            <div className="mt-6 border border-[#88888850] rounded-md px-4 py-3 flex flex-col gap-y-2">
              <div className="flex flex-row gap-x-2 items-center">
                <TbMailFilled size={30} />
                <p className="text-[#FFFFFF90]">Message from the creator</p>
              </div>
              <p>Klik "Rewards" untuk baca episodenya.</p>
            </div>
          </div>
          <div className="w-full col-span-3 flex flex-col gap-y-4">
            <img
              src="https://mirror-uploads.trakteer.id/images/cover/cvr-MNPBxwjZC4y24P6fg7yC4TVbhREM2XXx1707364293.jpg"
              className="w-full h-[225px] rounded-md"
            />
            <div>
              <div className="flex flex-row items-center gap-x-2">
                <div
                  onClick={() => setSelectedCategory("home")}
                  className={`border ${
                    selectedCategory === "home" ? "bg-[#88888830]" : ""
                  } border-[#88888850] rounded-md py-2 px-5 cursor-pointer w-fit`}
                >
                  <p>Home</p>
                </div>
                <div
                  onClick={() => setSelectedCategory("shop")}
                  className={`border ${
                    selectedCategory === "shop" ? "bg-[#88888830]" : ""
                  } border-[#88888850] rounded-md py-2 px-5 cursor-pointer w-fit`}
                >
                  <p>Shop</p>
                </div>
                <div
                  onClick={() => setSelectedCategory("alterfun")}
                  className={`border ${
                    selectedCategory === "alterfun" ? "bg-[#88888830]" : ""
                  } border-[#88888850] rounded-md py-2 px-5 cursor-pointer w-fit`}
                >
                  <p>AlterFun</p>
                </div>
              </div>
              {selectedCategory === "home" && (
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <div className="p-2 mt-4">
                      <div className="border border-[#88888850] rounded-md px-4 py-3 flex flex-col gap-y-3">
                        <input
                          id="name"
                          name="name"
                          type="name"
                          onBlur={createFormik.handleBlur}
                          value={createFormik.values.repeatPassword}
                          onChange={createFormik.handleChange}
                          placeholder="Name"
                          className={`text-white shadow-sm focus-visible:outline-none rounded p-3 text-sm ${
                            false
                              ? "dark:bg-zinc-700 bg-zinc-100 cursor-not-allowed"
                              : "dark:bg-zinc-800 bg-[#2D2F33]"
                          }`}
                          disabled={false}
                        />
                        <textarea
                          id="name"
                          name="name"
                          rows={5}
                          onBlur={createFormik.handleBlur}
                          value={createFormik.values.repeatPassword}
                          onChange={createFormik.handleChange}
                          placeholder="Support Message"
                          className={`text-white shadow-sm focus-visible:outline-none rounded p-3 text-sm ${
                            false
                              ? "dark:bg-zinc-700 bg-zinc-100 cursor-not-allowed"
                              : "dark:bg-zinc-800 bg-[#2D2F33]"
                          }`}
                          disabled={false}
                        />
                        <GradientButton
                          className="flex justify-center items-center"
                          fullWidth
                          onClick={() => {}}
                        >
                          <BiMoney />
                          <p className="text-white flex gap-x-2 items-center">
                            Send Support
                          </p>
                        </GradientButton>
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-4 mt-4">
                      <DonateComponent />
                      <DonateComponent />
                      <DonateComponent />
                      <DonateComponent />
                      <DonateComponent />
                    </div>
                  </div>
                  <div>
                    <p className="text-[24px]">About</p>
                    <p className="mt-4">Digital artist, comic, webtonist</p>
                  </div>
                </div>
              )}
              {selectedCategory === "shop" && (
                <div className="grid grid-cols-3 gap-6 mt-4">
                  <ShopComponent />
                  <ShopComponent />
                  <ShopComponent />
                  <ShopComponent />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
