const engKattaIkkinchi = (array) => {
    array.sort((a, b) => a - b);
    console.log(array);
    console.log(array[array.length-2]);
}

engKattaIkkinchi([15, 152, 10, 8, 160]) 