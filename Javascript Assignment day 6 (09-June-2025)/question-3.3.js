//Q3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. Override the farewell() method to include information about what the teacher teaches.

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

class Teacher extends Person {
  constructor(name, age, gender, interests, subjectsTaught) {
    super(name, age, gender, interests);
    this.subjectsTaught = subjectsTaught;
  }

  farewell() {
    return `Thank you ${this.name} sir for teaching us ${
      this.subjectsTaught
    } as you have dedicate ${this.age - 20} years 
    we would like to give the kite runner because you like ${this.interests}`;
  }
}

const ritik = new Teacher("Ritik", 43, "Male", "Reading novels", "English");

console.log(ritik.farewell());
