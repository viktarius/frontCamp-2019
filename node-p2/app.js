require('dotenv').config();
const app = require('express')();
const passport = require('passport');
const bodyParser = require('body-parser');
const logger = require('./logger');
const {News} = require('./connect');
const {checkId, checkData} = require('./errorHandler');

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

app.get('/news/:id', function ({params: {id}}, res, next) {
    checkId(id, next);
    News.findOne({id: +id})
        .then(data => {
            checkData(data, next);
            res.send(data);
        })
});

app.post('/news', function ({body: {title, content, author}}, res) {
    News.findOne()
        .sort({"id": -1})
        .then(lastNews => {
            const newNews = {
                id: lastNews.id + 1,
                title: title ? title : "",
                content: content ? content : "",
                author: author ? author : "",
            };
            return News.create(newNews);
        }).then(data => {
        res.send({id: data.id});
    })
});

app.put('/news/:id', function ({params: {id}, body: {title, content, author}}, res, next) {
    checkId(id, next);
    const n = {};
    title ? n.title = title : false;
    content ? n.content = content : false;
    author ? n.author = author : false;
    News.findOneAndUpdate({id: +id}, {id: +id, ...n}, {new: true})
        .then(data => {
            checkData(data, next);
            res.send(data);
        })
});

app.delete('/news/:id', function ({params: {id}}, res, next) {
    checkId(id, next);
    News.findOneAndRemove({id: +id})
        .then(data => {
            checkData(data, next);
            res.send({status: 'ok'});
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
