"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumMajorCredits = sumMajorCredits;
exports.sumMinorCredits = sumMinorCredits;
// Functions to sum credits
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'Major',
    };
}
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'Minor',
    };
}
// Example usage
var major1 = { credits: 3, brand: 'Major' };
var major2 = { credits: 4, brand: 'Major' };
console.log(sumMajorCredits(major1, major2)); // { credits: 7, brand: 'Major' }
var minor1 = { credits: 2, brand: 'Minor' };
var minor2 = { credits: 5, brand: 'Minor' };
console.log(sumMinorCredits(minor1, minor2)); // { credits: 7, brand: 'Minor' }
