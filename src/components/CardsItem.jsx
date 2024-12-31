export const CardsItem = ({ value }) => {
  return (
    <li className="relative bg-gradient-to-br from-blue-100 via-white to-gray-50 rounded-2xl max-w-[17.5rem] w-[17.5rem] h-[18rem] shadow-md transition-all duration-500 hover:shadow-lg overflow-hidden p-1">
      {/* Decorative Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-500 opacity-10 blur-xl"></div>

      {/* Image Section */}
      <div className="flex items-center justify-center mb-2">
        <div className="relative w-24 h-24 bg-gradient-to-r mt-1 from-indigo-400 via-purple-400 to-pink-400 rounded-full shadow-md flex items-center justify-center transform transition-all duration-500 hover:scale-105">
          <div className="absolute inset-0 bg-white/20 rounded-full blur-lg"></div>
          <img
            src={value.sprites.other.dream_world.front_default}
            alt={value.name}
            className="relative w-24 h-24 object-contain z-10"
          />
        </div>
      </div>

      {/* Name */}
      <p className="text-center text-lg font-bold text-gray-800 tracking-wider mb-0.5 capitalize">
        {value.name}
      </p>

      {/* Type Badge */}
      <div className="flex items-center justify-center mb-10">
        <span className="bg-gradient-to-r from-purple-500 to-indigo-700 text-white px-2 py-0.5 rounded-md text-sm font-semibold shadow">
          {value.types.map((val) => val.type.name).join(", ")}
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 text-center text-gray-700 font-medium gap-y-2 text-xs">
        <div>
          <p className="font-bold">{value.height}</p>
          <p className="text-[10px] text-gray-500">Height</p>
        </div>
        <div>
          <p className="font-bold">{value.weight}</p>
          <p className="text-[10px] text-gray-500">Weight</p>
        </div>
        <div>
          <p className="font-bold">{value.stats[5].base_stat}</p>
          <p className="text-[10px] text-gray-500">Speed</p>
        </div>
        <div>
          <p className="font-bold">{value.base_experience}</p>
          <p className="text-[10px] text-gray-500">Experience</p>
        </div>
        <div>
          <p className="font-bold">{value.stats[1].base_stat}</p>
          <p className="text-[10px] text-gray-500">Attack</p>
        </div>
        <div>
          <p className="font-bold">
            {value.abilities
              .map((ability) => ability.ability.name)
              .slice(0, 1)
              .join(", ")}
          </p>
          <p className="text-[10px] text-gray-500">Abilities</p>
        </div>
      </div>
    </li>
  );
};
