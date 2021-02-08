

const articleSection = document.getElementById('writing-row')




//show message on sender's screen
function listArticles(message){
  let articles = []

  fetch('https://dev.to/api/articles?username=joojodontoh')
  .then(response => response.json())
  .then(
    data => {
      console.log(data[0])

      for (let i = 0; i < data.length; i++) {
        console.log('data:', data[i].cover_image)
        var wrapper= document.createElement('div');
        wrapper.classList.add("col-lg-4") 
        wrapper.classList.add("col-md-6") 
        wrapper.classList.add("d-flex") 
        wrapper.classList.add("align-items-stretch") 
        wrapper.innerHTML = `
        

          <div class="portfolio-wrap">

            <a href="${data[i].url}" target="_blank"><img
                src="${data[i].cover_image}" class="img-fluid" alt=""></a>
            <div class="portfolio-info">
            </div>
            <div class="row">
            <div class="card-footer">
            <small class="text-muted text-right">Last updated: ${new Date(data[i].edited_at).getDate()}-${new Date(data[i].edited_at).getMonth()+1}-${new Date(data[i].edited_at).getFullYear()}</small>
          </div>
              <p class="col-md-8 text-left" >${data[i].title}</p>
            </div>
            
          </div>

        `
        articleSection.append(wrapper)
      }
    }
    );
  
}