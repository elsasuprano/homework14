const User = require('./User.js')
const Post = require('./Post.js')

User.hasMany(Post, {foreignKey: 'id'})
Post.belongsTo(User, {foreignKey: 'id'})

module.exports = { User, Post }