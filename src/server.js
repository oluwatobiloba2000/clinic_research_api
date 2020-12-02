import express from 'express';
import cors from 'cors';
import {json, urlencoded}  from 'body-parser';
import AuthRoute from './routes/auth.routes';

const app = express();

app.use(json())
app.use(urlencoded({extended: true}))
app.use(cors())
app.use('/api/v1/', AuthRoute);


app.get('/', (req, res)=>{
     res.status(200).json({
         version: 1,
        status: 'success',
        code: 200,
        message: 'clinic research api'
    })
})

app.all('*', (req, res)=>{
     res.status(404).json({
        status: 'not found',
        code: 404,
        message: 'route not found'
    })
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`server is listening on port ${PORT}`)
})
