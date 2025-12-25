# Bike Accessories Shop using MySQL

## Setup Instructions

### Quick Start with Docker (Recommended)
You can run the entire application without installing Node.js or MySQL locally.

1.  **Prerequisites**: Install [Docker Desktop](https://www.docker.com/products/docker-desktop).
2.  **Run**:
    ```bash
    docker-compose up --build
    ```
3.  **Access**:
    -   Frontend: [http://localhost](http://localhost)
    -   Backend API: [http://localhost:5000](http://localhost:5000)

### Manual Setup (Without Docker)

#### Database Setup
1. Make sure you have MySQL installed and running.
2. Open `server/.env` and update the `DB_PASSWORD` field with your MySQL root password.
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=bike_accessories
   ```
3. Initialize the database by running:
   ```bash
   cd server
   node init-db.js
   ```

#### Running the Application

1. **Server**:
   ```bash
   cd server
   npm start
   # or for development
   npx nodemon server.js
   ```

2. **Client**:
   ```bash
   cd client
   npm run dev
   ```

## Features
- Browse products
- View product details
- Responsive design

[![CI/CD Pipeline](https://github.com/VinyasCS-007/Bike-Accessories-/actions/workflows/main.yml/badge.svg)](https://github.com/VinyasCS-007/Bike-Accessories-/actions/workflows/main.yml)
