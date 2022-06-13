// Определяем константы Gulp
const {src, dest, parallel, series, watch} = require('gulp');

// Список модулей :)
const browserSync = require('browser-sync').create(), // Перезагрузка браузера +
    include = require('gulp-file-include'), // Соединяет HTML
    htmlmin = require('gulp-htmlmin'), // Минифицирует HTML
    typograf = require('gulp-typograf'),
    scss = require('gulp-sass')(require('sass')),
    cssnano = require('cssnano'), // Для минификации CSS.
    autoprefixer = require('gulp-autoprefixer'), // Добавление вендорных префексов для старых браузеров
    groupMedia = require('gulp-group-css-media-queries'), // Группировка медиазапросов и их оптимизация.
    postcss = require('gulp-postcss'), // POST CSS
    imagemin = require('gulp-imagemin'), // Сжатие картинок
    newer = require('gulp-newer'), //  для проверки фото на сжатие


    eslint = require('gulp-eslint'),
    babel = require('gulp-babel'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify-es').default, // Минификатор JS
    webpack = require("webpack-stream"),
    webpackStream = require('webpack-stream'),

    concat = require('gulp-concat'), // Для объединения файлов и переименования
    notify = require('gulp-notify'),
    sourcemaps = require('gulp-sourcemaps'),
    fs = require('fs'),
    del = require('del'); // Удаление.
purgecss = require('@fullhuman/postcss-purgecss'); // Удаление неиспользуемых свойств CSS.

//----------------------------------------------------------------
let isProd = false; // dev by default
// Создаем два файла HTML
const htmlInclude = () => {
    return src('#src/*.html')
        .pipe(
            include({
                prefix: '@@',
            })
        )
        .pipe(typograf({
            locale: ['ru', 'en-US']
        }))
        .pipe(dest('dist/product'))
        // .pipe(
        //     htmlmin({
        //         collapseWhitespace: true,
        //     })
        // )
        .pipe(dest('dist'))
        .pipe(browserSync.stream());
};

//Работа со стилями
const styles = () => {
    return src('#src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(scss().on('error', notify.onError()))
        .pipe(
            autoprefixer({
                // overrideBrowserslist: ['last 5 versions'],
                // grid: true,
                cascade: false,
            })
        ) // Создадим префиксы с помощью Autoprefixer
        .pipe(groupMedia())
        // .pipe(
        //     postcss([
        //         purgecss({
        //             content: ['#src/**/*.html'],
        //             css: ['**/*.css'],
        //             //safelist: [/slick/, /button$/, /mfp/],
        //         }),
        //         // cssnano(), // Минифицируем стили
        //     ])
        // ) // Подключаем плагины для post css
        .pipe(concat('style.min.css')) // Конкатенируем в файл style.min.css
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist/css/')) // Выгрузим результат в папку "dist/css/"
        .pipe(browserSync.stream());
};

//Картинки
const images = () => {
    return src('#src/images/**/*') // Берём все изображения из папки источника
        .pipe(newer('dist/images/')) // Проверяем, было ли изменено (сжато) изображение ранее
        .pipe(
            imagemin([
                imagemin.gifsicle({interlaced: true}),
                imagemin.mozjpeg({quality: 75, progressive: true}),
                imagemin.optipng({optimizationLevel: 4}),
                imagemin.svgo({
                    plugins: [{removeViewBox: false}, {cleanupIDs: false}],
                }),
            ])
        ) // Сжимаем и оптимизируем изображеня
        .pipe(dest('dist/images/')) // Выгружаем оптимизированные изображения в папку назначения
        .pipe(browserSync.stream());
};


const scripts = () => {
    return src('#src/js/**/*.js')
        .pipe(concat('script.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        //.pipe(uglify()) // Минификация.
        .pipe(dest('dist/js'))
        .pipe(browserSync.stream());
};

//Копирование иных файлов
const resources = () => {
    return src('#src/resources/**').pipe(dest('dist'));
};

// Удаление итоговой папки
const clear = () => {
    return del('dist');
};

// Определяем логику работы Browsersync
const serve = () => {
    browserSync.init({
        server: {
            baseDir: 'dist/',
        },
        notify: false, // Отключаем уведомления
        online: true, // Режим работы сервера: true или false
    });

    watch('#src/**/*.html', htmlInclude);
    watch('#src/scss/**/*', styles);
    watch('#src/images/**/*', images);
    watch('#src/**/*.js', scripts);
    watch('#src/resources/**', resources);
};

// Экспортируем функции.

exports.images = images;
exports.serve = serve;
exports.clear = clear;
exports.styles = styles;
exports.htmlInclude = htmlInclude;
exports.scripts = scripts;

exports.default = series(
    clear,
    parallel(htmlInclude, scripts, resources, images),
    styles,
    serve
);

exports.build = series(clear, htmlInclude, styles, images, scripts);
