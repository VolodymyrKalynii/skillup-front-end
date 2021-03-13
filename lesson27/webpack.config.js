const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ip = require('ip').address();

const c = {
    v: process.env.npm_package_version,
    analyzeBundles: false,
};

const publicPath = '/';

/**
 *
 * @param {boolean} isProd
 * @returns {[HtmlWebpackPlugin, webpack.SourceMapDevToolPlugin]}
 */
const createPlugins = (isProd) => {
    const def = [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/template.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
            test: /\.jsx?|\.js?$/,
            exclude: [
                '*.css', '*.styles.min.css', '*.scss'
            ]
        }),
    ];

    if (isProd)
        def.push(
            new MiniCssExtractPlugin({
                filename: 'styles.min.css?v=' + c.v,
            })
        );

    return def;
};

const localIdentClassesName = (isProd) => !isProd ? '[path][name]_[local]' : '[local]_[hash:base64:8]';
/**
 * @param {boolean} isProd
 * @returns {[{loader: string}]|[*]}
 */
const getScssLoaders = (isProd) => {
    const def = !isProd
        ? [{loader: 'style-loader'}]
        : [MiniCssExtractPlugin.loader];

    def.push({
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: localIdentClassesName(),
            },
        },
    });

    if (isProd) {
        def.push({loader: 'postcss-loader'});
    }

    def.push({
        loader: 'sass-loader',
    });

    return def;
};

module.exports = (env, options) => {
    const isProd = options.mode === 'production';

    return {
        entry: {
            main: ['core-js/es', path.resolve(__dirname, './src/index.js')],
        },
        devtool: isProd ? false : 'eval-cheap-module-source-map',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.(scss)$/,
                    use: getScssLoaders(isProd),
                    exclude: /node_modules/,
                },
                {
                    test: /\.(svg|png|jpg|jpeg|woff|woff2|otf|ogg|aac|mp3|mp4|wav|ico)$/,
                    loader: 'file-loader',
                    options: {
                        publicPath,
                        toType: 'dir',
                        name: '[path][name].[ext]'
                    },
                }
            ],
        },
        resolve: {
            extensions: ['*', '.js', '.jsx'],
            alias: {
                '@assets': path.resolve(__dirname, 'assets'),
            }
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: '[name].js?v=' + c.v,
        },
        plugins: createPlugins(isProd),
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: isProd,
            historyApiFallback: true,
            host: ip,
            port: 3010,
            disableHostCheck: true,
            publicPath,
            hot: true
        },
        stats: {
            assets: false
        },
        target: isProd ? 'browserslist' : 'web',
    };
};