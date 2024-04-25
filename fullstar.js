let row=5
let col=5
pattern=''
for(let i=1;i<=row;i++){
    for(let j=1;j<=col;j++){
        pattern=pattern+"*"
    }
    pattern=pattern+'\n'
}
console.log(pattern)