const BaseBusiness = require("./base.bunisess");
const Student = require("./models/student");
const mapper = require('automapper-js');

class StudentBusiness extends BaseBusiness{
    constructor({studentRepository}){
        super(studentRepository,Student)
    }

    async getAllPlus(){
        const entities = await this._EntityRepository.getAllPlus();
        return entities.map(entity=>mapper(this._EntityToMap,entity.toJSON()));
    }
}

module.exports = StudentBusiness;