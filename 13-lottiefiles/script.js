
/**
 * sample
 */

// const play = document.querySelector('button');
// const svgContainer = document.getElementById('svg');
// const animItem = bodymovin.loadAnimation({
//     wrapper: svgContainer,
//     animType: 'svg',
//     loop: false,
//     autoplay: false,
//     path: 'https://assets2.lottiefiles.com/packages/lf20_u4yrau.json'
// });

// play.addEventListener('click', () => {
//     svgContainer.classList.remove('hide');
//     animItem.goToAndPlay(0,true);
// });

// animItem.addEventListener('complete', () => {
//     svgContainer.classList.add('hide');
    
// });
   


// lottie with all buttons at same time.

    const play = document.querySelectorAll('.btn-1');
    const svgContainer = document.querySelectorAll(".svg");

    svgContainer.forEach(myLottie => {
        const animItem = bodymovin.loadAnimation({
            wrapper: myLottie,
            animType: 'svg',
            loop: false,
            autoplay: false,
            path: 'https://assets2.lottiefiles.com/packages/lf20_u4yrau.json'
        });

        play.forEach(pl=>{
            pl.addEventListener('click', (e) => {
                console.log(e.target);
                myLottie.classList.remove('hide');
                animItem.goToAndPlay(0,true);
                
            });
    
            animItem.addEventListener('complete', () => {
                myLottie.classList.add('hide');
                
            });
        });
        // console.log(play);
        
    });



// (()=>{
//     const play = document.querySelector('.lt-1');
//     const svgContainer = document.querySelector(".svg");   
//     const animItem = bodymovin.loadAnimation({
//         wrapper: svgContainer,
//         animType: 'svg',
//         loop: false,
//         autoplay: false,
//         path: 'https://assets2.lottiefiles.com/packages/lf20_u4yrau.json'
//     });    
//     play.addEventListener('click', () => {
//         svgContainer.classList.remove('hide');
//         animItem.goToAndPlay(0,true); 
//     });
//     animItem.addEventListener('complete', () => {
//         svgContainer.classList.add('hide');
//     });
// })();  

// (()=>{
//     const play = document.querySelector('.lt-2');
//     const svgContainer = document.querySelector(".svg");   
//     const animItem = bodymovin.loadAnimation({
//         wrapper: svgContainer,
//         animType: 'svg',
//         loop: false,
//         autoplay: false,
//         path: 'https://assets2.lottiefiles.com/packages/lf20_u4yrau.json'
//     });    
//     play.addEventListener('click', () => {
//         svgContainer.classList.remove('hide');
//         animItem.goToAndPlay(0,true); 
//     });
//     animItem.addEventListener('complete', () => {
//         svgContainer.classList.add('hide');
//     });
// })();  


    

  
    
        
    

  


        
        
          