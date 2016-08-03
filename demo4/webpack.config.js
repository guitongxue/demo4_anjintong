module.exports={
    entry: "./App",
    output: {
        path:  "./",
        filename: "aa.js"
    },
   // devtool:'source-map',
    module: {
  loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['es2015','react']
      }
    }
  ]
}

}