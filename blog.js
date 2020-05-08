const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
    title:String,
    body:String,
    date:{
        type:Date,
        default:Date.now
    }
})

const Blog = mongoose.model("blog",blogSchema); //note it should not be 'new mongoose.mode()' because that would export a single instance
//of the model
module.exports = Blog;
