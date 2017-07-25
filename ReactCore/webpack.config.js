/// <binding />
var path = require('path');

module.exports = {
    entry: {
        site: [
            //'./node_modules/react/dist/react.js',
            //'./node_modules/react-dom/dist/react-dom.js',
            ////'./wwwroot/js/site.js',
            './scripts/Hello.tsx',
            './scripts/Help.tsx',
            './scripts/Oversikt.tsx',
            './scripts/Registrera.tsx',
            './scripts/App.tsx'

        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'wwwroot/dist/')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
};