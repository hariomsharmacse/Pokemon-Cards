// import React from "react";

export const CardsItem = ({ value }) => {
  return (
    <li className="shadow-lg bg-white rounded-xl max-w-xs w-[18rem] h-[19.5rem] transform transition duration-500 hover:shadow-2xl overflow-hidden m-2">
      {/* Image Section */}
      <div className="flex items-center justify-center mb-3 p-2">
        <div className="flex items-center justify-center inset-0 bg-gradient-to-tr from-green-400 via-green-300 to-green-200 rounded-full shadow-md transform transition duration-500 hover:scale-110">
          <img
            src={value.sprites.other.dream_world.front_default}
            alt={value.name}
            className="w-20 h-20 object-contain"
          />
        </div>
      </div>

      {/* Name */}
      <p className="text-center text-2xl font-extrabold text-gray-900 tracking-wide mb-0.5">
        {value.name}
      </p>

      {/* Type Badge */}
      <div className="flex items-center justify-center mb-4 relative z-10">
        <span className="bg-gradient-to-r from-green-500 to-green-700 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md">
          {value.types.map((val) => val.type.name).join(", ")}
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 text-center text-gray-800 font-medium px-0.5 mt-11">
        <div className="mb-3">
          <p className="text-xs font-bold">{value.height}</p>
          <p className="text-[0.60rem] uppercase tracking-wide">Height</p>
        </div>
        <div className="mb-3">
          <p className="text-xs font-bold">{value.weight}</p>
          <p className="text-[0.60rem] uppercase tracking-wide">Weight</p>
        </div>
        <div className="mb-3">
          <p className="text-xs font-bold">{value.stats[5].base_stat}</p>
          <p className="text-[0.60rem] uppercase tracking-wide">Speed</p>
        </div>
        <div>
          <p className="text-xs font-bold">{value.base_experience}</p>
          <p className="text-[0.60rem] uppercase tracking-wide">Experience</p>
        </div>
        <div>
          <p className="text-xs font-bold">{value.stats[1].base_stat}</p>
          <p className="text-[0.60rem] uppercase tracking-wide">Attack</p>
        </div>
        <div>
          <p className="text-xs font-bold">
            {value.abilities
              .map((ability) => ability.ability.name)
              .slice(0, 1)
              .join(", ")}
          </p>
          <p className="text-[0.60rem] uppercase tracking-wide">Abilities</p>
        </div>
      </div>
    </li>
  );
};
