
class StudentController {

    constructor({studentService}){
        this._studentService = studentService;
    }

    async getUsers(req,res){
        const users = await this._studentService.getAllPlus();

        //DTO Simulated
        users.map(e=>{
            delete e["id"];
            delete e["password"];
            return e;
        })

        
        res.send(users)
    }

    async createUser(req,res){
        const {body} = req;
        const user = await this._studentService.create(body);
        res.send(user)
    }

}

module.exports = StudentController;