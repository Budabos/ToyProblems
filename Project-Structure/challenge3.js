function calculateNetSalary(basicSalary, benefits) {
    // Calculate gross salary
    let grossSalary = basicSalary + benefits;
    
    // Calculate PAYE tax
    let paye = calculatePayeTax(grossSalary);
    
    // Calculate NHIF deductions
    let nhif = calculateNhifDeductions(grossSalary);
    
    // Calculate NSSF deductions
    let nssf = calculateNssfDeductions(basicSalary);
    
    // Calculate net salary
    let netSalary = grossSalary - paye - nhif - nssf;
    
    return netSalary;
}

function calculatePayeTax(grossSalary) {
    // PAYE rates in effect from 1 July 2023
    let taxRanges = [
        [0, 24000, 0],
        [24001, 32333, 0.1],
        [32334, 500000, 0.3],
        [500001, 800000, 0.325],
        [800001, Infinity, 0.35]
    ];
    
    // Find the applicable tax rate
    for (let i = 0; i < taxRanges.length; i++) {
        let [lower, upper, rate] = taxRanges[i];
        if (lower <= grossSalary && grossSalary <= upper) {
            let tax = (grossSalary - lower) * rate;
            return tax;
        }
    }
    
    return 0;
}

function calculateNhifDeductions(grossSalary) {
    // NHIF rates in effect from 1 April 2015
    let nhifRanges = [
        [0, 5999, 150],
        [6000, 7999, 300],
        [8000, 11999, 400],
        [12000, 14999, 500],
        [15000, 19999, 600],
        [20000, 24999, 750],
        [25000, 29999, 850],
        [30000, 34999, 900],
        [35000, 39999, 950],
        [40000, Infinity, 1000]
    ];
    
    // Find the applicable NHIF deduction
    for (let i = 0; i < nhifRanges.length; i++) {
        let [lower, upper, deduction] = nhifRanges[i];
        if (lower <= grossSalary && grossSalary <= upper) {
            return deduction;
        }
    }
    
    return 0;
}

function calculateNssfDeductions(basicSalary) {
    // NSSF contribution rates
    let tier1Rate = 0.06;
    let tier1Limit = 6000;
    let tier2Rate = 0.06;
    let tier2Limit = 18000;
    
    // Calculate NSSF deductions
    let tier1Deduction = Math.min(basicSalary, tier1Limit) * tier1Rate;
    let tier2Deduction = Math.max(0, basicSalary - tier1Limit) * tier2Rate;
    
    return tier1Deduction + tier2Deduction;
}

// Example usage
let basicSalary = 50000;
let benefits = 10000;
let netSalary = calculateNetSalary(basicSalary, benefits);
console.log("Net Salary: Ksh", netSalary);

