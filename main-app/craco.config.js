const path = require('path')

module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            const loaders = webpackConfig.module.rules[1].oneOf;

            const babelLoaderIndex = loaders.findIndex(loader => loader.loader.includes('babel-loader'))
            const previousInclude = loaders[babelLoaderIndex].include;

            loaders[babelLoaderIndex].include = [previousInclude, path.resolve('node_modules/components-library')]

            return webpackConfig;
        }
    }
}