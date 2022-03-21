//recuperation des livres 
const { books } = require("../models")
const db = require("../models")

const Book = db.books

function getAllBooks(req, res){
    Book.findAll()
      .then(function(data){
          res.render("books",{title: "Mes livres"})
      })
      .catch(function(err){
          res.status(500).send({message:err.message})
      })
}
module.exports = {getAllBooks}