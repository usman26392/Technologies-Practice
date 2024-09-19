


npm install -D tailwindcss postcss autoprefixer
npm install vite
npx tailwindcss init -p

# setup go to package.json file and edit scripts object
"scripts": {
    "start": "vite"
},

# run: 
npm run start


<!-- classes concepts -->
# if py-4 = 16px
than
py-1 = 16/4 px =   4px
py-2 =  2  * 4 =   8px
py-5 =  5  * 4 =   20px
py-4 =  4 *  4 =   16px
py-6 =  6  * 4 =   24px
py-7 =  7  * 4 =   28px
py-20 = 20 * 4  =  80px
py-24 = 24 * 4  =  96px



# how to find a class from px value to class name in Tailwind css
# for example
i have a 28px in design so i want to add a class for it.
4px = prefix-1
1px = prefix-1/4
28px = 28 * 1 / 4 = 
28px = 28/4 = 7 means class will be .prefix-7 for example for margin: .mt-7
# means: px value will be divided by base value i.e 4
# Mnemonic: 28/4 = 7 == .mt-7
# converted
.mt-7 {
    margin-top: 1.75rem /* 28px */;
}



<!-- px convert into rem -->
# i know 
# 16px == 1rem
1px == 1/16 rem
so if 28px
28px = 28/16 rem = 1.75 rem



<!-- custom classes concepts -->
# if mx-1 = 16px = 1rem = 1em
# example:
if i want to make a class that use 70px in margin left with rem.

i know 
16px = 1rem 
1px = 1/16 rem
70px = 1 * 70 / 16 = 4.375rem
# means: my classess will be .ml-[4.375rem]
# Mnemonic: 70/16 = 4.375rem

# converted
.ml-\[4\.375rem\] {
    margin-left: 4.375rem /* 70px */;
}



