

const loadCategory = async() =>{
     const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
     const data = await response.json();

  const categoryContainer = document.getElementById('category-bar-container');

     data.data.news_category.forEach((item)=>{
          const div = document.createElement("div");
          div.innerHTML = `
          <button onclick="loadNews('${item.category_id}')" class="bg-gray-600 flex justify-between px-3 py-2 mb-10 text-white rounded-2xl  mx-auto mt-10">${item.category_name}</button>
          `
          categoryContainer.appendChild(div)
     })
        
    
}


function getId(catId){
    console.log(catId);
}
 




const loadNews = async(catId) =>{

    // 
    document.getElementById('loading-progress')
    const respone = await fetch(`https://openapi.programming-hero.com/api/news/category/${catId}`);
    const data = await respone.json();
    const newsContainer = document.getElementById("news-container");


 
    newsContainer.innerHTML = '';


    data.data.forEach((item)=>{
    const div =document.createElement("div");
    div.innerHTML =`
    <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row">
      <img src="${item.image_url}" class="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <p class="text-3xl">${item.title}</P>
        <p>${item.rating.badge}<sup><h6>${item.rating.number}</h6></sup></p>
        <p class="py-6">${item.details.slice(0,200)}</p>
        <button class="btn btn-primary">Details</button>
      </div>
    </div>
  </div>
    `
    newsContainer.appendChild(div)

    })
}


const handelSearch = () =>{
    const value = document.getElementById('search-box').value;
    if(value){
       loadNews(value)
    }else{
        alert("Please inter id")
    }

}




loadNews("01")
loadCategory();