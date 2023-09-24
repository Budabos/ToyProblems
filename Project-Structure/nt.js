// Define the function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    // Define the constants for PAYE (Tax) rates and deductions
    const PAYE_RATES = [
        { minMonthly: 0, maxMonthly: 24000, rate: 10.0 },
        { minMonthly: 24001, maxMonthly: 32333, rate: 25.0 },
        { minMonthly: 32334, maxMonthly: 500000, rate: 30.0 },
        { minMonthly: 500001, maxMonthly: 800000, rate: 32.5 },
        { minMonthly: 800001, maxMonthly: Infinity, rate: 35.0 },
    ];

    // Define the constants for NHIF rates and deductions
    const NHIF_RATES = [
        { minGrossPay: 0, maxGrossPay: 5999, deduction: 150 },
        { minGrossPay: 6000, maxGrossPay: 7999, deduction: 300 },
        { minGrossPay: 8000, maxGrossPay: 11999, deduction: 400 },
        { minGrossPay: 12000, maxGrossPay: 14999, deduction: 500 },
        { minGrossPay: 15000, maxGrossPay: 19999, deduction: 600 },
        { minGrossPay: 20000, maxGrossPay: 24999, deduction: 750 },
        { minGrossPay: 25000, maxGrossPay: 29999, deduction: 850 },
        { minGrossPay: 30000, maxGrossPay: 34999, deduction: 900 },
        { minGrossPay: 35000, maxGrossPay: 39999, deduction: 950 },
        { minGrossPay: 40000, maxGrossPay: Infinity, deduction: 1000 },
    ];

    // Define the constants for NSSF rates and contributions
    const NSSF_RATE_TIER1 = 0.06; // Employee and employer each contribute 6% to NSSF Tier I
    const NSSF_RATE_TIER2 = 0.06; // Employee and employer each contribute 6% to NSSF Tier II

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate PAYE (Tax) based on gross salary
    let paye = 0;
    for (const rate of PAYE_RATES) {
        if (grossSalary >= rate.minMonthly && grossSalary <= rate.maxMonthly) {
            paye = (grossSalary * rate.rate) / 100;
            break; // Exit the loop once a matching rate is found
        }
    }

    // Calculate NHIF deduction based on gross salary
    let nhifDeduction = 0;
    for (const rate of NHIF_RATES) {
        if (grossSalary >= rate.minGrossPay && grossSalary <= rate.maxGrossPay) {
            nhifDeduction = rate.deduction;
            break; // Exit the loop once a matching rate is found
        }
    }

    // Calculate NSSF contributions (employee and employer) based on gross salary and tier
    const nssfTier1 = Math.min(grossSalary, 6000) * NSSF_RATE_TIER1;
    const nssfTier2 = Math.max(0, grossSalary - 6000) * NSSF_RATE_TIER2;

    // Calculate net salary
    const netSalary = grossSalary - (paye + nhifDeduction + nssfTier1 + nssfTier2);

    // Return the calculated net salary
    return netSalary;
}

// Example usage
const basicSalary = 80000; // Replace with the desired basic salary
const benefits = 10000; // Replace with the desired benefits
const result = calculateNetSalary(basicSalary, benefits);
console.log(`Net Salary: Ksh ${result.toFixed(2)}`);

