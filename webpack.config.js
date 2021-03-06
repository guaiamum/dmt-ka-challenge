import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import HtmlWebPackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const context = join(__dirname, 'src');

export default (env, { mode }) => ({
    resolve: {
        extensions: ['.js'],
        alias: {
            Components: join(context, './components'),
            Utils: join(context, './utils'),
        },
    },
    target: 'web',
    context,
    entry: [
        './entry.js',
        './styles/main.scss',
    ],
    output: {
        path: join(__dirname, 'dist'),
        filename: 'app.[contenthash:8].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules\/(?!guaiamum-dmt-ka-slider)/,
                use: [
                    { loader: 'babel-loader' },
                ],
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: mode !== 'development',
                        },
                    },
                ],
            },
            {
                test: /\.ico$/,
                type: 'asset/resource'
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: './template/index.html',
            favicon: './assets/favicon.ico',
        }),
        new MiniCssExtractPlugin({
            filename: './style.[contenthash:8].css',
        }),
    ],
});
