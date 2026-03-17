// import express from 'express'
// import { dbconect } from './DbConnection/db.user.js'
// import { userRouter } from './Router/user.router.js'
// import  dotenv from 'dotenv';
// import cors from "cors";


// dotenv.config()
// const app = express()
// app.use(cors())
// const port = process.env.PORT||3009
// app.use(express.json())
// app.use(cors());
// app.use('/users',userRouter)
// dbconect()
// app.get('/', (req, res) => res.send('Hello World!'))
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbconect } from './DbConnection/db.user.js';
import { userRouter } from './Router/user.router.js';

dotenv.config();
const app = express();

// أول حاجة middleware
app.use(express.json());

// ثم CORS
app.use(cors({
  origin: 'http://localhost:5173', // لازم تحدد ال origin اللي منه هتيجي الريكوست
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // لو هتستخدم كوكيز
}));

// بعدين الراوتر
app.use('/users', userRouter);

dbconect();

app.get('/', (req, res) => res.send('Hello World!'));

const port = process.env.PORT || 3009;
app.listen(port, () => console.log(`Server listening on port ${port}`));