 const API_URL = 'https://quotable.io/random'

export const getQuote = async() =>{
    const response  = await fetch(API_URL)
    const data = await response.json()
  return data;
    
};
