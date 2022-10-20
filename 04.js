// 1. 배열에 담긴 중복된 이름을 {'이름': 수} 형태의 object로 반환하세요.

const names = ['harry', 'aiden', 'julie', 'julie', 'edward']

// answer
const answer=names.reduce((total,name)=>{
  if (name in total){
  total[name]+=1
}
else{
  total[name]=1
}
 return total
},{})

// console.log(answer)
for (let i in answer){
  if (answer[i]>=2){
    var tmp={}
    tmp[i]=answer[i]
    console.log(tmp)
  }
}