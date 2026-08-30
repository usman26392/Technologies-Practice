
const { src, dest, watch, series} = require('gulp');
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




// compile scss, prefix, and minify css
function compilescss(callback) {
  return src('src/scss/*.scss') 
    .pipe( mode.development(sourcemaps.init()))
      .pipe(sass())
      .pipe( mode.production(prefix('last 4 versions')) )
      .pipe(minify())
      .pipe( rename({ 
        prefix: "custom-",
       }))
    .pipe( mode.development(sourcemaps.write('./')))
    .pipe(dest('html/assets/css'));  // Output LTR stylesheets.
      
    callback();
}


// RTL css
function compilesRTL(callback) {
  return src('src/scss/*.scss') 
    .pipe( mode.development( sourcemaps.init() ) )
      .pipe(sass())
      .pipe( mode.production(prefix('last 4 versions')) )
      .pipe(rtlcss()) // Convert to RTL.
      .pipe(postcss([ cssnano() ]))
      .pipe( rename({ 
        prefix: "custom-",
        suffix: '-rtl',
       })) // Append "-rtl" to the filename.
    .pipe( mode.development( sourcemaps.write('./') ) )
    .pipe(dest('html/assets/css')); // Output RTL stylesheets
  callback();
}


// replace file paths
function replacePath() {
  return src('html/**/*.php') 
    .pipe( mode.development(replaceFilepath('assets/images/', 'images/')))
    .pipe( mode.production(replaceFilepath('images/', 'assets/images/')))
    .pipe(dest('html/')); 
  callback();
}



// optimize  images 
function optimizeimg(callback) {
  return src('html/images/**/*.{jpg,png}') 
    .pipe( mode.production( imagemin([
      imagemin.mozjpeg({ quality: 80, progressive: true }),
      imagemin.optipng({ optimizationLevel: 2 }),
    ])) )  
    .pipe(dest('html/assets/images')); 
  callback();
}



// convert images into webp
function webpImage(callback) {
  return src('html/assets/images/**/*.{jpg,png}') 
    .pipe( mode.production( imagewebp()))
    .pipe( mode.production( dest('html/assets/images/webp/') )  );
  callback();
}


// minify js and webpack
function jsmin(callback){
  return src('src/js/custom.js') 
    .pipe(webpack({
      mode: 'production',
      devtool: 'source-map',
      entry: {
        custom: path.resolve(__dirname, 'src/js/custom.js')
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
    .pipe(dest('html/assets/js')); 
  callback();
}



// watchtask
function watchTask(){
  watch('src/scss/**/*.scss', compilescss); 
  watch('src/scss/**/*.scss', compilesRTL); 
  watch('src/js/**/*.js', jsmin); 
}


// Default Gulp task 
exports.default = series(
  compilescss,
  compilesRTL,
  jsmin,
  optimizeimg,
  webpImage,
  replacePath,
  watchTask
);

