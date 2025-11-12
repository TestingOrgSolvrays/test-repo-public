# Use Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy backend source code
COPY . .

# Expose port
EXPOSE 5000

# Start the server
CMD ["node", "index.js"]