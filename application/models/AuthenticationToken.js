var softDelete = require('mongoose-softdelete');
var timestamps = require('mongoose-timestamp');

var AuthenticationTokenSchema = new mongooseSchema({
  auth_token: {
   type: String,
   default: '',
   required: true,
   trim: true,
   validate: [stringNotNull, 'Authentocation token required']
  },
  user_id: {
   type: mongooseSchema.ObjectId,
   ref:'User'
  },
  created: {
   type: Date,
   default: Date.now
  }
});

AuthenticationTokenSchema.plugin(softDelete);
AuthenticationTokenSchema.plugin(timestamps);

function stringNotNull(obj){
   return obj.length
}

var AuthenticationToken = mongoose.model('AuthenticationToken', AuthenticationTokenSchema);
module.exports = AuthenticationToken
