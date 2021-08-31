
const { src, dest, watch, parallel, series } = require('gulp');
const browserSync       = require('browser-sync').create();
const pug               = require('gulp-pug');
const sass              = require('gulp-sass')(require('node-sass'));
const autoprefixer      = require('gulp-autoprefixer');
const minifyCSS         = require('gulp-csso');
const browserify        = require('browserify');
const source            = require('vinyl-source-stream');
const buffer            = require('vinyl-buffer');
const uglify            = require('gulp-uglify');
const sourcemaps        = require('gulp-sourcemaps');
const log               = require('gulplog');
const concat            = require('gulp-concat');

// const isInProduction    = (process.env.NODE_ENV) === 'production' || true;
const outputBaseDir     = 'dist';

function serve(cb) {
    browserSync.init({
        server: `./${outputBaseDir}`,
        port: 3334,
        host: 'localhost'
    }, cb);

    watch("src/scss/", css);
    watch("src/js/", js);
    watch('src/views').on('change', html);
    // watch("_templates/").on('change', html);
    // watch("src/public/").on("change", assets);
}

function assets() {
    return src('src/public/**/*')
        .pipe(dest(`${outputBaseDir}/public/`));
}

function html() {
    return src('src/views/**/*')
        .pipe(dest(`${outputBaseDir}/`))
    // return src('src/_templates/views/*.pug')
    //     .pipe(pug({ pretty: true }))
    //     .pipe(dest('build/'))
    //     .pipe(browserSync.stream())
}

function css() {
    return src('src/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(concat('app.min.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(minifyCSS())
        .pipe(dest(`${outputBaseDir}/public/css`))
        .pipe(browserSync.stream())
}

function js() {
    return browserify({
        basedir: './src/js/',
        debug: true,
        entries: ['app.js'],
        cache: {},
        packageCache: {}
    })
        .transform('babelify', {
            presets: ['@babel/preset-env'],
            extensions: ['.js']
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        // TODO: fix minification error on build
        // .pipe(uglify())
        .on('error', log.error)
        .pipe(sourcemaps.write('./'))
        .pipe(dest(`${outputBaseDir}/public/js/`))
        .pipe(browserSync.stream());
}

exports.assets      = assets;
exports.html        = html;
exports.css         = css;
exports.scripts     = js;
exports.serve       = series(parallel(assets, html, css, js), serve);
exports.default     = parallel(assets, html, css, js);
