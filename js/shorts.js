//merge two arrays with sprsead operaor
const a = [1, 2];
const b = [3, 5];
const c = [...a, ...b];

console.log(c); // Output: [1, 2, 3, 5]



//Java scriot object mehod
const person = {
    fullname: "Benjimin Franklin",
    nickname: "Redd monkey",
    tellthetruth() {
        console.log(`My name is ${this.fullname}. I am also a ${this.nickname}`);
    }
};

// Calling the method
person.tellthetruth();

