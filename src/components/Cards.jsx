import { useEffect, useState } from "react";
import { CardsItem } from "./CardsItem";

const Cards = () => {
  const [pockemon, setPockemon] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [loading, setLoading] = useState(true);

  const pockemonApi = "https://pokeapi.co/api/v2/pokemon?limit=250";

  const getDatafromApi = async () => {
    try {
      const apiData = await fetch(pockemonApi); // Fetch the API
      const dataApi = await apiData.json(); // Parse the response to JSON
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
      console.error("Error fetching data:", error); // Handle potential errors
      setLoading(false);
    }
  };

  // console.log(pockemon);

  // serach functionality

  let filterData = pockemon.filter((value) =>
    value.name.toLowerCase().includes(inputVal.toLowerCase())
  );

  useEffect(() => {
    getDatafromApi();
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="w-[100%] flex items-start justify-center bg-[#f0f3ff]">
      <div>
        <div className="w-full flex justify-start items-center flex-col gap-3">
          <h1 className="text-2xl font-semibold">Lets Catch Pokemon</h1>
          <input
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            type="text"
            placeholder="Search pokemon"
            className="px-2 py-0.5 focus:outline-none border-b-2 border-b-blue-800"
          />
        </div>
        <ul className="flex flex-wrap items-start justify-center">
          {filterData.map((val) => {
            console.log(val);
            return <CardsItem key={val.id} value={val} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Cards;
