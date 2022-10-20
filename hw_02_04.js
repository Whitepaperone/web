    // 이곳에 코드를 작성합니다.
		const inputs = [
      [3, 10, 5, [1, 3, 5, 7, 9]],    // 3
      [3, 10, 5, [1, 3, 7, 8, 9]],    // 0
      [5, 20, 5, [4, 7, 9, 14, 17]],  // 4
    ]

    function solution(K, N, M, chargers) {
      // solution 함수 완성
      let lst=Array(N).fill(0)
      let place=0
      let cnt=0
      let tmp=0
      lst[0]=1
      for (let i of chargers){
        lst[i]=1
      }
      while (0<=place&&place<=N-1){
        if (lst[place]===1){
          lst[place]=0
          place+=K
          cnt+=1
          tmp=0
        }
        else if(tmp>K){
          cnt=0
          console.log(cnt)
          return
        }
        else{
          place-=1
          tmp+=1
        }

      }
      console.log(cnt-1)
    }
    
    for (const input of inputs) {
      solution(input[0], input[1], input[2], input[3])
    }