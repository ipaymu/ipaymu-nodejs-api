# ipaymu Plugins Node .js V.1.0.0

The [ipaymu](https://ipaymu.com/) library exported as [Node.js](https://nodejs.org/) modules.

## Installation

Using npm:

```shell
$ npm i -g npm
$ npm i --save gusmang-ipaymu-node
```

Import iPaymu Package First:

```js
import * as ipaymu from "ipaymu";
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
import * as ipaymu from "gusmang-ipaymu-node";
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

See the [package source](https://github.com/gusmang/ipaymu-plugins-node/blob/main) for more details.
