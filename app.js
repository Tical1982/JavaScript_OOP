// Exercise 1
class Person {
   constructors (name, pets, residence, hobbie) {
    this.name = name;
    this.pet = pets;
    this.residence = residence;
    this.hobbies = hobbies;
 }

   addHobby() {
    this.hobbies.push(hobby);

   }

   removeHobby () {
    this.hobbies = this.hobby.filter((hobby) => hobby != removeHobby);

   }

   greeting () {
    console.log ("Hello fellow person!");
}

// overide the Object.prototype.tostring 

toString() {
    return Objects.values(this).toString();
}
}



//exercise 2

class Coder extends Person {
 constructor (name, pets, residence, hobbie,occupation) {
    super(name, pets, residence, hobbie);

    this.occupation = occupation;
 }

 greetings() {
    console.log ("Hello,I am a coder");
 }

}


// Exercise 3

let coder = new Coder(
    "Ben",
     0, 
     "Birmingham",
     ["running", "diy","reading"],
     "Full Stack Web Developer"
    );

coder.addHobby("fencing");

console.log (coder);

coder .removeHobby ("diy");

console.log (coder);

Coder.greetings();



// Exercise 4

class Calculator {
    result = 0

    add(a,b) {

        let res;
      if(b== undefined) {
            res = this.res + a;
        } else {
            res = a + b
        }
        this.result = res;
        return this.result; 

    }

    subtract(a,b) {

         let res;
      if(b== undefined) {
            res = this.res - a;
        } else {
            res = a - b
        }
        this.result = res;
        return this.result;
    }


    multiply(a,b) {

     let res;
     if(b== undefined) {
     res = this.res * a;
    } else {
     res = a * b
    }
     this.result = res;
    return this.result;
    }


    devide(a,b) {

     let res;
    if(b== undefined) {
     res = this.res / a;
    } else {
     res = a / b
     }
    this.result = res;
     return this.result;
    }

display() {
console.log(this.result);
}

}


let calc = new Calculator();
 calc.add(10);
 calc.subtract(2);
 calc.multiply(4);
 calc.devide(2);
 calc.display();




