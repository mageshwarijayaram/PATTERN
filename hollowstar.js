let row=5
pattern=''
for(let i=1;i<=row;i++){
    for(let j=1;j<=row;j++){
        if(i==1 || i== row || j==1 ||j==row){
            pattern=pattern+"*"
        }
        else{
            pattern=pattern+" "
        }
    }
    pattern=pattern+'\n'
}
console.log(pattern);