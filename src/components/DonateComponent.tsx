import { CiMoneyBill } from "react-icons/ci";

export const DonateComponent = () => {
  return (
    <div className="flex flex-row gap-x-2">
      <img
        src="https://new.trakteer.id/_assets/v11/58f22ed129686b82f48cdeee35ef5796e98ef74d.png"
        className="w-[40px] h-[40px] mb-2 rounded-full"
      />
      <div className="flex flex-col items-start">
        <div className="flex flex-row gap-x-2 items-center">
          <p className="font-semibold">chelsea andhara</p>
          <span className="text-[#FFFFFF80]">donates</span>
          <div className="flex flex-row gap-x-1 items-center">
            <CiMoneyBill color="#D45B62" />
            <p className="text-[#D45B62]">100,000 IDR</p>
          </div>
        </div>
        <p className="text-[#FFFFFF80] text-[14px]">5 hours ago</p>
      </div>
    </div>
  );
};
