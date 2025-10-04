import { RocketIcon, ThumbsDown, ThumbsUp, Vote } from "lucide-react";
import { CoolRadioGroup } from "./CoolRadioButton";
import { SecondCoolRadioButtons } from "./SecondCoolRadioButton";

export const ProposalDetailComponent = () => {
  return (
    <div className="flex flex-col gap-y-2 w-full max-h-[85vh] overflow-scroll">
      <div className="w-full flex items-center justify-between mt-2">
        <p className="font-bold text-[24px]">
          Forget Greenland, let's buy Ireland
        </p>
        <p className="text-[#ABA245]">starts later</p>
      </div>
      <div>
        <p className="mt-2 text-[#787988]">
          My forefathers were Irish and since it's smaller, it's probably
          cheaper. Let's do Ireland instead.
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-[#787988]">Author</p>
        <p>jdaosidj...381230</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-[#787988]">Proposal type</p>
        <p>vault</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-[#787988]">Start date</p>
        <p>30/11/2025, 5:24 PM</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-[#787988]">End date</p>
        <p>25/12/2025, 10:20 PM</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-[#787988]">Type of vote</p>
        <p>Single choice</p>
      </div>
      <p className="font-bold text-[20px]">Cast your vote</p>
      <div className="flex flex-row gap-x-5 items-center">
        <div className="flex flex gap-[25px]">
          {["Accept", "Reject"].map((color) => (
            <label
              key={color}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="color"
                value={color}
                // checked={selectedColor === color}
                // onChange={handleChange}
                className="accent-blue-500 w-4 h-4 cursor-pointer"
              />
              {color}
            </label>
          ))}
        </div>
        <button
          type="button"
          className="bg-gradient-to-r w-[5rem] flex items-center gap-x-1 justify-center w-full px-4 py-2 rounded-lg from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600"
        >
          <span className="flex items-center gap-x-1 justify-center">
            <span>Vote</span>
          </span>
        </button>
      </div>
      {/* <p className="font-bold text-[20px]">Results</p> */}
      <p>Status: starts later</p>
      <p className="font-semibold text-[18px]">Support</p>
      <div className="flex flex-col gap-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#A5B4FC] font-medium flex items-center space-x-2">
              <ThumbsUp className="h-4 w-4" />
              <span>Yes (10 votes)</span>
            </span>
            <span className="text-[#A5B4FC] font-semibold">
              {((10 / 15) * 100).toFixed(2)}%
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div
              className="bg-[#A5B4FC] h-3 rounded-full transition-all duration-500"
              style={{ width: `${(10 / 15) * 100}%` }}
            ></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#808080] font-medium flex items-center space-x-2">
              <ThumbsDown className="h-4 w-4" />
              <span>No (5 votes)</span>
            </span>
            <span className="text-[#808080] font-semibold">
              {((5 / 15) * 100).toFixed(2)}%
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div
              className="bg-[#808080] h-3 rounded-full transition-all duration-500"
              style={{ width: `${(5 / 15) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
      <p className="font-semibold text-[18px]">Quorum</p>
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-[#9CA3AF] font-medium flex items-center space-x-2">
            Not reached
          </span>
          <span className="text-[#9CA3AF] font-semibold">Reached</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3">
          <div
            className="bg-[#9CA3AF] h-3 rounded-full transition-all duration-500"
            style={{ width: `50%` }}
          ></div>
        </div>
      </div>
      <p className="font-semibold text-[18px] mt-2">Votes (Count: 0)</p>
      <p className="text-[#787988]">No votes yet</p>
    </div>
  );
};
