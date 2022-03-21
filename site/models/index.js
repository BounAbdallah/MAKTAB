const dbConfig = require("../config/db.config")

const Sequelize =require("sequelize")

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect:dbConfig.dialect,
    pool:{
        max:dbConfig.pool.max,
        min:dbConfig.pool.min,
    }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.books = require("./book")(sequelize, Sequelize)

module.exports =db
