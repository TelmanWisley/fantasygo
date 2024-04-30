import { HeaderView } from "components/views";
import { PATH } from "consts";
import { MainContext } from "context";
import { useCallback, useContext } from "react";
import { useNavigate } from "react-router";

export const HeaderContainer: React.FC = () => {
  const { phoneNumber, updatePhoneNumber } =
    useContext(MainContext);
  const navigate = useNavigate();

  const logout = useCallback(
    (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      localStorage.removeItem("token");
      updatePhoneNumber("");
      navigate(PATH.DASHBOARD);
    },
    [navigate, updatePhoneNumber]
  );

  return <HeaderView phoneNumber={phoneNumber} logout={logout} />;
};
