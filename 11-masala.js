const array = (arr)=>{
    let newArr = []
    for (let i = arr.length -1; i>=0; i--){
        newArr.push(arr[i])
    }
    console.log(newArr)
}

array([1,2,"hi",3])
