

import mongoose, { Schema } from "mongoose";
const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
        type:String,
        set:(v)=> v==="" ? "default link" : v,
    },
    price:Number,
    location:String,
    country:String,
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Review"
        }
    ]
})
export const Listing=mongoose.model("Listing",listingSchema);