import { IOption } from "types";

interface SelectProps {
  options: IOption[];
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  handleChange,
  value,
}) => {
  return (
    <select
      className="p-2 rounded-md bg-gray-200 mobile:w-full"
      onChange={handleChange}
      value={value}
    >
      {options.map((option, index) => (
        <option value={option.value} key={index}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
