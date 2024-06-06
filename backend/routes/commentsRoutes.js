const express = require('express'); 
const router = express.Router(); 
const Comments = require('../models/Comments');

//the following endpoint is for fetching product comments
router.get('/comments/:productId', async (req, res) => {
    try{
        const comments = await Comments.find({ productId: req.params.productId }); 
        res.status(200).json(comments); 
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch comments' });
    }
});

// the following endpoint is for posting new comments 
router.post('/comments', async (req, res) => {
    try{
        const newComment = new Comments({ productId, userName, rating, comment }); 
        await newComment.save(); 
        res.status(201).json(newComment); 
    } catch (error) {
        res.status(500).json({ error: 'Failed to post comment' }); 
    }
}); 

//update posted comment 
router.put('/comments/:id', async (req, res) => {
    const { rating, comment} = req.body; 
    try{ 
        const updateComments = await Comments.findByIdAndUpdate(req.params.id, 
        {
        rating, 
        comment
        },
        {
            new: true
        }
    ); 
    res.status(200).json(updateComments);  
    } catch (error) {
        res.status(500).json({ error: 'Failed to update comment' });
    }
}); 

//finally comments crud 
//following code deletes a comment
router.delete('/comments/:id', async (req, res) => {
    try{
        await Comments.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'comment successfully deleted' });
    } catch (error) {
        res.status(500).json( { error: 'Failed to delete comment' })
    }
})