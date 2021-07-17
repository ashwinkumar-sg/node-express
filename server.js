//import React from 'react' - es6 module loaders
//common js module loader
const http=require('http')
const hostname='localhost'
const port=3033
const server = http.createServer(function(request,response){
    const users = [
        {id:1,name:'asg'}, 
        {id:2,name:'ram'}
    ]

if(request.url=='/'){
    response.end('welcome to the web')
} else if(request.url=='/users'){
 response.end(JSON.stringify(users))
}else{
    response.end('pagepage is not exists')
}
})
server.listen(port,hostname,()=>{ 
    console.log(`Server running at http://${hostname}:${port}/`)
})
