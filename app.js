global.express = require("express")

global.app = express()
global.configVariables = require('./configurations/ConfigurationVariables.js').config();
global.port = configVariables.port;
global.bodyParser = require('body-parser')
global.routes = require('./configurations/routes/Routes.js')
global.mongoose = require('mongoose')
global.dbConnection = require('./configurations/database/DbConnection.js').getDbConnection()
global.mongooseSchema = mongoose.Schema;
global.sendMail = require('./utilities/EmailUtility.js')
// global.authentication =
global.domain = require('./configurations/database/Databases.js');

var authentication = require('./application/middlewares/Authentication.js');

app.use(bodyParser.json())
app.use('/', routes)
app.listen(port)

console.log(`The Express Server is running at port ${port} in ${process.env.NODE_ENV} mode!!`);
