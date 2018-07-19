# Code along for ES6 Javascript course - by Stephen Grider

Learning ES6 Javascript code

## Array Helpers

1. forEach

```
const numbers = [2, 5, 7, 15, 26];
let total = 0;

numbers.forEach(function(number) {
  total += number;
});

total; // 55
```

2. ...