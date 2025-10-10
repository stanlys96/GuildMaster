import { Edit, Wallet } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="h-[90vh] bg-background/80 flex flex-col border-r border-[#88888850] px-2 py-5">
      <div
        onClick={() => navigate("/profile")}
        className={`flex gap-x-2 rounded-full ${
          location.pathname === "/profile" ? "bg-[#88888820]" : ""
        } px-4 py-3 items-center cursor-pointer`}
      >
        <Edit size={16} />
        <p>Edit Page</p>
      </div>
      <div
        onClick={() => navigate("/balance")}
        className={`flex gap-x-2 rounded-full ${
          location.pathname === "/balance" ? "bg-[#88888820]" : ""
        } px-4 py-3 items-center cursor-pointer`}
      >
        <Wallet size={16} />
        <p>My Balance</p>
      </div>
    </div>
  );
};
