const {User} = require('../models');
const CrudRepository = require('./crud-reposiotory');
class UserRepository extends CrudRepository{
    constructor(){
       super(User);
    }
}
module.exports=UserRepository;