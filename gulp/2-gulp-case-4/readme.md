

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
    sass --> sourcemap --> minify and checking change value on run time --- done
 # when production
    sass --> remove sourcemap --> add prefixes --> minify --> can be value change -- done

 # --------- for css 'rtl' -------

 # when development
    sass --> sourcemap --> minify and checking value on run time --- done
 # when production
    sass --> remove sourcemap --> add prefixes --> minify --> can be value change --- done


 # ---------------- for images  ------------------
 # when development mode.
  convert images into webp and take from build's images folder, and send them into webp-images folder.

 # when production mode.
   optimize(tiny) images(jpg, png) from src folder , send them into build's images folder. 

 # ------------- for js -----------------------
 done

 







   


   


   






 








 

  

