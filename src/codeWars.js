let arr = [[1, 2, 3], [44, 21, 5], [27, 13, 8,7]]
const minNumberOfArr = ()=>{
    let minNum=[]
    for (let i = 0; i < arr.length; i++) {
        arr[i].sort((a, b) => a - b)
        minNum.push(arr[i][0])
    }
    return minNum.reduce((a,b) => a + b)
}
console.log(minNumberOfArr(arr))