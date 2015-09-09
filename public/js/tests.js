var pig = require('./pigLatin.js');
var expect = require('chai').expect;

describe('pigLatin', function(){
  it('adds ay to the end if it starts with a vowel', function(){
    expect(pig("apple")).to.eq("appleay");
  });
});
