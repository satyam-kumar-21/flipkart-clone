import mongoose from "mongoose";

const DataBaseConnection = async () => {
    // const DB_URL = 'mongodb+srv://satyamisha238:Satyam@2002@ecommers-flipkart.x1gosxr.mongodb.net/ecommers-flipkart';
    const DB_URL = "mongodb://localhost:27017/ecommerce_db";

    try {
       await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
       console.log(`Database connected successfully`);
    } catch (error) {
        console.log('Error while connecting to the database', error);
    }
}

export default DataBaseConnection;
