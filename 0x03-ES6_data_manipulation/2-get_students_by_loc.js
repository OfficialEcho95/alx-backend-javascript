export default function getStudentsByLocation(getListStudents, city) {
  if (city) {
    return getListStudents.filter((student) => student.location === city);
  } else {
    return [];
  }
