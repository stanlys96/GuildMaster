import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Mail, PersonStanding, PersonStandingIcon, Save } from "lucide-react";
import { Sidebar } from "../components/Sidebar";
import { useFormik } from "formik";
import { FcElectricity } from "react-icons/fc";
import GradientButton from "../components/GradientButton";
import TokenTicker from "../components/TokenTicker";

export const AlterFunPage = () => {
  const navigate = useNavigate();
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
              <p>Your Token</p>
              <p>$KITSUNE</p>
            </div>
            <div>
              <p>Your Token Price</p>
              <p>Rp 15.123,00</p>
            </div>
            <div className="bg-background p-3 rounded-lg w-full">
              <p>Your Members</p>
              <p>1. Naruto</p>
              <p>2. Sasuke</p>
              <p>3. Orochimaru</p>
              <p>4. Boruto</p>
              <p>5. Sakura</p>
              <p>6. Kakeshi</p>
              <p>7. Itachi</p>
            </div>
          </div>
          <div>
            <div className="bg-surface rounded-2xl p-4 flex-1 flex flex-col overflow-scroll mb-4">
              <p className="text-left text-[20px]">Vault Balance</p>
              <div className="flex flex-row gap-x-2 mt-2 items-center">
                <img className="w-[75px]" src="/images/sol.jpeg" />
                <div>
                  <p className="text-[#787988]">SOL</p>
                  <p>0.00</p>
                </div>
              </div>
              <p className="text-left text-[20px] mt-2">Recent transactions</p>
              <p className="text-[#787988]">No transactions yet</p>
            </div>
            <TokenTicker />
          </div>
        </div>
      </section>
    </div>
  );
};
