// TASK 1

interface Teacher {
    readonly firstName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly lastName: string;
    location: string;
    [propName: string]: any;
}

const teacher1: Teacher = {
    firstName: 'John',
    fullTimeEmployee: true,
    lastName: 'Doe',
    location: 'Los Angeles',
    contract: true,
}

//console.log(teacher1);


// TASK 2

interface Directors extends Teacher {
    numberOfReports: number;
}

// TASK 3

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

// TASK 4

class StudentClass {
    
}