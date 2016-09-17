/**
 * Created by Dominic on 17-Sep-16.
 */
/**
 * Created by Dominic on 17-Sep-16.
 */

class Person {
    constructor(public name : string, public age : number){

    }
}

class Student extends Person{
    constructor(name : string, age : number){
        super(name, age);
    }

    getDetails() : string{
        return this.name + " is " + this.age + " years old";
    }
}

var dominic : Student = new Student("Dominic", 23);