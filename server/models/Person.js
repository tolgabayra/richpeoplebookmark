const mongoose = require("mongoose")

const PersonSchema = new mongoose.Schema(
    {
        name : {type: String, required: true, unique: true},
        surname : {type: String, required:true, unique:true},
        wealth: {type: Number, default: 0},
        profilePic: {type: Boolean, default: false},
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Person", PersonSchema)