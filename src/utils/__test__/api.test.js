import { getCurrent, getForecast } from "../api";
import { current, forecast } from "./api.mock";

global.fetch = jest
  .fn()
  .mockImplementationOnce((cb) =>
    Promise.resolve({
      json: () => Promise.resolve(current),
    })
  )
  .mockImplementationOnce((cb) =>
    Promise.resolve({
      json: () => Promise.resolve(forecast),
    })
  )
  .mockImplementationOnce((cb) =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          status: 503,
          message: "City not found",
        }),
    })
  );

beforeEach(() => {
  fetch.mockClear();
});

it("should return Cordoba current weather", async () => {
  const response = await getCurrent("cordoba");
  expect(response.city).toEqual("Córdoba");
  expect(response.weather).toBeDefined();
  expect(response.more).toBeDefined();
  expect(fetch).toHaveBeenCalledTimes(1);
});

it("should return Cordoba forecast for 5 days", async () => {
  const response = await getForecast("cordoba");
  expect(response).toHaveLength(5);
  expect(fetch).toHaveBeenCalledTimes(1);
});

it("should return city not found", async () => {
  const response = await getForecast("asdasdasd");
  expect(response.status).toEqual(503);
  expect(response.message).toEqual("City not found");
  expect(fetch).toHaveBeenCalledTimes(1);
});
