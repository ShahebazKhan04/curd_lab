import mongoose from 'mongoose';
const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGOURL + process.env.DBNAME)
        // mongoose.connect('localhost:27017/curd')
        console.log('connected to DB')
    } 
    catch (error) {
        console.log(`error while connecting to DB`, error.message);
    }
}

export default connectDb;