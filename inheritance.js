class Parents {
    constructor(){
        this.fatherName = "Schwarzenegger"
    }
}

class Child extends Parents{
    constructor(name){
        super();
        this.name = name;
    }
}
const baby = new Child('Android');
console.log(baby);