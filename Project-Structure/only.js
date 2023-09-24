// Define a function called speedDetector that takes the speed of the car as input
function speedDetector(speed) {
    // Define constants for the problem
    const speedLimit = 70; // The speed limit in kilometers per hour (km/h)
    const demeritPointsPer5KmOverLimit = 1; // The number of demerit points given for every 5 km/h above the speed limit
    const maxDemeritPoints = 12; // The maximum allowed demerit points before the license is suspended

    // Check if the entered speed is less than the speed limit
    if (speed < speedLimit) {
        console.log("Ok"); // If the speed is within the limit, print "Ok"
    } else {
        // Calculate the excess speed over the limit
        const excessSpeed = speed - speedLimit;

        // Calculate demerit points for every 5 km/h over the limit
        const demeritPoints = Math.floor(excessSpeed / 5);

        // Check if demerit points exceed the maximum allowed
        if (demeritPoints > maxDemeritPoints) {
            console.log("License suspended"); // Print "License suspended" if points exceed the maximum
        } else {
            console.log("Points: " + demeritPoints); // If points are 12 or fewer, print the number of points
        }
    }
}

// Test cases

// Test case 1: Enter a speed of 80 km/h
// Expected output: "Points: 2"
// Comment: The speed is 10 km/h over the limit (70), so 2 demerit points are awarded.
speedDetector(80);

// Test case 2: Enter a speed of 65 km/h
// Expected output: "Ok"
// Comment: Since the speed is less than 70, it should print "Ok."
speedDetector(65);

// Test case 3: Enter a speed of 95 km/h
// Expected output: "Points: 5"
// Comment: The speed is 25 km/h over the limit (70), so 5 demerit points are awarded.
speedDetector(95);

// Test case 4: Enter a speed of 130 km/h
// Expected output: "License suspended"
// Comment: The speed is 60 km/h over the limit (70), exceeding the maximum allowed demerit points (12).
speedDetector(150);

