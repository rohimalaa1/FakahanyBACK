import express from 'express'
import { dbconect } from './DbConnection/db.user.js'
import { userRouter } from './Router/user.router.js'
import cors from "cors";
import  dotenv from 'dotenv';
dotenv.config()
const app = express()
const port = process.env.PORT||3009
app.use(express.json())
app.use(cors());
app.use('/users',userRouter)
dbconect()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))