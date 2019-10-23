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


