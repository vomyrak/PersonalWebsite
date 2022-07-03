const { merge } = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

module.exports = (env) => {
    let common = {
        entry: './src/index.tsx',
        output: {
            path: path.join(__dirname, '..', 'server', 'public', 'assets'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    loader: 'ts-loader'
                },
                {
                    test: /\.svg$/,
                    exclude: /node_modules/,
                    loader: 'svg-url-loader'
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /\.(ttf|png)$/,
                    type: 'asset/resource'
                },
                {
                    test: /\.(gif|jpg)$/,
                    loader: 'file-loader'
                },
                {
                    test: /\.scss$/,
                    use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader"
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx']
        },
        plugins: [
            new webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery',
                jquery: 'jquery'
            })
        ]
    };

    let dev = {
        mode: 'development',
        devtool: 'source-map',
        plugins: [
            new webpack.DefinePlugin({
                'process.env.DEBUG': 'true'
            })
        ],
        watch: true
    };

    let prod = {
        mode: 'production'
    };

    if (env.NODE_ENV === 'development') {
        return merge(common, dev);
    } else {
        return merge(common, prod);
    }
};
