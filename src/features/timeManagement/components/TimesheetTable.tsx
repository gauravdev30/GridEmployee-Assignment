import { ChevronLeft, ChevronRight, ArrowUpDown, ArrowUpNarrowWide } from "lucide-react";

type Employee = {
    name: string;
    avatar: string;
    total: string;
    regular: string;
    overtime: string;
    ot2: string;
    holiday: string;
};

type Props = {
    data: Employee[];
};


const TimesheetTable = ({ data }: Props) => {

    return (
        <div className="mt-6 bg-white rounded-2xl border border-gray-200 p-4">

            <div className="overflow-x-auto">
                <table className="min-w-full text-sm">

                    <thead>
                        <tr className="bg-gray-50 border border-gray-200 text-gray-600">
                            {["Employee", "Total", "Regular", "Overtime", "OT2", "Holiday"].map(
                                (heading) => (
                                    <th
                                        key={heading}
                                        className="px-4 py-3 text-left font-medium"
                                    >
                                        <div className="flex items-center gap-2">
                                            {heading}

                                            {heading === "Total" || heading === "Regular" ? (
                                                <ArrowUpNarrowWide
                                                    size={14}
                                                    className="text-[#947550]"
                                                />
                                            ) : (
                                                <ArrowUpDown
                                                    size={14}
                                                    className="text-[#947550]"
                                                />
                                            )}
                                        </div>
                                    </th>
                                )
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {data.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="text-center py-10 text-gray-500">
                                    No employees found. Try adjusting your search.
                                </td>
                            </tr>
                        ) : (
                            data.map((emp, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-gray-300 last:border-0 hover:bg-gray-50 transition"
                                >
                                    <td className="px-4 py-3 flex items-center gap-3 font-medium text-gray-900">
                                        <img
                                            src={emp.avatar}
                                            alt={emp.name}
                                            className="w-8 h-8 rounded-full object-cover"
                                        />
                                        {emp.name}
                                    </td>
                                    <td className="px-4 py-3">{emp.total}</td>
                                    <td className="px-4 py-3">{emp.regular}</td>
                                    <td className="px-4 py-3">{emp.overtime}</td>
                                    <td className="px-4 py-3">{emp.ot2}</td>
                                    <td className="px-4 py-3">{emp.holiday}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 gap-4 text-sm text-gray-600">

                <div className="flex items-center gap-2">
                    Rows per page:
                    <select className="border border-gray-200 rounded-lg px-2 py-1 bg-white">
                        <option>100</option>
                        <option>50</option>
                        <option>25</option>
                    </select>
                </div>

                <div className="flex items-center gap-4">
                    <span>1-100 of 500</span>

                    <div className="flex items-center gap-2">
                        <button className="p-2 rounded-lg hover:bg-gray-100">
                            <ChevronLeft size={16} />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-gray-100">
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TimesheetTable;
