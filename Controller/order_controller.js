var mongoose = require('mongoose');
var Order = mongoose.model('Order');

exports.createOrder = (req, res) => {
    // let order = new Order({
    //     user: req.body.email,
    //     items: req.body.items,
    //     mobile: req.body.mobile,
    //     pincode: req.body.pincode,
    //     address: req.body.address,
    //     total_price: req.body.total_price
    // });
    console.log(req.body);  
    let order = new Order(req.body);
    order.save((err, order) => {
        if (err) {
            res.send({
                status: 400,
                message: err
            });
        } else {
            res.send({
                status: 200,
                message: 'order successfull',
                order: order
            });
        }
    });
}
exports.userOrders = (req, res) => {
    Order.find({mobile: req.decodedUserData.mobile},(err, orders) => {
        if (err) {
            res.send({
                status: 400,
                message: err
            });
        } else {
            res.send({
                status: 200,
                orders: orders
            });
        }
    });
}