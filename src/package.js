Package.describe({
  name: 'idmontie:simple-validation',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Core validation package for checking data, nothing more',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/idmontie/meteor-simple-validation',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: '../README.md'
});

var load = function(api) {
  api.addFiles('core/validate.js');
  api.addFiles('validators/validate-not-empty.js');
  api.addFiles('validators/validate-is-string.js');
  api.addFiles('validators/validate-is-numeric.js');
}

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');

  load(api);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');

  load(api);

  api.addFiles('tests/validate-tests.js');
  api.addFiles('tests/validate-not-empty-tests.js');
  api.addFiles('tests/validate-is-string-tests.js');
  api.addFiles('tests/validate-is-numeric-tests.js');
});
