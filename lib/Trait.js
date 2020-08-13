"use strict";

const axios = require("axios");
const CryptoJS = require("crypto-js");
const Exception = require("./Exception");

/**
 * Wrapper of Axios to do API request to iPaymu API
 * @return {Promise} of API response, or exception during request
 * capable to do HTTP `request`
 */
function formatDate() {
  this.today = new Date();
  this.yyyy = this.today.getFullYear();
  this.mm = String(this.today.getMonth() + 1).padStart(2, "0");
  this.dd = String(this.today.getDate()).padStart(2, "0");
  this.h = String(this.today.getHours()).padStart(2, "0");
  this.m = String(this.today.getMinutes()).padStart(2, "0");
  this.s = String(this.today.getSeconds()).padStart(2, "0");
  this.timestamp = this.yyyy + this.mm + this.dd + this.h + this.m + this.s;
  return this.timestamp;
}

var formatDate = new formatDate();

function genSignature(data, credential = {}) {
  this.apikey = credential.apikey;
  this.va = credential.va;
  this.bodyEncrypt = CryptoJS.SHA256(JSON.stringify(data));
  this.stringtosign =
    "POST:" + this.va + ":" + this.bodyEncrypt + ":" + this.apikey;
  this.signature = CryptoJS.enc.Hex.stringify(
    CryptoJS.HmacSHA256(stringtosign, apikey)
  );
  return this.signature;
}

class Trait {
  constructor() {
    this.http_client = axios;
  }

  request(httpMethod, credential, requestUrl, parameter = {}) {
    let signature = genSignature.signature;
    let timestamp = formatDate.timestamp;
    let payload = parameter;
    let headers = {
      "content-type": "application/json",
      accept: "application/json",
      // "user-agent": "ipaymu-nodejs-api/1.0.0",
      va: credential.va,
      signature: signature,
      timestamp: timestamp,
    };
    return new Promise(function (resolve, reject) {
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
        params: httpMethod == "get" ? payload : null,
      })
        .then(function (res) {
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
        .catch(function (err) {
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
