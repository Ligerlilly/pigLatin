var pig = function(){
  var one, multiple;

  one = function(word) {
    letters = word.split('');
    vowels = ['a', 'e', 'i', 'o', 'u'];
    while (vowels.indexOf(letters[0]) === -1){
      letters.push(letters.shift());
    };
      return letters.join('') + 'ay';
  };

  multiple = function(phrase) {
    phrase = phrase.split(" ");
    for (var i = 0; i < phrase.length; i += 1){
      // console.log(phrase[i]);
      phrase[i] = one(phrase[i]);
    }
    return phrase.join(" ");
  };
  return { one: one,
           multiple: multiple };
};


module.exports = pig;
