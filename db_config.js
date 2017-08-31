// string de conexão do banco de dados
var db_string = 'mongodb://127.0.0.1/screencast_restful';

// cria uma var que recebe a instancia do mongoose e passa a string de conexão da db_string para a connect
var mongoose = require('mongoose').connect(db_string);

// db recebe a conexão inicidada
var db = mongoose.connection;

// se acontecer algum erro na conexão retorna uma msg
db.on('error', console.error.bind(console, 'Erro ao conectar no banco'));

// cria uma Schema para o mongodb
db.once('open', function() {
    var userSchema = mongoose.Schema({
      fullname: String,
      email: String,
      password: String,
      created_at: Date
    });
    // variavel User recebe o Schema modelado da var userSchema
    exports.User = mongoose.model('User', userSchema);
});
