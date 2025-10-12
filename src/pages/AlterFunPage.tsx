import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import {
  BanknoteIcon,
  Delete,
  Eye,
  Mail,
  PersonStanding,
  PersonStandingIcon,
  Plus,
  Save,
  Trash,
} from "lucide-react";
import { Sidebar } from "../components/Sidebar";
import { useFormik } from "formik";
import { FcElectricity } from "react-icons/fc";
import GradientButton from "../components/GradientButton";
import TokenTicker from "../components/TokenTicker";
import { AnimatedModal } from "../components/AnimatedModal";
import { useState } from "react";
import { SiDepositphotos } from "react-icons/si";
import { BiMoney } from "react-icons/bi";

export const AlterFunPage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenTransaction, setIsOpenTransaction] = useState<boolean>(false);
  const createFormik = useFormik<any>({
    initialValues: {
      username: "",
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
      creator: false,
    },
    onSubmit: () => {},
  });
  return (
    <div>
      <Header
        element={
          <div
            onClick={() => navigate("/profile")}
            className="flex gap-x-2 items-center cursor-pointer"
          >
            <PersonStandingIcon size={30} />
            <div className="flex flex-col text-white">
              <p className="text-[12px]">Stanly Sukmajaya</p>
              <p className="text-[12px] text-[#FFFFFF75]">@stanly_sukmajaya</p>
            </div>
          </div>
        }
      />
      <section className="text-white flex gap-x-2 relative bg-gradient-to-br from-surface via-background to-dark-900 min-h-[90vh] w-[100vw]">
        <Sidebar />
        <div className="grid grid-cols-2 p-4 gap-4 w-fit">
          <div className="flex flex-col gap-y-4 w-full">
            <div>
              <p>Your Guild</p>
              <p>Kitsune Power</p>
            </div>
            <div>
              <p>Your Stock</p>
              <p>$KITSUNE</p>
            </div>
            <div>
              <p>Your Stock's Price</p>
              <p>Rp 15.123,00</p>
            </div>
            <div
              onClick={() => setIsOpen(true)}
              className="bg-background p-3 rounded-lg w-fit cursor-pointer flex flex-row gap-x-2"
            >
              <Eye />
              <p>See Your Members</p>
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-row gap-x-8">
                <div>
                  <p className="text-[24px] mb-4">Active Proposals (3)</p>
                  <div className="bg-surface w-fit rounded-2xl p-4 flex-1 flex flex-col overflow-scroll mb-4">
                    <p>1. Let's make Kitsune great again!</p>
                    <p>2. Host some merchandising events!</p>
                    <p>3. Play board games!</p>
                    <div
                      onClick={() => setIsOpenTransaction(true)}
                      className="bg-background p-3 rounded-lg  w-fit flex flex-row gap-x-2 items-center cursor-pointer mt-2"
                    >
                      <Eye />
                      <p className="text-left">See all active proposals</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[24px] mb-4">Past Proposals (2)</p>
                  <div className="bg-surface w-fit rounded-2xl p-4 flex-1 flex flex-col overflow-scroll mb-4">
                    <p>1. Let's make Kitsune great again!</p>
                    <p>2. Host some merchandising events!</p>
                    <div
                      onClick={() => setIsOpenTransaction(true)}
                      className="bg-background p-3 rounded-lg  w-fit flex flex-row gap-x-2 items-center cursor-pointer mt-2"
                    >
                      <Eye />
                      <p className="text-left">See all past proposals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-surface rounded-2xl p-4 flex-1 flex flex-col overflow-scroll mb-4">
              <p className="text-left text-[20px]">Vault Balance</p>
              <div className="flex flex-row gap-x-4 mt-2 items-center">
                <img className="w-[75px]" src="/images/sol.jpeg" />
                <div>
                  <p className="text-[#787988]">SOL</p>
                  <p>0.00</p>
                </div>
                <GradientButton onClick={() => {}}>
                  <span className="flex flex-row gap-x-2 items-center">
                    <BanknoteIcon /> Deposit
                  </span>
                </GradientButton>
              </div>
              <div
                onClick={() => setIsOpenTransaction(true)}
                className="bg-background p-3 rounded-lg  w-fit flex flex-row gap-x-2 items-center cursor-pointer mt-2"
              >
                <Eye />
                <p className="text-left">See transactions</p>
              </div>
            </div>
            <TokenTicker />
          </div>
        </div>
      </section>
      <AnimatedModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        className="text-white"
      >
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-row items-center w-full gap-x-4">
            <p className="text-[24px] font-semibold">Your Members</p>
            <GradientButton onClick={() => {}}>
              <span className="flex flex-row gap-x-1 items-center">
                <Plus /> Add Member
              </span>
            </GradientButton>
          </div>
          <p className="mt-4 flex items-center gap-x-2">1. Kakashi</p>
          <p className="">2. Orochimaru</p>
          <p className="">3. Kakeshi</p>
          <p className="">4. Sakura</p>
          <p className="">5. Naruto</p>
          <p className="">6. Boruto</p>
        </div>
      </AnimatedModal>
      <AnimatedModal
        isOpen={isOpenTransaction}
        onClose={() => {
          setIsOpenTransaction(false);
        }}
        className="text-white"
      >
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-row items-center w-full gap-x-4">
            <p className="text-[24px] font-semibold">Your Transactions</p>
          </div>
          <p className="mt-4 flex items-center gap-x-2">1. Kakashi</p>
          <p className="">2. Orochimaru</p>
          <p className="">3. Kakeshi</p>
          <p className="">4. Sakura</p>
          <p className="">5. Naruto</p>
          <p className="">6. Boruto</p>
        </div>
      </AnimatedModal>
    </div>
  );
};
