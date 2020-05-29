const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
    title:String,
    body:String,
    date:{
        type:Date,
        default:Date.now
    }
})

const Blog = mongoose.model("blog",blogSchema);
module.exports = Blog;
