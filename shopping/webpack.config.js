// 入口和输出的配置
var path = require('path');
var config = {
    entry: {
        main: './main'//配置的单入口

    },
    output: {
        path: path.join(__dirname, './dist'),//存放打包后的文件的输出目录
        publicPath: '/dist/',//指定资源文件引用的目录
        filename: 'main.js'//指定输出文件的名称
    },

    
    var ExtractTextPlugin = require('extract-text-webpack-plugin');
    //vue-loader配置
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        })
                    }
                }//对vue解析
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules///对js解析
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'//对css汇总解析
                })
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024'//对图片解析
            }
        ]
    },

    //配置插件
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        })
    ]
};

module.exports = config;