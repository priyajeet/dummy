const webpackConfig = require('./webpack.config');

module.exports = (config) => config.set({
    autoWatch: false,

    basePath: '.',

    browsers: ['PhantomJS'],

    browserNoActivityTimeout: 100000,

    captureConsole: true,

    colors: true,

    coverageReporter: {
        check: {
            global: {
                statements: 10, // 95
                branches: 10, // 95
                functions: 10, // 93
                lines: 10 // 90
            }
        },
        reporters: [
            {
                type: 'html',
                dir: 'reports/coverage'
            },
            { type: 'text' }
        ]
    },

    frameworks: [
        'mocha',
        'chai'
    ],

    files: [
        'node_modules/babel-polyfill/dist/polyfill.js',
        'src/**/*-test.js'
    ],

    exclude: [],

    preprocessors: {
        'src/**/*-test.js': ['webpack', 'sourcemap']
    },

    phantomjsLauncher: {
        exitOnResourceError: true
    },

    port: 9876,

    logLevel: config.LOG_INFO,

    reporters: ['mocha', 'coverage'],

    singleRun: true,

    webpack: webpackConfig,

    webpackMiddleware: {
        noInfo: true
    }
});
