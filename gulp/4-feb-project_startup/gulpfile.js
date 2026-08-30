const {
  src,
  dest,
  watch,
  series
} = require('gulp');
//  gulp-sass no longer includes a default compiler. Install sass as a dev dependency `npm i -D sass` 
const sass = require('gulp-sass')(require('sass'));

const prefix = require('gulp-autoprefixer'),
  minify = require('gulp-clean-css'),
  imagemin = require('gulp-imagemin'),
  imagewebp = require('gulp-webp'),
  sourcemaps = require('gulp-sourcemaps'),
  webpack = require('webpack-stream'),
  path = require('path'),
  mode = require('gulp-mode')(),
  rtlcss = require('gulp-rtlcss'),
  rename = require('gulp-rename'),
  postcss = require('gulp-postcss'),
  cssnano = require('cssnano'),
  replaceFilepath = require('gulp-replace');
del = require("del");




// compile scss, prefix, and minify css
function compileScss(callback) {
  return src('src/sass/style.scss')
    .pipe(mode.development(sourcemaps.init()))
    .pipe(sass())
    .pipe(mode.production(prefix('last 4 versions')))
    .pipe(minify())
    .pipe(rename({
      prefix: "custom",
      basename: ".",
      suffix: "min",
      extname: ".css"
    }))
    .pipe(mode.development(sourcemaps.write('./')))
    .pipe(dest('src/html/assets/css')); // Output LTR stylesheets.

  callback();
}

// home page scss
function homeScss(callback) {
  return src('src/sass/home.scss')
    .pipe(mode.development(sourcemaps.init()))
    .pipe(sass())
    .pipe(mode.production(prefix('last 4 versions')))
    .pipe(minify())
    .pipe(rename({
      prefix: "home",
      basename: ".",
      suffix: "min",
      extname: ".css"
    }))
    .pipe(mode.development(sourcemaps.write('./')))
    .pipe(dest('src/html/assets/css')); // Output LTR stylesheets.

  callback();
}


// RTL scss
function compilesRTL(callback) {
  return src('src/sass/style.scss')
    .pipe(mode.development(sourcemaps.init()))
    .pipe(sass())
    .pipe(mode.production(prefix('last 4 versions')))
    .pipe(rtlcss()) // Convert to RTL.
    .pipe(postcss([cssnano()]))
    .pipe(rename({
      prefix: "custom-rtl",
      basename: ".",
      suffix: "min",
      extname: ".css"
    })) // Append "-rtl" to the filename.
    .pipe(mode.development(sourcemaps.write('./')))
    .pipe(dest('src/html/assets/css')); // Output RTL stylesheets
  callback();
}


// home rtl scss
function homeRTL(callback) {
  return src('src/sass/home.scss')
    .pipe(mode.development(sourcemaps.init()))
    .pipe(sass())
    .pipe(mode.production(prefix('last 4 versions')))
    .pipe(rtlcss()) // Convert to RTL.
    .pipe(postcss([cssnano()]))
    .pipe(rename({
      prefix: "home-rtl",
      basename: ".",
      suffix: "min",
      extname: ".css"
    })) // Append "-rtl" to the filename.
    .pipe(mode.development(sourcemaps.write('./')))
    .pipe(dest('src/html/assets/css')); // Output RTL stylesheets
  callback();
}




// replace file extensions
function replacePath() {
  return src('build/**/*.php')
    .pipe(mode.production(replaceFilepath('.jpg', '.webp')))
    .pipe(mode.production(replaceFilepath('.png', '.webp')))
    .pipe(dest('build/'));
  callback();
}


// copy assets for arabic
function copyAssets(callback) {
  return src('src/html/assets/**/*') 
    .pipe(dest('src/html/ar/assets/'));
  callback();
}


// delete images files
function deleteFiles() {
  return del(['build/assets/images/*'], {
    force: true
  });
}


// delete css files
function deleteCssFiles() {
  return del(['src/html/assets/css/*'], {
    force: true
  });
}



// delete assets images from build's arabic
function deleteAssetsArabicImages() {
  return del(['build/ar/assets/images/*'], {
    force: true
  });
}


// convert images into webp
function webpImage(callback) {
  return src('src/html/assets/images/**/*.{jpg,png}')
    .pipe(mode.production(imagewebp()))
    .pipe(mode.production(dest('build/assets/images/')));
  callback();
}

// webp for arabic images
function webpArabicImage(callback) {
  return src('src/html/assets/images/**/*.{jpg,png}')
    .pipe(mode.production(imagewebp()))
    .pipe(mode.production(dest('build/ar/assets/images/')));
  callback();
}

// tiny images
function tinyImg(callback) {
  return src('src/html/assets/images/**/*.{jpg,png}')
    .pipe( mode.production( imagemin([
      imagemin.mozjpeg({ quality: 80, progressive: true }),
      imagemin.optipng({ optimizationLevel: 2 }),
    ])) )  
    .pipe(dest('src/html/assets/images/'));
  callback();
}

// tiny images for Arabic
function tinyArabicImg(callback) {
  return src('src/html/ar/assets/images/**/*.{jpg,png}')
    .pipe( mode.production( imagemin([
      imagemin.mozjpeg({ quality: 80, progressive: true }),
      imagemin.optipng({ optimizationLevel: 2 }),
    ])) )  
    .pipe(dest('src/html/ar/assets/images/'));
  callback();
}


// minify js and webpack
function jsMin(callback) {
  return src('src/js/custom.js')
    .pipe(webpack({
      mode: 'production',
      devtool: 'source-map',
      entry: {
        custom: path.resolve(__dirname, 'src/js/custom.js')
      },
      output: {
        filename: '[name].min.js',
        assetModuleFilename: '[name] [ext]',
        clean: true
      },
      module: {
        rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  targets: "defaults"
                }]
              ]
            }
          }
        }],
      },
    }))
    .pipe(dest('src/html/assets/js'));
  callback();
}


// home js
function homeJsMin(callback) {
  return src('src/js/home.js')
    .pipe(webpack({
      mode: 'production',
      devtool: 'source-map',
      entry: {
        home: path.resolve(__dirname, 'src/js/home.js')
      },
      output: {
        filename: '[name].min.js',
        assetModuleFilename: '[name] [ext]',
        clean: true
      },
      module: {
        rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  targets: "defaults"
                }]
              ]
            }
          }
        }],
      },
    }))
    .pipe(dest('src/html/assets/js'));
  callback();
}


// copy html folder to build folder
function copyFolder(callback) {
  return src('src/html/**/*') 
    .pipe(mode.production( dest('build/') ));
  callback();
}



// watchtask
function watchTask() {
  watch('src/sass/**/*.scss', compileScss);
  watch('src/sass/**/*.scss', homeScss);
  watch('src/sass/**/*.scss', compilesRTL);
  watch('src/sass/**/*.scss', homeRTL);
  watch('src/js/**/*.js', jsMin);
  watch('src/js/**/*.js', homeJsMin);
}


// Default Gulp task 
var isProduction = mode.production();
if (isProduction) {
  exports.default = series(
    deleteCssFiles,
    homeScss,
    compileScss,
    homeRTL,
    compilesRTL,
    copyFolder,
    deleteFiles,
    webpImage,
    deleteAssetsArabicImages,
    replacePath,
    tinyImg,
    tinyArabicImg
  )
} else {
  exports.default = series(
    deleteCssFiles,
    homeScss,
    compileScss,
    compilesRTL,
    homeRTL,
    jsMin,
    homeJsMin,
    watchTask
  )
}