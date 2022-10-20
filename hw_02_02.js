
let listA=Array(9).fill(' ')
for (let i = 0 ; i<5;i++){
  
  listA[parseInt(listA.length/2)-i]='*'
  listA[parseInt(listA.length/2)+i]='*'
  console.log(listA.join(''))
}