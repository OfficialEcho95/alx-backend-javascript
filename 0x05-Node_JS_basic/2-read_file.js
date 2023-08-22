const fs = require('fs');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    // Filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1).map((line) => line.split(','));

    const fields = {};
    for (const student of students) {
        const field = student[3].trim();
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(student[0]);
      }

    console.log(`Number of students: ${students.length}`);
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(
          `Number of students in ${field}: ${fields[field].length}.`
          + `. List: ${fields[field].join(', ')}`
        );
      }
    }
  } catch (err) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
