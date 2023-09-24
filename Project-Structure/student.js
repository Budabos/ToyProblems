// Define the studentGrade function
function studentGrade(studentMarks) {
    // Check if the entered marks are within the valid range (0 to 100)
    if (studentMarks >= 0 && studentMarks <= 100) {
        // Check if the student's marks are greater than 79
        if (studentMarks > 79) {
            return "You have an A";
        }
        // Check if the student's marks are between 60 and 79 (inclusive)
        else if (studentMarks >= 60 && studentMarks <= 79) {
            return "You have a B";
        }
        // Check if the student's marks are between 50 and 59 (inclusive)
        else if (studentMarks >= 50 && studentMarks <= 59) {
            return "You have a C";
        }
        // Check if the student's marks are between 40 and 49 (inclusive)
        else if (studentMarks >= 40 && studentMarks <= 49) {
            return "You have a D";
        }
        // If none of the above conditions are met, the student gets an E
        else {
            return "You have an E";
        }
    }
    // If the entered marks are not within the valid range, return an error message
    else {
        return "Invalid input. Marks should be between 0 and 100.";
    }
}

// Call the function with predefined test cases and display the results

// Test case 1: Enter marks in the A range (85)
const result1 = studentGrade(85);
console.log(result1); //  "You have an A"

// Test case 2: Enter marks in the B range (70)
const result2 = studentGrade(70);
console.log(result2); //  "You have a B"

// Test case 3: Enter marks in the C range (55)
const result3 = studentGrade(55);
console.log(result3); // "You have a C"

// Test case 4: Enter marks in the D range (45)
const result4 = studentGrade(45);
console.log(result4); //  "You have a D"

// Test case 5: Enter marks in the E range (30)
const result5 = studentGrade(30);
console.log(result5); //  "You have an E"

// Test case 6: Enter marks below 0 (Invalid input) (-10)
const result6 = studentGrade(-10);
console.log(result6); //  "Invalid input. Marks should be between 0 and 100."

// Test case 7: Enter marks above 100 (Invalid input) (110)
const result7 = studentGrade(110);
console.log(result7); // "Invalid input. Marks should be between 0 and 100."

