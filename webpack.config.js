const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin  = require('html-webpack-plugin')

module.exports = (env, argv) => {
  console.log(`${argv.mode}`)
  const output = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[hash].bundle.js'
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist')
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'index.html'
      })
    ],
    devtool: argv.mode === 'production' ? null : 'source-map'
 
  } 

  console.log(`output ${JSON.stringify(output)}`)
  return output;
};