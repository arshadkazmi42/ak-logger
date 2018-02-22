var mocha = require("mocha");
var describe = mocha.describe;
var it = mocha.it;
var arLogger = require("../index");

describe("check all logs", function () {

  it("info log", function () {
    arLogger.info("INFO Logs", "info", false);
  });

  it("debug log", function () {
    arLogger.debug("DEBUG Logs", "debug", false);
  });

  it("error log", function () {
    arLogger.error("ERROR Logs", "error", false);
  });

  it("info log with stringify", function () {
    arLogger.info({"message": "INFO Logs"}, "info", true);
  });

});