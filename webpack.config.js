
module.exports = {
  entry: './src/js/main.js',
  output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
  },
  module: {
      rules: [
          {
              enforce: 'pre',
              test: /.js$/,
              exclude: /node_modules/,
              loader: 'eslint-webpack-plugin'
          },
          {
          test: /.m?js$/,
          exclude: /node_modules/,
          use: {
              loader: 'babel-loader',
              options: {
                  presets: ['@babel/preset-env']
              }
          }
      }]
  }
}