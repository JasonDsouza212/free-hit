function result(productName,category,image,link,description){
    //result element to add html form of the website
    let ele = document.createElement('a')
    ele.href = link
    ele.innerHTML = `
    <article class="result" data-name=${productName}>
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
        </div>
        <div class="result-body">
            <p class="description">${description}</p>    
        </div>
    </article>    
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
    const ele = e.target.value
    filtered_websites = websites.filter((i)=>(
        i.productName.includes(ele)||i.category.includes(ele)    
    ))
    const results = document.querySelector('.results')
    results.innerHTML = ""
    filtered_websites.forEach(element => {
        results.appendChild(result(element.productName,element.category,element.image,element.link,element.description))
    });
}


document.addEventListener('DOMContentLoaded',()=>{
    //to load content only after dom loading
    const inputBar = document.querySelector('.input')
    const form = document.querySelector('form')
    const results = document.querySelector('.results')
    let websites = ""
    console.log(results,inputBar)
    form.addEventListener('submit',(e)=>e.preventDefault())
    inputBar.addEventListener('change',handleChange)
    //reason to pass results is the function is loaded before the dom mounting 
    fetchWebsites(results)
})


