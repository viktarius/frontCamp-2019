const path = require('path');
const LocalStrategy = require('passport-local').Strategy;
const {News, Users} = require('./connect');
const {checkId, checkData} = require('./handlers/errorHandler');

module.exports = (app, passport) => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname + '/public/views/index.html'));
    });

    app.get('/login', (req, res) => {
        res.sendFile(path.join(__dirname + '/public/views/login.html'));
    });
    app.get('/register', (req, res) => {
        res.sendFile(path.join(__dirname + '/public/views/register.html'));
    });

    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/login');
    });

    app.post('/login', passport.authenticate('local', {
        failureRedirect: '/login',
        successRedirect: '/'
    }));

    app.post('/register', function ({body: {username, password}}, res, next) {
        Users.create({username, password})
            .then(data => {
                res.redirect(307, '/login')
            })
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

    app.post('/news', isLoggedIn, function ({body: {title, content, author}}, res) {
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

    app.put('/news/:id', isLoggedIn, function ({params: {id}, body: {title, content, author}}, res, next) {
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

    app.delete('/news/:id', isLoggedIn, function ({params: {id}}, res, next) {
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

    passport.use(new LocalStrategy(
        (username, password, done) => {
            Users.findOne({username, password})
                .then(data => {
                    if (data) {
                        return done(null, {username: data.username});
                    } else {
                        return done(null, false);
                    }
                })
        }
    ));

    passport.serializeUser((user, done) => {
        done(null, user.username);
    });

    passport.deserializeUser((username, done) => {
        done(null, {username: username});
    });

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        } else {
            let err = new Error('not Authorized');
            err.statusCode = 401;
            next(err);
        }
    }
};
