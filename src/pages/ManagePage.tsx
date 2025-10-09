import { IoStarOutline } from "react-icons/io5";
import Header from "../components/Header";
import { PersonStandingIcon } from "lucide-react";

export const ManagePage = () => {
  return (
    <div>
      <Header
        element={
          <div className="flex gap-x-2 items-center">
            <PersonStandingIcon size={30} />
            <div className="flex flex-col text-white">
              <p className="text-[12px]">Stanly Sukmajaya</p>
              <p className="text-[12px] text-[#FFFFFF75]">@stanly_sukmajaya</p>
            </div>
          </div>
        }
      />
      <section className="flex justify-center text-white relative bg-gradient-to-br from-surface via-background to-dark-900 py-10 h-[90vh] w-[100vw]">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1254736/pexels-photo-1254736.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10" />
        <div className="flex w-full h-full flex-row justify-center">
          <div className="flex gap-x-2 items-center h-fit cursor-pointer">
            <IoStarOutline color="white" size={20} />
            <p className="text-[20px]">Featured</p>
          </div>
        </div>
      </section>
    </div>
  );
};
