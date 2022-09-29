

# ----- devdependency npm packages
npm install --save-dev gulp-mode
npm install --save-dev gulp-rtlcss
npm install -g rtlcss

npm install --save-dev postcss gulp-postcss
npm install --save-dev gulp-cssnano
npm i cssnano

npm install --save-dev postcss-sorting



# mode
 mode.production()
 mode.development()


 # --------------------- task --------------------------

 # for styling
  sass --> css(unminfy) --> sourcemap --> for development
  css --> minify
  rtlcss


 # for js
  js --> babel --> sourcemap --> for development
  js --> babel --> minify --> for production


 # for images
  jpg, png --> tiny and webp



 # commands

 # --- for development ----
 gulp

 # --- for production -----
 gulp --production




 # RTL description example:
 body {
    font-size: 3rem;
    font-size: 16px #{"/*rtl:11px*/"}; // this not last style so it's work without simicolon
    position: relative;
    left: 20px #{"/*rtl:11px*/;"}; // this last style so you should add the simicolon
}





 

  

