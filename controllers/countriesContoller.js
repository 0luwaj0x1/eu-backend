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
  const arrayOfStrings = words.replace(/[^\w]/g, '').toLowerCase().split(',').join('').split('')
  const result = await fetchAllCountries()
  const filteredcountries = result.data.filter((country) => {
    if(checkArray(arrayOfStrings, country.name.replace(/[^\w]/g, '').toLowerCase().split('')))
    return country;
  })
  res.send(filteredcountries)
}


const getAll = async (req, res) => {
  const result = await fetchAllCountries();
  res.send(result.data)
}


fetchAllCountries = () => {
  return axios.get(`${baseUrl}/all`)
}


const checkArray = (arr1, arr2) => {
   return arr1.some(item => arr2.includes(item))
}



module.exports = {
  getByName,
  getFromList,
  getAll
};
