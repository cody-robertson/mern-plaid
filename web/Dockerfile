FROM node:15-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Don't install dev packages in production
RUN if [ "$NODE_ENV" = "production" ]; \
        then npm ci --only=production; \
        else npm i; \
        fi

# Bundle app source
COPY . ./

ENV PORT 3000
EXPOSE $PORT
CMD [ "npm", "run", "start" ]
