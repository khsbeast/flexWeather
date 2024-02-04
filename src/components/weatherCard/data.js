import Sunrise from "../../assets/vitals/sunrise.svg";
import Humidity from "../../assets/vitals/humidity.svg";
import Wind from "../../assets/vitals/wind.svg";
import Pressure from "../../assets/vitals/pressure-low.svg";
import Sunset from "../../assets/vitals/sunset.svg";
import Icon01d from "../../assets/weatherIcons/01d.svg";
import Icon01n from "../../assets/weatherIcons/01n.svg";
import Icon02d from "../../assets/weatherIcons/02d.svg";
import Icon02n from "../../assets/weatherIcons/02n.svg";
import Icon03d from "../../assets/weatherIcons/03d.svg";
import Icon03n from "../../assets/weatherIcons/03n.svg";
import Icon04d from "../../assets/weatherIcons/04d.svg";
import Icon04n from "../../assets/weatherIcons/04n.svg";
import Icon09d from "../../assets/weatherIcons/09d.svg";
import Icon09n from "../../assets/weatherIcons/09n.svg";
import Icon10d from "../../assets/weatherIcons/10d.svg";
import Icon10n from "../../assets/weatherIcons/10n.svg";
import Icon11d from "../../assets/weatherIcons/11d.svg";
import Icon11n from "../../assets/weatherIcons/11n.svg";
import Icon13d from "../../assets/weatherIcons/13d.svg";
import Icon13n from "../../assets/weatherIcons/13n.svg";
import Icon50d from "../../assets/weatherIcons/50d.svg";
import Icon50n from "../../assets/weatherIcons/50n.svg";


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

export const weatherIcons = {
    "01d": Icon01d,
    "01n": Icon01n,
    "02d": Icon02d,
    "02n": Icon02n,
    "03d": Icon03d,
    "03n": Icon03n,
    "04d": Icon04d,
    "04n": Icon04n,
    "09d": Icon09d,
    "09n": Icon09n,
    "10d": Icon10d,
    "10n": Icon10n,
    "11d": Icon11d,
    "11n": Icon11n,
    "13d": Icon13d,
    "13n": Icon13n,
    "50d": Icon50d,
    "50n": Icon50n,
    }
