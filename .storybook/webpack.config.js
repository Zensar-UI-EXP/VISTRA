module.exports = ({ config }) => {
  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]

  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  config.module.rules[0].use[0].loader = require.resolve("babel-loader")

  // use @babel/preset-react for JSX and env (instead of staged presets)
  config.module.rules[0].use[0].options.presets = [
    require.resolve("@babel/preset-react"),
    require.resolve("@babel/preset-env"),
  ]
  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  config.resolve.mainFields = ["browser", "module", "main"]
  
  config.module.rules.push({
    test: /\.stories\.js?$/,
    loaders: [{
      loader: require.resolve('@storybook/source-loader'),
      options: { 
        parser: 'typescript',
        uglyCommentsRegex: [/^eslint-.*/, /^global.*/],
        injectDecorator: true,
        prettierConfig: {
          printWidth: 100,
          tabWidth: 2,
          bracketSpacing: true,
          trailingComma: 'es5',
          singleQuote: true,
        }
      }
    }],
    enforce: 'pre',
  });

  return config
}
