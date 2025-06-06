//Q12. Interset two arrays 
function intersect(array1,array2){
    
    const ans = new Set();
    for(let i=0;i<array1.length ;i++){
        if(array2.includes(array1[i])){
            ans.add(array1[i]);
        }
    }
    return ans;
}

const array1 = [1,2,3,3,4];
const array2 = [2,3,3,4];

console.log(intersect(array1,array2));