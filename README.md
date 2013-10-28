JHUtils.js
==========

This is a more updated version of my jsLibrary repo, but without all the jQuery nonsense and some added methods/functionality.


## Files
JHUtils.js - Unminified version.
JHUtils.min.js - Minified version
JHUtils.underscore.js - Unminified Version (requires underscorejs to be available)
JHUtils.underscore.min.js - Minified Version  (requires underscorejs to be available)

## Documentation

### JHUtils.ascSort(targetArr)

Sorts the received array's values in ASC order and returns a new array for it.
Note: This method only works for a 2-d array such as var myArray = [1,2,3,4,5..];

#### Example
var originalArr = ['z','b','a'];
var sortedArr = JHUtils.ascSort(originalArr);
// sortedArr == ['a','b','z'];


### JHUtils.dataStore(itemValue)
This is basically a primative version of underscorejs' memoize().
[See their documentation for more information.](http://underscorejs.org/#memoize)


### JHUtils.arrayWithDistinctValuesFromArray(arr)
Returns an array composed of all unique values from the received array.
Note: This method only works for a 2-d array such as var myArray = [1,2,3,4,5..];


### JHUtils.isInteger(value)
Just a quick helper method to test for a valid integer.
There may obviously be better, more effecient ways of doing this sort of thing - but such things are a bit more overkill for my tastes.
In the real world (for me at least) - this does the job just fine.


### JHUtils.urlToArray(urlString)
[Check the documentation at coderholic for usage and original source](http://www.coderholic.com/javascript-the-good-parts/)


### JHUtils.log(msg, obj)
Just a helper method to log to console.  obj is an optional value that, if supplied, will have its raw value printed immediately after the message.

#### Example
JHUtils.log("Hello World");
JHUtils.log("All Your Base ", { are: "belong", to: "us" });
