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
    es5: 'spm_modules/es5-shim/4.0.5/es5-shim.js',
    jquery: 'spm_modules/jquery/1.11.3/dist/jquery.js',
    handlebars: 'spm_modules/handlebars/2.0.0/dist/cjs/handlebars.js',
    'source-map': 'spm_modules/source-map/1.0.2/source-map.js',
    /*'arale-base': 'spm_modules/arale-base/1.2.0/base.js',
    'arale-class': 'spm_modules/arale-class/1.2.0/class.js',
    'arale-events': 'spm_modules/arale-events/1.2.0/events.js',
    'arale-widget': 'spm_modules/arale-widget/1.2.0/widget.js',*/
    'arale-templatable': 'spm_modules/arale-templatable/0.10.0/src/templatable.js',
    main: 'public/js/main.js',
    plugin: 'public/js/vendor/plugin.js',
    async: 'public/js/vendor/async.js'
  },
  /*map: [
    [/^(.*\.(?:css|js|tpl))(.*)$/i, '$1?v=' + Date.now()]
  ],*/
  preload: [
    Function.prototype.bind ? '' : 'es5',
    'css',
    'text'
  ]
});
