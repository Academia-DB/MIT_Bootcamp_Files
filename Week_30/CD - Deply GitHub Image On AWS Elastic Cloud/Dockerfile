FROM node:8
# Create app director
COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build
COPY entrypoint.sh /entrypoint.sh
RUN ["chmod", "+x", "/entrypoint.sh"]
ENTRYPOINT ["/entrypoint.sh"]
EXPOSE 3000
CMD [ "npm", "start" ]