// import dotenv from 'dotenv';
// dotenv.config({ path: './env' });
// $node -r dotenv/config --experimental-json-modules src/index.js
import connectDB from "./db/index.js";
import app from "./app.js";


connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000);
  console.log(`Server is running at PORT: ${process.env.PORT}`);
})
.catch((error) => {
  console.log('MongoDB connection failed! ', error);
});