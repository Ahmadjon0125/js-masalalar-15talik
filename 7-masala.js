const mukammalSon = (num) =>{
    count = 0
    for (let i=1; i<num; i++){
        if(num % i == 0) {
            count = count + i
        }
    }
    if(count == num) return console.log(true)
    else return console.log(false)
}

mukammalSon(18)