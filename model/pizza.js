const { string } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pizzaSchema = new Schema (
    {
        name:{
            type:String,
            required:true
        },
        count:{
            type:Number,
            required:true
        },
        extraCheese:{
            type:Boolean,
            required:true
        },
        veges:{
            type:Boolean,
            required:true
        }
    }
)

const Pizza = mongoose.model("pizza",pizzaSchema);
module.exports = Pizza;