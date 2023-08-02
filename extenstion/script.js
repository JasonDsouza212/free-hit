const inputBar = document.querySelector('.input')
const results = document.querySelector('.results')
// const themeButton = document.querySelector('#theme-btn')
const categoryButton = document.querySelector("#category-btn")
const categoryList = document.querySelector('.category-list')
let websites;
// themeButton.addEventListener('click',changeTheme)

function result(productName,category,image,link,description){
    //result element to add html form of the website
    let ele = document.createElement('article')
    ele.classList.add('result')
    ele.addEventListener('click',(e)=>{
        if(ele.classList.contains('expand')){
            ele.classList.remove('expand')
        }else{  
            Array.from(document.getElementsByClassName('result')).forEach((i)=>{
                i.classList.remove('expand')
            })
            ele.classList.add('expand')
        }
    })
    ele.innerHTML = `
        <div class="result-header">
            <div class="websiteLogo">
                <img src=${image} alt="logo" />
            </div>
            <div class="result-info">
                <span class="websiteName">${productName}</span> 
                <div class="tags">
                    <span class="tag">${category}</span>
                </div>   
            </div>
            <div class="header-side-icon">
                <i class="fa-solid fa-angle-down"></i>
            </div>
        </div>
        <div class="result-body">
            <a class="side-link" href=${link}>
                <i class="fa-solid fa-link"></i>
                    visit
            </a>    
            <p class="description">${description}</p>  
        </div>
    `
    return ele
}

    
function changeTheme(e){
    e.target.innerHTML = ""
    if(document.querySelector('body').classList.contains('dark')){
        document.querySelector('body').classList.remove('dark')
        e.target.innerHTML = `<i class="fa-solid fa-sun"></i>`
    }else{
        document.querySelector('body').classList.add('dark')
        e.target.innerHTML = `<i class="fa-solid fa-moon"></i>`
    }
}
    
    
function filterByCategory(e){
    Array.from(this.querySelectorAll('li')).forEach(ele=>ele.classList.remove('active'))
    e.target.classList.add('active')
    results.innerHTML = ''
    websites.filter(ele=>ele.category.toLowerCase()==e.target.innerText.toLowerCase()).forEach((element)=>{
        results.appendChild(result(element.productName,element.category,element.image,element.link,element.description))
    })
}

async function fetchWebsites(results, categoryList) {
    try{
        var websites;
        const response = await fetch('DB/product.json', {credentials: 'omit'})
        const data = await response.json()
        
        const categories = new Set()
            data.forEach(element => {
              categories.add(element.category);
              results.appendChild(result(element.productName, element.category, element.image, element.link, element.description));
            });
            categories.forEach(element => {
              categoryList.innerHTML += `<li>${element}</li>`;
            });
            websites = data
          return websites    
    }catch(err){
        console.error(err)
    }
}

function handleChange(e,websites){
    //function for input change handling
   const ele = e.target.value.toLowerCase()
   filtered_websites = websites.filter((i)=>(
       i.productName.toLowerCase().includes(ele)||i.category.toLowerCase().includes(ele)||i.description.toLowerCase().includes(ele) 
   ))
   const results = document.querySelector('.results')
   if(filtered_websites.length==0){
       results.innerHTML = `<h1 class="info-heading">No website with given keyword is found</h1>`
   }
   else{
       results.innerHTML = ""
       filtered_websites.forEach(element => {
           results.appendChild(result(element.productName,element.category,element.image,element.link,element.description))
       });    
   }
}
      
function showCategories(e,categoryList){
    if(categoryList.classList.contains('active')){
        document.querySelector('body').classList.remove('expand')
        categoryList.classList.remove('active')
    }else{
        document.querySelector('body').classList.add('expand')
        categoryList.classList.add('active')
    }
}

async function main(){
    websites = await fetchWebsites(results,categoryList)
    inputBar.addEventListener('keydown',(e)=>handleChange(e,websites))
    inputBar.addEventListener('keyup',(e)=>handleChange(e,websites))
    categoryButton.addEventListener('click',(e)=>showCategories(e,categoryList))
    categoryList.addEventListener('click',filterByCategory) 
}

main()

