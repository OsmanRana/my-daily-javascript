// Costructor Function
/* function Person (firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    // this.getBirthYear = function (){
    //     return this.dob.getFullYear()
    // }
    // this.fullName = function (){
    //     return `${this.firstName} ${this.lastName}`
    // }
} */

/* Person.prototype.getBirthYear = function (){
    return this.dob.getFullYear();
}

Person.prototype.fullName = function (){
    return `${this.firstName} ${this.lastName}`
} */

// Class

class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);

    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

const person1 = new Person("Md Osman", "Farooque", "7-02-1983")
console.log(person1.getBirthYear())
console.log(person1.getFullName())