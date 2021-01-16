const {asClass,createContainer,asFunction,asValue} = require('awilix');
const {UserController} = require('../api/controllers');
const Routes = require('../api/routes');
const Server = require('./server');
const StartUp = require('./startup');
const config = require('../config/environments');
const UserRoutes = require('../api/routes/user.routes');

const container = createContainer();

container.register({
    app : asClass(StartUp).singleton(),//Only one instance
    server: asClass(Server).singleton()
})
.register({
    UserController : asClass(UserController).singleton()
})
.register({
    router: asFunction(Routes).singleton()
})
.register({
    config : asValue(config)
})
.register({
    UserRoutes: asFunction(UserRoutes).singleton()
});

module.exports = container;