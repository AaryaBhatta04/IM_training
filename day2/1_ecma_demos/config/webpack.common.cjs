const HtmlWebpackPlugin = require("html-webpack-plugin");
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');

module.exports = function (env) {
    // Webpack Configuration Object
    return {
        entry: {
            app: './src/main'
        },

        resolve: {
            extensions: [".js"]
        },

        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: "html-loader"
                        }
                    ]
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html",   // Input FileName
                filename: "./index.html",    // Output FileName
                scriptLoading: 'blocking',
                favicon: "./public/js-favicon.png"
            }),
            new ProgressBarPlugin({
                format: '  build [:bar] ' + chalk.green.bold(':percent') + '\t' + chalk.blue.bold(':elapsed seconds'),
                clear: false
            })
        ],

        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        }
    };
};