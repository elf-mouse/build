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
    handlebars: 'spm_modules/handlebars/2.0.0/dist/cjs/handlebars.js',
    'source-map': 'spm_modules/source-map/1.0.2/source-map.js',
    'arale-templatable': 'spm_modules/arale-templatable/0.10.0/src/templatable.js',
    main: 'public/js/main.js',
    plugin: 'public/js/vendor/plugin.js',
    async: 'public/js/vendor/async.js'
  },
  map: [
    [/^(.*\.(?:html|css|js|tpl))(.*)$/i, '$1?v=' + Date.now()]
  ],
  preload: [
    'css',
    'text'
  ]
});
