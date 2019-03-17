const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: './src/index.js'
	},
	plugins: [
		new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    }),
		new HtmlWebpackPlugin({
			title: '123',
			template: path.resolve(__dirname, './../static/index.html')
		})
	],
	output: {
		filename: "[name].bundle.js",
		chunkFilename: '[name].bundle.js',
		path: path.resolve(__dirname, './../dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
        use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /(\.jsx|\.js)$/,
				exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              '@babel/plugin-transform-runtime',
            ]
          }
        }
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader", // creates style nodes from JS strings
					"css-loader", // translates CSS into CommonJS
					"sass-loader" // compiles Sass to CSS, using Node Sass by default
				]
			},
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader", options: {
            javascriptEnabled: true,
            strictMath: true,
            noIeCompat: true
          }
        }]
      },
      {
       test: /\.(woff|woff2|eot|ttf|otf)$/,
       use: [
         'file-loader'
       ]
      },
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			}
		]
	}
};


