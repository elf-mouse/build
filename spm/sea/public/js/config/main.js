var jsBasePath = jsBasePath || '/';

if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}

seajs.config({
  base: jsBasePath,
  alias: {
    css: 'spm_modules/seajs-css/1.0.5/dist/seajs-css.js',
    text: 'spm_modules/seajs-text/1.1.0/dist/seajs-text.js',
    jquery: 'spm_modules/jquery/1.11.3/dist/jquery.js',
    es5: 'spm_modules/es5-shim/4.0.5/es5-shim.js',
    main: 'public/js/main.js',
    plugin: 'public/js/vendor/plugin.js',
    async: 'public/js/vendor/async.js'
  },
  map: [
    [/^(.*\.(?:css|js|tpl))(.*)$/i, '$1?v=' + Date.now()]
  ],
  preload: [
    Function.prototype.bind ? '' : 'es5',
    'css',
    'text'
  ]
});
