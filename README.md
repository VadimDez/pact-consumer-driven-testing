# Pact showcase

Simple project to showcase Pact testing

## Test

Both `frontend` and `backend` have `npm test` commands to test each service separately.

## Contract

By running `npm test` in the `frontend` folder - will generate a contract for the provider (`backend`). The contract is then located in [frontend/pacts/frontend-backend.json](frontend/pacts/frontend-backend.json)

To test `backend` against new contract:
1. copy newly generated contract to [backend/pacts/frontend-backend.json](backend/pacts/frontend-backend.json)
1. run `npm test` inside `backend` folder
