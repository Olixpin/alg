function gradingStudents(grades) {
  let newGrades = [];
  for (let i = 0; i < grades.length; i++) {
    let grade = grades[i];
    if (grade < 38) {
      newGrades.push(grade);
    } else {
      let nextMultiple = Math.ceil(grade / 5) * 5;
      if (nextMultiple - grade < 3) {
        newGrades.push(nextMultiple);
      } else {
        newGrades.push(grade);
      }
    }
  }
  return newGrades;
}

console.log(gradingStudents([4, 73, 67, 38, 33]));

// function gradingStudents(grades) {
//   // Write your code here
//   let finalGrade = grades;
//   if (finalGrade <= 33) {
//     return finalGrade;
//   }

//   if (finalGrade % 5 !== 0) {
//     for (let i = 1; i < 5; i++) {
//       if ((finalGrade + i) % 5 === 0) {
//         finalGrade = finalGrade + i;
//       }
//     }
//   }

//   if (finalGrade - grades < 3) {
//     return finalGrade;
//   }

//   return grades;
// }

// console.log(gradingStudents(73));

function studentGrading2(grades) {
  return grades.map(grade =>
    grade < 38
      ? grade
      : Math.ceil(grade / 5) * 5 - grade < 3
        ? Math.ceil(grade / 5) * 5
        : grade
  );
}
console.log(studentGrading2([4, 73, 67, 38, 33]));

2 === 3 ? true : 3 == 5 ? false : true;
