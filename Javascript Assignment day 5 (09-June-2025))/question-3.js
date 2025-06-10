//Q3. Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})


const removeID = (userList) => {
    for (const key of userList) {
        delete key.id;
    }
}
console.log(obj);


const inp = process.argv.slice(2);
try {
    const obj = JSON.parse(inp);
    if (!(typeof obj) == 'object' || !Array.isArray(obj)) {
        console.log("Error");

    }
    else {
        removeID(obj);
    }

} catch (e) {
    console.log("Error!! wrong format");
}