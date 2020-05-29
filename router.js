const router = require('express').Router();
const mongoose = require('mongoose');
const Blog = require('./blog');
mongoose.connect('mongodb://localhost/blogdb',{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false})
    .then(()=>console.log("Connected to DB"))
    .catch((err)=>console.log(err))
    

//get all blogs
router.get("/",async(req,res)=>{
    try{
        let blogs = await Blog.find({})
        return res.send(JSON.stringify(blogs))
    }
    catch(ex) {console.log(ex.message)}
})


//get specific blog
router.get("/blog/:id", async (req,res)=>{
    try{
        let result = await Blog.findById(req.params.id)
        return res.status(200).send(result);
    }
    catch(ex){
        console.log(ex.message);
        return res.send(ex.message);
    }
})


//make new blog
router.post("/blog/new",(req,res)=>{
    new Blog(req.body[0]).save()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err));
})

//edit a blog
router.put("/blog/:id",(req,res)=>{
    Blog.updateOne({_id:req.params.id},req.body[0])
        .then(result => res.status(200).send(result))
        .catch(err => res.status(500).send(err.message))
})


//delete a blog
router.delete("/blog/:id",async (req,res)=>{
    try{
        let result = await Blog.deleteOne({_id:req.params.id})
        res.status(200).send(result);
    }
    catch(ex){
        res.status(500).send(ex.message)
    }
})

module.exports = router;