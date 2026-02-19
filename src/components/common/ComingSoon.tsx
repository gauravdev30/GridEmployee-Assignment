import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
};

const ComingSoon = ({ title }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-full text-center py-20">
      <h1 className="text-3xl font-semibold mb-4">{title}</h1>
      <p className="text-gray-500 mb-6">
        This page is under development.
      </p>

      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 rounded-lg bg-primary text-white hover:opacity-90 transition"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ComingSoon;
