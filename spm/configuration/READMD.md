# 配置项

> spm 的项目可通过修改 package.json 来配置构建参数。

```
{
  "name": "",
  "version": "",

  "spm": {

    "build": {
      // -- 依赖解析
      // 指定不解析的模块或文件
      "global": {
        "react": "React",
        "./a": "AAA"
      },
      // 开启或禁用 node 模块的 polyfills
      "node": {
        "global": false
      },

      // -- 性能
      // 提取依赖为 vendor.js
      "vendor": ["jquery", "underscore"],
      // 提取公共 chunk 为 common.js
      "common": true,
      "base64": {},

      // -- 语言类
      "babel": {},
      "uglify": {},
      "autoprefixer": {},
      "less": {},
      "coffee": {},
      "jsx": {},
      "handlebars": {},

      // -- 输出
      "dest": "./build",
      "hash": true,
      // 提取入口 js 文件依赖链中的 CSS chunk，输出和入口文件同名的 css 文件
      "extractCSS": true,
      // 输出的包名
      "library": "",
      // this, umd, common, amd, var 等等
      "libraryTarget": "",
      // 等同于 libraryTarget: umd, library: Foo
      "umd": "Foo",

      // -- 扩展
      "loader": {
        ".js": "+jsdc-babel"
      },

      // -- 调试
      "define": {
        "DEBUG": false
      }
    },

    "server": {
      "devtool": "#eval",
      "define": {
        "DEBUG": false
      }
    },

    "registry": ""
  }
}
```
