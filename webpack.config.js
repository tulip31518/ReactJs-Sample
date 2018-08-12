var config = {
    mode: 'production',
    entry: './App/main.js',
    output: {
       path:'/',
       filename: 'bundle.js'
    },
    devServer: {
       inline: true,
       port: 8080
    },
    
    module: {
       rules: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['es2015', 'react']
             }
          }
       ]
    }
 }
 module.exports = config;