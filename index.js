// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.end("Hello kube\n")
// });

// server.listen(3000, () => {
//     console.log("Server listen on port 3000")
// })


const redis = require("redis");

const client = redis.createClient("redis://redis:6379")

client.on("connect", () => {
    console.log("Connect redis success");
})

