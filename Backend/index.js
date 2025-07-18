// import express from 'express' 
// import dotenv from 'dotenv'
// import mongoose from 'mongoose'
// import userRoute from './route/user.route.js' 
// import bookRoute from './route/book.route.js'
// import cors from 'cors'

// const app = express()
// app.use(cors());
// app.use(express.json());
// dotenv.config();

// const PORT = process.env.PORT || 4000
// const URI = process.env.MongoDBURI;

// // connect to mongodb
// try {
//     mongoose.connect(URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     });
//     console.log("Connected to MongoDB successfully");
// } catch (error) {
//   console.error("Error connecting to MongoDB:", error);
// }

// // define routes

// app.use('/book', bookRoute)
// app.use('/user', userRoute)


// app.listen(PORT, () => {
//   console.log(`server listening on port ${PORT}`)
// })

import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 4001;
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Update path to where the file now is (inside backend)
app.get("/book", (req, res) => {
  const filePath = path.join(__dirname, "list.json");
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading list.json:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
