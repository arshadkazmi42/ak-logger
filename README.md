## ak-logger
[![npm version](https://badge.fury.io/js/ak-logger.svg)](https://badge.fury.io/js/ak-logger)
[![Dependencies](https://david-dm.org/arshadkazmi42/ak-logger.svg)](https://david-dm.org/arshadkazmi42/ak-logger)
[![npm Downloads](https://img.shields.io/npm/dm/ak-logger.svg)](https://www.npmjs.com/package/ak-logger)

## How to install?

[![NPM](https://nodei.co/npm/ak-logger.png)](https://www.npmjs.com/package/ak-logger/)

## How to use?

```js
var log = require('./index');

const person = { name: 'Gustavo', age: 23 }

// Printing debug log as an object
log.debug(person, "DEBUG LOGS");
/* Result

=====DEBUG LOGS=====
{ name: 'Gustavo', age: 23 }
=====DEBUG LOGS=====
*/

// Printing debug log as an string (stringify = true)
log.debug(person, "DEBUG_LOGS", true)
/* Result

=====DEBUG_LOGS=====
{"name":"Gustavo","age":23}
=====DEBUG_LOGS=====
*/


```

## Contributors

[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-logger/images/0)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-logger/links/0)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-logger/images/1)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-logger/links/1)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-logger/images/2)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-logger/links/2)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-logger/images/3)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-logger/links/3)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-logger/images/4)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-logger/links/4)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-logger/images/5)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-logger/links/5)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-logger/images/6)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-logger/links/6)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-logger/images/7)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-logger/links/7)


## Contributing Guidelines

Read the contributing guidelines [here](https://github.com/arshadkazmi42/ak-logger/blob/master/CONTRIBUTING.md)


