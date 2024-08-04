// create
let fs=require('fs');
fs.writeFileSync('index.css',"chin cha cha choo");
// read
let data=fs.readFileSync('index.css');
console.log(data);
console.log(data.toString());
// update
let data1=fs.appendFileSync('index.css','chotabhem');
// delete
fs.unlinkSync('index.css')


