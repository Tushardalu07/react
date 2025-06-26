import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

// HTTP GET METHOD
export const getCountryData = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};

// HTTP GET METHOD for an individual country name
// export const getCountryIndData = (name) => {
//   const encodedName = encodeURIComponent(name.trim());
//   return api.get(
//     `/name/${encodedName}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
//   );
// };

