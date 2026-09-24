function calculateGrade(examScore) {
  // Determine letter grade based on a grading scale
  let letterGrade;
  if (examScore >= 90) {
    letterGrade = "A";
  } else if (examScore >= 80) {
    letterGrade = "B";
  } else if (examScore >= 70) {
    letterGrade = "C";
  } else if (examScore >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }
  // Return the calculated letter grade
  return letterGrade;
}
 calculateGrade(70)
 console.log("Your grade is:", calculateGrade(70))