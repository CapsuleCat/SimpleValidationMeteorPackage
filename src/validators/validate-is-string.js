ValidateIsString = function() {
  var validate = function (data, message) {
    if (typeof data === 'string' ) {
      return true;
    } else {
      return message || 'Please enter a string';
    }
  };

  return {
    validate: validate
  }
};
