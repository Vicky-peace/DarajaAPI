import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//MONGOOSE CONNECTION
mongoose.set('strictQuery', true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log('Connected to MongoDB');
}).catch(err =>{
    console.log("Error when connecting to MongoDB", err);
});


app.get('/', (req,res) =>{
    res.send("Hello Welcome to My DarajaAPI");
})

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
});