// this script is embedded in the html file, can link instead
// so no need to use this scrip unless wanted

// Fetch data from the Space X API
fetch(`https://api.spacexdata.com/v3/launches/latest`)
  // Convert the data into JavaScript
  .then((response) => response.json())
  // Now we can use the data
  .then((data) => {
    // Log out the data
    console.log(data);
    // Add some data amd markup to the page
    document.querySelector(`#app`).insertAdjacentHTML(
      `beforeend`,
      `<h2>${data.mission_name}</h2>
        <p>
        ${data.launch_year} -
        ${data.launch_site.site_name_long}
        </p>`
    );
  })
  // Log out any errors
  .catch((error) => console.error(error));

// // Fetch Promise Architecture
// fetch( `https://api.dev/data` )
//   // Convert the data to JavaScript
//   .then( response => response.json() )
//   .then( data => {
//   // Work with the data here
//   console.log( data )
// })
// .catch( error => console.error( error ))

// This will log first
// console.log(`First`);
// fetch(`https://api.dev/data`)
//   .then((response) => response.json())
//   .then((data) => {
//     // This will likely log third
//     console.log(`Second`, data);
//   })
//   .catch((error) => console.error(error));
// // This will likely log second
// console.log(`Third`);

// async function getData() {
//   // Make our fetch call here and
//   // wait for it's return
// }

// async function getData() {
//   // Logs first
//   console.log(`First`);
//   // Waits for data
//   const data = await fetch(`https://api.dev/data`)
//     .then((res) => res.json())
//     .catch((err) => console.error(err));
//   // Logs second
//   console.log(`Second`, data);
//   // Logs third
//   console.log(`Third`);
// }
// // Fires off the entire process
// getData();

async function init() {
  // Logs first
  console.log(`First`);
  // Waits for data
  const data = await getData();
  // Logs after data has returned
  console.log(`Second`, data);
}
init();
function getData() {
  // Return our fetch call
  return fetch(`https://api.dev/data`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
}
