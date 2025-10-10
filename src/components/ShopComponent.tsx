import { StarFilledIcon } from "@radix-ui/react-icons";
import { Dot, Image } from "lucide-react";
import { MdArticle } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const ShopComponent = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/kitsunex/shop/audiopack`)}
      className="flex flex-col gap-y-3 cursor-pointer"
    >
      <img
        src="https://new.trakteer.id/_assets/v11/58f22ed129686b82f48cdeee35ef5796e98ef74d.png"
        className="w-full h-[200px] mx-auto rounded-t-md"
      />
      <p className="text-[18px]">Audio Pack #5</p>
      <p className="text-[18px] text-[#D45B62]">Rp 50.000</p>
      <div className="flex flex-row gap-2 items-center flex-wrap">
        <div className="p-1 border border-[#BCBCBC] bg-[#88888820] rounded-md">
          <p className="text-[#888888] text-[12px] flex flex-row gap-x-1 items-center">
            <MdArticle size={12} />
            Article
          </p>
        </div>
        <div className="p-1 border border-[#BCBCBC] bg-[#88888820] rounded-md">
          <p className="text-[#888888] text-[12px] flex flex-row gap-x-1 items-center">
            <Image size={12} />
            Gallery
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-x-1 items-center text-[14px] text-[#888888]">
        <StarFilledIcon color="yellow" />
        <p>5.0 (13)</p>
        <Dot size={16} color="white" />
        <p>55 sold</p>
      </div>
    </div>
  );
};
