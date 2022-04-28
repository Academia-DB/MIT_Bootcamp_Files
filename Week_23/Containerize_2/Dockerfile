FROM node:16-slim

# Step 1 - Add container working directory
WORKDIR /app
# Step 2 - Copy npm dependencies
COPY package*.json ./
# Step 3 - Install dependencies
RUN npm install
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 3000
CMD ["npm", "start"]