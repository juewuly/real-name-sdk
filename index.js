
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./dist/real-name-sdk.js');
} else {
    module.exports = require('./dist/real-name.js');
}