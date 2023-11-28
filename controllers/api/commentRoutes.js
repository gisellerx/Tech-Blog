const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//Create a new comment
router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
            post_id: req.body.post_id
        });
        res.json(newComment);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;