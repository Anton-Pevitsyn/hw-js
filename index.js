let value = '1';
let toBoolean = Boolean(value);
console.log('value', toBoolean);
console.log('typeof:', typeof toBoolean);

value = '';
toBoolean = Boolean(value);
console.log('value', toBoolean);
console.log('typeof:', typeof toBoolean);

toBoolean = !!value;
console.log('value', toBoolean);
console.log('typeof:', typeof toBoolean);

value = ' ';
toBoolean = Boolean(value);
console.log('value', toBoolean);
console.log('typeof:', typeof toBoolean);
toBoolean = !!value;
console.log('value', toBoolean);
console.log('typeof:', typeof toBoolean);

value = NaN;
toBoolean = Boolean(value);
console.log('value', toBoolean);
console.log('typeof:', typeof toBoolean);
toBoolean = !!value;
console.log('value', toBoolean);
console.log('typeof:', typeof toBoolean);

value = 'fgdg';
toBoolean = Boolean(value);
console.log('value', toBoolean);
console.log('typeof:', typeof toBoolean);
toBoolean = !!value;
console.log('value', toBoolean);
console.log('typeof:', typeof toBoolean);

value = -2;
toBoolean = Boolean(value);
console.log('value', toBoolean);
console.log('typeof:', typeof toBoolean);
toBoolean = !!value;
console.log('value', toBoolean);
console.log('typeof:', typeof toBoolean);

value = undefined;
toBoolean = Boolean(value);
console.log('value', toBoolean);
console.log('typeof:', typeof toBoolean);
toBoolean = !!value;
console.log('value', toBoolean);
console.log('typeof:', typeof toBoolean);

value = Infinity;
toBoolean = Boolean(value);
console.log('value', toBoolean);
console.log('typeof:', typeof toBoolean);
toBoolean = !!value;
console.log('value', toBoolean);
console.log('typeof:', typeof toBoolean);