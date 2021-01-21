const BaseRepository = require("./base.repository");

class StudentRepository extends BaseRepository{

    constructor({db}){
        super(db,"Student")
    }

    async getAllPlus(){
        return await this._db[this._entity].findAll({
            include:["cars","classrooms"]
        });
    }

}

module.exports = StudentRepository;