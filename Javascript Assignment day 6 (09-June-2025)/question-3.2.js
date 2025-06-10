//Q3.2 Create a class Student that inherits from the Person class and has a property studies. 
// Override the greeting() method to include information about what the student is studying.

class Person {
  constructor(name,age,gender,interests){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;

  }
  greeting(){
    return `Hello my name is ${this.name} I am ${this.age} years old my gender is 
    ${this.gender} and I like to ${this.interests} in my free time`;
  }
  farewell(){ 
    return `Goodbye ${this.name} it was pleasure to meet you and we can ${this.interests} again`;
  }
}

class Student extends Person {
  constructor(name,age,gender,interests,studies){
    super(name,age,gender,interests);
    this.studies = studies;
  }
  greeting(){
    return `Hello my name is ${this.name} of ${13} years and my intersets are
     ${this.interests} and I like to study ${this.studies}`;
  }
}

const rahul = new Person("Rahul",12,"male","play cricket","chemistry");

console.log(rahul.greeting());
