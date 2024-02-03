import { isArray } from "lodash";

const dateConvertor = (UNIX_timestamp) => {
  const timeStamp = new Date(UNIX_timestamp * 1000);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = timeStamp.getFullYear();
  const month = months[timeStamp.getMonth()];
  const date = timeStamp.getDate();
  const dateAll = date + " " + month + " " + year;
  return dateAll;
};

const timeConverter = (UNIX_timestamp) => {
  const timeStamp = new Date(UNIX_timestamp * 1000);
  const hour =
    timeStamp.getHours().toString().length === 1
      ? "0" + timeStamp.getHours()
      : timeStamp.getHours();
  const min =
    timeStamp.getMinutes().toString().length === 1
      ? "0" + timeStamp.getMinutes()
      : timeStamp.getMinutes();
  const ampm = hour >= 12 ? "PM" : "AM";
  const time = hour + ":" + min + " " + ampm;
  return time;
};

const getDay = (UNIX_timestamp) => {
  const timeStamp = new Date(UNIX_timestamp * 1000);
  return timeStamp.getDay();
};

export const formatWeatherData = (data) => {
  let weatherObj = {};
  if (isArray(data.weather)) {
    weatherObj = {
      city: data.name,
      country: data.sys.country,
      weather: data.weather[0].main,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      pressure: data.main.pressure,
      minTemp: data.main.temp_min,
      maxTemp: data.main.temp_max,
      temp: data.main.temp,
      icon: data.weather[0].icon,
      sunSet: timeConverter(data.sys.sunset),
      sunRise: timeConverter(data.sys.sunrise),
      date: dateConvertor(data.dt),
      time: timeConverter(data.dt),
    };
  }
  return weatherObj;
};

export const formatForecastData = (data) => {
  let forecastData = [];
  if (isArray(data.list)) {
    console.log(data.list);
    forecastData = data.list
      .filter((data, index) => index < 7)
      .map((data) => {
        const foreData = {
          day: getDay(data.dt),
          weather: data.weather[0].main,
          icon: data.weather[0].icon,
          temp: data.main.temp,
        };
        return foreData;
      });
  }
  return forecastData;
};
