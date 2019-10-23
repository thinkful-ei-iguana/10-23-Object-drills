const createMyObject = function() {
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