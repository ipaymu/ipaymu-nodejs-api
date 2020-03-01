"use strict";

const _ = require("lodash");
/**
 *  Config Object that used to store isProduction, apiKey, va.
 *  And also API base urls.
 */
class Config {
  /**
   * Initiate with options
   * @param  {Object} options - should have these props:
   * isProduction, apiKey, va
   */
  constructor(options = { isProduction: false, apiKey: "", va: "" }) {
    this.isProduction = false;
    this.apiKey = "";
    this.va = "";

    this.set(options);
  }
  /**
   * Return config stored
   * @return {Object} object contains isProduction, apiKey, va
   */
  get() {
    let currentConfig = {
      isProduction: this.isProduction,
      apiKey: this.apiKey,
      va: this.va
    };
    return currentConfig;
  }
  /**
   * Set config stored
   * @param {Object} options - object contains isProduction, apiKey, va]
   */
  set(options) {
    let currentConfig = {
      isProduction: this.isProduction,
      apiKey: this.apiKey,
      va: this.va
    };
    const parsedOptions = _.pick(options, ["isProduction", "apiKey", "va"]);
    let mergedConfig = _.merge({}, currentConfig, parsedOptions);

    this.isProduction = mergedConfig.isProduction;
    this.apiKey = mergedConfig.apiKey;
    this.va = mergedConfig.va;
  }
  /**
   * @return {String} core api base url
   */
  getBaseUrl() {
    return this.isProduction
      ? Config.CORE_PRODUCTION_BASE_URL
      : Config.CORE_SANDBOX_BASE_URL;
  }
}

// Static vars
Config.SANDBOX_BASE_URL = "https://sandbox.ipaymu.com/api/v2";
Config.PRODUCTION_BASE_URL = "https://my.ipaymu.com/api/v2";

module.exports = Config;
