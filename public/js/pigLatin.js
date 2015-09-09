var pig = function(word){
  letters = word.split('');
  vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.indexOf(letters[0]) === -1){
    letters.push(letters.shift());
  };
    return letters.join('') + 'ay';
};

module.exports = pig;
