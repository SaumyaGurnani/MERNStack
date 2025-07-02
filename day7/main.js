//Callback
function trip(cb){
    console.log("Going to a restaurant")
    if(2==4){
        cb()

    }else{
        console.log("Sorry! you're no eating golgappe")
    }
    
}
function golGappe(){
    console.log("Eating GolGappe")
}
trip(golGappe)
function addToCart(cb){
    console.log("Adding item to cart")
    let res="failure" //API
    if(res=="success"){
        cb()
    }else{
        console.log("You're not getting the item")
    }
}

function 

