import { Calendar, Download, Filter } from "lucide-react";
import ActionButton from "../../../components/common/ActionButton";
import SearchBar from "../../../components/common/SearchBar";
import TimesheetCard from "../components/TimesheetCard";
import { employees, stats } from "../../../data/timesheet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimesheetTable from "../components/TimesheetTable";
import { useMemo, useRef, useState } from "react";

const TimeManagement = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const datePickerRef = useRef<any>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) =>
      `${emp.name} ${emp.total} ${emp.regular} ${emp.overtime} ${emp.ot2} ${emp.holiday}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);


  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-2xl px-4 sm:px-6 py-4">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* <SearchBar placeholder="Search by Employee Name or Number" /> */}
        <SearchBar
          placeholder="Search by Employee Name"
          value={searchTerm}
          onChange={setSearchTerm}
        />

        <div className="flex flex-wrap gap-2">
          {/* <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-3xl text-sm text-gray-700">
            <Calendar size={16} className="text-gray-500" />
            <span>Nov 6, 2025 - Nov 6, 2025</span>
          </button> */}

          <button
            onClick={() => datePickerRef.current?.setOpen(true)}
            className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2.5 rounded-3xl text-sm text-gray-700"
          >
            <Calendar size={16} className="text-gray-500" />
            <span>
              {formatDate(startDate)} - {formatDate(endDate)}
            </span>
          </button>

          <DatePicker
            ref={datePickerRef}
            selected={startDate}
            onChange={(dates: any) => {
              const [start, end] = dates;
              setStartDate(start);
              setEndDate(end);
            }}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            shouldCloseOnSelect={false}
            className="hidden"
          />

          <ActionButton>
            <Filter size={16} />
          </ActionButton>

          <ActionButton>
            <Download size={16} />
          </ActionButton>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
        {stats.map((item) => (
          <TimesheetCard key={item.label} {...item} />
        ))}
      </div>

      <TimesheetTable data={filteredEmployees}/>

    </div>
  );
};

export default TimeManagement;
