var pig = require('./pigLatin.js');
var expect = require('chai').expect;


describe('pig', function(){

  it('adds ay to the end if it starts with a vowel', function(){
    var word = pig();
    expect(word.one('apple')).to.eq("appleay");
  });

  it('adds first letter and ay to end of word if first letter is not a vowel', function(){
    var word = pig();
    expect(word.one('pay')).to.eq('aypay');
  });

  it('adds all beginning consonants and ay to end of word if first letter is not a vowel', function(){
    var word = pig();
    expect(word.one('play')).to.eq('ayplay');
  });
});


describe('pigWords', function(){
  it('adds ay to the end of words if they start with a vowel', function(){
    var phrase = pig();
    expect(phrase.multiple('apple art')).to.eq('appleay artay');
  });
});
