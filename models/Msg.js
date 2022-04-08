const mongoose = require('mongoose');

const MsgSchema = new mongoose.Schema({
       msg: {
              type: String,
              required: true,
              trim: true
       },
       password: {
              type: String,
              trim: true
       },
       passHint: {
              type: String,
              trim: true
       },
       destroy: {
              type: Boolean
       },
       destroyTime: {
              type: Date
       },
       by: {
              type: String,
              default: "Anonymous",
              trim: true
       }

},{ timestamps: true })

module.exports = mongoose.models.Msg || mongoose.model('Msg', MsgSchema)