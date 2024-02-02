import useFetchCountries from "../../hooks/useFetchCountries";

const WeatherInputBox = () => {
  const { citiesData, handleSearch } = useFetchCountries();
  console.log(citiesData);
  return (
    <div>
      {" "}
      <input type="text" onChange={(e) => handleSearch(e.target.value)} />
      {citiesData.map((data, index) => (
        <div key={index}>
          {" "}
          {data.city}, {data.country}{" "}
        </div>
      ))}
    </div>
  );
};

export default WeatherInputBox;
