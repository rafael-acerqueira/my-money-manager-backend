const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : 
            'mongodb://localhost/mymoneymanager'

module.exports = mongoose.connect(url, { useNewUrlParser: true })