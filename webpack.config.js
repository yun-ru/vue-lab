module.exports = {
    entry: {
        app: [__dirname + '/src/main.js']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: 'dist',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/, // a regex for matching all files that end in `.vue`
                loader: 'vue'   // loader to use for matched files
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: ['babel'],
                query: {
                    "presets": [
                        "es2015",
                        "stage-0"
                    ],
                    "plugins": [
                        "transform-runtime"
                    ]
                }
            },
        ]
    }
}