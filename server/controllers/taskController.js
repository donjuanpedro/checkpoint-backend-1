// let TaskModel = require("../models/taskModel");

// module.exports.list = function list(req,res) {
//     TaskModel.find({}).exec()
//     .then(task => {
//         console.log(tasks);
//     });
// }
// module.exports.show = function show(req, res) {
//     TaskModel.findById("sldjfoi").exec()
//     .then(task => {
//         console.log(task);
//     });
// }
// module.exports.create = function create(req, res) {
//     const newTask = new TaskModel(req,body);
//     newTask.save()
//     .then(savedTask => {
//         res.json(savedTask);
//     });
// }

const TaskModel = require("../models/TaskModel");

module.exports.list =  function list(request, response) {
    TaskModel.find({}).exec()
    .then(task => {
        return response.json(task);
    });
}

module.exports.show =  function show(request, response) {
    TaskModel.findById(request.params.id).exec()
    .then(task => {
        return response.json(task)
    })
}

module.exports.create =  function create(request, response) {
    const newTask = new TaskModel({
        task:request.body.task,
        date:request.body.date
    });
   newTask.save()
   .then(savedTask => {
       return response.json(savedTask)
   });

}