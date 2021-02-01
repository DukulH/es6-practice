const person ={name:"Jack William", age:17, job:'faceboker' , address:'locju khet', gfName:"Sabila Noor", phone:'017145745', friend: ['ayla','koula', 'moyla']}

// const gfName = person.gfName;
// const phone = person.phone;

const {phone, gfName} = person;

console.log(gfName, phone);

const friends =['Sakib Khan', 'Haluwa Khan', 'Muri Khan', 'Vat Khan'];
const[fistFriend,secondFriend, ...restFriends] = friends;
console.log(restFriends);

const complexObject = {
    name: 'abc',
    info: {
        address: 'Taltola',
        leader: 'Baker Bhai'
    }
}

const {leader,address} = complexObject.info;
console.log(leader, address);