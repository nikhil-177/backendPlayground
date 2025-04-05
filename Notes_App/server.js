import "dotenv/config";
import http from "http";
import app from "./app.js";
import { connectDB } from "./db/connectdb.js";

const PORT = process.env.PORT || 3000;

await connectDB();


http.createServer(app).listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
