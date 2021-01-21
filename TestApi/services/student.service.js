const BaseService = require('./base.service');

class StudentService extends BaseService{
    
    constructor({studentBusiness}){
        super(studentBusiness)
    }

    async getAllPlus(){
        const entities = await this._entityBunisess.getAllPlus();
        return entities;
    }

}

module.exports = StudentService;