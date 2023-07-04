export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((acc, val) => acc + val.id, 0);
}
