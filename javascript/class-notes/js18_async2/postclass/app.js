const getNews = async () => {
  //! https://randomuser.me/api/
  try {
    const res = await fetch("https://randomuser.me/api/");

    console.log(`https://randomuser.me/api/`);

    const data = await res.json();
    console.log(data.results);
  } catch (error) {
    
  }
};

window.addEventListener("load", () => {
  getNews();
});
