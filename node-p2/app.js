require('dotenv').config();
const app = require('express')();
const bodyParser = require('body-parser');
const logger = require('./logger');
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

app.get('/news/:id', function (req, res, next) {
    if (!+req.params.id) {
        let err = new Error('Bad request');
        next(err);
    }
    News.findOne({id: +req.params.id})
        .then(data => {
            if (!data) {
                let err = new Error('News not found');
                err.statusCode = 404;
                next(err);
            }
            res.send(data);
        })
});

app.post('/news', function ({body: {title, content, author}}, res) {
    News.findOne()
        .sort({"id": -1})
        .then(lastNews => {
            const n = {
                id: lastNews.id + 1,
                title: title ? title : "",
                content: content ? content : "",
                author: author ? author : "",
            };
            return News.create(n);
        }).then(data => {
        res.send({id: data.id});
    })
});

app.put('/news/:id', function ({params: {id}, body: {title, content, author}}, res, next) {
    if (!+id) {
        let err = new Error('Bad request');
        next(err);
    }
    const n = {};
    title ? n.title = title : false;
    content ? n.content = content : false;
    author ? n.author = author : false;
    News.findOneAndUpdate({id: +id}, {id: +id, ...n}, {new: true})
        .then(data => {
            if (!data) {
                let err = new Error('News not found');
                err.statusCode = 404;
                next(err);
            } else{
                res.send(data);
            }
        })
});

app.get('*', function (req, res, next) {
    let err = new Error('Page Not Found');
    err.statusCode = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    if (!err.statusCode) err.statusCode = 500;
    logger.log('error', req.originalUrl, err);
    res.status(err.statusCode).send(err.message);
});


app.listen(process.env.SERVERPORT, function () {
    console.log(`server started on port ${process.env.SERVERPORT}`);
});
