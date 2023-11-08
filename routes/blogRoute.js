const express = require('express')
const router = express.Router()
const {dummylink, likePost, unlikePost} =require('../controllers/likesController')
const {createComment} = require('../controllers/commentsController')
const { getAllPosts, createPost } = require('../controllers/postsController')

router.get('/dummyroute',dummylink)
router.post('/comments/create',createComment)
router.post('/posts/create',createPost)
router.get('/posts/getall',getAllPosts)
router.post('/likes/like',likePost)
router.post('/likes/unlike',unlikePost)


module.exports = router

