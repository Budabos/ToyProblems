function calculateDemeritPoints(speed) {
    // Set the speed limit and the number of kilometers per demerit point
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
  
    // Check if the speed is less than the speed limit
    if (speed < speedLimit) {
      // If it is, print "Ok" and return from the function
      console.log('Ok');
      return;
    }
  
    // Calculate the number of demerit points by subtracting the speed limit from the actual speed,
    // and then dividing the result by the number of kilometers per demerit point
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
  
    // Check if the number of demerit points exceeds the threshold of 12
    if (demeritPoints > 12) {
      // If it does, print "License suspended"
      console.log('License suspended');
    } else {
      // If it doesn't, print the number of demerit points
      console.log('Points:', demeritPoints);
    }
  }
  
  // Example usage:
  calculateDemeritPoints(80);
  