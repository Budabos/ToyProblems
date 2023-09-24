// Function to check the driver's speed and calculate demerit points
function speedDetector(speed) {
    // Define constants for the problem
    const speedLimit = 70; // The speed limit in kilometers per hour (km/h)
    const demeritPointsPerKmOverLimit = 5; // The number of demerit points given for every 5 km/h above the speed limit
    const maxDemeritPoints = 12; // The maximum allowed demerit points before the license is suspended

    // Check if the entered speed is less than 70 km/h
    if (speed < speedLimit) {
        console.log("Ok"); // If the speed is less than 70, print "Ok"
    } else if (speed > 69) { // If the speed is 70 or greater
        let points = Math.floor((speed - 70) / demeritPointsPerKmOverLimit); // Calculate demerit points

        // Check if demerit points exceed 12
        if (points > maxDemeritPoints) {
            console.log("License suspended"); // If points exceed 12, print "License suspended"
        } else {
            console.log("Points: " + points); // If points are 12 or fewer, print the number of points
        }
    }
}

// output: "Ok"
// Comment: Since the speed is less than 70, it should print "Ok".
let testSpeed1 = 65;
speedDetector(testSpeed1);


// output: "Points: 2"
// The speed is 10 km/h over the limit (70), so 2 demerit points are awarded.
let testSpeed2 = 80;
speedDetector(testSpeed2);


//  output: "License suspended"
//  The speed is 60 km/h over the limit (70), exceeding the maximum 12 demerit points.
let testSpeed3 = 150;
speedDetector(testSpeed3);

