/** 
 * Test ValidateNotEmpty
 */
Tinytest.add('ValidateNotEmpty returns true', function (test) {
  var v = new ValidateNotEmpty();

  test.equal(true, v.validate('wow'));
});

Tinytest.add('ValidateNotEmpty returns message', function (test) {
  var v = new ValidateNotEmpty();

  test.equal('Please enter some text', v.validate(''));
});

Tinytest.add('ValidateNotEmpty returns custom message', function (test) {
  var v = new ValidateNotEmpty();

  test.equal('custom message', v.validate('', 'custom message'));
});
