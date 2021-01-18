【Loader】：用于对模块源码的转换，loader描述了webpack如何处理非javascript模块，并且在buld中引入这些依赖。loader可以将文件从不同的语言（如TypeScript）转换为JavaScript，或者将内联图像转换为data URL。比如说：CSS-Loader，Style-Loader等。

loader的使用很简单：

在webpack.config.js中指定loader。module.rules可以指定多个loader，对项目中的各个loader有个全局概览。

loader是运行在NodeJS中，可以用options对象进行配置。plugin可以为loader带来更多特性。loader可以进行压缩，打包，语言翻译等等。

loader从模板路径解析，npm install node_modules。也可以自定义loader，命名XXX-loader。

语言类的处理器loader：CoffeeScript，TypeScript，ESNext（Bable）,Sass,Less,Stylus。任何开发技术栈都可以使用webpack。

【Plugin】：目的在于解决loader无法实现的其他事，从打包优化和压缩，到重新定义环境变量，功能强大到可以用来处理各种各样的任务。webpack提供了很多开箱即用的插件：CommonChunkPlugin主要用于提取第三方库和公共模块，避免首屏加载的bundle文件，或者按需加载的bundle文件体积过大，导致加载时间过长，是一把优化的利器。而在多页面应用中，更是能够为每个页面间的应用程序共享代码创建bundle。

webpack功能强大，难点在于它的配置文件，webpack4默认不需要配置文件，可以通过mode选项为webpack指定了一些默认的配置，mode分为：development/production，默认是production。

插件可以携带参数，所以在plugins属性传入new实例。

【Mode】可以在config文件里面配置，也可以在CLI参数中配置：webpack --mode=production（一般会选择在CLI，也就是npm scripts里面进行配置）。

在webpack4以下版本，webpack3.XX，通过plugins进行环境变量的配置。

【resolve】模块，resolver是个库，帮助webpack找到bundle需要引入的模块代码，打包时，webpack使用enhanced-resolve来解析路径。 

复制代码
 resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  }
复制代码
 【Manifest】管理所有模块之间的交互。runtime将能够查询模块标识符，检索出背后对应的模块。

问题1：webpack通过使用bundle计算content hash作为文件名称，文件修改，新的content hash执向新的文件，缓存无效，但是文件内容没有修改，计算的hash还是会改变，因为，runtime和manifest的注入在每次构建都会发生变化。要想解决这个文件可以了解更多的runtime和manifest。

webpack原理：从配置文件定义的模块列表开始，处理应用程序，从入口文件开始递归构建一个依赖图，然后将所有模块打包为少量的bundle，通常只有一个，可由浏览器加载。