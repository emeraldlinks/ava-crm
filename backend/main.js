
import fastify from "fastify";
import { Users }  from "./routes/users.js"
import {job_func} from "./jobs_schedulers/test.js"


const app = fastify()

app.addHook("onRequest", (req, reply, done)=> {
    reply.header("access-control-allow-origin", "*")
    reply.header("access-control-allow-methods", "GET, POST, PUT, OPTIONS, DELETE")
    reply.header("access-control-allow-headers", "Content-Type, Authorization")

    if (req.method === "OPTION"){
        reply.code(204).send()
        return 
    }

    done()

})





app.get("/", async (req, reply) => {
    reply.type("application/json").code(200)
    return {message: "hello world!", headers: req.headers}
})

app.get("/users",  Users)






const PORT = 3001
app.ready().then(
// job_func()
)
app.listen({port: PORT}, (err, address)=> {
    if (err){
        throw err
    }else{
        console.log("app listening on port: ", PORT)
    }
})