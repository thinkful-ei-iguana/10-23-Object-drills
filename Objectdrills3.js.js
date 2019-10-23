const loaf = {
    flour: 300,
    water: 210,
    hydration: function(){
         let result = (loaf.water / loaf.flour) * 100;
         return result;
    }
}
let finalResult = loaf.hydration();
console.log(finalResult);