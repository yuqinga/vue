
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:'./src/main.js',
    output:{
      path:__dirname,
      filename:'bundle.js'
    },
    module:{
      loaders:[
        {
          test:/\.vue$/,
          loader:'vue-loader'
        },
        {
          test:/\.css$/,
          loader:'style-loader!css-loader'
        },
        {
            test: /\.(ttf|png|svg|gif|jpg)$/, 
            loader: 'url-loader'
        },
        {   
            test: /\.json$/,
            loader: 'json-loader'
        },
        { 
            test: /\.html$/,
            loader: 'raw-loader'
        },
       
      ]
    },
    plugins:[
      new HtmlWebpackPlugin({  // Also generate a test.html
          filename: 'index.html',//在内存中生成一个index.html
          template: './template.html'//
    })
    ]
}