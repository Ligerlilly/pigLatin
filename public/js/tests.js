var pig = require('./pigLatin.js');
var expect = require('chai').expect;

describe('pigLatin', function(){
  it('adds ay to the end if it starts with a vowel', function(){
    expect(pig("apple")).to.eq("appleay");
  });

  it('adds first letter and ay to end of word if first letter is not a vowel', function(){
    expect(pig('play')).to.eq('laypay');
  });
});
