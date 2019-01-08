
var configVariables = function () {

  switch (process.env.NODE_ENV) {
    case 'development':
      var config = {
        port:3000,
        host:'notsosocial.com',
        emailFrom:'rjtktyrdell@gmail.com',
        emailPassword:'thetestpassword'
      }
      return config;
      break;
    case 'staging':
      var config = {

      }
      return config;
      break;
    case 'testing':
      var config = {

      }
      return config;
      break;
    case 'production':
      var config = {

      }
      return config;
      break;
    default:
      var config = {

      }
      return config;
      break;

  }



}

module.exports.config = configVariables;
