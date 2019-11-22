const app = require('express')();
const bodyParser = require('body-parser');
const logger = require('./logger');
let news = require('./data');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", (req, res) => {
    res.redirect("/news");
});

app.get('/news', function (req, res) {
    res.send(news)
});

app.get('/news/:id', function (req, res, next) {
    const n = news.find(item => +item.id === +req.params.id);
    if(!n){
        let err = new Error('Page Not Found');
        err.statusCode = 404;
        next(err);
    }
    res.send(n);
});

app.post('/news', function (req, res) {
    const id = news.map(i => i).sort((a,b) => a.id - b.id)[news.length - 1].id +1;
    const n = {
        id,
        title: req.body.title ? req.body.title : "",
        content: req.body.content ? req.body.content : "",
        author: req.body.author ? req.body.author : "",
    };
    news.push(n);
    res.send({id});
});

app.put('/news/:id', function (req, res, next) {
    const n = news.find(item => +item.id === +req.params.id);
    if(!n){
        let err = new Error('Page Not Found');
        err.statusCode = 404;
        next(err);
    }
    n.title = req.body.title ? req.body.title : n.title;
    n.content = req.body.content ? req.body.content : n.content;
    n.author = req.body.author ? req.body.author : n.author;
    res.send('ok');
});

app.delete('/news/:id', function (req, res, next) {
    if(!+req.params.id){
        let err = new Error('Bad request');
        next(err);
    }
    news = news.filter(item => +item.id !== +req.params.id);
    res.send('ok');
});

app.get('*', function(req, res, next) {
    let err = new Error('Page Not Found');
    err.statusCode = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    if (!err.statusCode) err.statusCode = 500;
    logger.log('error', req.originalUrl, err);
    res.status(err.statusCode).send(err.message);
});

app.listen(3000, function () {
    console.log('server started on port 3000');
});
