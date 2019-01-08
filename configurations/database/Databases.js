global.domain = {}

domain.User = require("../../application/models/User.js")
domain.Friend = require("../../application/models/Friend.js")
domain.Post = require("../../application/models/Post.js")
domain.Like = require("../../application/models/Like.js")
domain.Comment = require("../../application/models/Comment.js")
domain.AuthorizationToken = require("../../application/models/AuthorizationToken")

module.exports = domain
