Package.describe({
  name: 'rgnevashev:angular-toast',
  version: '1.7.0',
  summary: 'Angular port of CodeSeven/toastr.',
  git: 'https://github.com/Foxandxss/angular-toastr',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.addFiles([
    "dist/angular-toastr.tpls.js",
    "dist/angular-toastr.css"
  ], 'client');
});
