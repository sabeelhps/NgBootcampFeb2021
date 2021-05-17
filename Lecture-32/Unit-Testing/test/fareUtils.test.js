const mocha = require('mocha');
const chai = require('chai');
const { calculateFare }= require('../fareUtils');


const expect = chai.expect;


describe('fareUtils', () => {
    
    it('fare should be 100 Rs for 10km, 0min ', () => {
        let fare = calculateFare(10, 0);
        expect(fare).to.equal(100);
    })

    it('fare should be 50 Rs for 0km, 0min ', () => {
        let fare = calculateFare(0, 0);
        expect(fare).to.equal(50);
    })

    it('fare should be 110 Rs for 10km, 20min ', () => {
        let fare = calculateFare(10, 20);
        expect(fare).to.equal(110);
    })

})
