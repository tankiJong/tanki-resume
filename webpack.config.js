module.exports = {
  // entry point of our application
  // where to place the compiled bundle
  output: {
    filename: 'main.js',
    sourceMapFilename: 'main.map',
  },
  module: {
    // `loaders` is an array of loaders to use.
    // here we are only configuring vue-loader
    loaders: [
      {
        test: /\.vue$/, // a regex for matching all files that end in `.vue`
        loader: 'vue'   // loader to use for matched files
      },
      {
        // use babel-loader for *.js files
        test: /\.js$/,
        loader: 'babel',
        // important: exclude files in node_modules
        // otherwise it's going to be really slow!
        exclude: /node_modules/
      },
      {
        test: [/\.md$/, /\.html$/],
        loader: 'raw'
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  vue:{
    loaders:{
      css: 'sass',
      js: 'babel',
    },
    autoprefixer: true,
  },
  devtool: 'source-map',
}
