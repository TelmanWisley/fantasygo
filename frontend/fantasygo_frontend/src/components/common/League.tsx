import { ILeague } from "types";
import logo from "assets/logo.svg";

interface CardInfoProps {
  label: string;
  value: string | number;
}
const CardInfo: React.FC<CardInfoProps> = ({ label, value }) => {
  return (
    <div className="text-xl">
      <span className="font-bold">{`${label}: `}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
};

export const LeagueCard: React.FC<ILeague> = (props) => {
  return (
    <div className="w-full flex flex-col gap-4 p-2 rounded-md relative shadow-md shadow-black text-gray-700">
      <div className="absolute w-full h-full flex items-center justify-center">
        <img src={logo} alt="logo" className="w-1/2 opacity-10" />
      </div>
      <CardInfo label="Display Name" value={props.displayName} />
      <CardInfo
        label="Full Name"
        value={`${props.firstName}_${props.secondName}`}
      />
      <CardInfo label="Team" value={props.team} />
      <CardInfo label="Total Points" value={props.totalPoints} />
    </div>
  );
};
