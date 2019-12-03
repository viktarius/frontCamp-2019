require('dotenv').config();
const app = require('express')();
const bodyParser = require('body-parser');
const {News} = require('./connect');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", (req, res) => {
    res.redirect("/news");
});

app.get('/news', function (req, res) {
    News.find({})
        .then(data => res.send(data))
        .catch(error => console.error(error))
});

app.get('/news/:id', function (req, res) {
    News.findOne({id: +req.params.id})
        .then(data => res.send(data))
        .catch(error => console.error(error))
});

// const News = mongoose.model('News', newsSchema);
// news.map(item =>
//     News.create({
//         id: item.id,
//         title: item.title,
//         content: item.content,
//         author: item.author
//     })
// );

app.listen(process.env.SERVERPORT, function () {
    console.log(`server started on port ${process.env.SERVERPORT}`);
});
