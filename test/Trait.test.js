"use strict";

const expect = require("chai").expect;
const Trait = require("../lib/Trait");
const cons = require("./sharedConstants");

describe("Trait.js", () => {
  it("able to start test", () => {
    expect(true).to.be.true;
  });

  it("class should be working", () => {
    let trait = new Trait();
    expect(trait instanceof Trait).to.be.true;
  });

  it("have .request function", () => {
    let trait = new Trait();
    expect(typeof trait.request).to.be.equal("function");
  });

  it("able to raw request to api", () => {
    let trait = new Trait();
    return trait
      .request("post", cons.va, cons.SANDBOX_BASE_URL + "/balance")
      .then(res => {
        expect(res).to.have.property("token");
        expect(res.token).to.be.a("string");
      })
      .catch(e => {
        throw e;
      });
  });
});
