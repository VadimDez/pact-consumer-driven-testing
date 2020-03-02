import axios from "axios";

import { API } from "./api";

jest.mock("axios");

let api;

describe("API tests", () => {
  beforeEach(() => {
    api = new API("http://localhost:9000");
  });

  it("should return true", () => {
    expect(true).toBe(true);
  });

  it("should return cars", async () => {
    const cars = [
      {
        id: 1,
        name: "Car #1"
      },
      {
        id: 2,
        name: "Car #2"
      }
    ];

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: cars
      })
    );

    const result = await api.getCars();

    expect(result).toBe(cars);
  });

  it("should throw an error", async () => {
    const error = "Error";
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(error)));

    await expect(api.getCars()).rejects.toThrow(error);
  });
});
