interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Alice',
    lastName: 'Anderson',
    age: 42,
    location: 'Uruguay',
};
const student2: Student = {
    firstName: 'Bob',
    lastName: 'Boldemort',
    age: 19,
    location: 'Hungary'
};

const studentsList: Array<string> = [student1.firstName, student2.lastName];
