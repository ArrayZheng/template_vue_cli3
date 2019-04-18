// custom project config
const path = require('path')

module.exports = {
    // ! be care of follow config, do not change the related config in configureWebpack
    // publicPath, outputDir, indexPath
    lintOnSave: true,
    chainWebpack: config => {
        // config.resolve.symlinks(true)
        config.module.rule('eslint')
        config.module.rule('eslint').use('eslint-loader')
        return config
    },
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': path.join(__dirname, './src'),
                '@config': path.join(__dirname, './src/config'),
            },
            extensions: ['.js', '.vue', '.json', '.css', '.styl']
        }
    },
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        }
    }
}