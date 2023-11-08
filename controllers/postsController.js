const Post = require('../models/postsModel')


exports.createPost = async(req,res) =>{
    try
    {

        const {title,body} = req.body;
    
        const savedPost = new Post({
            title,body
        })
        const post =await savedPost.save()
        res.json({
            posts:post
        })
    }
    catch(err)
    {
        res.status(400).json({err:`Error is ${err}`})
    }
}

exports.getAllPosts = async(req,res) =>{
    try{
        const posts = await Post.find().populate('likes').populate('comments').exec();
        res.json({
            posts:posts
        })
    }
    catch(err)
    {
        res.status(400).json({err:`error is ${err}`})
    }
}