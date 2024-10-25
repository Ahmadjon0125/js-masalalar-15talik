let find = (arr, a)=>{
    for(let i =0; i<arr.length; i++){
        for(let j = i+1; j< arr.length; j++){
            if(arr[i] + arr[j] === a){
               return console.log(`${arr[i]} va ${arr[j]}`)
            }
        }
    }

    console.log('bunday elementlar topilmadi')
}

find([2, 'kino', 3, 8, 10], 6)