import { Stars } from "lucide-react";
import { BsPatchCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const CreatorComponent = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/user/${"kitsunex"}`)}
      className="border rounded-md border-[#88888850] cursor-pointer"
    >
      <div className="w-full h-[125px] overflow-hidden rounded-t-md">
        <img
          src="https://new.trakteer.id/_assets/v11/58f22ed129686b82f48cdeee35ef5796e98ef74d.png"
          className="w-full h-full object-cover object-center rounded-t-md"
        />
      </div>
      <div className="p-4 flex items-center justify-center relative text-center">
        <img
          src="https://new.trakteer.id/_assets/v11/58f22ed129686b82f48cdeee35ef5796e98ef74d.png"
          className="w-[100px] h-[100px] border border-[#3B3D3D] border-4 top-[-60px] absolute object-cover object-center rounded-full"
        />
        <div className="mt-[30px] text-center">
          <div className="flex flex-row justify-center gap-x-1 items-center">
            <p>Kitsunee</p>
            <BsPatchCheckFill size={20} className="text-blue-500" />
          </div>
          <p className="text-[#FFFFFF80]">@kitsunex</p>
          <p className="text-[#FFFFFF80]">
            I am the strongest warrior from Ch.02, I am Fareye Closhartt and
            I...
          </p>
          <div className="flex flex-row gap-x-1 items-center justify-center mt-2">
            <Stars size={20} color="yellow" />
            <p>Featured</p>
          </div>
        </div>
      </div>
    </div>
  );
};
