## ak-logger

[![Build](https://github.com/arshadkazmi42/ak-logger/actions/workflows/nodejs.yml/badge.svg)](https://github.com/arshadkazmi42/ak-logger/actions/workflows/nodejs.yml)
[![NPM Version](https://img.shields.io/npm/v/ak-logger.svg)](https://www.npmjs.com/package/ak-logger)
[![NPM Downloads](https://img.shields.io/npm/dt/ak-logger.svg)](https://www.npmjs.com/package/ak-logger)
[![Github Repo Size](https://img.shields.io/github/repo-size/arshadkazmi42/ak-logger.svg)](https://github.com/arshadkazmi42/ak-logger)
[![LICENSE](https://img.shields.io/npm/l/ak-logger.svg)](https://github.com/arshadkazmi42/ak-logger/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/ak-logger.svg)](https://github.com/arshadkazmi42/ak-logger/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/arshadkazmi42/ak-logger.svg)](https://github.com/arshadkazmi42/ak-logger/commits/master)

## How to install?

[![NPM](https://nodei.co/npm/ak-logger.png)](https://www.npmjs.com/package/ak-logger/)

## How to use?

```js
var log = require('ak-logger');

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

## Contributing Guidelines

Read the contributing guidelines [here](https://github.com/arshadkazmi42/ak-logger/blob/master/CONTRIBUTING.md)


