exports.hcg = require('./hcg');
exports.rgb = require('./rgb');

Object.defineProperty(module.exports, 'channels', {value: 3});
Object.defineProperty(module.exports, 'labels', {value: 'hwb'});
