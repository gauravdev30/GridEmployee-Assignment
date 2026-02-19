// import { people } from "../../../data/people";
// import PeopleCard from "./PeopleCard";

import type { people } from "../../../data/people";
import PeopleCard from "./PeopleCard";

// const PeopleGrid = () => {
//   return (
//     <div className="
//       grid 
//       grid-cols-1
//       sm:grid-cols-2
//       lg:grid-cols-3
//       xl:grid-cols-4
//       gap-6
//     ">
//       {people.map((person) => (
//         <PeopleCard
//           key={person.id}
//           name={person.name}
//           role={person.role}
//           image={person.image}
//         />
//       ))}
//     </div>
//   );
// };

// export default PeopleGrid;


type Props = {
  data: typeof people;
};

const PeopleGrid = ({ data }: Props) => {
  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h3 className="text-lg font-medium text-gray-700">
          No employees found
        </h3>
        <p className="text-sm text-gray-500 mt-2">
          Try adjusting your search keyword.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        grid 
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-6
      "
    >
      {data.map((person) => (
        <PeopleCard
          key={person.id}
          name={person.name}
          role={person.role}
          image={person.image}
        />
      ))}
    </div>
  );
};

export default PeopleGrid;
