
var notesData = require("../db/data.js")

// console.log(notesData)

module.exports = function(app) {
    app.get('/api/notes', function(req,res){
        res.json(notesData)
    })
}