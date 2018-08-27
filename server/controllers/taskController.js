let TaskModel = require("../models/taskModel");

module.exports.list = function list(req,res) {
    TaskModel.find({}).exec()
    .then(task => {
        console.log(tasks);
    });
}
module.exports.show = function show(req, res) {
    TaskModel.findById("sldjfoi").exec()
    .then(task => {
        console.log(task);
    });
}
module.exports.create = function create(req, res) {
    const newTask = new TaskModel(req,body);
    newTask.save()
    .then(savedTask => {
        res.json(savedTask);
    });
}