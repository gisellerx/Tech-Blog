const User = require('./User');
const Post = require('./Post');

//setting type of relationship
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
//links parent and child together
Post.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Post };
