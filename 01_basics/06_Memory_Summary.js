/* 
There are basically two types of memory in javascript...

1) Stack (Used in every Primitive Datatypes)
2) Heap (Reference or non-primitive Datatypes)

*/

let myname = "Rudra Shukla"

let anothername = myname;
console.log(anothername);

anothername = "Hritik Shukla"

console.log(anothername);

/*******************************Objects in Javascript*****************************/

let userOne = {
    email: "Rudra@google.com",
    upi: "ybl-rudra12345@ybl.com"
}

let userTwo = {
    email: "Hritik@google.com",
    upi: "ybl-hritik12345@ybl.com"
}

userOne = userTwo

userTwo.email = "Hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
