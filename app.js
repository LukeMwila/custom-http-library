const http = new galaxyX_HTTP

// GET posts
/*
http.get('https://jsonplaceholder.typicode.com/posts', 
function(err, posts){
    if(err){
        console.log(err)
    }else{
        console.log(posts)
    }
})
*/

// GET single post
/*
http.get('https://jsonplaceholder.typicode.com/posts/1', 
function(err, posts){
    if(err){
        console.log(err)
    }else{
        console.log(posts)
    }
})
*/

// POST

const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
}
/*
http.post('https://jsonplaceholder.typicode.com/posts', data, 
function(err, post){
    if(err){
        console.log(err)
    }else{
        console.log(post)
    }
})
*/

// PUT
http.put('https://jsonplaceholder.typicode.com/posts/1', data, 
function(err, post){
    if(err){
        console.log(err)
    }else{
        console.log(post)
    }
})