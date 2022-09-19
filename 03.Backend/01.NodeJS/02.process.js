console.log('process.env:', process.env);       //환경설정
console.clear();
console.log(process.env.COMPUTERNAME);

console.log('process.version:', process.version);
console.log('process.arch:', process.arch);
console.log('process.platform:', process.platform);
console.log('process.argv:', process.argv);

process.exit();

console.log('프로세스');    //unreachable

//Hoisting
function aa(){
    let a = 2;
    return a;
    let b = 3;      //unreachable
}