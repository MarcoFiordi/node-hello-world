import {cowsay} from 'cowsayjs';

console.log('hello world');
console.log('hello boolean');


const citazioniBelle = process.argv.slice(2)
console.log(cowsay(`Oggi è proprio una bella Giornata ${citazioniBelle}`));


