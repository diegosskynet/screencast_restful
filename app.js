/* Requires and vars */

var app = require('./app_config.js');

var userController = require('./controller/userController.js');

// instancia do validator
var validator = require('validator');

/* Start api */

// GET TEST
app.get('/', function(req, res) {
    res.end('Servidor ON!');
});

/* http verbs */

app.get('/users', function(req, res) {
    userController.list(function(resp) {
        res.json(resp);
    });

});

app.get('/users/:id', function(req, res) {
    var id = validator.trim(validator.escape(req.param('id')));
    userController.list(id, function(resp) {
        res.json(resp)
    });
});

app.post('/users', function(req, res) {
    var fullname = validator.trim(validator.escape(req.param('fullname')));
    var email = validator.trim(validator.escape(req.param('email')));
    var password = validator.trim(validator.escape(req.param('password')));

    userController.save(fullname, email, password, function(resp) {
        res.json(resp);
    });
});

app.put('/users', function(req, res) {
    var id = validator.trim(validator.escape(req.param('id')));
    var fullname = validator.trim(validator.escape(req.param('fullname')));
    var email = validator.trim(validator.escape(req.param('email')));
    var password = validator.trim(validator.escape(req.param('password')));

    userController.update(id, fullname, email, password, function(resp) {
        res.json(resp);
    });
});

app.delete('/users/:id', function(req, res) {
  var id = validator.trim(validator.escape(req.param('id')));
  userController.delete(id, function(resp) {
      res.json(resp);
  });
});
