/*const createMyObject = function() {
    foo, 
    answerToUniverse,
    'olly olly' : 'oxen free';
    sayHello: function (){
        console.log('hello')
    }

    createMyObject.foo = 'bar';
    console.log(createMyObject.foo);

    const createMyObject = function() {
        return {
            foo: 'bar',
            answerToUniverse: 42,
            'olly olly' : 'oxen free',
            sayHello: function (){
               return console.log('hello')
        }
    }
}

console.log(createMyObject);

*/

function updateObject(obj){
    
        obj.foo = 'foo',
        obj.bar = 'bar',
        obj.bizz = 'bizz',
        obj.bang = 'bang'
    return obj
};

let cat = {
    foo: 'bam',
    bar: 'foo',
    bizz: 'fizz',
    bang: 'tang'
};

console.log(updateObject(cat));

