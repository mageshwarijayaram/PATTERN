let row=5
Pattern=''
for(let i=row;i>=1;i--){
    for(let j=i;j>=1;j--){
        Pattern=Pattern+"*"
    }
    Pattern=Pattern+'\n'
}
console.log(Pattern);