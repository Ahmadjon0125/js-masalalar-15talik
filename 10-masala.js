const sum =(a)=>{
    let count = 0
    let str = a.toString() 
    
    for( let i=0; i< str.length; i++){
        count = count + Number(str[i])
    }

    console.log(count)
}

sum(1003)