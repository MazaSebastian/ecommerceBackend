const express = require("express");

const app = express();

const mongoose = require ("mongoose");

const dotenv = require("dotenv");

const userRoute = require("./routes/users")

const authRoute = require("./routes/auth")


dotenv.config();

mongoose.connect(

    process.env.MONGO_URL

).then(()=>console.log("DB Connection Succesfull")).catch((err)=>{console.log(err)});

app.listen(process.env.PORT || 8080, ()=>{
    console.log("Backend server is running!")
});

app.get("/api/test", ()=>{
    console.log("test success")
});

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.use(express.json());





