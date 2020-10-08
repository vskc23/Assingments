
// // // let sum = require('../sum.js').sum;
// // // let expect = require("chai").expect;
// // // console.log("TYPE OF ", typeof sum)
// // // describe('Sum of Numbers tests', () => {
// // //     describe('General tests', () => {
// // //         it('should be a function', () => {
// // //             expect(typeof sum).to.equal('function');
// // //         });
// // //     });

// // //     describe('Function tests', () => {
// // //         it('should return zero for a zero length input array', () => {
// // //             expect(sum([])).to.equal(0);
// // //         });

// // //         it('should return the member value for a one member array', () => {
// // //             expect(sum([1])).to.equal(1);
// // //         });

// // //         it('should return the member value for a one member array when given as string', () => {
// // //             expect(sum(['1'])).to.equal(1);
// // //         });

// // //         it('should add whole number arrays', () => {
// // //             expect(sum([1, 2, 3])).to.equal(6);
// // //         });

// // //         it('should add whole number arrays including negative numbers', () => {
// // //             expect(sum([-1, 2, 3])).to.equal(4);
// // //         });

// // //         it('should add whole number arrays including strings', () => {
// // //             expect(sum([-1, '2', 3])).to.equal(4);
// // //         });

// // //         it('should add fractions', () => {
// // //             expect(sum([1.1, 2.2, 3])).to.be.closeTo(6.3, 0.0001);
// // //         });

// // //         //it('should not add non-arrays', () => {
// // //         //    expect(sum(1,2,3)).to.be.NaN;           
// // //         //}); 

// // //         it('should not add arrays of invalid data', () => {
// // //             expect(sum(['pesho', 'gosho'])).to.be.NaN;
// // //         });
// // //     });
// // // });

// // var assert = require('chai').assert;

// // function add() {
// //   return Array.prototype.slice.call(arguments).reduce(function(prev, curr) {
// //     return prev + curr;
// //   }, 0);
// // }

// // describe('add()', function() {
// //   var tests = [
// //     {args: [1, 2],       expected: 3},
// //     {args: [1, 2, 3],    expected: 6},
// //     {args: [1, 2, 3, 4], expected: 10}
// //   ];

// //   tests.forEach(function(test) {
// //     it('correctly adds ' + test.args.length + ' args', function() {
// //       var res = add.apply(null, test.args);
// //       assert.equal(res, test.expected);
// //     });
// //   });
// // });

// // var expect = require('chai').expect;
// // var request = require('request');

// // it('Main page content', function(done) {
// //     request('http://localhost:3000', function(error, response, body) {
// //         expect(body).to.equal('Form');
// //         done();
// //     });
// // });
// // var should = require('chai').should()
// // var foo = 'bar'
// // var beverages = { tea: ['chai', 'matcha', 'oolong'] };

// // describe('Equality check', () => {
// //     it('Equals to ', () => {
// //         foo.should.be.a('string')
// //     });
// // });
// var expect = require('chai').expect
// var foo = 'bar'
// var beverages = { tea: ['chai', 'matcha', 'oolong'] };

// // expect(foo).to.be.a('string');
// // expect(foo).to.equal('bar');
// // expect(foo).to.have.length(3);
// expect(beverages).to.have.property('tea').with.length(4);

var assert = require("assert"); // core module
var C = require('../cash.js');  // our module

describe('Cash Register', function(){
  describe('Module C', function(){
    it('should have a getChange Method', function(){
      assert.equal(typeof C, 'object');
      assert.equal(typeof C.getChange, 'function');
    })
  })
}); 