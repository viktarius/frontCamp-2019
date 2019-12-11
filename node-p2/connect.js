const mongoose = require('mongoose');

const connectionString = `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@frontcamp-6ydvu.mongodb.net/mongoose?retryWrites=true&w=majority`;
mongoose.connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(() => console.log('DB Connected!'))
    .catch(err => console.log(`DB Connection Error: ${err.message}`));

const newsSchema = new mongoose.Schema({
    id: Number,
    title: String,
    content: String,
    author: String
});
const News = mongoose.model('News', newsSchema);

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    facebookId: Number
});

userSchema.statics.findOrCreate = function findOrCreate(condition, callback) {
    const self = this;
    self.findOne(condition, (err, result) => {
        return result ? callback(err, result) : self.create(condition, (err, result) => { return callback(err, result) })
    })
};

const Users = mongoose.model('Users', userSchema);

module.exports = {News, Users};
