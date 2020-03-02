const { Verifier } = require("@pact-foundation/pact");
const path = require("path");

const server = require("./index");
const controller = require("./controllers/cars.controller");

describe("Pact Verification", () => {
  it("validates the expectations of backend", () => {
    const opts = {
      logLevel: "INFO",
      providerBaseUrl: "http://localhost:8080",
      provider: "backend",
      providerVersion: "1.0.0",
      pactUrls: [path.resolve(__dirname, "./pacts/frontend-backend.json")],
      stateHandlers: {
        "have cars": () => {
          controller.dataRepository.data = [
            {
              id: 3,
              name: "Car 3"
            }
          ];
        },
        "no cars": () => {
          controller.dataRepository.data = [];
        }
      }
    };

    return new Verifier(opts).verifyProvider().finally(() => {
      server.close();
    });
  });
});
