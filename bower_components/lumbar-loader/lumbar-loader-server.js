/*jshint evil: true */
/*global loadResources, lumbarLoader */
lumbarLoader.loadJS = function(moduleName, callback, options) {
  return loadResources(moduleName, 'js', callback, function(href, callback) {
    window.loadInContext(href.replace(/\.js$/, '-server.js'), callback);
  }).length;
};
lumbarLoader.loadCSS = function(moduleName, callback, options) {
  loadResources(moduleName, 'css', callback, function(href) {
    $('head').append('<link rel="stylesheet" href="' + href + '" data-lumbar="true">');
  });

  return 0;
};
