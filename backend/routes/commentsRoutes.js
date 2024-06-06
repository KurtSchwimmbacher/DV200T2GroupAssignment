const express = require('express'); 
const router = express.Router(); 
const Comments = require('../models/Comments');

// The following endpoint is for fetching product comments
router.get('/comments/:productId', async (req, res) => {
    try {
        const comments = await Comments.find({ productId: req.params.productId }); 
        res.status(200).json(comments); 
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch comments' });
    }
});

// The following endpoint is for posting new comments 
router.post('/', async (req, res) => {
    const { productId, userName, rating, comment } = req.body;
    try {
        const newComment = new Comments({ productId, userName, rating, comment }); 
        await newComment.save(); 
        res.status(201).json(newComment); 
    } catch (error) {
        res.status(500).json({ error: 'Failed to post comment' }); 
    }
});

// Update posted comment 
router.patch('/update/:id', async (req, res) => {
    const { rating, comment } = req.body; 
    try { 
        const updateComments = await Comments.findByIdAndUpdate(
            req.params.id, 
            { rating, comment },
            { new: true }
        ); 
        res.status(200).json(updateComments);  
    } catch (error) {
        res.status(500).json({ error: 'Failed to update comment' });
    }
}); 

// Finally, comments CRUD
// The following code deletes a comment
router.delete('/delete/:id', async (req, res) => {
    try {
        await Comments.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Comment successfully deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete comment' });
    }
});

module.exports = router;
