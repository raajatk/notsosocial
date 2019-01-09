
var router = express.Router();
var main_service = require('../../application/services/MainService.js')
var authentication_middleware = require('../../application/middlewares/Authentication.js')


/* GET home page. */
router.get('/v2/hello',
          function(req, res, next){authentication_middleware(req,res,next)},
          main_service.hello_world
          );

router.post('/v2/user/signup',  main_service.user_signup);

router.post('/v2/user/login', main_service.user_login);

router.get('/v2/users',
          function(req, res, next){authentication_middleware(req,res,next)},
          main_service.fetch_users)

router.post('/v2/user/friendrequest',
            function(req, res, next){authentication_middleware(req,res,next)},
            main_service.send_friend_request)

module.exports = router;
