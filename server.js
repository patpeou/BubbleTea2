const app = require("./backend/app");
const debug = require("debug")("node-angular");
const http = require("http");



const normalizePort = val => {
  console.log(val);
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);




// const url = 'https://jsonplaceholder.typicode.com/posts';
//
// https.get(url, res=> {
//   res.setEncoding('utf8');
//   let body = '';
//
//   res.on('data', data => {
//     body += data;
//
//   });
//
//   res.on('end', ()=>{
//     body = JSON.parse(body);
//     console.log(
//       `
//       ${body[2].title}
//
//       `
//
//     )
//   });
//
// });
