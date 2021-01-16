const {asClass,createContainer,asFunction,asValue} = require('awilix');

const Routes = require('../api/routes');
const Server = require('./server');
const StartUp = require('./startup');
const config = require('../config/environments');


const UserRoutes = require('../api/routes/user.routes');
const {UserController} = require('../api/controllers');
const {UserService} = require('../services');
const {UserRepository} =require('../dal/repositories')


const container = createContainer();
const db = require('../dal/entities');

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
})
.register({
    UserService: asClass(UserService).singleton()
})
.register({
    UserRepository: asClass(UserRepository).singleton()
})
.register({
    db: asValue(db)
});

module.exports = container;