function generateGrade() {
    // Prompt the user to enter the student's marks (between 0 and 100)
    let marks = parseInt(prompt("Enter the student's marks (between 0 and 100):"));
  
    // Check if the marks are greater than 79
    if (marks > 79) {
      return 'A'; // Return 'A' if the marks are greater than 79
    } else if (marks >= 60 && marks <= 79) { // Check if the marks are between 60 and 79 (inclusive)
      return 'B'; // Return 'B' if the marks are between 60 and 79
    } else if (marks >= 50 && marks <= 59) { // Check if the marks are between 50 and 59 (inclusive)
      return 'C'; // Return 'C' if the marks are between 50 and 59
    } else if (marks >= 40 && marks <= 49) { // Check if the marks are between 40 and 49 (inclusive)
      return 'D'; // Return 'D' if the marks are between 40 and 49
    } else {
      return 'E'; // Return 'E' for any other marks (less than 40)
    }
  }
  
  // Call the generateGrade function and store the result in a variable
  var grade = generateGrade();
  
  // Log the generated grade to the console
  console.log('Grade:', grade);
  