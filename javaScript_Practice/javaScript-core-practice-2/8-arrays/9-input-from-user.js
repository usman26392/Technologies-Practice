/**
 * is may hum user say pochay gay k kitnay colors k name jantay ho.
 * 
 * or wo name hum Array may store karyn gay.
 */


 let msg = prompt("how many name of fruits you know ?");
let fruitsName = [];

for(let i = 0; i <= msg; i++) {
    fruitsName[i] = prompt("Tell your favourite fruit name");
    console.log(fruitsName[i]);
}