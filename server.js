import 'dotenv/config'
import app from "./src/app.js";



const port = process.env.PORT ||4000

app.listen(port , function(){
    console.log(`app.listing on ${port}`)
})