"use strict";

const Config = require("./Config");
const Trait = require("./Trait").default;
/**
 * CoreApi object able to do API request to iPaymu Core API
 */
class ApiRequest {
  /**
   * Initiate with options
   * @param  {Object} options - should have these props:
   * isProduction, apiKey, va
   */
  constructor(options = { isProduction: false, apiKey: "", va: "" }) {
    this.Config = new Config(options);
    this.Trait = new Trait();
  }
  /**
   * Do `/charge` API request to Core API
   * @param  {Object} parameter - object of Core API JSON body as parameter, will be converted to JSON (more params detail refer to: https://api-docs.iPaymu.com)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  balance(parameter = {}) {
    let apiUrl = this.Config.getBaseUrl() + "/balance";
    let responsePromise = this.Trait.request(
      "post",
      this.Config.get().va,
      apiUrl,
      parameter
    );
    return responsePromise;
  }

  /**
   * Do `/charge` API request to Core API
   * @param  {Object} parameter - object of Core API JSON body as parameter, will be converted to JSON (more params detail refer to: https://api-docs.iPaymu.com)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  history(parameter = {}) {
    let apiUrl = this.Config.getBaseUrl() + "/history";
    let responsePromise = this.Trait.request(
      "post",
      this.Config.get().va,
      apiUrl,
      parameter
    );
    return responsePromise;
  }
  /**
   * Do `/charge` API request to Core API
   * @param  {Object} parameter - object of Core API JSON body as parameter, will be converted to JSON (more params detail refer to: https://api-docs.iPaymu.com)
   * @return {Promise} - Promise contains Object from JSON decoded response
   */
  transaction(parameter = {}) {
    let apiUrl = this.Config.getBaseUrl() + "/transaction";
    let responsePromise = this.Trait.request(
      "post",
      this.Config.get().va,
      apiUrl,
      parameter
    );
    return responsePromise;
  }
}
module.exports = ApiRequest;
