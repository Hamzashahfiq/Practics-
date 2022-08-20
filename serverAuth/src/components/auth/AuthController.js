const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const authUser = require('./AuthModel')


const signupUser = async (req, res) => {

    if (!req.body.userName || !req.body.password || !req.body.mobileNo) {
        let responseData = {
            message: 'params required: userName, password, mobileNo',
        }
        res.status(400).json(responseData);
    }
    let data = await authUser.findOne({name: req.body.userName})
    console.log({data})
    if (data) {
        let responseData = {
            message: "User already created",
        }
        res.status(404).json(responseData);
    }
    const saltRounds = 10;
    let pass = await bcrypt.hash(req.body.password, saltRounds);
    let addNewUser = {
        name: req.body.userName,
        password: pass,
        mobileNo: req.body.mobileNo,
        createdAt: new Date(),
    }

    const newUser = new authUser(addNewUser)

    try {

        await newUser.save()
        // let data = await newUser.findOne({userName: req.body.userName})
        let responseData = {
            statusCode: 200,
            message: 'user added successfully',
            // data: data
        }
        
        req.body.userName
        res.status(200).json(responseData);
    }
    catch (error) {
        let responseData = {
            message: error
        }
        res.status(404).json(responseData);
    }

}

const signinUser = async (req, res) => {
    if (!req.body.userName || !req.body.password ) {
        let responseData = {
            statusCode: 401,
            message: 'params required: userName, password'
        }
        res.json(responseData);
    }

    try {
        const userData = await authUser.findOne({ userName: req.body.userName })
        if (!userData) {
            let responseData = {
                statusCode: 401,
                message: 'User not found'
            }
            res.json(responseData);
        }
        const pass = await bcrypt.compare(req.body.password, userData.password);
        if (!pass) {
            let responseData = {
                statusCode: 401,
                message: 'Password not correct'
            }
            res.json(responseData);
        }
        let user = {
            userName: userData.username,
            password: userData.password,
        }
        var token = await jwt.sign(user, process.env.PRIVATEKEY);
          console.log(token)
        if (token) {
            let responseData = {
                statusCode: 200,
                message: 'User authenticated',
                data: token
            }
            res.json(responseData);
        }
    }
    catch (error) {
        let resp = {
            statusCode: 400,
            message: error
        }
        res.json(resp);
    }
}

const currentUser = async (req, res) => {
    let responseData = {
        statusCode: 200,
        message: 'is user'
    }
    res.json(responseData);
}




module.exports = {
    signupUser,
    signinUser,
    currentUser
}
