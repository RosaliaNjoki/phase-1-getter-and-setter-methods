// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius; 

    }
    get diameter(){
        return this.radius * 2;
    }
    get circumference (){
        return Math.PI * this.radius * 2;
    }
    get area (){
        return Math.PI * this.radius * this.radius;
    }
    set diameter (newdiameter){
       return this.radius = newdiameter/2;
    }
    set circumference (newcircumference){
        return this.radius = newcircumference/(Math.PI *2);
    }
    set area(newarea){
        return this.radius =Math.sqrt(newarea/Math.PI);
    }

}
 let circle = new Circle(6); 
 circle.radius;
 circle.diameter;
 circle.circumference;
 circle.area;
 circle.diameter = 36;
 circle.radius;
 circle.circumference = 100;
 circle.radius;
 circle.area = 200;
 circle.radius;
