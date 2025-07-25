let form=document.querySelector('#book-form')
const list=document.querySelector("#book-list")
function createList(title,author,isbn){
    const row=document.createElement("tr")//<tr></tr>
    row.innerHTML=`
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td class="btn btn-danger float-right delete">
    <a type="button">X</a>
    </td>`
    list.appendChild(row)
    
}
function addBookToStorage(title,author,isbn){
    //Append object to local storage
    let books
    if(localStorage.getItem("books")===null){
        books=[]
    }else{
        books=JSON.parse(localStorage.getItem("books"))

    }
    books.push({title,author,isbn})
    //[{title:'abc',author:"pqr",isbn:123}]
    localStorage.setItem("books",JSON.stringify(books))


}
function clearAllFields(){
    document.querySelector('#title').value=null
    document.querySelector('#author').value=null
    document.querySelector('#isbn').value=null
}

function showAlert(msg,className){
    let div=document.createElement("div")//<div></div>
    div.className="alert alert-"+className
    div.appendChild(document.createTextNode(msg))
    const container=document.querySelector('.container')
    container.insertBefore(div,form);//in container before form
    setTimeout(function(){
        document.querySelector(".alert").remove()
    },3000)
}

function removeBookFromStorage(isbn){
    let books=JSON.parse(localStorage.getItem("books"))
    let newbooks=[]
    for(let i=0;i<books.length;i++)
    {
        if(books[i].isbn!=isbn){
            newbooks.push(books[i])
        }
    }
    localStorage.setItem("books",JSON.stringify(newbooks))
}

form.addEventListener("submit",function(e){
    e.preventDefault()
    let title=document.querySelector("#title").value
    let author=document.querySelector("#author").value
    let isbn=document.querySelector("#isbn").value
    if(title.length===0 || author.length===0 || isbn.length===0){
        showAlert("Please fill all the field","danger")
        return;

    }
    showAlert("Book Added Successfully","success")
    clearAllFields()
    createList(title,author,isbn)
    addBookToStorage(title,author,isbn)
})

list.addEventListener('click',function(e){
    if(e.target.parentElement.classList.contains("delete")){
        let parentElement=e.target.parentElement.parentElement
        list.removeChild(parentElement)//remove from UI
        //remove from local storage
        let isbn=e.target.parentElement.previousElementSibling.textContent
        removeBookFromStorage(isbn)
        showAlert("Book Deleted Successfully","success")
    }
})

window.addEventListener("DOMContentLoaded",function(){
    let books=JSON.parse(this.localStorage.getItem("books"))
    for(let i=0;i<books?.length;i++){
        createList(books[i].title,books[i].author,books[i].isbn)
    }

})


