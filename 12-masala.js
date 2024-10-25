const func = (arr, n) =>{
    let count = 0;

    for(let i=0; i< arr.length; i++){
        if(arr[i] == n){
            count += 1
        }
    }

    console.log(`bu yerda ${count} ta ${n} bor`)
}

func([1, 1, "salom", 1, 125], 1)