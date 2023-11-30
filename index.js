import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'; // Use import for cors module

import usersRoutes from './routes/users.js';

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3030;

const URL = 'mongodb+srv://3409tech:CyDg1YKdTVQbPB8a@cluster0.wy19yfp.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`Server running on port: http://localhost:${PORT}`);
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    });

app.use(bodyParser.json());

app.use("/", usersRoutes);
// app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) => res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
});
