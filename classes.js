class Animal {
    constructor(name) {
      this.name = name;
    }
  
    sound() {
      console.log("The animal makes a sound.");
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name);
    }
  
    sound() {
      console.log("The dog barks.");
    }
  }
  
  const myDog = new Dog("Fido");
  myDog.sound(); 