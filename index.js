const jsonServer = require("json-server"); // This line imports the json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();

const {config} = require("dotenv")

config();
server.use(middleware);
server.use(router);

const port = process.env.PORT || 3002;
server.listen(port,()=>{
    console.log(`JSON Server is running on http://localhost:${port}`); 
});

