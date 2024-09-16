const users = require('../users.json');
function getUser(req,res){
    try{
        res.json(users);
        
    }catch(err){

    }
}
module.exports = {
    getUser
}