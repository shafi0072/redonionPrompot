const mongoose = require('mongoose');
const PostSchama = mongoose.Schema({
    title:String,
    description: String,
    price:Number,
    category:{
        type:String,
        enum:["dinner","lunch","breakfast"]
    },
    file:String,
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = PostSchama