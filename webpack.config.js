const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    // Other rules...
    plugins: [
        new NodePolyfillPlugin()
    ],
    target: "node",
    resolve: {
        fallback: {
            "crypto": require.resolve("crypto-browserify")
        }
     } 
}