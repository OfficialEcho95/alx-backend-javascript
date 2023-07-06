interface Teacher {
    readonly firstName: String;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsofExperience?: number;
    location: string
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1); 