//Q7. Write a program to find index of duplicate elements in an array


function firstDuplicateIndex(arr){
    const value = {};
    const duplicates = [];
    for (let i = 0 ; i < arr.length; i++){
        let key  = arr[i];
        if(value[key] === undefined){
            value[key] = i;
            
        }
        else{
            if(!duplicates.includes(value[key])) {
                duplicates.push(value[key]);
            }
        }
    }
    console.log(duplicates);
}

firstDuplicateIndex([1,2,2,3,3,4,5,5,5,6]);