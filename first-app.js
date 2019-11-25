// this file is for practicing any javascript function.

const name ='YEH';
let age =27;
const hasHobbies = true;

age = 30;

const summarizeUser = (userName,userAge,userHasHobby) => {
    
    return ('Name is '+ userName +',age is '
    + userAge +
    ', and ' +
    userHasHobby
    ); 
}


// if you only have one statement in  the function
/*
const add = (a,b) =>{
    return a + b ;
}
*/
//you can short it for like this
const add = (a,b) => a + b;

//console.log(add(1,2));
//console.log(summarizeUser(name,age,hasHobbies));


const hobbies = ['Sports','Cooking'];

//copy the arraty hobbies
const copiedArray = hobbies.slice();

console.log(copiedArray);