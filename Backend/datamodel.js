const mongoose = require("mongoose")
const DB = "mongodb+srv://sajithjayaram:mylibraryapp@cluster0.2pltx.mongodb.net/task?retryWrites=true&w=majority"
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
 console.log("Database Connection Successful")
}).catch((err) => {
 console.log(err)
})
const schema = mongoose.Schema

const Schema = new schema({
 name: String,
 email: String,
 phone: Number,
 location: String,


}, {
 versionKey: false
})

const Data = new mongoose.model('infos', Schema)
module.exports = { Data }
