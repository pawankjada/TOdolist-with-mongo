const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({

    task: {
        type: String,
        required: "You must input an activity"
    },
});

const TaskList = mongoose.model('Tasklist', TaskSchema);

module.exports = TaskList;