var mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    
    order_special_id : {
        type : Number,
        unique: true,   
        min: 1000     
    },
    user: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    items: {
        type: Array
    },
    total_items: {
        type: Number
    },
    total_price: {
        type: Number
    },
    mobile: {
        type: String,
    },
    slot:{
        type: String
    },
    in_waiting : {
        type : Boolean
    },
    current_timestamp : {
        type : String
    },
    delivery_charge : {
        type : String
    },
    applied_coupon_name_feild : {
        type : String
    },
    applied_coupon_discount : {
        type : String
    },
    final_total_with_tax : {
        type : String
    },
    updated : {
        type : Boolean
    },
    order_cancelled : {
        type : Boolean
    },
    delivered : {
        type : Boolean
    },
    time_stamp_onupdate : {
        type : String
    },
    //delivery_address needs to be clearified due to 3 different addresses//
    delivery_address: {
        name: {
            type: String
        },
        mobile: {
            type: String
        },
        pincode: {
            type: Number
        },
        locality: {
            type: String
        },
        address: {
            type: String
        },
        city: {
            type: String,
        },
        state: {
            type: String
        },
        landmark: {
            type:String
        },
        alt_mobile: {
            type: String
        }
    },
    codpaid: {
        type: Boolean,
        default: false
    },
    order_date: {
        type: Date,
        default: Date.now()
    }
});
OrderSchema.plugin(AutoIncrement, {inc_field: 'order_special_id'});
module.exports = mongoose.model('Order', OrderSchema);