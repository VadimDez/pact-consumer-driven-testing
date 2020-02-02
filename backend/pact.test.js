  const {
    Verifier
  } = require('@pact-foundation/pact');
  const path = require('path');

  const server = require('./index');
  const objectsController = require('./controllers/objects.controller');

  describe("Pact Verification", () => {
    it("validates the expectations of backend", () => {
      const opts = {
        logLevel: "INFO",
        providerBaseUrl: "http://localhost:8080",
        provider: "backend",
        providerVersion: "1.0.0",
        pactUrls: [
          path.resolve(__dirname, './pacts/frontend-backend.json')
        ],
        stateHandlers: {
          "have objects": () => {
            objectsController.dataRepository.data = [{
              id: 3,
              name: "Object 3"
            }];
          },
          "no objects": () => {
            objectsController.dataRepository.data = [];
          }
        }
      };

      return new Verifier(opts).verifyProvider().finally(() => {
        server.close();
      });
    })
  });