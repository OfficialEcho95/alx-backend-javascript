var studentsList = [
    {
        firstName: "Martin",
        lastName: "Martha",
        age: 20,
        location: "Location",
    },
    {
        firstName: "Sam",
        lastName: "Smith",
        age: 22,
        location: "Abuja",
    },
];
function renderTable() {
    var table = document.getElementById("studentTable");
    studentsList.forEach(function (student) {
        var row = document.createElement("tr");
        var firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);
        var locationCell = document.createElement("td");
        locationCell.textContent = student.location;
        row.appendChild(locationCell);
        table === null || table === void 0 ? void 0 : table.appendChild(row);
    });
}
renderTable();
