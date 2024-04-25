let n=7
let pattern=''
for(let i=1;i<=n;i++){
    pattern=pattern+"* ".repeat(i)+'\n'
}
for(let i=n-1;i>=1;i--){
    pattern=pattern+"* ".repeat(i)+'\n'
}
console.log(pattern);