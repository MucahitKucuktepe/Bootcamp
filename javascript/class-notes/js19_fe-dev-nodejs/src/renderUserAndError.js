export const show = (users) => {
    const userSection = document.getElementById("users");
    console.log(users);
    users.forEach((user) => {
      userSection.innerHTML += `
          <h1>${user.login}</h1>
          <img src="${user.avatar_url}" width="200px" alt="" />
          <p><a href="${user.html_url}" target="_blank">URL</a></p> 
      `;
    });
  };
  