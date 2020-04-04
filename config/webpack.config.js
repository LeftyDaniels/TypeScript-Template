const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, '../src/public'),
    index: 'index.html',
    open: true,
  },
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, '../src/index.ts'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, './tsconfig.json'),
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
};
