


const { src, dest, watch, series} = require('gulp');
//  gulp-sass no longer includes a default compiler. Install sass as a dev dependency `npm i -D sass` 
const sass = require('gulp-sass')(require('sass')); 
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
// const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
const imagewebp = require('gulp-webp');
const sourcemaps = require('gulp-sourcemaps');
// const concat = require('gulp-concat');
// const babel = require('gulp-babel');
const webpack = require('webpack-stream');
const path = require('path');



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
  return src('src/images/*.{jpg,png}') 
    .pipe(imagemin([
      imagemin.mozjpeg({ quality: 80, progressive: true }),
      imagemin.optipng({ optimizationLevel: 2 }),
    ]))
    .pipe(dest('build/images')) 
};

//optimize and convert images into webp
// jo images optimize ho kar dist k folder images may a e,
// yey un ko webp may convert karay ga.
function webpImage() {
  return src('build/images/*.{jpg,png}') 
    .pipe(imagewebp())
    .pipe(dest('build/images/webp-images')) 
};


// minify js and webpack
function jsmin(){
  return src('src/js/custom.js') 
    .pipe(sourcemaps.init())
      .pipe(webpack({
        mode: 'development',
        entry: {
          main: path.resolve(__dirname, 'src/js/custom.js')
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            // filename: '[name].[contenthash].js',
            filename: '[name].bundle.js',
            assetModuleFilename: '[name] [ext]',
            clean: true
        },
        module: {
          rules: [
            {
              test:/\.js$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: [
                          ['@babel/preset-env', { targets: "defaults" }]
                      ]
                  }
              }
            }
          ],
        },
      }))
    .pipe(sourcemaps.write('./'))
    .pipe(dest('build/js')); 
}

//watchtask
function watchTask(){
  watch('src/scss/**/*.scss', compilescss); 
  watch('src/js/*.js', jsmin); 
  watch('src/images/*', optimizeimg); 
  watch('build/images/*.{jpg,png}', webpImage); 
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
