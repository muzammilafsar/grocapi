"use-strict";
var cors = require('cors');
var checkAuth = require('../Middleware/checkAuth')
module.exports = function(app) {
    var products = require('../Controller/product_controller');
    var category = require('../Controller/category_controller');
    var order = require('../Controller/order_controller');    
    var user = require('../Controller/user_controller');
    var subCategory = require('../Controller/sub_category_controller');
    var rootCategory = require('../Controller/root_category_controller.js');
    app.use(cors());

    app.route("/createproduct").post(products.create_product);
    app.route("/products").get(products.get_all_products);
    app.route("/products/:id").get(products.get_product_by_id);
    app.route("/productsbycategory").get(products.get_products_by_category);
    app.route("/productsbysubcategory").post(products.get_products_by_sub_category);

    app.route("/getallcatwithsubcat").get(category.get_list);
    app.route("/category").get(category.get_all_category);
    app.route("/createcategory").post(category.create_category);

    
    app.route("/createsubcategory").post(subCategory.create_sub_category);
    app.route("/getsubcatbycat").post(subCategory.get_subcategory_of_category);

    app.route("/createrootcategory").post(rootCategory.create_root_category);
    app.route("/getrootcatbysubcat").post(rootCategory.get_rootcategory_of_subcategory);

    
    app.route("/registeruser").post(user.register_user);
    app.route('/login').post(user.login);

    
    app.route('/neworder').post(order.createOrder);
    app.route('/getorders').post(checkAuth, order.userOrders);

    app.route('/sendotp').post(user.sendOtp);
    app.route('/verifyotp').post(user.verifyOtp);
    app.route('/resendotp').post(user.resendOtp);
    
    app.route('/getjwt').get(user.generatejwt);
    app.route('/verifyjwt').post(user.verifyJwt);
};
