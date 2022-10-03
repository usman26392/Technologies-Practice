

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
    font-family: "Droid Sans", sans-serif #{"/*rtl:prepend:'Droid Arabic Kufi',*/"} ;
    font-size: 46px #{"/*rtl:8px*/"};
    direction: ltr;
}



# unit testing.
 
 # --- for css 'ltr' --------

 # when development
    sass --> sourcemap --> minify and checking value on run time --- done
 # when production
    sass --> remove sourcemap --> add prefixes --> minify --> can be value change -- done

 # --------- for css 'rtl' -------

 # when development
    sass --> sourcemap --> minify and checking value on run time --- done
 # when production
    sass --> remove sourcemap --> add prefixes --> minify --> can be value change --- done


 # for images 
 # when development mode.
  convert images into webp and take from build's images folder, and send them into webp-images folder.

 # when production mode.
   optimize(tiny) images(jpg, png) from src folder , send them into build's images folder. 






 








 

  

