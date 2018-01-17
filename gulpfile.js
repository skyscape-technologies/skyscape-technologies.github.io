// Load Plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat')

// Styles
gulp.task('styles', function () {
  return gulp.src('scss/theme.scss')
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'))
})

// Styles ecommerce
gulp.task('styles-ecommerce', function () {
  return gulp.src('scss/custom/ecommerce/theme.scss')
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({basename: 'ecommerce', suffix: '.min'}))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'))
})

// Scripts
gulp.task('scripts', function () {
  return gulp.src([
      'js/bootstrap/*.js',
      'js/vendor/*.js',
      'js/custom/*.js',
      'js/theme.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('theme.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'))
})

// Images
gulp.task('images', function () {
  gulp.src('images/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images'))
})

// Fonts
gulp.task('fonts', function () {
  return gulp.src('fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})

// Default task
gulp.task('default', function () {
  gulp.start('styles', 'styles-ecommerce', 'scripts', 'images', 'fonts')
})

// Watch
gulp.task('watch', function () {
  // Watch .scss files
  gulp.watch(['scss/**/*.scss'], ['styles', 'styles-ecommerce'])
  // gulp.watch(['scss/**/*.scss'], ['styles'])

  // Watch .js files
  gulp.watch('js/**/*.js', ['scripts'])
})
