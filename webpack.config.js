const path = require('path');
const IgnorePlugin = require('webpack').IgnorePlugin;

module.exports = {
    bail: true,
    entry: {
        compiled: path.resolve('src/bar.js')
    },
    output: {
        filename: 'dist/[name].js'
    },
    resolve: {
        modules: ['node_modules']
    },
    resolveLoader: {
        modules: [path.resolve('node_modules')]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [
                    path.resolve('node_modules')
                ]
            }
        ]
    },
    stats: {
        assets: true,
        colors: true,
        version: false,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        children: false
    }
};
