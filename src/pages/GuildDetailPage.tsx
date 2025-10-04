import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  Coins,
  TrendingUp,
  Vote,
  DollarSign,
  ShoppingCart,
  Star,
  Heart,
  Eye,
  Plus,
  Banknote,
  Copy,
  BanknoteIcon,
} from "lucide-react";
import { guilds, proposals, transactions } from "../data/mockData";
import { useWallet } from "../contexts/WalletContext";
import { Tabs } from "../components/Tabs";
import GradientButton from "../components/GradientButton";
import { AnimatedModal } from "../components/AnimatedModal";
import { useFormik } from "formik";
import { CreateProposalComponent } from "../components/CreateProposalComponent";
import { CreateProposalFormikProps } from "../utils/interface";
import { ProposalDetailComponent } from "../components/ProposalDetailComponent";

const GuildDetailPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenProposalDetail, setIsOpenProposalDetail] =
    useState<boolean>(false);
  const { id } = useParams<{ id: string }>();

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const users: any[] = [
    { id: 1, name: "Alice", email: "alice@example.com", role: "Admin" },
    { id: 2, name: "Bob", email: "bob@example.com", role: "Editor" },
    { id: 3, name: "Charlie", email: "charlie@example.com", role: "Viewer" },
  ];

  const tabData = [
    {
      label: "Voting",
    },
    {
      label: "Members",
    },
    {
      label: "Vault",
    },
  ];

  return (
    <div className="bg-background h-[90vh] text-white flex flex-col gap-y-4 justify-center px-[30px] py-[30px]">
      <Tabs
        className="mt-[20px] mx-auto"
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        tabs={tabData}
      />
      {activeIndex === 0 && (
        <div className="h-full flex flex-col gap-y-4">
          <div className="flex flex-row justify-between items-center">
            <p className="text-left text-[30px] font-bold">Proposals</p>
            <GradientButton onClick={() => setIsOpen(true)}>
              <span className="flex flex-row gap-x-1 items-center">
                <Plus /> New Proposal
              </span>
            </GradientButton>
          </div>
          <div className="bg-surface rounded-2xl p-4 flex-1 flex items-center flex-col overflow-scroll">
            {false && (
              <div className="flex flex-col justify-center items-center">
                <Banknote />
                <p className="text-[20px] font-bold">No proposals yet</p>
                <p className="text-[#707181]">
                  Initiate a proposal by clicking New Proposal
                </p>
              </div>
            )}
            {true && (
              <div className="w-full">
                <div
                  onClick={() => setIsOpenProposalDetail(true)}
                  className="bg-background/50 cursor-pointer border border-[#88888850] shadow-md p-3 rounded-md w-full"
                >
                  <div className="flex flex-row justify-between items-center">
                    <p className="font-bold text-[24px]">
                      Forget Greenland, let's buy Ireland
                    </p>
                    <p className="text-[#ABA245]">starts later</p>
                  </div>
                  <p className="mt-2 text-[#787988]">
                    My forefathers were Irish and since it's smaller, it's
                    probably cheaper. Let's do Ireland instead.
                  </p>
                  <div className="flex flex-row justify-between items-center mt-5">
                    <p>By: daosidjaosijd</p>
                    <p>End date: Dec 31, 2025, 5:08 PM</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {activeIndex === 1 && (
        <div className="h-full flex flex-col gap-y-4">
          <div className="flex flex-row justify-between items-center">
            <p className="text-left text-[30px] font-bold">Members</p>
            <GradientButton onClick={() => setIsOpen(true)}>
              <span className="flex flex-row gap-x-1 items-center">
                <Plus /> Add Member
              </span>
            </GradientButton>
          </div>
          <div className="bg-surface rounded-2xl p-4 flex-1 flex items-center flex-col overflow-scroll">
            <table className="min-w-full rounded-lg">
              <thead className="text-left">
                <tr>
                  <th className="p-3">Name</th>
                  <th className="p-3">Tokens</th>
                  <th className="p-3">Voting power</th>
                  <th className="p-3"></th> {/* no header for the 4th column */}
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="">
                    <td className="p-3 text-white flex flex-row gap-x-2 items-center">
                      FSPp88cxV3it1KUBh6ex5hiEj2sNh55vuSZLY2Ma92V1
                      <a className="cursor-pointer">
                        <Copy />
                      </a>
                    </td>
                    <td className="p-3 text-white">{user.email}</td>
                    <td className="p-3 text-white">{user.role}</td>
                    <td className="p-3 text-right text-white">
                      <button
                        type="submit"
                        className="bg-gradient-to-r text-white flex items-center gap-x-1 justify-center w-full px-4 py-2 rounded-lg from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600"
                      >
                        <span className="flex items-center gap-x-1 justify-center">
                          <span>Remove</span>
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {activeIndex === 2 && (
        <div className="h-full flex flex-col gap-y-4">
          <div className="flex flex-row justify-between items-center">
            <p className="text-left text-[30px] font-bold">Vault</p>
            <GradientButton onClick={() => setIsOpen(true)}>
              <span className="flex flex-row gap-x-1 items-center">
                <BanknoteIcon /> Deposit
              </span>
            </GradientButton>
          </div>
          <div className="bg-surface rounded-2xl p-4 flex-1 flex flex-col overflow-scroll">
            <p className="text-left text-[20px] font-bold">Balance</p>
            <div className="flex flex-row gap-x-2 mt-2 items-center">
              <img className="w-[75px]" src="/images/sol.jpeg" />
              <div>
                <p className="text-[#787988] font-semibold">SOL</p>
                <p>0.00</p>
              </div>
            </div>
            <p className="text-left text-[20px] font-bold mt-2">
              Recent transactions
            </p>
            <p className="text-[#787988]">No transactions yet</p>
          </div>
        </div>
      )}
      <AnimatedModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <CreateProposalComponent loading={loading} />
      </AnimatedModal>
      <AnimatedModal
        isOpen={isOpenProposalDetail}
        onClose={() => setIsOpenProposalDetail(false)}
      >
        <ProposalDetailComponent />
      </AnimatedModal>
    </div>
  );
};

export default GuildDetailPage;
