const ages =[12,4,12,48,5,23];
const ages2 = [15,55,12];

const allages =[ages,ages2];
console.log(allages);
const allages2 = [...ages, ...ages2];
console.log(allages2);

const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisha = [650,450,250];

const maximum = Math.max(...takaPoisha);
console.log(maximum);