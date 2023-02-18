import express from 'express';
import cors from 'cors';
import { PORT } from './config/config.js';

//Router variables
import locationRouter from './routes/location/index.js'

//Module variables
const app = express();

//cors settings
app.use(cors())

//Routers
app.use("/location-api", locationRouter);

//in case of bad requests
app.get('*', (req, res) => {
    res.status(400).send('Bad request')
})

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})