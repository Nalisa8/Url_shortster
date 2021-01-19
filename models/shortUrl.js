const mongoose = require('mongoose')
const shortId = require ('shortid')
const moment = require('moment')

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
        default: moment().startOf('hour').fromNow()

    },
    date:{
        description:"",
        type: String,
        require: true,
        format: "date-time",
        default: moment().format("MMM Do YY")

    }
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)