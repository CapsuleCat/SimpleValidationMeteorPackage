# Simple Validation

[![Build Status](https://travis-ci.org/idmontie/meteor-simple-validation.svg)](https://travis-ci.org/idmontie/meteor-simple-validation)

Core meteor validation package for checking data, nothing more

## Validate Helper Object

This package provides two helper functions for doing validation:

### Validate.check

```js
Validate.check( validator, args... );
```

Provide a validator and any additional arguments that validator may require

Example:

```js
Validate.check( VadliateIsString, 1 ) === 'Please enter a string';
```

### Validate.chain

```js
Validate.chain( checks... );
```

Provide a series of `Validate.check` responses, this will then merge the results
of those checks into an array of messages, or true on success of all checks.

Example:

```js
Validate.chain(
    Validate.check(ValidateIsString, 1),
    Validate.check(ValidateIsString, 1, 'my message')
) === [ "Please enter a string", "my message" ];
```

## Validators

All validators included, and any validators you write should adhere to the following:

* Return true on success.
* Return a string with an appropriate error meessage on failure.

This package comes with 3 validatos for your convenience:

### ValidateIsNumeric

```
ValidateIsNumeric.validate( data, optionalMessage )
```

### ValidateIsString

```
ValidateIsString.validate( data, optionalMessage )
```

### ValidateNotEmpty

```
ValidateNotEmpty.validate( data, optionalMessage )
```

## Running Tests

```
meteor test-packages ./
```