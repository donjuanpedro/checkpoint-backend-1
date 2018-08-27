// let MessageModel = require("../models/messageModel");

// module.exports.list = function list(req,res) {
//     MessageModel.find({}).exec()
//     .then(message => {
//         console.log(messages);
//     });
// }
// module.exports.show = function show(req, res) {
//     MessageModel.findById("sldjfoi").exec()
//     .then(message => {
//         console.log(message);
//     });
// }
// module.exports.create = function create(req, res) {
//     const newMessage = new MessageModel(req,body);
//     newMessage.save()
//     .then(savedMessage => {
//         res.json(savedMessage);
//     });
// }

const MessageModel = require("../models/MessageModel");

module.exports.list =  function list(request, response) {
    MessageModel.find({}).exec()
    .then(message => {
        return response.json(message);
    });
}

module.exports.show =  function show(request, response) {
    MessageModel.findById(request.params.id).exec()
    .then(message => {
        return response.json(message)
    })
}

module.exports.create =  function create(request, response) {
    const newMessage = new MessageModel({
        name:request.body.name,
        date:request.body.date,
        message: request.body.message
    });
   newOrder.save()
   .then(savedMessage => {
       return response.json(savedMessage)
   });

}