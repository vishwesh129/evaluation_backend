require("dotenv").config();
var jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.send("Please Login");
    }
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
        const {userID} = decoded
        req.userID = userID
        if(decoded){
            next();
        }
        else{
            res.send("Please Login");
        }
    });
}

module.exports = {authenticate}