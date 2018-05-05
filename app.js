const http = new galaxyX_HTTP

// GET posts

http.get('https://jsonplaceholder.typicode.com/posts', 
function(response){
    console.log(JSON.parse(response))
})