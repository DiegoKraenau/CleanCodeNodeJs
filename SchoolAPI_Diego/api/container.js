const { asClass, createContainer, asFunction, asValue } = require('awilix');

//App start
const Server = require('./server');
const StartUp = require('./startup');
const config = require('../config/environments');

//Routes
const Routes = require('../api/routes');
const UserRoutes = require('../api/routes/user.routes');

//business
const {UserBusiness} = require('../domain');

//Controllers
const { UserController } = require('../api/controllers');

//Services
const { UserService } = require('../services');

//Repository
const { UserRepository } = require('../dal/repositories')

//db
const db = require('../dal/entities');

const container = createContainer();

container.register({//Api Layer
    app: asClass(StartUp).singleton(),//Only one instance
    server: asClass(Server).singleton(),
    router: asFunction(Routes).singleton(),
    UserController: asClass(UserController).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton()
})
.register({
    config: asValue(config)
})
.register({
    db: asValue(db)
})
.register({
    UserService: asClass(UserService).singleton()
    })
.register({
    UserRepository: asClass(UserRepository).singleton()
})
.register({
    UserBusiness: asClass(UserBusiness).singleton()
});


module.exports = container;