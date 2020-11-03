module.exports = {
    setupFiles: [
        '<rootDir>/src/test/testSetup.jsx'
    ],
    moduleNameMapper: {
        '@Hooks(.*)$': '<rootDir>/src/hooks',
        '@Config(.*)$': '<rootDir>/src/config',
        '@Services(.*)$': '<rootDir>/src/services',
        '\\.(jpg|jpeg|png|gif|eot|otf|svg|ttf|woff|woff2)$': '<rootDir>/src/test/fileMock.js',
    },
};
