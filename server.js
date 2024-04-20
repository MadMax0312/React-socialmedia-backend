import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config()

const app = express();

app.use(express.json())
app.use(cors())

// mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

app.get('/', (req, res) => {
    res.send('Hello world')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
