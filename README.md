# Bike Accessories Shop

## Setup Instructions

### Database Setup
1. Make sure you have MySQL installed and running.
2. Open `server/.env` and update the `DB_PASSWORD` field with your MySQL root password.
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your password
   DB_NAME=bike_accessories
   ```
3. Initialize the database by running:
   ```bash
   cd server
   node init-db.js
   ```

### Running the Application

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
