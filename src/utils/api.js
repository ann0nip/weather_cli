import moment from "moment";
const WEATHER_API_URL = "http://localhost:3000/api/v1";

function getCurrent(city = "") {
  try {
    return fetch(`${WEATHER_API_URL}/current/${city}`)
      .then((res) => res.json())
      .then((weather) => weather);
  } catch (error) {
    throw new Error("Error: " + error);
  }
}

function getForecast(city = "") {
  try {
    return fetch(`${WEATHER_API_URL}/forecast/${city}`)
      .then((res) => res.json())
      .then((res) => {
        let date = null;
        // Each day has data every 3 hours, so I filter just one per day.
        const forecast = res.list.filter((el) => {
          const day = moment(el.dt_txt).format("DD");
          if (day !== date) {
            date = day;
            return el;
          }
        });
        // I noticed openweathermap return 6 days forecast
        // because include the actual day. So, I just remove the first one.
        forecast.shift();
        return forecast;
      });
  } catch (error) {
    throw new Error("Error: " + error);
  }
}

export { getCurrent, getForecast };
