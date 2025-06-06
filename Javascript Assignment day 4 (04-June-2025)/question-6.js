//Q6. Write a program to find sum of an array

function sumArray(array1){
    let sum =0;
    for(const element of array1){
        sum += element;
    }
    return sum;
}

console.log(sumArray([1,10,11]));
