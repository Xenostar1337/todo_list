const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Path to your index.html template
            filename: 'index.html', // Output filename (in the dist directory)
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/, // Apply this rule to files ending in .js
                exclude: /node_modules/, // Exclude files in the node_modules directory
                use: {
                    loader: 'babel-loader', // Use Babel loader for transpiling ES6+
                    options: {
                        presets: ['@babel/preset-env'] // Presets for Babel
                    }
                }
            },
            {
                test: /\.css$/, // Apply this rule to files ending in .css
                use: ['style-loader', 'css-loader'], // Use these loaders for CSS files
            },
            {
                test: /\.(png|svg|jpg|gif)$/, // Apply this rule to image files
                use: ['file-loader'], // Use file-loader for images
            },
        ],
    },
};
