'use strict '
const testData = [
    { name: 'Jane Doe', grade: 'A' },
    { name: 'John Dough', grade: 'B' },
    { name: 'Jill Do', grade: 'A' },
  ];
function makeStudentsReport(data) {
    let studentReport = data.map(function(student){
        return `${student.name}: ${student.grade}`
    });
    return studentReport;
}
console.log(makeStudentsReport(testData));
  const studentData = [
    {
      name: 'Tim',
      status: 'Current student',
      course: 'Biology',
    },
    {
      name: 'Sue',
      status: 'Withdrawn',
      course: 'Mathematics',
    },
    {
      name: 'Liz',
      status: 'On leave',
      course: 'Computer science',
    },
  ];
  
  function enrollInSummerSchool(students) {
    let makeStudent = students.map(function(student){
        student.status = 'Enrolled in summer school'
        return student;
     });
     console.log(makeStudent);
     return makeStudent;
     
}
enrollInSummerSchool(studentData);
  const scratchData = [
    { id: 22, foo: 'bar' },
    { id: 28, foo: 'bizz' },
    { id: 19, foo: 'bazz' },
  ];
  
  function findById(items, idNum) {
    let item = items.map(function(item){
        if(item.id === idNum){
            return item;
        }
    });
    return item;
  }
  console.log(findById(scratchData, 28));
  const objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago',
  };
  
  // running the function with `objectB` and `expectedKeys`
  // should return `false`
  const objectB = {
    id: 3,
    age: 33,
    city: 'Peoria',
  };
  
  const expectedKeys = ['id', 'name', 'age', 'city'];
  
  function validateKeys(object, expectedKeys) {
   let arrKey = Object.keys(object);
    if (arrKey.length === expectedKeys.length){
        return true;
    }else {
        return false;
    }
  
  }
  console.log(validateKeys(objectB, expectedKeys));