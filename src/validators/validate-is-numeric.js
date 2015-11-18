ValidateIsNumeric = function() {
  var validate = function (data, message) {
    if (! isNaN(parseFloat(data)) ) {
      return true;
    } else {
      return message || 'Please enter a number';
    }
  };

  return {
    validate: validate
  }
};
