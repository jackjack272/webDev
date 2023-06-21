const container = document.querySelector(`#app`);
const api_root = `https://api.github.com/users`;
function getUser(username) {
  const url = `${api_root}/${username}`;
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.error(err));
}
function getRepos(username) {
  const url = `${api_root}/${username}/repos?per_page=20`;
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.error(err));
}

async function renderUser(username) {
  // Let the user know a fetch is happening
  container.innerHTML = "Loading Profile...";
  // Wait to get the user data
  const user = await getUser(username);
  console.log(user);
  // Create markup with the user data
  let markup = `
  <div class="user">
  <img src="${user.avatar_url}" alt="${user.name}" width="100" />
  <h2>
  <a href="${user.html_url}">${user.name}</a>
  </h2>
  <p>${user.bio}</p>
  </div>
  `;
  // Replace the loading message
  // with user markup
  container.innerHTML = markup;
  // Display a list for the repos
  // with a loading message
  container.insertAdjacentHTML(
    `beforeend`,
    `
  <ul class="repos">
  <li>Loading Repos...</li>
  </ul>`
  );
  // Wait to get the repos
  const repos = await getRepos(username);
  console.log(repos);
  // Create markup for the repos
  markup = ``;
  markup += repos
    .map((repo) => {
      console.log(repo);
      return `<li><a href="${repo.html_url}">${repo.name}</a></li>`;
    })

    // This line is needed if you
    // ever notice commas between items
    .join("");
  // Replace the repo loading
  // message with repo markup
  document.querySelector(`.repos`).innerHTML = markup;
}
// Kick everyhing off for a user
renderUser(`peng-zhihui`);
