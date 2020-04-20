const axios = require("axios");
const baseUrl = "https://restcountries.eu/rest/v2";

const getByName = async (req, res) => {
  const { fullname } = req.params;
  const result = await axios.get(`${baseUrl}/name/${fullname}?fullText=true`);
  const [country] = result.data;
  const { name, capital, currencies, flag } = country;
  res.send({ name, capital, currencies, flag });
};


const getFromList = async (req, res) => {
const words =  req.query.words
const arrayOfStrings = words.toLowerCase().split(',').join('').split('')
console.log(arrayOfStrings)
const result = await axios.get(`${baseUrl}/all`)
const filteredcountries = result.data.filter((country) => {
 // if(arrayOfStrings.in)
 // come back and solve the nested for loop problem here.
})
res.send(filteredcountries)
}

module.exports = {
  getByName,
  getFromList
};
