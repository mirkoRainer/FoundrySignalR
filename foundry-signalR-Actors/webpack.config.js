const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: 'C:\\Users\\mirko\\AppData\\Local\\FoundryVTT\\Data\\modules\\foundry-signalR-Actors\\dist'
  },
  plugins: [
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          { from: './module.json', to: 'C:\\Users\\mirko\\AppData\\Local\\FoundryVTT\\Data\\modules\\foundry-signalR-Actors' },
        ],
    }),
  ]
};