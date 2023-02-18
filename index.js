import express from 'express';
import cors from 'cors';
//Router variables
import locationRouter from './routes/location'

//Module variables
const app = express();
app.use(cors())

//Routers
app.use("/location-api", locationRouter);


app.get('*', (req, res) => {
    res.status(400).send('Bad request')
})