import express from "express"
const app = express()
const port = 3001
import userRoutes from "./routes/user.js";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./conectdb.js"
connectDB()
app.use(cors());
app.use(bodyParser.json());
app.use("/user", userRoutes);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})