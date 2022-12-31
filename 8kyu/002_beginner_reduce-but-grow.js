function grow(x){
    let temp = x[0];
    for(let i = 1; i < x.length; i++)
        temp *= x[i];
    return temp;
}