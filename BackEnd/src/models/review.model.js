const mongoose=require("mongoose");
const { create } = require("./listings");
const Schema=mongoose.Schema;

const reviewSchema=new Schema({
    comment : {
        type:String
    },
    rating:{
        type:Number,
        min:1,
        max:5
    },
    createAt:{
        type:Date,
        default:Date.now()
    }
});
export const Listing =mongoose.model("Review",reviewSchema);