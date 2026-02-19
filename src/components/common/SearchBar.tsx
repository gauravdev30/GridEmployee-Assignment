// type Props = {
//   placeholder?: string;
//   className?: string;
// };

// const SearchBar = ({ placeholder, className }: Props) => {
//   return (
//     <input
//       type="text"
//       placeholder={placeholder || "Search by Employee Name or Number"}
//       className={`
//         w-full sm:w-96
//         px-4 py-2
//         bg-white
//         rounded-full
//         border border-gray-200
//         focus:outline-none
//         focus:ring-2
//         focus:ring-primary
//         ${className || ""}
//       `}
//     />
//   );
// };

// export default SearchBar;


type Props = {
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
};

const SearchBar = ({ placeholder, className, value, onChange }: Props) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder || "Search by Employee Name or Number"}
      className={`
        w-full sm:w-96
        px-4 py-2
        bg-white
        rounded-full
        border border-gray-200
        focus:outline-none
        focus:ring-2
        focus:ring-primary
        ${className || ""}
      `}
    />
  );
};

export default SearchBar;
