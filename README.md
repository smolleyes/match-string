# match-string

match-string is a javascript function who return a regexp for match a string with all of his accents possible

## Installation

you install it with npm :

    npm i match-string

## Usage

You can include it easly :

### ES6

```javascript
import m from "match-string";
```

### ES5

```javascript
var m = require("match-string");
```

### Syntaxe

```javascript
m("test"); // return /t[eèéêë][sß]t/gi
m("test", "i"); // return /t[eèéêë][sß]t/i

var exp = m("test");
const text = "this is a test Test TEST tést tèst";

text.replace(exp, "!$&!"); // retrun "this is a !test! !Test! !TEST! !tést! !tèst!"
```
