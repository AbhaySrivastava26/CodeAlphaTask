const express=require("express")
const app=express()
const users=require("./routes/user.js")
const posts=require("./routes/post.js")

app.get("/",(req,res)=>{
    res.send("learning server handling ")
})
app.use("/posts",posts)
app.use("/users",users)


app.listen(3000,(req,res)=>{
    console.log("server is listening to 3000")
})