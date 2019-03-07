const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
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
          test: /\.less$/,
          loader: ExtractTextPlugin.extract({ 
            fallback: 'style-loader', 
            use: [{
                loader: 'css-loader',
                options: { modules: 'global' },
              },
              'postcss-loader',
              'less-loader'
            ]
          })
        },
      ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
  };