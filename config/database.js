import mongoose from "mongoose";

let connected = false;

const connectDB=async ()=>{
  mongoose.set('strictQuery', 'true')

// if database is already connected then don't connect again
if(connected){
  console.log('Mongodb is  connected ')
  return;
}

//connect to MongoDB

try {
  await mongoose.connect(process.env.MONGODB_URI);
  connected=true;
} catch (error) {
  console.log(error)
}
};

export default connectDB;