import axios from "axios";

import {
  API
} from "./api";

jest.mock("axios");

let api;

describe("API tests", () => {
  beforeEach(() => {
    api = new API("http://localhost:9000");
  });

  it("should return true", () => {
    expect(true).toBe(true);
  });

  it("should return objects", async () => {
    const objects = [{
        id: 1,
        name: "Object #1"
      },
      {
        id: 2,
        name: "Object #2"
      }
    ];

    axios.get.mockImplementationOnce(() => Promise.resolve({
      data: objects
    }));

    const result = await api.getObjects();

    expect(result).toBe(objects);
  });

  it("should throw an error", async () => {
    const error = "Error";
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(error)));

    await expect(api.getObjects()).rejects.toThrow(error);
  });
});