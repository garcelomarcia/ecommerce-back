# Use the official Node.js 14 image as the base
FROM node:14

# Set environment variables for PostgreSQL connection
ENV DATABASE_URL=postgresql://myuser:mypassword@187.162.118.101:5432/ecommerce

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Expose the port for your Node.js application
EXPOSE 3000

# Run "npm run seed" and then "npm start"
CMD npm run seed && npm start
