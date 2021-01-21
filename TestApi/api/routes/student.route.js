const {Router} = require("express");

const UserRouter = function({studentController}){
    const router = Router();

    router.get('/',studentController.getUsers.bind(studentController));
    router.post('/',studentController.createUser.bind(studentController));

    return router;
}

module.exports = UserRouter;