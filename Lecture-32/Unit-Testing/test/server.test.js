const mocha = require('mocha');
const chai = require('chai');
const request = require('request');
const server = require('../server');
 

const expect = chai.expect;

let app;


describe('server', () => {

    before(() => {
        app = server.listen(8080);
    })

 
    it('shows fixed rate as 50', (done) => {
        request('http://localhost:8080/rates', function (error, response, body) {
            // console.log(body);

            const rates = JSON.parse(body);

            expect(rates.fixed).to.equal(50);

            done();
        });
    })


    after(() => {
        app.close();
    })

})