global.domain = {}

domain.User = require("../../application/models/User.js")
domain.Friend = require("../../application/models/Friend.js")
domain.Post = require("../../application/models/Post.js")
domain.Like = require("../../application/models/Like.js")
domain.Comment = require("../../application/models/Comment.js")
domain.AuthenticationToken = require("../../application/models/AuthenticationToken")

module.exports = domain
