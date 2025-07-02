function getData(){
    fetch('https://dummyjson.com/products?limit=500')
    .then(res=>res.json())
    .then(data=>console.log(data))
    
    
}
//fetch browser ka function hai
getData();
//code 200