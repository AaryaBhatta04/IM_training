module.exports = function (env) {
    var env_file = env.WEBPACK_SERVE ? 'dev' : 'prod';
    return require(`./config/webpack.${env_file}.cjs`)(env);
}