const checkId = (id, next) => {
    if (!+id) {
        let err = new Error('Bad request');
        next(err);
    }
};

const checkData = (data, next) => {
    if (!data) {
        let err = new Error('News not found');
        err.statusCode = 404;
        next(err);
    }
};

module.exports = {checkId, checkData};
