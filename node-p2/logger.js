const { createLogger, format, transports } = require('winston');
const logger = createLogger({
    format: format.combine(
        format.splat(),
        format.simple()
    ),
    transports: [new transports.Console(),
        new transports.File({ filename: 'logs/error.log', level: 'error' })
    ]
});

module.exports = logger;
