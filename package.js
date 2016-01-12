Package.describe({
  name: 'fourquet:jquery-toast',
  version: '2.1.2_1',
  summary: 'Toast for Meteor (jQuery)',
  git: 'https://github.com/fourquet/meteor-package-jquery-toast',
  documentation: 'README.md',
  license: 'LICENSE',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('chrismbeckett:toastr@2.1.2_1');
  api.addFiles('toast.js', 'client');
  api.export('Toast', 'client');
});
