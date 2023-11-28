const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

//http://localhost:3001/api/users
router.use('/users', userRoutes);

//http://localhost:3001/api/posts
router.use('/posts', postRoutes);

//http://localhost:3001/api/comments
router.use('/comments', commentRoutes);

module.exports = router;
