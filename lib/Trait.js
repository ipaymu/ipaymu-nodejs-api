"use strict";

const axios = require("axios");
const CryptoJS = require("crypto-js");
const Exception = require("./Exception");

/**
 * Wrapper of Axios to do API request to iPaymu API
 * @return {Promise} of API response, or exception during request
 * capable to do HTTP `request`
 */
class Trait {
  genSignature(data, credential = {}) {
    var apikey = credential.apikey;
    var va = credential.va;
    var bodyEncrypt = CryptoJS.SHA256(JSON.stringify(data));
    var stringtosign = "POST:" + va + ":" + bodyEncrypt + ":" + apikey;
    var signature = CryptoJS.enc.Hex.stringify(
      CryptoJS.HmacSHA256(stringtosign, apikey)
    );
    return signature;
  }

  formatDate() {
    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var dd = String(today.getDate()).padStart(2, "0");
    var h = String(today.getHours()).padStart(2, "0");
    var m = String(today.getMinutes()).padStart(2, "0");
    var s = String(today.getSeconds()).padStart(2, "0");
    var timestamp = yyyy + mm + dd + h + m + s;
    return timestamp;
  }

  constructor() {
    this.http_client = axios;
  }

  request(httpMethod, credential, requestUrl, parameter = {}) {
    let signature = this.genSignature((parameter = {}), credential);
    let timestamp = this.formatDate();
    let payload = parameter;
    let headers = {
      "content-type": "application/json",
      accept: "application/json",
      // "user-agent": "ipaymu-nodejs-api/1.0.0",
      va: credential.va,
      signature: signature,
      timestamp: timestamp
    };
    return new Promise(function(resolve, reject) {
      // Reject if param is not JSON
      if (typeof parameter === "string" || parameter instanceof String) {
        try {
          parameter = JSON.parse(parameter);
        } catch (err) {
          reject(
            new Exception(
              `fail to parse 'parameters' string as JSON. Use JSON string or Object as 'parameters'. with message: ${err}`
            )
          );
        }
      }
      let response = axios({
        method: httpMethod,
        headers: headers,
        url: requestUrl,
        data: httpMethod != "get" ? payload : null,
        params: httpMethod == "get" ? payload : null
      })
        .then(function(res) {
          // Reject core API error status code
          if (
            res.data.hasOwnProperty("status_code") &&
            res.data.status_code >= 300 &&
            res.data.status_code != 407
          ) {
            reject(
              new Exception(
                `API is returning error. HTTP status code: ${
                  res.data.status_code
                }. API response: ${JSON.stringify(res.data)}`,
                res.data.status_code,
                res.data,
                res
              )
            );
          }
          resolve(res.data);
        })
        .catch(function(err) {
          let res = err.response;
          // Reject API error HTTP status code
          if (res.status >= 300) {
            reject(
              new Exception(
                `API is returning error. HTTP status code: ${
                  res.status
                }. API response: ${JSON.stringify(res.data)}`,
                res.status,
                res.data,
                res
              )
            );
          }
          reject(err);
        });
    });
  }
}

module.exports = Trait;
