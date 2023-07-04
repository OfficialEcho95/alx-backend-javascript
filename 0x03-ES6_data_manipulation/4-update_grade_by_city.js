export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return getListStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
      const grade = matchingGrade ? matchingGrade.grade : 'N/A';
      return { ...student, grade };
    });
}
