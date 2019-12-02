let tagCloud = require('tag-cloud');
var http = require('http');

let promise = require('bluebird');
promise.promisifyAll(tagCloud);

let tags = [
    {tagName: 'js', count: 5},
    {tagName: 'css', count: 9},
    {tagName: 'less', count: 13},
    {tagName: 'rest', count: 2}
];
 
tagCloud.tagCloudAsync(tags)
    .then( function (html) {
        console.log(html);
    })
    .catch( function (err) {
        console.log(err);
    });


http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type' : 'text/plain'});
    res.end('Hello World');
}).listen(8080);