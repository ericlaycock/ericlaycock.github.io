const path = require('path');


module.exports = {
    entry: './src/index.js', 
    output: {
        path: path.resolve(__dirname,'docs/assets'),
        filename: 'bundle.js'
    },
    entry: './src/verbs.js', 
    output: {
        path: path.resolve(__dirname,'docs/assets'),
        filename: 'bundle_verbs.js'
    },
    entry: './src/vocab.js', 
    output: {
        path: path.resolve(__dirname,'docs/assets'),
        filename: 'bundle_vocab.js'
    },
    entry: './src/memory.js', 
    output: {
        path: path.resolve(__dirname,'docs/assets'),
        filename: 'bundle_memory.js'
    },
    entry: './src/bookcall.js', 
    output: {
        path: path.resolve(__dirname,'docs/assets'),
        filename: 'bundle_bookcall.js'
    },
    entry: './src/pron.js', 
    output: {
        path: path.resolve(__dirname,'docs/assets'),
        filename: 'bundle_.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname,'docs'),
        publicPath: '/assets'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
                {
            test: /\.css$/,
            use: ['style-loader','css-loader']
    }]
    },

};

