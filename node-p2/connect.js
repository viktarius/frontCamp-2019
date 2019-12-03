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

module.exports = {News};
