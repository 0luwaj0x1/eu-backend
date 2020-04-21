const {
  machineReels,
  randomFruit,
  calculateScore,
  findOccurence,
  appendEmoji,
} = require("../helpers");

const slotMachine = (req, res) => {
  const result = machineReels.map((reel) => reel[randomFruit(reel)]);
  const score = calculateScore(findOccurence(result));
  res.send({ spin: appendEmoji(result).join(" | "), coins: score });
  
};

module.exports = {
  slotMachine
};
