import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';


const app = express();
app.use('/posts',postRoutes);

app.use(bodyParser.json({limit: "60mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "60mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://lucy2323:test123@lucycluster.xlcjd8v.mongodb.net/?retryWrites=true&w=majority'
const PORT =process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>app.listen(PORT, ()=> console.log(`Server is running on PORT--${PORT}`)))
    .catch((error)=>console.log(error.message));

//mongoose.set('useFindAndModify', false);



