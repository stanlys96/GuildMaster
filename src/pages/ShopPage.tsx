import { Dot, PersonStandingIcon, ShoppingBag, View } from "lucide-react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import GradientButton from "../components/GradientButton";
import { BiMoney } from "react-icons/bi";
import { BsPatchCheckFill } from "react-icons/bs";
import { StarFilledIcon } from "@radix-ui/react-icons";

export const ShopPage = () => {
  const navigate = useNavigate();
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
        <div className="px-[200px] w-full grid grid-cols-3 py-[20px] gap-5">
          <div className="border border-[#88888850] rounded-md p-5 w-full col-span-2">
            <div className="flex gap-x-2 items-center">
              <ShoppingBag size={18} color="#D45B62" />
              <p className="text-[#D45B62] text-[22px]">Kitsunee's Shop</p>
            </div>
            <p className="text-[40px] font-bold">Audio Pack</p>
            <div className="flex flex-row gap-x-1 items-center text-[14px] text-[#888888]">
              <div className="flex flex-row items-center">
                <StarFilledIcon width={26} height={26} color="yellow" />
                <StarFilledIcon width={26} height={26} color="yellow" />
                <StarFilledIcon width={26} height={26} color="yellow" />
                <StarFilledIcon width={26} height={26} color="yellow" />
                <StarFilledIcon width={26} height={26} color="yellow" />
              </div>
              <p>5.0 (13)</p>
              <Dot size={16} color="white" />
              <p>55 sold</p>
            </div>
            <img
              src="https://new.trakteer.id/_assets/v11/58f22ed129686b82f48cdeee35ef5796e98ef74d.png"
              className="w-full mx-auto rounded-md mt-4"
            />
            <p className="mt-4 text-[#888888]">Deskripsi</p>
            <p className="mt-4 text-[#888888]">
              Pengen tau rasanya disemangatin Nia Redalion? Khusus buat kamu,
              dapatkan Voice Pack #NiaKuKasih yang rilis setiap hari Jumat buat
              nyemangatin kamu melewati hari 🦁☀️
            </p>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="border border-[#88888850] rounded-md w-full">
              <div className="w-full h-[125px] overflow-hidden rounded-t-md">
                <img
                  src="https://new.trakteer.id/_assets/v11/58f22ed129686b82f48cdeee35ef5796e98ef74d.png"
                  className="w-full h-full object-cover object-center rounded-t-md"
                />
              </div>
              <div className="p-4 flex items-center justify-center relative text-center">
                <img
                  src="https://new.trakteer.id/_assets/v11/58f22ed129686b82f48cdeee35ef5796e98ef74d.png"
                  className="w-[100px] h-[100px] border border-[#3B3D3D] border-4 top-[-60px] left-[20px] absolute object-cover object-center rounded-full"
                />
                <div className="top-[-20px] cursor-pointer flex gap-x-2 items-center right-[20px] absolute bg-background rounded-full py-2 px-4 border border-[#88888850]">
                  <View size={16} />
                  <p>View Page</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex gap-x-2 items-center">
                  <p className="text-[#888888] text-[18px]">Kitsunee</p>
                  <BsPatchCheckFill size={20} className="text-blue-500" />
                  <p className="text-[#888888] text-[18px]">@kitsunexx</p>
                </div>
              </div>
            </div>
            <div className="border border-[#88888850] rounded-md px-5 py-3 w-full">
              <p className="text-[22px] text-[#888888]">Total Harga</p>
              <p className="text-[#D45B62] text-[20px] font-semibold">
                Rp 10.000
              </p>
              <GradientButton
                // loading={loading}
                type="submit"
                fullWidth
                className="flex justify-center items-center mt-2"
              >
                <BiMoney />
                <span className="flex flex-row gap-x-1 self-center items-center justify-center">
                  Buy
                </span>
              </GradientButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
