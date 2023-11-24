import { renderCoins } from "./renderCoins";

export const apiRequest = async (input) => {
  const url = `https://api.coinranking.com/v2/coins?search=${input}`;
  const API_KEY = "coinranking6a0b3a82d0ba5c11bda27f9bb89f2eb977a7b3a78605f8fe";
  const options = {
    headers: {
      "x-access-token": API_KEY,
    },
  };
  try {
    const res = await fetch(url, options);
    const data = await res.json();

    renderCoins(data.data.coins[0]);
  } catch (error) {
    console.log(error);
  }
};
