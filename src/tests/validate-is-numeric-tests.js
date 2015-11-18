/** 
 * Test ValidateIsNumeric
 */
Tinytest.add('ValidateIsNumeric returns true', function (test) {
  var v = new ValidateIsNumeric();

  test.equal(true, v.validate(1));
  test.equal(true, v.validate('1'));
});

Tinytest.add('ValidateIsNumeric returns message', function (test) {
  var v = new ValidateIsNumeric();

  test.equal('Please enter a number', v.validate('asdf'));
});

Tinytest.add('ValidateIsNumeric returns custom message', function (test) {
  var v = new ValidateIsNumeric();

  test.equal('custom message', v.validate('asdf', 'custom message'));
});
