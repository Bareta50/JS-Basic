console.log("Hey I'm back!");
/*
const fname = "Filip";

console.log(fname);
fname = "Lidija";
console.log(fname);

const student = {
  name: "Filip",
  lastName: "Velichkovski",
  age: 21,
  isAnActiveStudent: true,
  subjects: ["HTML", "CSS", "JavaScript"],

  printSubjects: function () {
    console.log(`These are ${this.name} ${this.lastName}'s active subjects! `);
    for (const subjects of this.subjects) {
      console.log(subjects);
    }
  },
};
console.log(student);
console.log(student.name);
console.log(`${student.name} ${student.lastName}`);
student.printSubjects();
//-----------------

const student2 = {};
console.log(student2);

student2.name = "Genadi";
student2.lastName = "Stojkovski";
student2.age = "42";

console.log(student2);
student2.printNameAndAge = function () {
  console.log(`${this.name} has ${this.age} years`);
};

student2.printNameAndAge();

//#-#-#-#-#-#-#-#-

const aboutMe = {
  myName: "Filip",
  myLastName: "Velichkovski",
  myAge: 21,
  mySiblings: 1,
  hasGF: false,
  lovesGames: true,

  factsAboutme: function () {
    console.log(
      `My name is ${this.myName} ${this.myLastName}, I am ${this.myAge}. GF? ${this.hasGF}; likes games? ${this.lovesGames}`
    );
  },
};

aboutMe.factsAboutme();
*/ /*
const aboutfriend = {
  myName: "Filip",
  myLastName: "Velichkovski",
  myAge: 21,
  mySiblings: 1,
  howManyGFs: 1,
  hasGF: "single",
  lovesGames: true,

  factsAboutme: function () {
    console.log(
      `My name is ${this.myName} ${this.myLastName}, I am ${this.myAge}. I've had ${this.howManyGFs} GF's and now I'm ${this.hasGF}; likes games? ${this.lovesGames}`
    );
  },
};

aboutfriend.myName = "Predrag";
aboutfriend.myLastName = "Stankovski";
aboutfriend.lovesGames = false;
aboutfriend.howManyGFs = "Number not found!";
aboutfriend.factsAboutme();

const trainer = {
  name: "Stefan",
  lastName: "Stefanovski",
  academy: "SEDC",
  lecture: "Objects",

  getFullName: function () {
    console.log(
      `The trainer for the JS classes is ${this.name} ${this.lastName}`
    );
  },
};

delete trainer.lecture;
trainer.age = 28;
console.log(trainer);
trainer.getFullName();

function Student(name, age, skills = [], isEnroled = true) {
  // Initialize the properties
  this.name = name;
  this.age = age;
  this.skills = skills;
  this.isEnroled = isEnroled;

  this.printSkills = function () {
    console.log(`${this.name}'s Skills:`);
    for (const skill of this.skills) {
      console.log(skill);
    }
  };
}

const student3 = new Student("Ivan", 27, ["JavaScript", "TypeScript"], false);
console.log(student3);

student3.printSkills();

function test() {
  console.log(this);
}
test();
*/

// Constructor class (The - New - Way - ES6)

class BootcampStudent {
  constructor(
    studentName,
    studentAge,
    studentSkills = [],
    studentIsEnroled = true
  ) {
    this.name = studentName;
    this.age = studentAge;
    this.skills = studentSkills;
    this.isEnroled = studentIsEnroled;
  }

  printSkills() {
    console.log(`${this.name}'s Skills:`);
    for (const skill of this.skills) {
      console.log(skill);
    }
  }
  addSkills(skill) {
    this.skills.push(skill);
    console.log(`Added skill ${skill} for ${this.name}`);
  }
}

const student4 = new BootcampStudent("Stojko", "63", [
  "Marketing",
  "Managment",
  "Sales",
]);
console.log(student4);
student4.printSkills();
student4.addSkills("Basic");

class Car {
  constructor(carModel, carColor, yearMade, maxFule, fuleConsumption) {
    this.model = carModel;
    this.color = carColor;
    this.prodYear = yearMade;
    this.fule = maxFule;
    this.fulePerKM = fuleConsumption;
  }
  fulrForTrip(distance) {
    return distance * (this.fuleConsumption / 100);
  }
}
const Citroen = new Car("C4", "LightGray", 2008, 60, 10);
console.log(Citroen);

const FuleForTrip = Citroen.fulrForTrip(50);
console.log(FuleForTrip);
