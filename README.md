# MERN - Plaid
A web application (using the MERN stack) written to connect with Plaid and display transaction information.

## To run:
Server:
1. ``cd server``
2. ``npm i``
3. ``npm run start``

Client:
1. ``cd client``
2. ``npm i --legacy-peer-deps``
    * The legacy-peer-deps flag is currently needed for installing the Plaid Link bindings for React currently being used. These bindings are optional and are not required for a production environment.
2. ``npm run start``

The client is currently configured to proxy to localhost:5000 for calls to /api endpoints.
This should be replaced with a webserver proxy when used in production environments.
