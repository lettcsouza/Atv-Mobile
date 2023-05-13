const Sequelize = require("sequelize")
const bancodedados = require("./bancodedados")

const Mensagem = bancodedados.define('Mensagem',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true,
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    mensagem:{
        type:Sequelize.TEXT,
        allowNull:false,
    }

})

Mensagem.sync()
module.exports = Mensagem;
