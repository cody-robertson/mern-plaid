# MERN - Plaid
A web application (using the MERN stack) written to connect with Plaid and display transaction information.

## To run:
This project utilizes Docker and docker-compose for easier development and deployment.

* To run this project for development, execute:
`docker-compose -f docker-compose.yml -f docker-compose.dev.yml up`

* To run this project for production, execute:
`docker-compose -f docker-compose.yml -f docker-compose.prod.yml up`

The dev site can then be reached at http://localhost or https://mysite.com by adding the URL to your machine's /etc/hosts file.

## To stop:
Either configuration can be stopped by using CTRL+C in the attached terminal session or by running the same command but replacing `up` with `down`

## Configuration:
Environment variables and SSL certificates will need to be replaced in the docker-compose.*.yml files.
- PLAID_CLIENT_ID
- PLAID_SECRET
- PLAID_ENVIRONMENT
- PUBLIC_URL


