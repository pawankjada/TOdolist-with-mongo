const db = require('../models');
//requires models folder

//creates get route, that finds tweets in database, and returns them as json data, or an error
module.exports = function (app) {
    app.get('/api/task', function (req, res) {
        db.Task.find({})
            .then(function (tweets) {
                res.json(tweets);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    //creates post route, that displays tweets in body, and shows them as json data, or an error
    app.post('/api/task', function (req, res) {
        db.Task.create(req.body)
            .then(function (tweets) {
                res.json(tweets);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    //creates delete route, that displays targets the ID of each tweet, and removes them from database, and sends a message that indicates success.
    app.delete('/api/task/:id', function (req, res, next) {
        db.Task.findByIdAndRemove({
                _id: req.params.id
            })
            .then(function () {
                res.send('deleted')
            })

    });

    app.put('/api/todos/:id', function (req, res) {
        todos.findOneAndUpdate({
                _id: req.params.id
            }, )
            .then(function (dbtodos) {
                res.json('updated');
            })
            .catch(function (error) {
                res.json(error);
            })
    });
};