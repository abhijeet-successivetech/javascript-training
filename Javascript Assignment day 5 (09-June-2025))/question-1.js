
//Q1. Write a program to iterate over object.


const traverseObject = (obj) => {

    for (const key in obj) {
        console.log(`name ${key}  no. ${obj[key]} `);
    }
}


const inp = process.argv.slice(2);
try {
    const obj = JSON.parse(inp);
    if (!(typeof obj) == 'object') {
        console.log("Error");

    }
    else {
        traverseObject(obj);
    }

} catch (e) {
    console.log("Error!! wrong format");
}