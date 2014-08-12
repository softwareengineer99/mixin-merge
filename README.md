# object-merge

Creates a new mixin object c which has object a's own properties and object b's own properties

## Install

    $ npm install object-merge

## Usage

```javascript
mixin=require('object-merge')
Object.prototype.foobar=function(){}
var a = { foo: 'bar' },
    b = { bar: 'foos' };

mixin(a, b);
// => { foo: 'bar', bar: 'baz' }
```

## Tests

    $ npm install
    $ npm test

[![Build Status](https://secure.travis-ci.org/mashraqi/object-merge.png)](http://travis-ci.org/mashraqi/object-merge)

## Credits

  - [Frank Mashraqi](http://linkedin.com/in/mashraqi)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013 Frank Mashraqi <[http://mashraqi.com/](http://mashraqi.com/)>
