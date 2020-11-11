const webpack = require('webpack')
const STRICT_STRING = '"use strict";\n'
const REPLACEMENT_STRING = ';\n'

class RemoveStrictPlugin {
  apply (compiler) {
    compiler.hooks.make.tap('RemoveStrictPlugin', (compilation) => {
      const hook = webpack.javascript.JavascriptModulesPlugin.getCompilationHooks(compilation)
      hook.render.tap('DestoryStrict', (moduleSource) => {
        const index = moduleSource.source().indexOf(STRICT_STRING)
        if (index > -1) {
          const sourceCode = moduleSource.source().split(STRICT_STRING).join(REPLACEMENT_STRING)
          return new webpack.sources.RawSource(sourceCode)
        }
        return moduleSource
      })
    })
  }
}

module.exports = RemoveStrictPlugin
