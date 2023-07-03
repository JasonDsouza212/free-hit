function result(productName,category,image,link,description){
    //result element to add html form of the website
    let ele = document.createElement('article')
    ele.classList.add('result')
    ele.addEventListener('click',(e)=>{
        console.log(e)
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


const fetchWebsites = (results)=>{
 //the websites are taken from product.json
    fetch('DB/product.json')
  .then(response => response.json())
  .then(data => {
    websites = data
    data.forEach(element => {
        results.appendChild(result(element.productName,element.category,element.image,element.link,element.description))
    });
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
}

const handleChange = (e)=>{
     //function for input change handling
     console.log(e)
     console.log("called changes")
    const ele = e.target.value
    filtered_websites = websites.filter((i)=>(
        i.productName.includes(ele)||i.category.includes(ele)    
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


document.addEventListener('DOMContentLoaded',async()=>{
    //to load content only after dom loading
    const inputBar = document.querySelector('.input')
    const results = document.querySelector('.results')
    const themeButton = document.querySelector('#theme-btn')
    let websites = ""
    inputBar.addEventListener('keydown',(e)=>handleChange(e))
    //reason to pass results is the function is loaded before the dom mounting 
    fetchWebsites(results)
    themeButton.addEventListener('click',changeTheme)
    function changeTheme(e){
        console.log(e)
        e.target.innerHTML = ""
        if(document.querySelector('body').classList.contains('dark')){
            document.querySelector('body').classList.remove('dark')
            e.target.innerHTML = `<i class="fa-solid fa-sun"></i>`
        }else{
            document.querySelector('body').classList.add('dark')
            e.target.innerHTML = `<i class="fa-solid fa-moon"></i>`
        }
    }

})


