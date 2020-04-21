const machineReels= [
  ['cherry', 'lemon', 'apple', 'lemon', 'banana', 'banana', 'lemon', 'lemon'],
  ['lemon', 'apple', 'lemon', 'lemon', 'cherry', 'apple', 'banana', 'lemon'],
  ['lemon', 'apple', 'lemon', 'apple', 'cherry', 'lemon', 'banana', 'lemon']
]

const randomFruit = (array) => {
  return Math.floor(Math.random() * array.length)
}

const emojis = {
  cherry:'🍒',
  lemon: '🍋',
  banana: '🍌',
  apple: '🍏'
}

const appendEmoji = (array) => {
  return array.map(item => `${emojis[item]} ${item}`)
}

const findOccurence = (array) => {
    result = {};
    
    for(let item of array) {
      result[item] = result[item] + 1 || 1
    }
    return result;
}

const calculateScore = (obj) => {
  switch(true) {
    case obj.cherry === 3:
      return 50
    case obj.cherry === 2:
    return 40
    case obj.apple === 3:
      return 20
    case obj.apple === 2:
      return 10
    case obj.banana === 3:
      return 15
    case obj.banana === 2:
      return 5
    case obj.lemon === 3:
      return 3;
    default:
      return 0
  }
}

module.exports = {
  machineReels,
  appendEmoji,
  randomFruit,
  findOccurence,
  calculateScore
}