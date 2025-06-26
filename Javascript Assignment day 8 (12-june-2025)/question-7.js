// 7. for (var i = 0; i < 10; i++) {
// setTimeout(function() { console.log(i); }, 1000); }

for (let i = 0; i < 10; i++) { // changed the var to let in order to get loop result
  setTimeout(function () { console.log(i); }, 1000); 
}