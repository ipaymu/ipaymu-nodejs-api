// import * as ipaymu from "ipaymu";
"use strict";

const expect = require("chai").expect;
const assert = require("assert");
const Config = require("../dist/index");
const cons = require("./sharedConstants");
const directPayments = require("./fetching/directPayment");
const redirectPayments = require("./fetching/redirectPayment");
const checkTransactions = require("./fetching/checkTransactions");

Config.setProd(cons.production);
Config.setVa(cons.va);
Config.setApiKey(cons.apiKey);

describe("Config.js", () => {
  it("able to start test", () => {
    expect(true).to.be.true;
  });

  it("able to set Config", () => {
    expect(cons.va).to.be.a("string");
    expect(cons.apiKey).to.be.a("string");
    expect(cons.production).to.be.a("boolean");
  });

  it("able to check balance", async () => {
    let response = await Config.checkBalance();
    assert.equal(response.Status , 200); 
  });
  
  it("able to check Payment Methods", async () => {
    let response = await Config.checkPaymentMethods();
    assert.equal(response.Status , 200);
  });

  it("able to send Request Direct Payment", async () => {
      let response = await directPayments(cons.production , cons.va , cons.apiKey);
      assert.equal(response.Status , 200);
  });

  it("able to send Request reDirect Payment", async () => {
    let response = await redirectPayments(cons.production , cons.va , cons.apiKey);
    assert.equal(response.Status , 200);
  });

  it("able to check Detail Transactions by ID", async () => {
    let response = await checkTransactions(cons.production , cons.va , cons.apiKey , "96748");
    assert.equal(response.Status , 200);
  });

  it("failed 401 to check production balance using Sandbox Credentials", async () => {
    Config.setProd(true);
    let response = await Config.checkBalance();

    assert.equal(response.Status , 401) 
  });

  it("failed 401 to check production Payment Methods using Sandbox Credentials", async () => {
    Config.setProd(true);
    let response = await Config.checkPaymentMethods();

    assert.equal(response.Status , 401) 
  });

  it("failed 401 to send Production Request Direct Payment using Sandbox Credentials", async () => {
    //Config.setProd(true);
    let response = await directPayments(true, cons.va , cons.apiKey);
    assert.equal(response.Status , 401);
  });

  it("failed 401 to send Production Request ReDirect Payment using Sandbox Credentials", async () => {
    //Config.setProd(true);
    let response = await redirectPayments(true , cons.va , cons.apiKey);
    assert.equal(response.Status , 401);
  });

  it("failed 401 to check Production Detail Transactions by ID using Sandbox Credentials", async () => {
    //Config.setProd(true);
    let response = await checkTransactions(true , cons.va , cons.apiKey , "96748");
    assert.equal(response.Status , 401);
  });

});

