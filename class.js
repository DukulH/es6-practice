class Student {
    constructor(sID, sName){
        this.id = sID;
        this.name =sName;
        this.school = 'Khet school and college';
    }
}
const student1 = new Student(12, "Shala");
const student2 = new Student(22, "Babu");
const student3 =  Student(24, 'Bappi');
console.log(student1.name, student2.name);