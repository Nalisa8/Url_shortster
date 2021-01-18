const mongoose = require('mongoose')
const shortId = reuquire ('shortid')


const shortUrlSchema = new mongoose.Schema({
    full:{
        type: String,
        required: true
    },
    short: {
        description:"",
        type: String,
        minimum: 4,
        maximum: 6,
        required: true,
        default: shortId.generate
    },
    clicks:{
        description:"",
        type: Number,
        require: true,
        default:0
    },
    access:{
        description:"",
        type: String,
        require: true,
        format: "date-time",
        default:""

    },
    date:{
        description:"",
        type: String,
        require: true,
        format: "date-time",
        default:""

    }
})

module.exports = mongoose.model('ShortUrl', shortUrlschema)