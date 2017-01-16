module.exports = {
  context: __dirname,
  entry: {
    spec: [
      './spec/binarySearchSpec.js',
      './spec/primesSpec.js',
      './spec/removeArrayDupsSpec.js',
      './spec/palindromeSpec.js'
    ]
  },

  output: {
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /(\.js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
