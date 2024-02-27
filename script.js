const container = document.querySelector(".container");
const title = document.querySelector(".title");
const btn = document.querySelector("#btn");

const url = "https://jsonplaceholder.typicode.com/posts/";

// fetch(url)
//   .then(data => {
//to convert actual data we need to add JSON
//     data.json().then(data => {
//       console.log(data);
//     });
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? Async/await
// const fetchPosts = async () => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     //display on DOM
//     const Result = data.map(post => {
//       return `<div class="card">
//   <div class="card-title">
//     <h2>${post.title}</h2>
//   </div>
//   <div class="card-body">
//     <p>${post.body}
//     </p>
//   </div>
//   </div>`;
//     });
//     container.innerHTML = Result.join("");
//   } catch (error) {
//     console.log(error);
//   }
// };
// fetchPosts();
// btn.addEventListener("click", fetchPosts);

const fetchPosts = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    //Display on DOM
    const Result = data.map(post => {
      return `<div class="card">
<div class="card-title">
  <h2>${post.title}</h2>
</div>
<div class="card-body">
  <p>${post.body}
  </p>
</div>
</div>`;
    });
    container.innerHTML = Result.join("");
  } catch (error) {
    console.log(error);
  }
};
fetchPosts();
