// ==========================================
// DAY 2 - FUNCTIONS, ARRAYS, OBJECTS
// ==========================================

// 1. Function to calculate average of an array
function calculateAverage(numbers) {
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
}

const numbers = [10, 20, 30, 40, 50];
console.log("Average:", calculateAverage(numbers));


// ==========================================
// 2. Convert Celsius to Fahrenheit using map()
// ==========================================

const celsiusTemps = [0, 20, 30, 40];

const fahrenheitTemps = celsiusTemps.map(
    temp => (temp * 9 / 5) + 32
);

console.log("Celsius:", celsiusTemps);
console.log("Fahrenheit:", fahrenheitTemps);


// ==========================================
// 3. Filter students who scored above 60
// ==========================================

const students = [
    { name: "Rahul", score: 75 },
    { name: "Anu", score: 55 },
    { name: "Arun", score: 90 },
    { name: "Neha", score: 45 }
];

const passedStudents = students.filter(
    student => student.score > 60
);

console.log("Students scoring above 60:");
console.log(passedStudents);


// ==========================================
// 4. Student Grade Calculator
// ==========================================

const studentGrades = [
    { name: "Rahul", score: 92 },
    { name: "Anu", score: 78 },
    { name: "Arun", score: 65 },
    { name: "Neha", score: 45 }
];

function getGrade(score) {
    if (score >= 90) return "A";
    if (score >= 75) return "B";
    if (score >= 60) return "C";
    return "F";
}

console.log("Student Grades:");

studentGrades.forEach(student => {
    const grade = getGrade(student.score);
    console.log(
        `${student.name} - Score: ${student.score}, Grade: ${grade}`
    );
});