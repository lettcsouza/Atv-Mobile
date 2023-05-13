const { Sequelize } = require("sequelize")

//database
//root
//senha
const bancodedados = new Sequelize('atvdfullstackmobilegeraldo','root','leticia',{
    host:'localhost',
    dialect:'mysql',
    logging: false
})

console.log("Conexao SQL OK")
module.exports = bancodedados