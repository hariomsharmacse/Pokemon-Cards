import { useEffect, useState } from "react";
import { CardsItem } from "./CardsItem";

const Cards = () => {
  const [pockemon, setPockemon] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [loading, setLoading] = useState(true);

  const pockemonApi = "https://pokeapi.co/api/v2/pokemon?limit=200";

  const getDatafromApi = async () => {
    try {
      const apiData = await fetch(pockemonApi);
      const dataApi = await apiData.json();
      const pockemonData = dataApi.results;
      const finData = pockemonData.map(async (val) => {
        const dataofApi = await fetch(val.url);
        const arrDataApi = await dataofApi.json();
        return arrDataApi;
      });
      const detailedResponses = await Promise.all(finData);
      setPockemon(detailedResponses);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const filterData = pockemon.filter((value) =>
    value.name.toLowerCase().includes(inputVal.toLowerCase())
  );

  useEffect(() => {
    getDatafromApi();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-100">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 tracking-wide mb-1">
          Pokémon Finder
        </h1>
        <p className="text-sm text-gray-600">
          Search and explore Pokémon stats.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          type="text"
          placeholder="Search Pokémon..."
          className="w-full max-w-md px-4 py-2 border border-blue-400 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-300 text-gray-700 text-sm"
        />
      </div>

      {/* Cards Grid */}
      <div className="flex items-center justify-center">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center w-[95%] max-w-screen-xl mx-auto">
          {filterData.map((val) => (
            <CardsItem key={val.id} value={val} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cards;
