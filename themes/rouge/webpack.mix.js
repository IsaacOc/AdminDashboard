const mix = require("laravel-mix");
const path = require("path");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
 
 
mix.setPublicPath("public/themes/rouge")
    .js(`${__dirname}/js/app.js`, "js")
    .vue()
    .postCss(`${__dirname}/css/main.css`, "css", [
        require("postcss-import"),
        require("tailwindcss")({
            config: `${__dirname}/tailwind.config.js`,
        }),
        require("autoprefixer"),
    ])
    .alias({
        '@' : path.join(__dirname, '/js')
    });