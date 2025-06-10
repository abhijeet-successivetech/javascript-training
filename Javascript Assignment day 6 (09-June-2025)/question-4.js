//Q4. Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have a method called 
// `fullName` that returns the person's full name.
//Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.

class Person {
  constructor(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  fullName(){
    return `Hi I am ${this.firstName} ${this.lastName} of ${this.age} years`;
  }
  static averageAge(obj){
    let sum =0;
    obj.forEach(element => { sum +=element?.age
      
    });
    return sum/obj.length;
    
  }
   

}

const raj = new Person("Raj","Singh",20);

console.log(raj.fullName());


const listPerson = [
  new Person("Alice", "Raj",21),
  new Person("Rahul","Red",27)
]
console.log(`The average age  is ${Person.averageAge(listPerson)}`);
