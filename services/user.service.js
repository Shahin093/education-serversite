const User = require("../model/user");
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

exports.signupService = async (userInfo) => {
    const user = await User.create(userInfo);
    return user;
};

exports.findByEmail = async (email) => {
    return await User.findOne({ email });
};

exports.findByUserEmail = async (email) => {
    return await User.findOne({ email });
}
exports.findByUserEmailToken = async (token) => {
    // step 1. check if token exits 
    // const token = req.headers?.authorization?.split(" ")[1];
    console.log('token : ', token);
    // step 2. if not token send res.
    if (!token) {
        return res.status(500).json({
            status: 'fail',
            error: 'You are not logged in'
        });
    };

    // step 3. decode the token.
    // (NODE !) jwt return the callback function. 
    // Promisify er kaj hooloo jekonow callback function ke promise aa convert korte pari.

    const decoded = await promisify(jwt.verify)(token, process.env.TOKEN_SECREC);

    // user all the information 
    // const user = User.findOne({ email: decoded.email });

    // step 4. if valid The next. 
    return decoded;
    //  req.user = decoded;
    //  next();
}

