// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
    ['Antonia', 'Nuru']
}
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
    ['Mo','Amari']
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
     /*function createFareMultiplier(integer) {
        return function(){
            return integer **2;
        }
    createFareMultiplier(5);
    }*/
    const createFareMultiplier = function(integer) {
        return function(value) {
            return integer * value
        }
    }
    const fareDoubler = createFareMultiplier(2);
    const fareTripler = createFareMultiplier(3);

    function
    selectDifferentDrivers(arrayOfDrivers, func){
        return func(arrayOfDrivers);
    }