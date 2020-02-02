import path from "path";
import {
  Pact
} from "@pact-foundation/pact";
import {
  eachLike
} from "@pact-foundation/pact/dsl/matchers";

import {
  API
} from "./api";

const provider = new Pact({
  consumer: "frontend",
  provider: "backend",
  log: path.resolve(process.cwd(), "logs", "pact.log"),
  logLevel: "warn",
  dir: path.resolve(process.cwd(), "pacts"),
  spec: 2,
  cors: true,
  port: 8801
});

describe("API PACT tests", () => {
  beforeAll(() => {
    return provider.setup();
  });

  afterEach(async () => {
    await provider.verify();
  });

  afterAll(async () => {
    return provider.finalize();
  });


  it("should return true", () => {
    expect(true).toBe(true);
  });

  describe("get object", () => {
    it("should return empty list when no objects", async () => {
      await provider.addInteraction({
        state: "no objects",
        uponReceiving: "get objects",
        withRequest: {
          method: "GET",
          path: "/objects",
        },
        willRespondWith: {
          status: 200,
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: []
        }
      });

      const api = new API(provider.mockService.baseUrl);

      expect(await api.getObjects()).toStrictEqual([]);
    });

    it("should get list with objects", async () => {
      const object = {
        id: 1,
        name: "Object #1"
      };

      await provider.addInteraction({
        state: "have objects",
        uponReceiving: "get objects",
        withRequest: {
          method: "GET",
          path: "/objects",
        },
        willRespondWith: {
          status: 200,
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: eachLike(object)
        }
      });

      const api = new API(provider.mockService.baseUrl);

      expect(await api.getObjects()).toStrictEqual([object]);
    });
  });
});