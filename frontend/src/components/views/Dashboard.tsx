import { Link } from "react-router-dom";

import { PATH } from "consts";

import logo from "assets/logo.svg";

interface DashboardViewProps {
  phoneNumber: string
}

export const DashboardView: React.FC<DashboardViewProps> = ({ phoneNumber }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-10">
      <img src={logo} alt="logo" className="w-96" />
      <Link
        className="text-2xl font-bold bg-pink-500 text-white px-5 py-2 rounded-md hover:bg-pink-600 transition-all"
        to={phoneNumber ? PATH.LEAGUE : PATH.LOGIN}
      >
        {phoneNumber ? "Go to Leagues" : "Login"}
      </Link>
    </div>
  );
};
