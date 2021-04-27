const express = require("express");
const app = express()
const PORT = process.env.PORT || 3001 
app.use(express.static("public"))

app.use(express.urlencoded({ extended:true}))  
app.use(express.json())

app.use(require("./routes/htmlroutes"))
app.use(require("./routes/apiroutes"))

app.listen(PORT, function(){
    console.log("app is listening on PORT", PORT)
})