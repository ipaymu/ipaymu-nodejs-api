"use strict";
const Config = require("../../dist/index");

module.exports = async function(isProd , va , apikey , transactionId) {
    Config.setProd(isProd);
    Config.setVa(va);
    Config.setApiKey(apikey);

    return await Config.checkTransaction(transactionId);
}
// module.exports = send;

// exports.send = send