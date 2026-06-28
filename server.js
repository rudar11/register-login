import 'dotenv/config'
import app from "./src/app.js";



const port = process.env.PORT ||4000



// Base route test karne ke liye
app.get('/', (req, res) => {
    res.send('Task Tracker API is running...');
});


app.listen(port , function(){
    console.log(`app.listing on ${port}`)
})