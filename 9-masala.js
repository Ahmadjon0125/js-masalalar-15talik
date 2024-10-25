const checkPalindrome = (a) =>{
    let string = a.toString()
    let length = string.length

    for( let i =0; i< length/2; i++){
        if(string[i] !== string[length-1-i]) return console.log(false);
    }
    console.log(true)
}

checkPalindrome(12121)