import React from "react";
import GradientButton from "./GradientButton";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  visible: boolean;
}

export default function Navbar({ visible }: NavbarProps) {
  const navigate = useNavigate();
  return (
    <nav
      className={`fixed the-navbar top-0 left-0 w-full transition-transform duration-500 ease-in-out
      ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-6xl bg-white border-l border-r border-b border-[#000000] z-100000 mx-auto rounded-b-lg shadow-md p-4 text-black flex justify-between items-center">
        <div className="flex items-center">
          <img className="h-[40px] w-[40px]" src="/images/dog.png" />
          <img className="w-[150px]" src="/images/alterfun-white.jpeg" />
        </div>
        <ul className="flex space-x-2">
          <li>
            <GradientButton onClick={() => navigate("/login")}>
              <p className="text-white flex gap-x-2 items-center">
                Login <ArrowRight />
              </p>
            </GradientButton>
          </li>
          <li>
            <GradientButton
              variant="green"
              onClick={() => navigate("/register")}
            >
              <p className="text-white flex gap-x-2 items-center">
                Register <ArrowRight />
              </p>
            </GradientButton>
          </li>
        </ul>
      </div>
    </nav>
  );
}
