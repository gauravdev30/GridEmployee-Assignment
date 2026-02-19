import React from "react";

interface TimesheetCardProps {
  label: string;
  value: number;
  icon: React.ElementType;
  bg: string;
  iconColor: string;
}

const TimesheetCard = ({
  label,
  value,
  icon: Icon,
  bg,
  iconColor,
}: TimesheetCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition">
        
      <div className={`w-10 h-10 flex items-center justify-center rounded-xl ${bg}`}>
        <Icon size={18} className={iconColor} />
      </div>

      <p className="text-sm text-gray-500 mt-3">{label}</p>
      <p className="text-xl font-semibold text-gray-900 mt-1">{value}</p>
    </div>
  );
};

export default TimesheetCard;
