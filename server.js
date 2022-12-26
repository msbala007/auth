import express from "express";
import mongoose from "mongoose";

const app = express();
import router from "./Router/rounting.js";
app.use(express.json());

app.use("/", router);
// app.use("/v1/user",router)


const url = "mongodb://localhost:27017/";
mongoose
  .connect(url, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
  })
  .catch((err) => {
    console.error("errror🍔", err);
  })
  .then(() => {
    console.log("mon connted");
  });

  app.all("*",(req,res)=>{
    res.status(404).json({
        message:"something wrong"
    })
  })

const port = process.env.PORT || 9800;
app.listen(port, () => {
  console.log(`welcome ${port}`);
});
