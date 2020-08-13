"use strict";

const expect = require("chai").expect;
const Config = require("./../lib/Config");
const cons = require("./sharedConstants");

function generateConfig() {
  return {
    isProduction: false,
    va: cons.va,
    apiKey: cons.apiKey,
  };
}

describe("Config.js", () => {
  it("able to start test", () => {
    expect(true).to.be.true;
  });

  it("able to store config", () => {
    let configObj = new Config(generateConfig());
    expect(configObj.get().isProduction).to.be.false;
    expect(configObj.get().va).to.be.a("string");
    expect(configObj.get().apiKey).to.be.a("string");
    expect(configObj.get().va).to.be.equal(cons.va);
    expect(configObj.get().apiKey).to.be.equal(cons.apiKey);
  });

  it("able to set config", () => {
    let configObj = new Config();
    configObj.set(generateConfig());
    expect(configObj.get().isProduction).to.be.false;
    expect(configObj.get().va).to.be.a("string");
    expect(configObj.get().apiKey).to.be.a("string");
    expect(configObj.get().va).to.be.equal(cons.va);
    expect(configObj.get().apiKey).to.be.equal(cons.apiKey);
  });

  it("able to get correct API url environtment for Core Api", () => {
    let configObj = new Config();
    configObj.set({ isProduction: false });
    expect(configObj.getBaseUrl()).to.be.equal(cons.SANDBOX_BASE_URL);
    configObj.set({ isProduction: true });
    expect(configObj.getBaseUrl()).to.be.equal(cons.PRODUCTION_BASE_URL);
  });
});
