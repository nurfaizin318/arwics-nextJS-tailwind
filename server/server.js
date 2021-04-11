var express = require('express');
var bodyParser = require('body-parser');
const next = require('next')
const { createServer } = require('http')
const server = express();
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()



const port = parseInt(process.env.PORT, 10) || 3000;




app.prepare().then(() => {

    createServer((req, res) => {


        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: true }));
        server.use(express.json());
        server.set('port', port);

        const parsedUrl = new URL(req.url, 'http://localhost:3000')
        const { pathname, query } = parsedUrl
    
        
        if (pathname === '/') {
            app.render(req,res,'/',query)
          } else if (pathname === '/Products') {
            app.render(req, res, '/Products', query)
          } else {
            handle(req, res, parsedUrl)
          }
    
       
      }).listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
      })

   
})