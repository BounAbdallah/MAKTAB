module.exports=function(sequelize, Sequelize) {
  const Book = sequelize.define('books',{
  id: {type: Sequelize.INTEGER,
  autoIncrement: true, primaryKey: true,},
  title: {type: Sequelize.STRING}, 
  author: {type: Sequelize.STRING}, 
  resume: {type: Sequelize.STRING}, 
})
return Book 
}