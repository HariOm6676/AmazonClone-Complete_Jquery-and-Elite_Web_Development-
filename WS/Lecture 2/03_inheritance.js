// in javascript one class can inherit another class using the extends keyword. THe subclass inherits all the methods (both static and non static ) of the parent class.
// Inheritance enables the reusability  of the given class.
// JavaScript uses prototypal inheritance which is quite complex and un readable.But now extends keyword makes it very easy.
class Vehicle{
    constructor (make, model){
        // base class Vechicle with constructor initializing two member methods
        this.make = make;
        this.model = model;
    }
}
class Car extends Vehicle{
    constructor(make,model,regNo,fuelType){
        super(make,model);
        this.regNo=regNo;
        this.fuelType=fuelType;
      
    }
    getDetails(){
        // template literals used for displaying details of the class
        console.log((this.make),(this.model),(this.regNo),(this.fuelType));
    }
}
let car = new Car("Hundai","i10","KA-016544","petrol");
car.getDetails();