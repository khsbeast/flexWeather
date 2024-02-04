import Sunrise from "../../assets/vitals/sunrise.svg";
import Humidity from "../../assets/vitals/humidity.svg";
import Wind from "../../assets/vitals/wind.svg";
import Pressure from "../../assets/vitals/pressure-low.svg";
import Sunset from "../../assets/vitals/sunset.svg";

export const vitalsData = [
  {
    id: 1,
    title: "Sunrise",
    icon: Sunrise,
    dataKey: "sunRise",
    unit: "",
  },
  {
    id: 2,
    title: "Humidity",
    icon: Humidity,
    dataKey: "humidity",
    unit: " mm",
  },
  {
    id: 3,
    title: "Wind",
    icon: Wind,
    dataKey: "wind",
    unit: " mph",
  },
  {
    id: 4,
    title: "Pressure",
    icon: Pressure,
    dataKey: "pressure",
    unit: " mb",
  },
  {
    id: 5,
    title: "Sunset",
    icon: Sunset,
    dataKey: "sunSet",
    unit: "",
  },
];
