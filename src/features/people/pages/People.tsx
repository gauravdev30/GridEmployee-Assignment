import {
  Download,
  Filter,
  Plus,
  Grid2x2,
  List,
  Network
} from "lucide-react";
import PeopleGrid from "../components/PeopleGrid";
import SearchBar from "../../../components/common/SearchBar";
import { useMemo, useState } from "react";
import ActionButton from "../../../components/common/ActionButton";
import { people } from "../../../data/people";


const People = () => {

  const [view, setView] = useState<"grid" | "list" | "network">("grid");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPeople = useMemo(() => {
    return people.filter((person) =>
      `${person.name} ${person.role} ${person.id}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);


  return (
    <div className="bg-white rounded-2xl px-4 sm:px-6 py-4">
      <div className="mb-6 rounded-2xl flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">

        <div className="w-full lg:w-96">
          {/* <SearchBar placeholder="Search by Employee Name or Number" /> */}
          <SearchBar
            placeholder="Search by Employee Name or Number"
            value={searchTerm}
            onChange={setSearchTerm}
          />

        </div>

        <div className="flex items-center gap-3 flex-wrap">

          <ActionButton>
            <Download size={16} />
          </ActionButton>

          <ActionButton>
            <Filter size={16} />
          </ActionButton>

          <ActionButton variant="primary">
            <Plus size={16} />
          </ActionButton>


          <div className="flex items-center bg-white border border-gray-200 rounded-xl p-1">

            <GroupButton
              active={view === "grid"}
              onClick={() => setView("grid")}
            >
              <Grid2x2 size={16} />
            </GroupButton>

            <GroupButton
              active={view === "list"}
              onClick={() => setView("list")}
            >
              <List size={16} />
            </GroupButton>

            <GroupButton
              active={view === "network"}
              onClick={() => setView("network")}
            >
              <Network size={16} />
            </GroupButton>

          </div>


        </div>
      </div>

      <PeopleGrid data={filteredPeople}/>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 text-sm text-gray-500 gap-2">
        <div>Rows per page: 100</div>
        <div>1–100 of 500</div>
      </div>
    </div>
  );
};

export default People;

type GroupButtonProps = {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
};

const GroupButton = ({ children, active, onClick }: GroupButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center
        w-9 h-9
        rounded-lg
        transition-all duration-200
        ${active
          ? "bg-primary text-white"
          : "text-gray-600 hover:bg-gray-100"}
      `}
    >
      {children}
    </button>
  );
};


