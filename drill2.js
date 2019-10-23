'use strict '
// function makeStudentsReport(data) {
    
// }
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
//   const scratchData = [
//     { id: 22, foo: 'bar' },
//     { id: 28, foo: 'bizz' },
//     { id: 19, foo: 'bazz' },
//   ];
  
//   function findById(items, idNum) {
//     // your code here
//   }
//   const objectA = {
//     id: 2,
//     name: 'Jane Doe',
//     age: 34,
//     city: 'Chicago',
//   };
  
//   // running the function with `objectB` and `expectedKeys`
//   // should return `false`
//   const objectB = {
//     id: 3,
//     age: 33,
//     city: 'Peoria',
//   };
  
//   const expectedKeys = ['id', 'name', 'age', 'city'];
  
//   function validateKeys(object, expectedKeys) {
//     // your code goes here
  
//   }