const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//setting type of relationship
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
//links parent and child together
Post.belongsTo(User, {
  foreignKey: 'user_id'
});
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Post, Comment };
