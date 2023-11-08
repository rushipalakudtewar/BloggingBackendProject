const Like = require("../models/likesModel");
const Post = require('../models/postsModel')
exports.dummylink = (req,res)=>{
    res.send("ghgjgikkiu ");
}

exports.likePost = async(req,res) =>{
    try
    {

        const {post,user} = req.body;
    
        const liked = new Like({
            post,user
        })
    
        const savedLike = await liked.save();
    
        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true})
        .populate('likes').exec();
        res.json({likedpost:updatedPost})
    }
    catch(err)
    {
        res.status(400).json({
            err:`Error is ${err}`
        })
    }
}

exports.unlikePost = async(req,res)=>{
    try
    {
        
            const {post,like} = req.body;
            const deletedLike = await Like.findOneAndDelete({post:post,_id:like});
           
            const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true});
            
            res.json({post:updatedPost})

    }
    catch(err)
    {
        res.status(400).json({
            err:`Err is ${err}`
        })
    }
}