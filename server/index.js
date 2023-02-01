import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors( ));

/* {
    origin: 'http://localhost:5000', //5000?
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
} */
app.use('/posts',postRoutes);

/* app.get('/', (req, res) =>{
    res.send('welcome to Projects API')
}); */


//const CONNECTION_URL = 'mongodb+srv://lucy2323:test123@lucycluster.xlcjd8v.mongodb.net/?retryWrites=true&w=majority'
const PORT =process.env.PORT || 8000; //5000
mongoose.set('strictQuery',false);
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>app.listen(PORT, ()=> console.log(`Server is running on PORT--${PORT}`)))
    .catch((error)=>console.log(error.message));

//mongoose.set('useFindAndUpdate', false);




