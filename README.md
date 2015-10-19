#btn-play

Youtube like animated play button based on the fabulous work of [@LeaVerou](https://twitter.com/leaverou).


#Install

```bash
npm install --save-dev btn-play
```

# Usage

1. Embed the build files
	
	```html
	<script src="build/play-btn.js">
	<link rel="stylesheet" href="build/style.css">
	```
	
2. Add angular dependency
	
	```javascript
	angular.module('your-app', ['pd.btn-play']);
	```

3. Use the directive
	
	```html
	<button btn-play="playState" ng-click="playState!=playState"></button>
	```


# Usage with browserify

1. Embed styles
	
	```html
	<link rel="stylesheet" href="build/style.css">
	```
	
2. Require module

	```javascript
	angular.module('your-app', [
		require('btn-play').name
	]);
	```

3. Use directive
	
	```html
	<button btn-play="playState" ng-click="playState!=playState"></button>
	```



### TBC ... ;)

#Author

Christian Blaschke <mail@platdesign.de>
