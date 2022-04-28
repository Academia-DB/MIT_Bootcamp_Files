FROM node:16-slim

WORKDIR /server

# copy code, install npm dependencies
COPY server.js server.js
COPY package.json package.json
RUN npm install

# Copy app source code

COPY . .

#Expose port and start the application

EXPOSE 8080

CMD ["npm", "start"] 