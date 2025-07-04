import express from 'express' 
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRoute from './route/user.route.js' 
import bookRoute from './route/book.route.js'
import cors from 'cors'

const app = express()
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 4000
const URI = process.env.MongoDBURI;

// connect to mongodb
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to MongoDB successfully");
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

// define routes

app.use('/book', bookRoute)
app.use('/user', userRoute)


app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})
