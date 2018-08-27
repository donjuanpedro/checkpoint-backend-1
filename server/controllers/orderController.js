let OrderModel = require("../models/orderModel");

module.exports.list = function list(req,res) {
    OrderModel.find({}).exec()
    .then(orders => {
        console.log(orders);
    });
}
module.exports.show = function show(req, res) {
    OrderModel.findById("sldjfoi").exec()
    .then(order => {
        console.log(order);
    });
}
module.exports.create = function create(req, res) {
    const newOrder = new OrderModel(req,body);
    newOrder.save()
    .then(savedOrder => {
        res.json(savedOrder);
    });
}