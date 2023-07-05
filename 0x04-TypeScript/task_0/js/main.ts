interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const studentsList: Student[] = [
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
  
  function renderTable(): void {
    const table = document.getElementById("studentTable");
  
    studentsList.forEach((student) => {
      const row = document.createElement("tr");
  
      const firstNameCell = document.createElement("td");
      firstNameCell.textContent = student.firstName;
      row.appendChild(firstNameCell);
  
      const locationCell = document.createElement("td");
      locationCell.textContent = student.location;
      row.appendChild(locationCell);
  
      table?.appendChild(row);
    });
  }
  
  renderTable();
  