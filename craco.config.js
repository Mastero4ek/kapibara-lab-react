const path = require('path');

const resolvePath = p => path.resolve(__dirname, p);

module.exports = {
    webpack: {
        alias: {
            '@': resolvePath('./src'),
            '@assets': resolvePath('./src/assets'),
            '@components': resolvePath('./src/components'),
            '@layouts': resolvePath('./src/components/layouts'),
            '@screens': resolvePath('./src/components/screens'),
            '@redux': resolvePath('./src/redux'),
            '@views': resolvePath('./src/views'),
            '@helpers': resolvePath('./src/helpers'),
        },
    }
}