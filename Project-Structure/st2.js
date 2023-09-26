function calculateGrade() {
    // Prompt the user for input marks as a number
    var marks = Math.floor(prompt("Enter student marks (0-100):"));

    // Check if the input marks are a valid number and within the range
    if (!isNaN(marks) && marks >= 0 && marks <= 100) {
        var grade;
        if (marks > 79) {
            grade = 'A';
        } else if (marks >= 60) {
            grade = 'B';
        } else if (marks >= 50) {
            grade = 'C';
        } else if (marks >= 40) {
            grade = 'D';
        } else {
            grade = 'E';
        }

        // Display the corresponding grade
        console.log("Grade: " + grade);
    } else {
        console.log("Invalid input! Marks should be between 0 and 100.");
    }
}

// Call the function to calculate and display the grade
calculateGrade();
