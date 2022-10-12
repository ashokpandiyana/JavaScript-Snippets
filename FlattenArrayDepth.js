function flatArray(arr,depth=1){
    let result = []
    arr.forEach(item => {
        if(Array.isArray(item) && depth > 0){
            result.push(...flatArray(item,depth-1))
        }else{
            result.push(item)
        }
    })
    return result
};

console.log(flatArray([[1,2],[4,5],[5,6,[7,8,9]]]));