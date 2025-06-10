/*Q5. Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties.
The function should handle nested objects and arrays.
const obj = {
   a: 1,
   b: { c: 2, d: [3, 4] }
};
Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }
*/

function objectFlatter(obj){
  const ans = {};

  for( const i in obj ){
    
    if(!obj.hasOwnProperty(i)) continue;

    if( (typeof obj[i]) == "object" && obj[i] !== null){

      const toFlat = objectFlatter(obj[i]);

      for(const j in toFlat){
        if(!toFlat.hasOwnProperty(j)) continue;

        ans[i + "." + j]  = toFlat[j];

      }
    }
    else {
      ans[i] = obj[i];
    }

  }
  return ans;

}

const inp = process.argv.slice(2);
try{
    const obj = JSON.parse(inp);
    if( !(typeof obj) == 'object' || !Array.isArray(obj)){
        console.log("Error");
        
    }
    else{
        objectFlatter(obj);
    }

}catch(e){
    console.log("Error!! wrong format");
}