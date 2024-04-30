import { CgSpinner } from "react-icons/cg";

export const Spin: React.FC = () => {
  return (
    <div className="animate-spin duration-[2s] ease-linear infinite">
      <CgSpinner color="pink" />
    </div>
  );
};
