import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express"
//first approach
// function connectDB(){}

// connectDB()

// 2nd approach

/*first approach
;( async () => {
    try{
        await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME}')
        application.on("error", (error) => {
            console.log("ERROR", error);
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log('app is listening on port ${process.env.PORT}');
        })
    }
    catch(error){
        console.error("ERROR: ", error)
        throw error

    }
}) ()
    */