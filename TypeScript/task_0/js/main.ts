interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Manu',
    lastName: 'MeynetG',
    age: 54,
    location: 'Bellevaux'
}  

const student2: Student = {
    firstName: 'Cedric',
    lastName: 'Tobie',
    age: 42,
    location: 'Annemasse'
}  

const studentList: Student[] = [student1, student2];

function renderTable() {
    const tableBody = document.querySelector('#studentTable tbody');

    studentList.forEach(student => {
    
        const row = document.createElement('tr');

        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);

        const locationCell = document.createElement('td');
        locationCell.textContent = student.location;
        row.appendChild(locationCell);

        tableBody.appendChild(row);
    });
}

window.onload = renderTable;