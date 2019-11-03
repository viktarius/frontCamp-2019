const Error = function () {
    if (Error.instance) return Error.instance;
    const errorBlock = document.getElementById('error');
    const hideMessage = () => {
        errorBlock.style.visibility = 'hidden';
    };
    errorBlock.querySelector('.error--close').addEventListener('click', hideMessage);
    this.lastError = '';
    this.showError = function (text, title = 'Wooops') {
        errorBlock.style.visibility = 'visible';
        this.lastError = text;
        errorBlock.querySelector('.error--title').innerHTML = title;
        errorBlock.querySelector('.error--message').innerHTML = text;
        setTimeout(() => {
            errorBlock.style.visibility = 'hidden';
        }, 10000)
    };

    this.getLastError = function () {
        errorBlock.querySelector('.error--title').innerHTML = 'last error';
        errorBlock.querySelector('.error--message').innerHTML = this.lastError;
        setTimeout(() => {
            errorBlock.style.visibility = 'hidden';
        }, 4000)
    };

    return Error.instance = this;
};

const errorHandler = new Error();

export default errorHandler;
