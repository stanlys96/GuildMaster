import { ArrowBigLeft, ArrowBigRight, Rocket, RocketIcon } from "lucide-react";
import { useState } from "react";
import { CoolRadioGroup, RadioOption } from "./CoolRadioButton";
import CoolSlider from "./CoolSlider";

interface Props {
  createFormik: any;
  loading: boolean;
  setIsOpen: (val: boolean) => void;
}

export const CreateGuildComponent = ({
  createFormik,
  loading,
  setIsOpen,
}: Props) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [value, setValue] = useState("");

  const plans: RadioOption[] = [
    {
      value: "free",
      label: "Allocation by members",
      description:
        "An existing member can propose how many tokens shall be issued to a new member",
    },
    {
      value: "pro",
      label: "Equal shares",
      description: "Tokens are equally distributed among all members",
    },
  ];
  return (
    <div className="flex flex-col gap-y-4 max-h-[85vh]">
      <p className="font-bold text-[23px]">Create a new Guild</p>
      {currentStep === 1 && (
        <div className="flex flex-col gap-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-white text-md">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              onBlur={createFormik.handleBlur}
              value={createFormik.values.name}
              onChange={createFormik.handleChange}
              placeholder="Enter guild name"
              className={`w-full text-white shadow-sm focus-visible:outline-none rounded p-3 text-sm ${
                loading
                  ? "dark:bg-zinc-700 bg-zinc-100 cursor-not-allowed"
                  : "dark:bg-zinc-800 bg-[#2D2F33]"
              }`}
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="name" className="block mb-1 text-white text-md">
              Guild token name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              onBlur={createFormik.handleBlur}
              value={createFormik.values.name}
              onChange={createFormik.handleChange}
              placeholder="Enter guild name"
              className={`w-full text-white shadow-sm focus-visible:outline-none rounded p-3 text-sm ${
                loading
                  ? "dark:bg-zinc-700 bg-zinc-100 cursor-not-allowed"
                  : "dark:bg-zinc-800 bg-[#2D2F33]"
              }`}
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="name" className="block mb-1 text-white text-md">
              Description
            </label>
            <input
              id="name"
              name="name"
              type="text"
              onBlur={createFormik.handleBlur}
              value={createFormik.values.name}
              onChange={createFormik.handleChange}
              placeholder="Enter guild name"
              className={`w-full text-white shadow-sm focus-visible:outline-none rounded p-3 text-sm ${
                loading
                  ? "dark:bg-zinc-700 bg-zinc-100 cursor-not-allowed"
                  : "dark:bg-zinc-800 bg-[#2D2F33]"
              }`}
              disabled={loading}
            />
          </div>
          <div>
            <p className="text-white font-bold text-[20px] mb-1">
              Initial token amount
            </p>
            <p className="text-[#797A8A] mb-2">
              How many tokens will be minted for initial Guild members
            </p>
            <label htmlFor="name" className="block mb-1 text-white text-md">
              Amount
            </label>
            <input
              id="name"
              name="name"
              type="text"
              onBlur={createFormik.handleBlur}
              value={createFormik.values.name}
              onChange={createFormik.handleChange}
              placeholder="Initial token amount"
              className={`w-full text-white shadow-sm focus-visible:outline-none rounded p-3 text-sm ${
                loading
                  ? "dark:bg-zinc-700 bg-zinc-100 cursor-not-allowed"
                  : "dark:bg-zinc-800 bg-[#2D2F33]"
              }`}
              disabled={loading}
            />
          </div>
        </div>
      )}
      {currentStep === 2 && (
        <div className="flex flex-col">
          <p className="font-bold text-[20px] mb-2">Token allocation model</p>
          <p className="text-[16px] mb-4">
            Choose token allocation model for your Guild
          </p>
          <CoolRadioGroup
            name="plan"
            options={plans}
            value={value}
            onChange={setValue}
            orientation="vertical"
            size="md"
          />
        </div>
      )}
      {currentStep === 3 && (
        <div className="flex flex-col overflow-scroll">
          <p className="font-bold text-[20px] mb-1">Voting rules</p>
          <p className="text-[16px] mb-6 text-[#787988]">
            Choose voting rules for your Guild
          </p>
          <p className="font-bold text-[20px] mb-1">Support</p>
          <p className="text-[16px] mb-4 text-[#787988]">
            Minimum percentage of total tokens in a Guild needed to vote for an
            option for it to pass.
          </p>
          <CoolSlider
            min={0}
            max={100}
            defaultValue={50}
            label=""
            onChange={(val) => console.log(val)}
          />
          <p className="font-bold text-[20px] mb-1 mt-2">Quorum</p>
          <p className="text-[16px] mb-4 text-[#787988]">
            Minimum percentage of Guild members needed to participate in the
            vote for it to be valid
          </p>
          <CoolSlider
            min={0}
            max={100}
            defaultValue={50}
            label=""
            onChange={(val) => console.log(val)}
          />
          <p className="font-bold text-[20px] mb-1 mt-2">
            Core Member Threshold
          </p>
          <p className="text-[16px] mb-4 text-[#787988]">
            Amount of tokens that a member needs to have to qualify as Core
            Member
          </p>
          <CoolSlider
            min={0}
            max={100}
            defaultValue={50}
            label=""
            onChange={(val) => console.log(val)}
          />
        </div>
      )}
      {currentStep === 4 && (
        <div className="flex flex-col max-h-[550px] overflow-scroll">
          <p className="font-bold text-[20px] mb-1">
            Add initial members to your Guild (optional)
          </p>
          <p className="text-[16px] mb-6 text-[#787988]">
            Add members by public key
          </p>
          <div>
            <p className="font-bold text-[18px] mb-2">Member #1 (You)</p>
            <p className="mb-2 ml-3">Public key</p>
            <input
              type="text"
              className="px-3 py-3 flex outline-none rounded-xl w-full bg-[#2C2E32] mb-2 justify-between items-center"
            />
            <div className="grid grid-cols-3 items-center gap-4 w-full mt-[20px]">
              <div className="w-full col-span-2">
                <p className="mb-2 ml-3">Token amount</p>
                <input
                  type="text"
                  className="px-3 py-3 flex-2 outline-none rounded-xl w-full bg-[#2C2E32] mb-2 justify-between items-center"
                />
              </div>
              <div className="w-full">
                <p className="mb-2 ml-3">Percentage</p>
                <input
                  type="text"
                  className="px-3 py-3 flex-2 outline-none rounded-xl w-full bg-[#2C2E32] mb-2 justify-between items-center"
                />
              </div>
            </div>
          </div>
          <div className="border-2 border-dotted border-gray-400 p-4 cursor-pointer rounded-lg mt-4">
            <h2 className="text-lg font-semibold text-center">
              + add initial member
            </h2>
          </div>
        </div>
      )}
      {currentStep === 5 && (
        <div>
          <p className="font-bold text-[20px] mb-1">Final review</p>
          <div className="px-3 py-3 rounded-xl w-full bg-[#2C2E32] my-2">
            <p className="text-[#787988] font-bold text-[18px]">Guild Name</p>
            <p className="text-[18px] font-semibold">Cryptoland DAO</p>
          </div>
          <div className="flex flex-col gap-y-2 mt-4">
            <div className="flex justify-between items-center">
              <p className="text-[16px] font-bold text-[#787988]">Token name</p>
              <p className="font-semibold text-[16px] text-white">$CLND</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[16px] font-bold text-[#787988]">
                Description
              </p>
              <p className="font-semibold text-[16px] text-white">$CLND</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[16px] font-bold text-[#787988]">
                Token amount
              </p>
              <p className="font-semibold text-[16px] text-white">$CLND</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[16px] font-bold text-[#787988]">
                Token allocation
              </p>
              <p className="font-semibold text-[16px] text-white">$CLND</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[16px] font-bold text-[#787988]">Support</p>
              <p className="font-semibold text-[16px] text-white">$CLND</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[16px] font-bold text-[#787988]">Quorum</p>
              <p className="font-semibold text-[16px] text-white">$CLND</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[16px] font-bold text-[#787988]">
                Core member threshold
              </p>
              <p className="font-semibold text-[16px] text-white">$CLND</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[16px] font-bold text-[#787988]">
                Initial members
              </p>
              <p className="font-semibold text-[16px] text-white">$CLND</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[16px] font-bold text-[#787988]">Fee</p>
              <p className="font-semibold text-[16px] text-white">$CLND</p>
            </div>
          </div>
        </div>
      )}
      <div className="flex gap-x-2 items-center mt-4">
        <button
          type="button"
          onClick={() => {
            if (currentStep === 1) {
              setIsOpen(false);
            } else {
              setCurrentStep((prevState) => prevState - 1);
            }
          }}
          className="w-full bg-[#888888] focus-visible:outline-none px-4 py-2 text-base rounded-lg items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-opacity-30 active:scale-98"
        >
          {currentStep === 1 ? (
            "Cancel"
          ) : (
            <span className="flex items-center gap-x-1 justify-center">
              <ArrowBigLeft />
              <span>Back</span>
            </span>
          )}
        </button>
        <button
          onClick={() => {
            if (currentStep < 5) {
              setCurrentStep((prevState) => prevState + 1);
            }
          }}
          type="button"
          className="bg-gradient-to-r flex items-center gap-x-1 justify-center w-full px-4 py-2 rounded-lg from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600"
        >
          {currentStep < 5 ? (
            <span className="flex items-center gap-x-1 justify-center">
              <span>Next</span> <ArrowBigRight />
            </span>
          ) : (
            <span className="flex items-center gap-x-1 justify-center">
              <span>Deploy</span> <RocketIcon />
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
