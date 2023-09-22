// The new feature like class and inheritance eases the development and work with c;asses in the application.
// Javascript is an object based language.
// The new feature like class and inheritance eases the development and work with c;asses in the application.
// Javascript is an object based language.
class Calculator{
    constructor (num1, num2){
        // constructor is used for initializing the class instance
        // properties initialized in the constructors
        this.num1=num1;
        this.num2= num2;
    }
    // Methods used by the class for performing the operation

    add(){
        return this.num1+this.num2;
    }
    subtract(){
        return this.num1-this.num2;
    }
    multiply(){
        return this.num1*this.num2;
    }
}
calculator= new Calculator(300,100);
Calculator.display();
console.log("Add Method returns "+calculator.add());
console.log("Subtract Method returns "+calculator.subtract());
console.log("Multiply method returns "+calculator.multiply());