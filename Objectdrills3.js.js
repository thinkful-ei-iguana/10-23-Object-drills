// const loaf = {
//     flour: 300,
//     water: 210,
//     hydration: function(){
//          let result = (loaf.water / loaf.flour) * 100;
//          return result;
//     }
// }
// let finalResult = loaf.hydration();
// console.log(finalResult);

// const newObject = {
//     foo: 'fi',
//     bar: 'BAR',
//     fum: 'Fumes',
//     quux: 'Quacks',
//     spam: 'Spat'
// }
// function loopObject(){
//     for (const key in newObject){
//         let value = newObject[key];
//         console.log(`${key}: ${value}`);
//     }
// }
// loopObject(newObject);

// const food = {
//     meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
// }
// let timeOfMeal = food.meals[3];
// console.log(timeOfMeal);
// let superHeroes = [
//    { name: 'Clark Kent',
//     jobTitle:'Reporter',
//     boss: "Bruce Wayne"
// },

//  {
//     name: 'Bruce Wayne',
//     jobTitle:'Designated BoneBreaker'
// },
//  {
//     name: "Sonic the Hedgehog",
//     jobTitle:"GO FAST!",
//     boss: "Bruce Wayne"
// },
// ];
// function identifyHeroes(data){
//     let hero = data.map(function(data){
//         if(data.boss === undefined) {
//           return `${data.jobTitle} ${data.name} doesn't report to anybody.`; 
//         }else { 
//             return `${data.name} reports to ${data.boss} as ${data.jobTitle}`;  
//         }
//     });
//     return hero;
// }
// console.log(identifyHeroes(superHeroes));
let code = [ {characterA : 'r'}, {characterB : 'o'}, {characterC : 'f'}, {characterD : 'p'}, {characterM : 'l'}, ] 
let value = code.characterA; console.log(value);

function decode (codeData){
    let encodedData = codeData.map(function(data){
        if(data.characterA === )
    })
let superHeroes = [
   { name: 'Clark Kent',
    jobTitle:'Reporter',
    boss: "Bruce Wayne"
},

 {
    name: 'Bruce Wayne',
    jobTitle:'Designated BoneBreaker'
},
 {
    name: "Sonic the Hedgehog",
    jobTitle:"GO FAST!",
    boss: "Bruce Wayne"
},
];
function identifyHeroes(data){
    let hero = data.map(function(data){
        if(data.boss === undefined) {
          return `${data.jobTitle} ${data.name} doesn't report to anybody.`; 
        }else { 
            return `${data.name} reports to ${data.boss} as ${data.jobTitle}`;  
        }
    });
    return hero;
}
let finalResult = loaf.hydration();
console.log(finalResult);

function decode (encode){

    let solution = [];
    let arryString = encode.split(" "); //[ 'craft','block','argon','meter','bells','brown','croon','droop' ]
    
    
    for(let i = 0; i < arryString.length; i++){
        let word = arryString[i];
        let firstLetter = word.substring(0, 1);
    
        if(firstLetter === 'a') {
            let convertedLetter = word.charAt(1);
            solution.push(convertedLetter);
        }
    
        if(firstLetter === 'b') {
            let convertedLetter = word.charAt(2);
            solution.push(convertedLetter);
        }
    
        if(firstLetter === 'c') {
            let convertedLetter = word.charAt(3);
            solution.push(convertedLetter);
        }
    
        if(firstLetter === 'd') {
            let convertedLetter = word.charAt(4);
            solution.push(convertedLetter);
        }
    
    }
    
    let finalSolution = solution.join('');*/
    
    //return finalSolution;



    let code = {
        characterC : 'f',
        characterB : 'o',
        characterA : 'r',
        characterSpace: ' ',
        characterM : 'l',
        characterDouble: 'o',
        characterTrouble: 'o',
        characterD : 'p',
    }

function decode (codeData){
    let arrCode = [];
    

    for(let property in codeData){
        let keyValue = codeData[property];

        if(keyValue === 'f'){
            arrCode.push('f')
        }
        if(keyValue === 'o'){
            arrCode.push('o')
        }
        if(keyValue === 'r'){
            arrCode.push('r')
        }
        if(keyValue === 'l'){
            arrCode.push('l')
        }
        if(keyValue === 'p'){
            arrCode.push('p')
        }
        else if(keyValue === ' '){
            arrCode.push(' ');
        }
     
    }
    let decodedCode = arrCode.join('');
    return decodedCode;
}

let result = decode(code);
console.log(result);