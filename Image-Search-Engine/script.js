const form=document.getElementById("search-form");
const input=document.getElementById("search-box");
const result=document.getElementById("search-result");
const Showbtn=document.getElementById("show-more-btn");
const btn=document.getElementById("search");

let access_key="-Pn6FVatBgFMl9_X02-t7OLDTuDGTCU3Hh5BkOn6PrY"
let page=1;
let keyword=""

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    keyword=input.value;
    result.innerHTML="" //It clears the old data
    if(keyword==""){
        alert("Enter something")
    }else{
        searchImage();
    }
})

async function searchImage(){
    let url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${access_key}&per_page=12`

    let response=await fetch(url);
    let data=await response.json();
    displayImages(data);
    input.value=""
}

function displayImages(data){
    if(data.results.length===0){
        result.innerHTML="No Images found"
        result.classList.add("error")
        Showbtn.style.display="none"
        return;
    }
    data.results.forEach(photo=>{
        let img=document.createElement("img");
        img.src=photo.urls.small;
        img.alt=photo.description || 'Unsplash Image';
        result.append(img);
    })
    Showbtn.style.display="block"
}

Showbtn.addEventListener("click",()=>{
    page++;
    searchImage();
})
