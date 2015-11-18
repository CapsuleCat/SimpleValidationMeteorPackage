/** 
 * Test ValidateIsString
 */
Tinytest.add('ValidateIsString returns true', function (test) {
  var v = new ValidateIsString();

  test.equal(true, v.validate('wow'));
});

Tinytest.add('ValidateIsString returns message', function (test) {
  var v = new ValidateIsString();

  test.equal('Please enter a string', v.validate(1));
});

Tinytest.add('ValidateIsString returns custom message', function (test) {
  var v = new ValidateIsString();

  test.equal('custom message', v.validate(1, 'custom message'));
});
