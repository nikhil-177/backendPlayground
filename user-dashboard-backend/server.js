import 'dotenv/config';
import http from 'http';
import app from './app.js';
import { connectDB } from './db/dbconnection.js';


const PORT = process.env.PORT || 3000;

// db connection
await connectDB();

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
