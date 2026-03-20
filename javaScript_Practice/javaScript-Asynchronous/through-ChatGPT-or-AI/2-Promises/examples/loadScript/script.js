// Loading external resources such as scripts,
//  stylesheets, or images asynchronously to improve page load performance.

function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}


loadScript("./dummy.js")
    .then(()=> {
        console.log('script loaded successfully!')
    })
    .then((error)=> {
        console.log(error);
    });
    

