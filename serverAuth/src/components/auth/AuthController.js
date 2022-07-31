

const addUser = (req , res) =>{
    let response = {
        statusCode : 401,
        message:'request get succesfully'
    }
    
    
    res.json(response);

}




module.exports = {
    addUser
}
