/**
 * Test Validate helper object
 */
Tinytest.add('Validate can check a given validator', function (test) {
  test.equal(true, Validate.check(ValidateIsString, 'wow'));
  test.equal('Please enter a string', Validate.check(ValidateIsString, 1));
});

Tinytest.add('Validate can chain validators and return a message', function (test) {
  var results = Validate.chain(
    Validate.check(ValidateIsString, 'wow'),
    Validate.check(ValidateIsString, 1)
  );

  test.equal(1, results.length);
  test.equal('Please enter a string', results[0]);
});

Tinytest.add('Validate can chain validators and return messages', function (test) {
  var results = Validate.chain(
    Validate.check(ValidateIsString, 1),
    Validate.check(ValidateIsString, 1, 'my message')
  );

  test.equal(2, results.length);
  test.equal('Please enter a string', results[0]);
  test.equal('my message', results[1]);
});

Tinytest.add('Validate can chain validators and return true', function (test) {
  var results = Validate.chain(
    Validate.check(ValidateIsString, 'wow'),
    Validate.check(ValidateIsString, 'very doge', 'my message')
  );

  test.equal(true, results);
});