module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@src": "./src",
        },
      },
    ],
    "module:react-native-dotenv",
    /**
     * Your other plugins
     */
  ],
};
