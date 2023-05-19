"use strict";

const expect = require("chai").expect;
const Config = require("../dist/index");
const cons = require("./sharedConstants");

Config.setProd(true);
Config.setVa("1179000899");

describe("Config.js", () => {
  it("able to start test", () => {
    expect(true).to.be.true;
  });

  it("able to change production mode", () => {
    //let configObj = new Config(generateConfig());
      expect(Config.getProd()).to.be.true;
    // expect(configObj.get().va).to.be.a("string");
    // expect(configObj.get().apiKey).to.be.a("string");
    // expect(configObj.get().va).to.be.equal(cons.va);
    // expect(configObj.get().apiKey).to.be.equal(cons.apiKey);
  });

  it("able to set Api Key Dynamic", () => {
  });

  it("able to set Virtual Account Dynamic", () => {
  });


});

