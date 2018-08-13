'use strict';
var fetch = require('node-fetch');
var jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
var mongoose = require('mongoose');
const querystring = require('querystring');
const msg91key = process.env.msg91;
var User = mongoose.model('User');
const uuidv4 = require("uuid/v4");
const constants = require('../constants')
 var sendEmail = (email,link) => {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.email,
          pass: process.env.password
        },
        tls: { rejectUnauthorized: false }
      });

      const mailOptions = {
        from: "88o2868625@gmail.com", // sender address
        to: `${email}`, // list of receivers
        subject: `Email verification`, // Subject line
        html: `<h1>${constants.baseUrl}${link}</h1>` // plain text body
      };
      transporter.sendMail(mailOptions, function(err, info) {
        if (err) console.log(err);
        else console.log(info);
      });
}
exports.register_user = (req, res) => {
    let verificationLink = uuidv4();
    let newUser = User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        email_verification_code: verificationLink
    });
    newUser.save((err, user) => {
        if (err) {
            console.log(err);
            res.send({
                status: 400,
                message: 'already registerd',
                data: err

            });
        } else {
            res.send({
                status: 200,
                message: 'registerd successfully',
                email: req.body.email
            });
            sendEmail(req.body.email,verificationLink);
        }

    });

}
exports.login = (req, res) => {
    let id= uuidv4();
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            res.send({
                status: 405,
                message: "system error"
            });
        } else {
            if (user === null) {
                res.send({
                    status: 401,
                    message: "not registered",
                    id: id
                });
            }
            else {
                if (user.password !== req.body.password) {
                    res.send({
                        status: 402,
                        message: "incorrect password"
                    });
                }
                else if (user.password === req.body.password && user.email_verified === true) {
                    res.send({
                        status: 200,
                        user: {
                            email: user.email,
                            name: user.name,
                            image: ''
                        }
                    });
                } else if (user.password === req.body.password && user.email_verified === false) {
                    res.send({
                        status: 201,
                        user: {
                            message: 'email not verified'
                        }
                    });
                }

            }
        }
    });
    
}
exports.sendOtp = (req, res) => {
    // let mobile = (req.body.mobile);
    // let msg = querystring.stringify('Use code ##OTP## to verify your account on Grocrill.');
    // let url = `http://control.msg91.com/api/sendotp.php?authkey=${msg91key}&message=${msg}&sender=GCRILL&mobile=${mobile}`;
    // console.log(url);
    // fetch(url, {method: 'POST'}).then(val => val.json()).then((val) => {
    //     console.log(val);
    //     res.send({
    //         ...val
    //     });
    // });
    res.send({
        message: 'success'
    });
};

exports.resendOtp = (req, res) => {
    // let mobile = (req.body.mobile);
    // let url = `http://control.msg91.com/api/retryotp.php?authkey=${msg91key}&mobile=${mobile}`;
    // console.log(url);
    // fetch(url, {method: 'POST'}).then(val => val.json()).then((val) => {
    //     console.log(val);
    //     res.send({
    //         ...val
    //     });
    // }).catch(err => {
    //     res.send({
    //         err: err
    //     })
    // });
    res.send({
        message: 'success'
    });
};

exports.verifyOtp = (req, res) => {
    let mobile = (req.body.mobile);
    // let otp = (req.body.otp);
    var token = jwt.sign({ mobile: mobile }, process.env.authkey, {expiresIn: '360d'});    
    // let url = `https://control.msg91.com/api/verifyRequestOTP.php?authkey=${msg91key}&mobile=${mobile}&otp=${otp}`;
    // fetch(url, {method: 'POST'}).then(val => val.json()).then((val) => {
    //     console.log(val);
    //     if(val['type'] === 'success') {
    //         res.send({
    //             ...val,
    //             auth: token
    //         });
    //     } else {
    //         res.send({
    //             ...val
    //         });
    //     }
        
    // });
    res.send({
        type: 'success',
        auth: token
    });
};
exports.generatejwt = (req, res ) => {
    let key = 'apnakaam';
    var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    // jwt.sign({ foo: 'bar' }, key, { algorithm: 'RS256' }, function(err, token) {
        res.send({auth: token});
    //   });
}
exports.verifyJwt = (req, res) => {
    var decoded = jwt.verify(req.body.auth, 'shhhh');
    res.send({auth: decoded});
}