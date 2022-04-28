FROM node:16-slim

WORKDIR /client

# copy code, install npm dependencies
COPY src/index.js index.js
COPY package.json package.json
RUN npm install

# Copy app source code

COPY . .

#Expose port and start the application

EXPOSE 3000

CMD ["npm", "start"] 