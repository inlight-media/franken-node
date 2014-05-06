# franken

NodeJS module for the Franken monitoring service. Franken is not yet publically available, the application and this module are currently in development.

## Getting Started

Install the module with: `npm install franken`

## Documentation

_(Coming soon)_

## Examples

### NodeJS Application

```javascript
var Franken = require('franken');

var franken = new Franken({
	applicationId: '', // your unique application ID from the Franken API
	publish: {
		key: '', // a publisher key from the Franken API used for authentication
		token: '' // the token that pairs with the key above
	}
}, 'sample-app');
franken.start(); // begin sending heartbeat every 5 seconds
```

## Release History

### 0.0.0

- ADDED: Initial Release

## License
Copyright (c) 2014 Inlight Media
Licensed under the MIT license.
