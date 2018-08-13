var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },   
    password: {
        type: String
    },
    mobile: {
        type: String
    },
    address1 : {
        type : String
    },
    areacode1 : {
        type : String
    },
    address2 : {
        type : String
    },
    areacode2 : {
        type : String
    },
    address3 : {
        type : String
    },
    areacode3 : {
        type : String
    },
    is_in_trans_cpassword: {
        type: Boolean
    },
    is_in_trans_signup: {
        type: Boolean
    },
    user_flag_danger: {
        type: Boolean
    },
    user_flag_important: {
        type: Boolean
    },
    on_update_profile: {
        type: String
    },
    email_verified: {
        type: Boolean,
        default: false
    },
    email_verification_code: {
        type: String
    },
    password_reset_code: {
        type: String
    },
    password_reset_requested: {
        type: Boolean,
        default: false
    }

});
module.exports = mongoose.model('User', UserSchema);