type PeopleCardProps = {
  name: string;
  role: string;
  image: string;
};

const PeopleCard = ({ name, role, image }: PeopleCardProps) => {
  const imgSrc = new URL(
    `../../../assets/images/${image}`,
    import.meta.url
  ).href;

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 text-center hover:shadow-md transition duration-200">

      <div className="w-28 h-28 mx-auto mb-4">
        <img
          src={imgSrc}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="font-semibold text-base text-gray-800">
        {name}
      </h3>

      <p className="text-sm text-gray-500 mb-3">
        {role}
      </p>

      <div className="flex justify-center gap-2">
        <span className="w-3 h-3 bg-yellow-400 rounded-full" />
        <span className="w-3 h-3 bg-green-400 rounded-full" />
        <span className="w-3 h-3 bg-blue-400 rounded-full" />
        <span className="w-3 h-3 bg-orange-400 rounded-full" />
      </div>
    </div>
  );
};

export default PeopleCard;
