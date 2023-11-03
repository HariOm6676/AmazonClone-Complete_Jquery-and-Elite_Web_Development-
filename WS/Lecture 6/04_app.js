var fs=require('fs');
console.log('start');
const data=fs.readFileSync('./03_app.js','utf-8');
console.log('data; ',data);
console.log('end')