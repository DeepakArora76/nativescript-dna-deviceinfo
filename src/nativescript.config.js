export default {
    id: 'org.nativescript.app',
    appPath: 'app',
    appResourcesPath: 'App_Resources',
    webpackConfigPath: 'webpack.config.js',
    ios: {
        discardUncaughtJsExceptions: true
    },
    android: {
        discardUncaughtJsExceptions: true,
        v8Flags: '--nolazy --expose_gc',
        "markingMode": "none",
        "suppressCallJSMethodExceptions": false
    }
};
//# sourceMappingURL=nativescript.config.js.map