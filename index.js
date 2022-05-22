const express = require("express");
const mongo = require('./shared');
const dotenv = require("dotenv");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const pizzaRouter = require("./routes/pizza");


dotenv.config();
const app = express();

const PORT = process.env.PORT || 3001;
app.use(express.json());
mongo.connectMongoose();

app.use("/users",userRouter);
app.use("/admin",adminRouter);
app.use("/auth",authRouter);
app.use("/pizza",pizzaRouter);
   


app.use("/",(req,res,next)=>{
    res.send("Hi Rubesh")
})

app.listen(PORT,()=>{
    console.log("Port created successfully",PORT)
})

console.log("Rubesh")