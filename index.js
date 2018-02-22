"use strict";

/**
 * INFO Logging
 * @param object
 * @param title
 * @param isStringify
 */
function infoLog(object, title, isStringify) {
  console.log("\n#####" + title + "#####");
  console.log((isStringify) ? JSON.stringify(object) : object);
  console.log("#####" + title + "#####\n");
}

/**
 * DEBUG Logging
 * @param object
 * @param title
 * @param isStringify
 */
function debugLog(object, title, isStringify) {
  console.warn("\n=====" + title + "=====");
  console.warn((isStringify) ? JSON.stringify(object) : object);
  console.warn("=====" + title + "=====\n");
}

/**
 * ERROR Logging
 * @param object
 * @param title
 * @param isStringify
 */
function errorLog(object, title, isStringify) {
  console.error("\n*****" + title + "******");
  console.error((isStringify) ? JSON.stringify(object) : object);
  console.error("*****" + title + "******\n");
}


module.exports.info = infoLog;
module.exports.debug = debugLog;
module.exports.error = errorLog;