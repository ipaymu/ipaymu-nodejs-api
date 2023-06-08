<img width="100" src="https://my.ipaymu.com/asset/images/logo-ipaymu.png">

# The Official [iPaymu](https://ipaymu.com/) library exported as [Node.js](https://nodejs.org/) modules.

## Installation

Using npm:

```shell
$ npm i -g npm
$ npm i --save ipaymu-nodejs-api
```

Import iPaymu Package First:

```js
import * as ipaymu from "ipaymu-nodejs-api";
```

Then , add the credentials ( Va & apiKey):

```js
ipaymu.setVa("1179000899");
ipaymu.setApiKey("QbGcoO0Qds9sQFDmY0MWg1Tq.xtuh1");
```

Set mode production true or false:

```js
ipaymu.setProd(false);
```

Direct Payment Example:

```js
// Load the ipaymu module.
import * as ipaymu from "ipaymu-nodejs-api";
// set iPaymuVA & ApiKey.
ipaymu.setVa("1179000899");
ipaymu.setApiKey("QbGcoO0Qds9sQFDmY0MWg1Tq.xtuh1");
ipaymu.setProd(false); // false if staging , true if production
// set cart Items
let carts = {
  product: ["product 1 ", "product2"],
  quantity: ["1", "2"],
  price: ["10000", "50000"],
  description: ["product-desc", "product-desc 2"],
  weight: [1, 2],
  height: [10, 10],
  length: [30, 40],
  width: [10, 50],
};
// add items to Carts Array
ipaymu.addCart(carts);
// set Return URL
ipaymu.setURL({
  ureturn: "https://google.com",
  ucancel: "https://google.com",
  unotify: "https://google.com",
});

// set User Identity & Payment Method
let userData = {
  name: "Gusmang Asmara",
  email: "ibasmara@gmail.com",
  phone: "081936384166",
  amount: "40000",
  paymentMethod: "va",
  paymentChannel: "bca",
};

// Finally call directPayment methods with userData jsonArrays
ipaymu
  .directPayment(userData)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

ReDirect Payment Example:

```js
import * as ipaymu from "ipaymu";

ipaymu.setVa("1179000899");
ipaymu.setApiKey("QbGcoO0Qds9sQFDmY0MWg1Tq.xtuh1");

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

ipaymu.addCart(carts);
ipaymu.setURL({
    ureturn: "https://google.com",
    ucancel: "https://google.com",
    unotify: "https://google.com",
});


let userData = {"buyerName" : "Gusmang Asmara" , "buyerEmail" : "ibasmara@gmail.com" , "buyerPhone" : "081936384166" , "amount" : "60000",  "pickupArea" : "Denpasar",  "pickupAddress" : "jl. wiku no.1",  "paymentMethod" : "va", "paymentChannel" : "bca"};

ipaymu.redirectPayment(userData)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
```

Check Balance Example:

```js
import * as ipaymu from "ipaymu";

ipaymu.setVa("1179000899");
ipaymu.setApiKey("QbGcoO0Qds9sQFDmY0MWg1Tq.xtuh1");

ipaymu.checkBalance()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
```

Check Payment Method Example:

```js
ipaymu.setVa("1179000899");
ipaymu.setApiKey("QbGcoO0Qds9sQFDmY0MWg1Tq.xtuh1");

ipaymu.checkPaymentMethods()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
```

Check Payment Method Example:

```js
ipaymu.setVa("1179000899");
ipaymu.setApiKey("QbGcoO0Qds9sQFDmY0MWg1Tq.xtuh1");


//Your Transaction ID 
let transactionId = "96748";

ipaymu.checkTransaction(transactionId)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
```

Check History Transaction  Example:

```js
ipaymu.setVa("1179000899");
ipaymu.setApiKey("QbGcoO0Qds9sQFDmY0MWg1Tq.xtuh1");
ipaymu.setProd(false);

let data = {
    "id" : null,  // set null if no spesific transaction id
    "status" : "1", 
    "date" : "created_at", 
    "startdate" : "2023-03-01", 
    "enddate" : "2023-05-20", 
    "page" : "1", 
    "type" : "0",
    "orderBy" : "id", 
    "order" : "DESC", 
    "lang" : "en", 
    "limit" : "20",
    "bulkId" : null, // set null if no more than one spesific transaction id ex , if yes use array [96748,96749,96750]
    "account" : "1179000899", 
    "lockStatus" : "0"
};

ipaymu.historyTransaction(data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
```



