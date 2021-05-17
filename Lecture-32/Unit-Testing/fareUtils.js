
const fareInfo = {
    
    fixed: 50,
    perKm: 10,
    freeMin: 15,
    perMin: 2,
    fixedKm:5
}

const calculateFare = (km,min) => {
    
    let fare = fareInfo.fixed;
    fare += km > fareInfo.fixedKm ? (km - fareInfo.fixedKm) * fareInfo.perKm : 0;
    fare += min > fareInfo.freeMin ? (min - fareInfo.freeMin) * fareInfo.perMin : 0;

    return fare;
}


module.exports = { calculateFare ,fareInfo};

