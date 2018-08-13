var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;
var Category = require('./CategoryModel');
var ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    product_image: {
        type: String
    },
    selling_price: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity_available: {
        type: Number,
        required: true,
        default:1
    },
    
 
    price_1:
{type : Number},
  
    weight_or_size_1 :
{type: String},

    brand :
{type : String},

    discount_price_1:
{type: Number},

    discount_percentage_1:
{type: Number},

    discount_enabler_1:
{type: Boolean},

    price_2:
{type: Number},

    weight_or_size_2:
{type: String},

    price_2_enable:
{type: Boolean},

    discount_enabler_2:
{type: Boolean},

    discount_price_2:
{type: Number},

    discount_percentage_2:
{type: Number},

    price_3:
{type: Number},

    weight_or_size_3:
{type: String},

    price_3_enable:
{type: Boolean},

    discount_enabler_3:
{type: Boolean},

    discount_price_3:
{type: Number},

    discount_percentage_3:
{type: Number},

    source:
{type: String},

    special_id:
{type: String},

    enable:
{type: Boolean},

    combo:
{type: Boolean},

    item_tag_1:
{type: String},

    item_tag_2:
{type: String},

    item_tag_3:
{type: String},

item_tag_4:
{type: String},
category_name: {
    type: String,
},
sub_category_name: {
    type: String,
},
root_category_name: {
    type: String,
},
daily_products:
{type: Boolean},
 
    same_day:
{type: Boolean},

    next_day:
{type: Boolean},

    item_popular:
{type: Boolean},

    item_sponsered:
{type: Boolean},

    advertisement_1:
{type: Boolean},

    advertisement_2:
{type: Boolean},

    advertisement_3:
{type: Boolean},

    advertisement_4:
{type: Boolean},

    default_items:
{type: Boolean},

    Specials_subC:
{type: Boolean},

    top_selling:
{type: Boolean},

    top_offer:
{type: Boolean},
  
});
module.exports = mongoose.model("Products", ProductSchema);