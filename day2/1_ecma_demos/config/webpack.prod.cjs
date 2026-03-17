const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

const commonConfig = require('./webpack.common.cjs');

const paths = require('./paths.cjs');

module.exports = function (env) {
    return merge(commonConfig(env), {
        mode: 'production',

        output: {
            path: paths.appBuildPath,
            publicPath: './',
            filename: `${paths.outputJSPath}[name].[hash].js`,
            chunkFilename: `${paths.outputJSPath}[id].[hash].chunk.js`,
            clean: true
        },

        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()]
        }
    });
}