const Myurl=new URL('http:9000/mywebsite.com/abc.html?steve&pass=123')
//console.log(Myurl.href)
//http://0.0.35.40/mywebsite.com/abc.html?steve&pass=123 
//console.log(Myurl.hostname)
//0.0.35.40

//pathname
console.log(Myurl.pathname)

//search
console.log(Myurl.search) //?steve&pass=123
console.log(Myurl.searchParams) //URLSearchParams { 'steve' => '', 'pass' => '123' }