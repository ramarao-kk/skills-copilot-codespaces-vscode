// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.
// The comments.html file should be in the same directory as the comments.js file.
// Use the createServer method from the http module to create the server.
// Use the fs module to read the comments.html file.
// Use the response object to send the file to the client.
// Listen on port 3000.
// The comments.html file should contain the following HTML code:
// <!DOCTYPE html>
// <html>
// <head>
//     <title>Comments</title>
// </head>
// <body>
//     <h1>Comments</h1>
//     <ul>
//         <li>Comment 1</li>
//         <li>Comment 2</li>
//         <li>Comment 3</li>
//     </ul>
// </body>
// </html>

import { createServer } from 'http';
import { readFile } from 'fs';

createServer((req, res) => {
  readFile('comments.html', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
}).listen(3000);

console.log('Server listening on port 3000');