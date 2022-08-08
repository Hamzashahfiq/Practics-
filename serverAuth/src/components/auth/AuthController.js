const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const authUser = require('./AuthModel')


const signupUser = async (req, res) => {
    // console.log(req.body.userName )
    // if (!req.body.userName || !req.body.password || !req.body.mobileNo) {
    //     let response = {
    //         statusCode: 401,
    //         message: 'params required: userName, password, mobileNo'
    //     }
    //     res.json(response);
    // }

    // const saltRounds = 10;
    // let pass = bcrypt.hash(req.body.password, saltRounds);
    // console.log(pass)
    console.log('data')
    let addNewUser = {
        // name: req.body.userName,
        // password: req.body.password,
        // mobileNo: req.body.mobileNo,
        // createdAt: new Date(),
        name: 'hamza',
        password: '123',
        mobileNo: '03020000111',
        createdAt: new Date(),
    }

    const newUser = new authUser(addNewUser)

    try {
        console.log('data2')
        await newUser.save()
        console.log('data3')
        let response = {
            statusCode: 200,
            message: 'user added successfully'
        }
        res.json(response);
    }
    catch (error) {
        let response = {
            statusCode: 400,
            message: error
        }
        res.json(response);
    }
}
const signinUser = async (req, res) => {
    if (!req.body.userName || !req.body.password || !req.body.mobileNo) {
        let response = {
            statusCode: 401,
            message: 'params required: userName, password, mobileNo'
        }
        res.json(response);
    }

    try {
        const userData = await authUser.findOne({ userName: req.body.userName })
        if (!userData) {

            let response = {
                statusCode: 401,
                message: 'User not found'
            }
            res.json(response);
        }
        const pass =  await bcrypt.compare(req.body.password, userData.password);
         if (!pass) {
            let response = {
                statusCode: 401,
                message: 'Password not correct'
            }
            res.json(response);
         }
         let user = {
            userName: userData.username,
            password: userData.password,
            mobileNo: userData.mobileNo,
         }
         var token = await jwt.sign(user,process.env.PRIVATEKEY );
          
         if (token) {
            let response = {
                statusCode: 200,
                message: 'User authenticated',
                data : token
            }
            res.json(response);
         }


    }

    catch (error) {
        let response = {
            statusCode: 400,
            message: error
        }
        res.json(response);
    }
}




module.exports = {
    signupUser,
    signinUser
}
