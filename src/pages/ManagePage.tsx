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
    </div>
  );
};
