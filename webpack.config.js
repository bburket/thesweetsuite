const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin  = require('html-webpack-plugin')

module.exports = (env, argv) => {
  console.log(`${argv.mode}`)
  const output = {
    entry: {
      app: './src/index.js',
      bootstrap: './src/bootstrap.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[hash].bundle.js'
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
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
      ]
    }
  
 
  } 

  if (argv.mode === "development") {
    output.devtool = "source-map";
  }
  console.log(`output ${JSON.stringify(output)}`)
  return output;
};