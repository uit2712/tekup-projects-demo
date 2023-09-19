const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@Data': path.resolve(__dirname, 'src/Data/'),
            '@Domain': path.resolve(__dirname, 'src/Domain/'),
            '@Presentation': path.resolve(__dirname, 'src/Presentation/'),
            '@Core': path.resolve(__dirname, 'src/Core/'),
            '@Private': path.resolve(__dirname, 'src/Private/'),
        },
    },
};
