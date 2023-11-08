const Post=require('../models/postsModel')
const Comments = require('../models/commentsModel')



exports.createComment = async(req,res)=>{
    try{

        const {post,user,body} = req.body;
    
        //create an comment obj
        const comment = new Comments({
            post,user,body
        })
    
        const savedComment = await comment.save();
        const updatedPost = await Post.findByIdAndUpdate(post,{$push: {comments:savedComment._id}},{new:true})
        .populate('comments').exec();
       
        res.json({post:updatedPost})
    }
    catch(err)
    {
        return res.status(500).json({err:`Error for creating comment ${err}`})
    }
}