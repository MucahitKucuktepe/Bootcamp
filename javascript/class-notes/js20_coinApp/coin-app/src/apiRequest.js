import { renderCoins } from "./renderData";

export const apiRequest = async (input) => {

  const options = {
    headers: {
      "x-access-token": import.meta.env.VITE_API_KEY
    },
  };

  const url = `https://api.coinranking.com/v2/coins?search=${input}`;
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    if (data.data.coins.length === 0) {
      alert("Coin can not be found");
    } else {
    //   console.log(data.data.coins[0]);
      renderCoins(data.data.coins[0]);
    }
  } catch (error) {
    console.log(error);
  }
};
