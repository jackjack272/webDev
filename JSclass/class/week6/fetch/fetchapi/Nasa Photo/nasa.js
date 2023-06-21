// This API requires you sign up and get an API key
      // This API requires you sign up and get an API key
      const apiKey = '15FjhYbcCsfDVQWJkyvdHMLz0hegvKEq1kcXLISk'; // This API requires you sign up and get an API key
      const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
      // Get the NASA Picture of the Data
      async function getSpacePhoto() {
        // Wait for the data
        const data = await fetch(apiURL)
          .then((response) => response.json())
          .catch((error) => console.error(error));
        // Log the data
        console.log(data);
        // Add the title and the picture to the page
        if (data.media_type == 'image') {
          document.querySelector(`#app`).insertAdjacentHTML(
            `beforeend`,
            `<h2>${data.title}</h2>
             <img src="${data.url}" alt="${data.title}" />`
          );
        } else {
          document.querySelector(`#app`).insertAdjacentHTML(
            `beforeend`,
            `<h2>${data.title}</h2>
             <iframe width="420" height="315"
             src="${data.url}">
             </iframe>" />`
          );
        }
      }
      getSpacePhoto();


