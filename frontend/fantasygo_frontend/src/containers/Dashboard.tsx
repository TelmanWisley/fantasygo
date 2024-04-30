import { DashboardView } from "components/views";
import { MainContext } from "context";
import { useContext } from "react";

export const DashboardContainer: React.FC = () => {
  const { phoneNumber } = useContext(MainContext);
  return <DashboardView phoneNumber={phoneNumber} />;
};
