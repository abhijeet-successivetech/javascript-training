//Q3.1  Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person.
//  Also add a method farewell() that returns a string saying goodbye to the person.

class Person {
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }
  greeting() {
    return `Hello my name is ${this.name} I am ${this.age} years old my gender is 
    ${this.gender} and I like to ${this.interests} in my free time`;
  }
  farewell() {
    return `Goodbye ${this.name} it was pleasure to meet you and we can ${this.interests} again`;
  }
}

const john = new Person("Nisha", 21, "Female", "Play tennis");

console.log(john.greeting());
console.log(john.farewell());
