"use strict";
const Config = require("../../dist/index");

module.exports = async function(isProd , va , apikey) {
    Config.setProd(isProd);
    Config.setVa(va);
    Config.setApiKey(apikey);

    let carts = {
        product: ["product 1 ", "product2 "],
        quantity: ["1", "2"],
        price: ["10000", "50000"],
        description: ["product-desc", "product-desc 2"],
        weight: [1, 2],
        height: [10, 10],
        length: [30, 40],
        width: [10, 50],
    };
    
    Config.addCart(carts);
    Config.setURL({
        ureturn: "https://google.com",
        ucancel: "https://google.com",
        unotify: "https://google.com",
    });
    
    
    let userData = {
      "buyerName" : "Gusmang Asmara" , 
      "buyerEmail" : "ibasmara@gmail.com" , 
      "buyerPhone" : "081936384166" , 
      "amount" : "60000",  
      "pickupArea" : "Denpasar",  
      "pickupAddress" : "jl. wiku no.1",  
      "paymentMethod" : "va", 
      "paymentChannel" : "bca"
    };

    return  await Config.redirectPayment(userData);
}
// module.exports = send;

// exports.send = send