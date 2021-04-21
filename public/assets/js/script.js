const articleSection = document.getElementById("writing-row");
const repoSection = document.getElementById("repos");

//show message on sender's screen
function listArticles(message) {
  let articles = [];

  fetch("https://dev.to/api/articles?username=joojodontoh")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        var wrapper = document.createElement("div");
        wrapper.classList.add("col-lg-4");
        wrapper.classList.add("col-md-6");
        wrapper.classList.add("d-flex");
        wrapper.classList.add("align-items-stretch");
        wrapper.innerHTML = `


          <div class="portfolio-wrap">

            <a href="${data[i].url}" target="_blank"><img
                src="${data[i].cover_image}" class="img-fluid" alt=""></a>
            <div class="portfolio-info">
            </div>
            <div class="row">
            <div class="card-footer">
            <small class="text-muted text-right">Last updated: ${returnDate(
              data[i].edited_at ?? data[i].created_at
            )}</small>
          </div>
              <p class="col-md-8 text-left" >${data[i].title}</p>
            </div>

          </div>

        `;
        articleSection.append(wrapper);
      }
    });
}

function returnDate(date) {
  return `${new Date(date).getDate()}-${
    new Date(date).getMonth() + 1
  }-${new Date(date).getFullYear()}`;
}

function listRepos(message) {
  let repos = [];

  fetch("https://api.github.com/users/Joojo7/repos")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        let desc = data[i].description
          ? data[i].description
          : "Interesting repo";

        if (desc.length > 40) desc = desc.substring(0, 40) + "...";

        var wrapper = document.createElement("div");
        wrapper.classList.add("col-lg-4");
        wrapper.classList.add("col-md-6");
        wrapper.classList.add("d-flex");
        wrapper.classList.add("align-items-stretch");
        wrapper.innerHTML = `

        <a href="${data[i].html_url}" target="_blank">
        <div class="icon-box">
          <div class="icon"><i class="bx bx-food-menu"></i></div>
          <h4><a href="${data[i].html_url}" target="_blank">${data[i].name}</a></h4>
          <p>${desc}</p>
        </div>
        </a>
        `;
        repoSection.append(wrapper);
      }
    });
}
