const db = require('../configs/config');

const schema = new db.Schema({
    name: {
        type: String,
        require: true,
        maxlenght: 255,
        minlenght: 2,
        trim: true
    },
    age:{
        type: String,
        require: true,
        maxlenght: 500,
        minlenght: 5,
        trim: true
    },
    data:{
        type: Date,
        default: Date.now()
    },
},
{versionKey: false}
);

module.exports = db.model('user', schema);