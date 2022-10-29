class Parent {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.lastName = 'Zhyvov';
    }

    tellName() {
        console.log(`My name is ${this.name} ${this.lastName}`)
    }

    tellJobTitle(){
        if (this instanceof Child) {
            console.log(`I don't work`)
        } else {
            this.job = 'QA Lead';
            console.log(`My job title is ${this.job}`)
        }
    }
}

class Child extends Parent {

    goToSchool() {
        console.log('I like going to school.')
    }
}


const dmytro = new Parent('Dmytro', 37);
dmytro.tellName();
dmytro.tellJobTitle();

const Alex = new Child('Alex', 31);
Alex.goToSchool();
Alex.tellJobTitle();