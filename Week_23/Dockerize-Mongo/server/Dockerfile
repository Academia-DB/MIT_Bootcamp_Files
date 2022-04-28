FROM node:slim

WORKDIR /server

# copy code, install npm dependencies
COPY server.js /server/server.js
COPY package.json /server/package.json
RUN npm install

# Copy app source code

COPY . .

#Expose port and start the application

EXPOSE 8080

CMD ["npm", "start"] 