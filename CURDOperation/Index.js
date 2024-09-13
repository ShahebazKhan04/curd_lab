import express from 'express';;
const app = express();
import dotenv from 'dotenv';
import connectDb from './DB/connectDB.js';
import userRouter from './Routes/userRoute.js';
dotenv.config();
connectDb()
app.use(express.json())

app.use('/api/user', userRouter)


app.listen(process.env.PORT, () => {
    console.log(`server started at port ${process.env.PORT}`)
})