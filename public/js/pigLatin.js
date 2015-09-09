var pig = function(word){
  letters = word.split('');
  vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.indexOf(letters[0]) != -1){
    return word + 'ay';
  }
};

module.exports = pig;
