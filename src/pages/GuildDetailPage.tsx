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
} from "lucide-react";
import { guilds, proposals, transactions } from "../data/mockData";
import { useWallet } from "../contexts/WalletContext";
import { Tabs } from "../components/Tabs";
import GradientButton from "../components/GradientButton";
import { AnimatedModal } from "../components/AnimatedModal";
import { useFormik } from "formik";
import { CreateProposalComponent } from "../components/CreateProposalComponent";

const GuildDetailPage: React.FC = () => {
  const createFormik = useFormik<any>({
    initialValues: { title: "" },
    onSubmit: () => {},
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

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
            <div className="bg-background/50 cursor-pointer p-3 rounded-md w-full">
              <div className="flex flex-row justify-between items-center">
                <p className="font-bold text-[24px]">
                  Forget Greenland, let's buy Ireland
                </p>
                <p className="text-[#ABA245]">starts later</p>
              </div>
              <p className="mt-2 text-[#787988]">
                My forefathers were Irish and since it's smaller, it's probably
                cheaper. Let's do Ireland instead.
              </p>
              <div className="flex flex-row justify-between items-center mt-5">
                <p>By: daosidjaosijd</p>
                <p>End date: Dec 31, 2025, 5:08 PM</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <AnimatedModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <CreateProposalComponent
          createFormik={createFormik}
          loading={loading}
        />
      </AnimatedModal>
    </div>
  );
};

export default GuildDetailPage;
