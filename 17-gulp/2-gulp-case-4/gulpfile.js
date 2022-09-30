
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
const mode = require('gulp-mode')();
const rtlcss = require('gulp-rtlcss');
const rename = require('gulp-rename');

const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
// const autoprefixer = require('autoprefixer');
let sorting = require('postcss-sorting');



//compile scss, prefix, and minify css
function compilescss(callback) {
  return src('src/scss/*.scss') 
    .pipe( mode.development(sourcemaps.init()))
      .pipe(sass())
      .pipe( mode.production(prefix('last 4 versions')) )
      .pipe(minify())
    .pipe( mode.development(sourcemaps.write('./')))
    .pipe(dest('build/css'))  // Output LTR stylesheets.
      
    callback();
};


// RTL css
function compilesRTL(callback) {
  return src('src/scss/*.scss') 
    .pipe( mode.development( sourcemaps.init() ) )
      .pipe(sass())
      .pipe( mode.production(prefix('last 4 versions')) )
      .pipe(rtlcss()) // Convert to RTL.
      .pipe(postcss([ cssnano() ]))
      .pipe(rename({ suffix: '-rtl' })) // Append "-rtl" to the filename.
    .pipe( mode.development( sourcemaps.write('./') ) )
    .pipe(dest('build/css')) // Output RTL stylesheets

    callback();
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



// watchtask
function watchTask(){
  watch('src/scss/**/*.scss', compilescss); 
  watch('src/scss/**/*.scss', compilesRTL); 
  watch('src/js/*.js', jsmin); 
  watch('src/images/*', optimizeimg); 
  watch('build/images/*.{jpg,png}', webpImage); 
}


// Default Gulp task 
exports.default = series(
  compilescss,
  compilesRTL,
  jsmin,
  optimizeimg,
  webpImage,
  watchTask
);

// command: gulp
