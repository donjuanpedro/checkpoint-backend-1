let MessageModel = require("../models/messageModel");

module.exports.list = function list(req,res) {
    MessageModel.find({}).exec()
    .then(message => {
        console.log(messages);
    });
}
module.exports.show = function show(req, res) {
    MessageModel.findById("sldjfoi").exec()
    .then(message => {
        console.log(message);
    });
}
module.exports.create = function create(req, res) {
    const newMessage = new MessageModel(req,body);
    newMessage.save()
    .then(savedMessage => {
        res.json(savedMessage);
    });
}