
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
      cssnano = require('cssnano');



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
    .pipe(dest('build/assets/css'));  // Output LTR stylesheets.
      
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
      .pipe( rename({ 
        prefix: "custom-",
        suffix: '-rtl',
       })) // Append "-rtl" to the filename.
    .pipe( mode.development( sourcemaps.write('./') ) )
    .pipe(dest('build/assets/css')); // Output RTL stylesheets
  callback();
};



// optimize and move images into distribution / build folder
// images, hum src k folder(images) , may rakhayn gay.  
function optimizeimg(callback) {
  return src('src/images/**/*.{jpg,png}') 
    .pipe( mode.production( imagemin([
      imagemin.mozjpeg({ quality: 80, progressive: true }),
      imagemin.optipng({ optimizationLevel: 2 }),
    ])) )  
    .pipe(dest('build/assets/images')); 
  callback();
};



// convert images into webp
function webpImage(callback) {
  return src('build/assets/images/*.{jpg,png}') 
    .pipe(imagewebp())
    .pipe(dest('build/assets/images/webp-images'));
  callback();
};


// minify js and webpack
// gulp ka source map nai kaam karraha webpack k sath.
// jub hum webpack ka mode: development rakhtay hayn
// tab ata hay source map.
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
    .pipe(dest('build/assets/js')); 
  callback();
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
