import { useCallback, useState } from "react";
import { debounce } from "lodash";

const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
const API_KEY = "e95240c42dmsh80181460e221699p1ec974jsn9c6f5fed78e4";

const GEO_API_OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

const fetchCities = async (query) => {
  try {
    const res = await fetch(
      `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${query}&units=metric`,
      GEO_API_OPTIONS
    );
    return await res.json();
  } catch (err) {
    console.log(err);
    return;
  }
};

const useFetchCountries = () => {
  const [citiesData, setCitiesData] = useState([]);

  const debouncedSearch = useCallback(
    debounce(
      (query) =>
        fetchCities(query).then((data) =>
          setCitiesData(
            data.data.map((res) => {
              return {
                city: res.city,
                country: res.country,
                latitude: res.latitude,
                longitude: res.longitude,
              };
            })
          )
        ),
      500
    ),
    []
  );

  const handleSearch = (query) => {
    debouncedSearch(query);
  };

  return { citiesData, handleSearch };
};

export default useFetchCountries;
