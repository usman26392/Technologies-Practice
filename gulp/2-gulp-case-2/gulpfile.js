


const { src, dest, watch, series} = require('gulp');
//  gulp-sass no longer includes a default compiler. Install sass as a dev dependency `npm i -D sass` 
const sass = require('gulp-sass')(require('sass')); 
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
const imagewebp = require('gulp-webp');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');


//compile, prefix, and min scss
function compilescss() {
  return src('src/scss/*.scss') // change to your source directory
    .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(prefix('last 2 versions'))
      .pipe(minify())
    .pipe(sourcemaps.write('./'))
    .pipe(dest('build/css')) // change to your final/public directory
};

//optimize and move images into distribution folder
// images hum src k images, folder may rakhayn gay.  
function optimizeimg() {
  return src('src/images/*.{jpg,png}') // change to your source directory
    .pipe(imagemin([
      imagemin.mozjpeg({ quality: 80, progressive: true }),
      imagemin.optipng({ optimizationLevel: 2 }),
    ]))
    .pipe(dest('build/images')) // change to your final/public directory
};

//optimize and convert images into webp
// jo images optimize ho kar dist k folder images may a e,
// yey un ko webp may convert karay ga.
function webpImage() {
  return src('build/images/*.{jpg,png}') // change to your source directory
    .pipe(imagewebp())
    .pipe(dest('build/images/webp-images')) // change to your final/public directory
};


// minify js
function jsmin(){
  return src('src/js/*.js') // change to your source directory
    .pipe(sourcemaps.init())
      .pipe(concat('main.js'))
      .pipe(terser())
    .pipe(sourcemaps.write('./'))
    .pipe(dest('build/js')); // change to your final/public directory
}

//watchtask
function watchTask(){
  watch('src/scss/**/*.scss', compilescss); // change to your source directory
  watch('src/js/*.js', jsmin); // change to your source directory
  watch('src/images/*', optimizeimg); // change to your source directory
  watch('build/images/*.{jpg,png}', webpImage); // change to your source directory
}


// Default Gulp task 
exports.default = series(
  compilescss,
  jsmin,
  optimizeimg,
  webpImage,
  watchTask
);

// command: gulp
