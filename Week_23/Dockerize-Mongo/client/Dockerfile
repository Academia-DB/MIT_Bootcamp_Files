FROM node:slim

WORKDIR /client

# copy code, install npm dependencies
COPY index.js /client/src/index.js
COPY package.json /client/package.json
RUN npm install

# Copy app source code

COPY . .

#Expose port and start the application

EXPOSE 3000

CMD ["npm", "start"] 