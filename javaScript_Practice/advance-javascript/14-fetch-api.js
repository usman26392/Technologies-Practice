
async function getData() {
    const resp = await fetch("http://worldtimeapi.org/api/timezone/Asia/Karachi");
    // console.log(resp);
    const data = await resp.json();
    console.log(data);
}



getData()

