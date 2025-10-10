import { IoStarOutline } from "react-icons/io5";
import Header from "../components/Header";
import { PersonStandingIcon } from "lucide-react";
import { CreatorComponent } from "../components/CreatorComponent";

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
      <section className="text-white relative bg-gradient-to-br from-surface via-background to-dark-900 py-10 min-h-[90vh] w-[100vw]">
        <div className="flex w-full h-full flex-row justify-center mb-8">
          <div className="flex gap-x-2 items-center h-fit cursor-pointer">
            <IoStarOutline color="white" size={20} />
            <p className="text-[20px]">Featured</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 px-[100px] text-white">
          <CreatorComponent />
          <CreatorComponent />
          <CreatorComponent />
          <CreatorComponent />
          <CreatorComponent />
        </div>
      </section>
    </div>
  );
};
