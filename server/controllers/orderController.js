// let OrderModel = require("../models/orderModel");

// module.exports.list = function list(req,res) {
//     OrderModel.find({}).exec()
//     .then(orders => {
//         console.log(orders);
//     });
// }
// module.exports.show = function show(req, res) {
//     OrderModel.findById("sldjfoi").exec()
//     .then(order => {
//         console.log(order);
//     });
// }
// module.exports.create = function create(req, res) {
//     const newOrder = new OrderModel(req,body);
//     newOrder.save()
//     .then(savedOrder => {
//         res.json(savedOrder);
//     });
// }
const OrderModel = require("../models/OrderModel");

module.exports.list =  function list(request, response) {
    OrderModel.find({}).exec()
    .then(order => {
        return response.json(order);
    });
}

module.exports.show =  function show(request, response) {
    OrderModel.findById(request.params.id).exec()
    .then(order => {
        return response.json(order)
    })
}

module.exports.create =  function create(request, response) {
    const newOrder = new OrderModel({
        orderDate:request.body.task,
        orderTime:request.body.date,
        amount: request.body.amount
    });
   newOrder.save()
   .then(savedOrder => {
       return response.json(savedOrder)
   });

}