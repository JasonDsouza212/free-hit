function result(productName,category,image,link,description){
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

function handleSubmit(e){
}

const fetchWebsites = (results)=>{
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
    const inputBar = document.querySelector('.input')
    const form = document.querySelector('form')
    const results = document.querySelector('.results')
    let websites = ""
    console.log(results,inputBar)
    form.addEventListener('submit',(e)=>e.preventDefault())
    inputBar.addEventListener('change',handleChange)
    fetchWebsites(results)
})


