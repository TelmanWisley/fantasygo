import logo from "assets/logo.svg";
import { PATH } from "consts";
import { Link } from "react-router-dom";

interface HeaderViewProps {
  phoneNumber: string;
  logout: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const HeaderView: React.FC<HeaderViewProps> = ({
  phoneNumber,
  logout,
}) => {
  return (
    <div className="w-full min-h-20 bg-white shadow-md shadow-black flex justify-between items-center px-10 sticky top-0 z-10">
      <Link to={PATH.DASHBOARD}>
        <img src={logo} alt="logo" className="w-32 p-2" />
      </Link>
      {phoneNumber ? (
        <button
          onClick={logout}
          className="text-xl font-bold p-2 hover:bg-gray-500 hover:text-white transition-all h-20"
        >
          <p>{phoneNumber}</p>
          <p>(Logout)</p>
        </button>
      ) : (
        <Link
          to={PATH.LOGIN}
          className="text-2xl font-bold p-2 hover:bg-gray-500 hover:text-white transition-all h-20 flex items-center"
        >
          Login
        </Link>
      )}
    </div>
  );
};
