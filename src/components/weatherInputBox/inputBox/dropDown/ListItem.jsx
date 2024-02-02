const ListItem = ({ data }) => {
  return (
    <div
      data-latitude={data.latitude}
      data-longitude={data.longitude}
      data-value={data.city + ", " + data.country}
    >
      {" "}
      {data.city}, {data.country}{" "}
    </div>
  );
};

export default ListItem;
